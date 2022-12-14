import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import Navbar from '../../Home/components/Navbar/Navbar';

const AdminDashboard = () => {

    const [user] = useAuthState(auth);
    return (

        <div >
            <Navbar></Navbar>
            <div class="drawer drawer-mobile container">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">

                    <Outlet></Outlet>
                </div>
                <div class="drawer-side p-4 bg-gray-300 rounded-tr-lg">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu  overflow-y-auto w-48  text-base-content bg-gray-300 rounded-tr-lg">
                        {/* <!-- Sidebar content here --> */}
                        <div className='flex items-center'>

                            <div class={"w-10"}>
                                <span><img
                                    className=""
                                    src="https://i.ibb.co/XyrXVjt/easy-Schedule-Icon.png"
                                    alt=""
                                />
                                </span>
                            </div>
                            <div>
                                <h2>{user.displayName}</h2>
                            </div>
                        </div>

                        <h2 className='text-xl font-bold text-center mt-4 pt-4     '>

                            <span className='text-indigo-700 '>Admin</span><span className='text-yellow-700'> Dashboard</span>
                        </h2>
                        <li><Link to="/adminDashboard" className='text-white p-4 m-4  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg'>User Schedule</Link></li>
                        <li><Link to="/adminDashboard/allUsers" className='text-white p-4 m-4  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg'>Make Admin</Link></li>
                        <li><Link to="/adminDashboard/manageUsers" className='text-white p-4 m-4  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg'>Delete Users</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;