import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMatch, useNavigate } from 'react-router-dom';

const ProductForm = ({ initialData = {} }) => {
  const match = useMatch("/product-management/product/:id");
  const navigate = useNavigate();
  const isEdit = !!match;

  const id = match?.params.id || null;
  const formik = useFormik({
    initialValues: {
      id: initialData.id || '',
      name: initialData.name || '',
      price: initialData.price || '',
      img: initialData.img || '',
      description: initialData.description || '',
      type: initialData.type || '',
      deleted: initialData.deleted || false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      price: Yup.number().required('Required'),
      img: Yup.string().url('Invalid URL').required('Required'),
      description: Yup.string().required('Required'),
      type: Yup.string().required('Required'),
      deleted: Yup.boolean().required('Required'),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        // Update product
        console.log('Updating product:', values);
      } else {
        // Create product
        console.log('Creating product:', values);
      }
      navigate('/products'); // Redirect after submit
    },
  });

  
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{isEdit ? 'Edit Product' : 'Create Product'}</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">ID</label>
          <input
            type="text"
            name="id"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.id}
            disabled={isEdit}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {formik.touched.id && formik.errors.id ? <div className="text-red-500 text-sm">{formik.errors.id}</div> : null}

        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {formik.touched.name && formik.errors.name ? <div className="text-red-500 text-sm">{formik.errors.name}</div> : null}

        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {formik.touched.price && formik.errors.price ? <div className="text-red-500 text-sm">{formik.errors.price}</div> : null}

        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="img"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.img}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {formik.touched.img && formik.errors.img ? <div className="text-red-500 text-sm">{formik.errors.img}</div> : null}

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <input
            type="text"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {formik.touched.description && formik.errors.description ? <div className="text-red-500 text-sm">{formik.errors.description}</div> : null}

        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <input
            type="text"
            name="type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.type}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {formik.touched.type && formik.errors.type ? <div className="text-red-500 text-sm">{formik.errors.type}</div> : null}

        <div className="mb-4">
          <label className="block text-gray-700">Deleted</label>
          <input
            type="checkbox"
            name="deleted"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.deleted}
            className="mt-1 block focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {formik.touched.deleted && formik.errors.deleted ? <div className="text-red-500 text-sm">{formik.errors.deleted}</div> : null}

        <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
          {isEdit ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
