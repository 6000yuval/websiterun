import React from 'react';
import Navbar from './Navbar';
import { useRouter } from '../contexts/RouterContext';

const NavbarWrapper: React.FC = () => {
  const { navigate } = useRouter();

  return <Navbar onNavigate={navigate} />;
};

export default NavbarWrapper;