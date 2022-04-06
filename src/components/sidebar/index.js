import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
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
            <a href='/components/About' activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">About</CDBSidebarMenuItem>
            </a>
            {/* <NavLink exact to="/Food" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Food</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Hygiene" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Hygiene</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Apperal" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Apperal</CDBSidebarMenuItem>
            </NavLink> */}

          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Home Made
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;