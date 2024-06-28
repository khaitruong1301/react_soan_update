import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <NavLink className="text-white text-xl font-bold" to="/">Cybersoft</NavLink>
                <button className="text-gray-400 lg:hidden" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <div className="hidden lg:flex lg:items-center lg:justify-between w-full lg:w-auto">
                    <ul className="lg:flex lg:items-center lg:space-x-4">
                        <li>
                            <NavLink className="text-white py-2 px-4" to="/" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-white py-2 px-4" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-white py-2 px-4" to="/register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-white py-2 px-4" to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-white py-2 px-4" to="/products" >Products</NavLink>
                        </li>
                    </ul>
                    <form className="flex items-center mt-4 lg:mt-0">
                        <input className="form-input px-3 py-2 rounded-md text-gray-700" type="text" placeholder="Search" />
                        <button className="ml-2 bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>


    )
}

export default Header