import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { User, FolderGit2 } from 'lucide-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Profile: React.FC = () => {
  const { user } = useAuthContext();
  const [selectedMenu, setSelectedMenu] = useState('Profile');
  const [isEditable, setIsEditable] = useState(false);

  const initialValues = {
    fullname: user?.fullname || '',
    email: user?.email || '',
    dob: '',
    phone: ''
  };

  const validationSchema = Yup.object({
    fullname: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    dob: Yup.date().required('Date of Birth is required'),
    phone: Yup.string().required('Phone number is required')
  });

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSubmit = (values: typeof initialValues) => {
    setIsEditable(false);
    // Here you can add logic to update the user profile in your backend
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Profile':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <Field
                      type="text"
                      name="fullname"
                      disabled={!isEditable}
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                    <ErrorMessage name="fullname" component="div" className="text-red-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <Field
                      type="email"
                      name="email"
                      disabled={!isEditable}
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Date of Birth</label>
                    <Field
                      type="date"
                      name="dob"
                      disabled={!isEditable}
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                    <ErrorMessage name="dob" component="div" className="text-red-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Phone Number</label>
                    <Field
                      type="tel"
                      name="phone"
                      disabled={!isEditable}
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500" />
                  </div>
                  {isEditable ? (
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={isSubmitting}>
                      Submit
                    </button>
                  ) : (
                    <button type="button" onClick={handleEditClick} className="bg-blue-500 text-white p-2 rounded">
                      Update Profile
                    </button>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        );
      case 'Projects':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            {/* Add projects content here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      <div className={'w-1/5 bg-blue-600 text-white  p-4 font-bold rounded-r-lg '}>
        <ul className={'flex flex-col space-y-1'}>
          <li
            className={`p-3 cursor-pointer rounded-lg hover:bg-blue-700 hover:opacity-100 flex items-center ${selectedMenu === 'Profile' ? 'bg-blue-700 opacity-100' : 'opacity-85'}`}
            onClick={() => setSelectedMenu('Profile')}
          >
            <User className={"mr-3 h-6 w-6"} /> Profile
          </li>
          <li
            className={`p-3 cursor-pointer rounded-lg hover:bg-blue-700 hover:opacity-100 flex items-center ${selectedMenu === 'Projects' ? 'bg-blue-700 opacity-100' : 'opacity-85'}`}
            onClick={() => setSelectedMenu('Projects')}
          >
            <FolderGit2 className={"mr-3 h-6 w-6"} /> Projects
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4 bg-white rounded-lg shadow-md">
        {renderContent()}
      </div>
    </div>
  );
};

export default Profile;