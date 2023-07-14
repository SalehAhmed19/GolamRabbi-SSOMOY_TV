import React from 'react';
import logo from "../../assets/logo/logo.png";
const DashboardHome = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <img src={logo} alt="logo"className='mb-8' />
      <h1 className="font-bold text-4xl">Welcome to Dashboard</h1>
    </div>
  );
};

export default DashboardHome;