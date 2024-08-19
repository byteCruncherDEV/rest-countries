import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="max-w-[720px] mx-auto px-4 py-4">
      <Outlet />
    </div>
  );
};

export default Layout;
