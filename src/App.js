import  { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';


const Example = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{
      backgroundColor: "#300E2F"
    }}>
      <TopBar />
      <SideBar />
    </div>
  );
}

export default Example;