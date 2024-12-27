import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PostProject: React.FC = () => {
  const initialValues = {
    title: '',
    description: '',
    category: '',
    location: '',
    funding_required: 0,
    current_funding: 0,
    contribution_type: '',
    status: 'Planned', // Default status set to 'Planned'
    git_repo: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    location: Yup.string().required('Location is required'),
    funding_required: Yup.number().required('Funding required is required').positive(),
    current_funding: Yup.number().required('Current funding is required').min(0),
    contribution_type: Yup.string().required('Contribution type is required'),
    status: Yup.string().required('Status is required'),
    git_repo: Yup.string().url('Must be a valid URL').required('Git repository URL is required'),
  });

  const handleSubmit = (values: typeof initialValues) => {
    // Submit the form values to your backend API
    console.log('Form Data:', values);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">National Importance System Submission</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <Field name="title" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
            <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <Field as="textarea" name="description" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" rows={4} />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <Field as="select" name="category" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select a category</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Disaster Relief">Disaster Relief</option>
              <option value="Social Welfare">Social Welfare</option>
              <option value="Education">Education</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Other">Other</option>
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <Field name="location" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
            <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Funding Required</label>
            <Field type="number" name="funding_required" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
            <ErrorMessage name="funding_required" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Current Funding</label>
            <Field type="number" name="current_funding" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
            <ErrorMessage name="current_funding" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contribution Type</label>
            <Field as="select" name="contribution_type" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select a contribution type</option>
              <option value="Code">Code</option>
              <option value="Financial">Financial</option>
              <option value="Advisory">Advisory</option>
              <option value="Other">Other</option>
            </Field>
            <ErrorMessage name="contribution_type" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <Field as="select" name="status" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="Planned">Planned</option>
              <option value="In Development">In Development</option>
              <option value="Completed">Completed</option>
            </Field>
            <ErrorMessage name="status" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Git Repository URL</label>
            <Field name="git_repo" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
            <ErrorMessage name="git_repo" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="mt-4 w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default PostProject;
