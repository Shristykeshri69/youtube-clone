import React from 'react';
import Sidebar from './Sidebar';
import ButtonList from './ButtonList';
import { Outlet, useLocation } from 'react-router-dom';

const Body = () => {
  const location = useLocation();

  // Hide ButtonList when on /watch route
  const hideButtonList = location.pathname.startsWith('/watch');

  return (
    <div>
      <div className="flex-wrap ml-40 p-6">
        {!hideButtonList && <ButtonList />}
      </div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
