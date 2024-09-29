import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';

export default function Layout() {
  const [dropdown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown((preState) => !preState);
  }

  function closeDropdown() {
    setDropdown(false);
  }

  return (
    <>
      <Header dropdown={dropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} />
      <div className={`${dropdown ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
