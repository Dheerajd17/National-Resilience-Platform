import React, { useState, useEffect } from 'react';


interface OTPVerificationProps {
  email: string;
  onVerificationComplete: () => void;
  onResendOTP: () => void;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({ email, onVerificationComplete, onResendOTP }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    try {
      // Here you would typically verify the OTP with your backend
      // For now, we'll just simulate a successful verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      onVerificationComplete();
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleResend = () => {
    if (canResend) {
      onResendOTP();
      setCountdown(30);
      setCanResend(false);
      setOtp('');
      setError('');
    }
  };

  // Split OTP input into individual boxes
  const renderOTPInputs = () => {
    const inputs = [];
    for (let i = 0; i < 6; i++) {
      inputs.push(
        <input
          key={i}
          type="text"
          maxLength={1}
          value={otp[i] || ''}
          onChange={(e) => {
            const newOTP = otp.split('');
            newOTP[i] = e.target.value;
            const updatedOTP = newOTP.join('');
            if (updatedOTP.length <= 6 && /^\d*$/.test(updatedOTP)) {
              setOtp(updatedOTP);
              // Auto-focus next input
              if (e.target.value && i < 5) {
                const nextInput = e.target.parentElement?.nextElementSibling?.querySelector('input');
                if (nextInput) nextInput.focus();
              }
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Backspace' && !otp[i] && i > 0) {
              const prevInput = (e.target as HTMLInputElement).parentElement?.previousElementSibling?.querySelector('input');
              if (prevInput) prevInput.focus();
            }
          }}
          className="w-12 h-12 text-center text-xl font-semibold border rounded-md mx-1 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      );
    }
    return inputs;
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Verify Your Email</h3>
          <p className="text-gray-600">
            We've sent a verification code to<br />
            <span className="font-medium text-gray-900">{email}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
              Enter verification code
            </label>
            <div className="flex justify-center space-x-2">
              {renderOTPInputs()}
            </div>
            {error && <p className="mt-2 text-sm text-red-600 text-center">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Verify Email
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              Didn't receive the code?
            </p>
            <button
              type="button"
              onClick={handleResend}
              disabled={!canResend}
              className={`text-sm font-medium ${
                canResend 
                  ? 'text-blue-600 hover:text-blue-500 cursor-pointer' 
                  : 'text-gray-400 cursor-not-allowed'
              }`}
            >
              {canResend 
                ? 'Resend OTP' 
                : `Resend OTP in ${countdown}s`
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification; 