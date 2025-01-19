import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, UserPlus } from 'lucide-react';
import OTPVerification from './OTPVerification';
import { checkEmailExists } from '../../utils/vaildEmail';
import axios from 'axios';
import { useAuthContext } from '../../context/AuthContext';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
 const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const backend_url = import.meta.env.BACKEND_URL as string;

  // Password validation function
  const validatePassword = (password: string) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasAlphanumeric = /^(?=.*[a-zA-Z])(?=.*\d)/.test(password);
    
    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!hasSpecialChar) {
      return 'Password must contain at least one special character';
    }
    if (!hasAlphanumeric) {
      return 'Password must contain both letters and numbers';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear errors when typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));

    // Validate password as user types
    if (name === 'password') {
      const passwordError = validatePassword(value);
      setErrors(prev => ({
        ...prev,
        password: passwordError
      }));
    }

    // Check password match as user types confirm password
    if (name === 'confirmPassword') {
      setErrors(prev => ({
        ...prev,
        confirmPassword: value !== formData.password ? 'Passwords do not match' : ''
      }));
    }
  };

  const sendOTP = async (email: string) => {
    try {
      setIsCheckingEmail(true);
      // Check if email already exists
      const emailExists = await checkEmailExists(email);
      
      if (emailExists) {
        setErrors(prev => ({
          ...prev,
          email: 'This email is already registered. Please sign in instead.'
        }));
        return false;
      }

      // If email doesn't exist, proceed with OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsOTPSent(true);
      alert(`OTP sent to ${email}`);
      return true;
    } catch (error) {
      console.error('Failed to send OTP:', error);
      alert('Failed to send OTP. Please try again.');
      return false;
    } finally {
      setIsCheckingEmail(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      email: !formData.email ? 'Email is required' : '',
      password: validatePassword(formData.password),
      confirmPassword: formData.password !== formData.confirmPassword ? 'Passwords do not match' : ''
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    try {
      const response = await axios.post(`${backend_url}/api/user/signup`, {
        fullname: formData.name,
        email: formData.email,
        password: formData.password
      });

      console.log('Signup response:', response.data);

      if (response.data && response.data.token) {
        sessionStorage.setItem('authToken', response.data.token);
        //bypass the otp verification until its implemented
        login(response.data.token);
        handleVerificationComplete();
      } else {
        alert('Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Failed to create account. Please try again.');
    }

    // if (!isOTPSent) {
    //   // Send OTP if not already sent
    //   const otpSent = await sendOTP(formData.email);
    //   if (!otpSent) {
    //     return;
    //   }
    // }
  };

  const handleVerificationComplete = () => {
    setIsVerified(true);
    setShowSuccess(true);
    
    // Redirect to home page after 2 seconds
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const handleResendOTP = async () => {
    await sendOTP(formData.email);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <UserPlus className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {showSuccess && (
            <div className="mb-4 p-4 rounded-md bg-green-50 text-green-800">
              Account created successfully! Redirecting...
            </div>
          )}  

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  disabled={isCheckingEmail}
                />
                {isCheckingEmail && (
                  <div className="absolute right-3 top-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  </div>
                )}
              </div>
              {errors.email && (
                <div className="mt-1">
                  <p className="text-sm text-red-600">{errors.email}</p>
                  {errors.email.includes('already registered') && (
                    <Link
                      to="/login"
                      className="text-sm text-blue-600 hover:text-blue-500 mt-1 inline-block"
                    >
                      Go to Sign In
                    </Link>
                  )}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isOTPSent ? 'Resend OTP' : 'Create Account'}
              </button>
            </div>
          </form>

          {isOTPSent && !isVerified && (
            <OTPVerification
              email={formData.email}
              onVerificationComplete={handleVerificationComplete}
              onResendOTP={handleResendOTP}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
