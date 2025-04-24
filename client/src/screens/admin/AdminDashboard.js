// src/screens/admin/AdminDashboard.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  listUsers } from '../../actions/userActions';
import { listProducts } from '../../actions/productActions';
import { listOrders } from '../../actions/orderActions';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const orderList = useSelector((state) => state.orderList);
  const { orders } = orderList;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listUsers());
    dispatch(listOrders());
  }, [dispatch]);

  // Sales data for charts
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales 2023',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(30, 58, 138, 0.7)',
      },
    ],
  };

  const productCategories = {
    labels: ['Shirts', 'Pants', 'Dresses', 'Accessories'],
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(30, 58, 138, 0.7)',
          'rgba(6, 95, 70, 0.7)',
          'rgba(183, 121, 31, 0.7)',
          'rgba(224, 242, 254, 0.7)'
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <div className="bg-abay-blue text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Link 
            to="/" 
            className="bg-white text-abay-blue px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            View Store
          </Link>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto p-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Products</h3>
            <p className="text-3xl font-bold text-abay-blue mt-2">{products?.length || 0}</p>
            <Link 
              to="/admin/productlist" 
              className="text-abay-green hover:underline mt-4 inline-block"
            >
              Manage Products
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
            <p className="text-3xl font-bold text-abay-blue mt-2">{users?.length || 0}</p>
            <Link 
              to="/admin/userlist" 
              className="text-abay-green hover:underline mt-4 inline-block"
            >
              Manage Users
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
            <p className="text-3xl font-bold text-abay-blue mt-2">{orders?.length || 0}</p>
            <Link 
              to="/admin/orderlist" 
              className="text-abay-green hover:underline mt-4 inline-block"
            >
              View Orders
            </Link>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
            <div className="h-64">
              <Bar 
                data={salesData} 
                options={{ 
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                }} 
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
            <div className="h-64">
              <Pie 
                data={productCategories} 
                options={{ 
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'right',
                    },
                  },
                }} 
              />
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders?.slice(0, 5).map((order) => (
                  <tr key={order._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order._id.substring(0, 8)}...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.user?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${order.totalPrice}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        to={`/order/${order._id}`}
                        className="text-abay-blue hover:text-blue-800 mr-3"
                      >
                        View
                      </Link>
                      <Link
                        to={`/admin/order/${order._id}/edit`}
                        className="text-abay-green hover:text-green-800"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">{orders?.length}</span> orders
            </div>
            <Link
              to="/admin/orderlist"
              className="text-sm font-medium text-abay-blue hover:text-blue-800"
            >
              View all orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;