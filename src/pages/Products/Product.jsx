import { useParams, useMatch, useLocation } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Validation schema cho Formik
const ProductSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  price: Yup.number().required('Required').positive('Must be positive'),
  img: Yup.string().url('Must be a valid URL').required('Required'),
  description: Yup.string().required('Required'),
  type: Yup.string().required('Required')
});

function Product() {
  const { id } = useParams();
  const isEditMode = useMatch('/product/:id/edit');
  const location = useLocation();
  console.log(location);
  // Dữ liệu mẫu ban đầu, bạn có thể thay đổi để lấy từ API
  const initialValues = {
    name: '',
    price: '',
    img: '',
    description: '',
    type: ''
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {isEditMode ? `Editing Product ${id}` : `Product Details for ${id}`}
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          // Xử lý logic submit form tại đây
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <Field
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.name && touched.name ? (
                <div className="text-red-500 text-sm">{errors.name}</div>
              ) : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <Field
                name="price"
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.price && touched.price ? (
                <div className="text-red-500 text-sm">{errors.price}</div>
              ) : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <Field
                name="img"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.img && touched.img ? (
                <div className="text-red-500 text-sm">{errors.img}</div>
              ) : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <Field
                name="description"
                as="textarea"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.description && touched.description ? (
                <div className="text-red-500 text-sm">{errors.description}</div>
              ) : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <Field
                name="type"
                as="select"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select a type</option>
                <option value="APPLE">APPLE</option>
                <option value="SONY">SONY</option>
                <option value="SAMSUNG">SAMSUNG</option>
                <option value="XIAOMI">XIAOMI</option>
              </Field>
              {errors.type && touched.type ? (
                <div className="text-red-500 text-sm">{errors.type}</div>
              ) : null}
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isEditMode ? 'Update Product' : 'View Product'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Product;
