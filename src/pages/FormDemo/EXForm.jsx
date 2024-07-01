import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ExForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            gender: '',
            country: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username is required'),
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            gender: Yup.string()
                .required('Gender is required'),
            country: Yup.string()
                .required('Country is required'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters')
        }),
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <div className="container mx-auto p-4">
            <form className="w-full max-w-lg mx-auto" onSubmit={formik.handleSubmit}>
                <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                    <h2 className="text-2xl font-bold mb-6 text-center">User Registration</h2>
                    
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <p className="text-red-500">{formik.errors.username}</p>
                        ) : null}
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p className="text-red-500">{formik.errors.email}</p>
                        ) : null}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <div className="mt-2 space-x-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="form-radio"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.gender === 'male'}
                                />
                                <span className="ml-2">Male</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className="form-radio"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.gender === 'female'}
                                />
                                <span className="ml-2">Female</span>
                            </label>
                        </div>
                        {formik.touched.gender && formik.errors.gender ? (
                            <p className="text-red-500">{formik.errors.gender}</p>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                        <select
                            name="country"
                            id="country"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.country}
                        >
                            <option value="" label="Select country" />
                            <option value="USA" label="USA" />
                            <option value="Canada" label="Canada" />
                            <option value="UK" label="UK" />
                            <option value="Australia" label="Australia" />
                        </select>
                        {formik.touched.country && formik.errors.country ? (
                            <p className="text-red-500">{formik.errors.country}</p>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <p className="text-red-500">{formik.errors.password}</p>
                        ) : null}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ExForm;
