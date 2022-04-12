import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  const { currentNavItem, setCurrentNavItem, navItems = [] } = props;
  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#FF8000" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: '#FF8000' }}>
            Navigation
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <ul>
                
            <CDBSidebarMenuItem>
              <NavLink to="/about">About</NavLink>
            </CDBSidebarMenuItem>
                
                
            <CDBSidebarMenuItem>
               <NavLink to="/food">Food</NavLink>
            </CDBSidebarMenuItem>
               
                
            <CDBSidebarMenuItem>
              <NavLink to="/add-a-business">Add a Business</NavLink>
            </CDBSidebarMenuItem>
                
                
            <CDBSidebarMenuItem>
                <NavLink to="/hygiene">Hygiene</NavLink>
             </CDBSidebarMenuItem>
              
                
            <CDBSidebarMenuItem>
              <NavLink to="/apparel">Apparel</NavLink>
            </CDBSidebarMenuItem>   
          </ul>
            

          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
    </div>
  );
};

export default Sidebar;