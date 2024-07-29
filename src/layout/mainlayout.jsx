
// import React, { useState } from 'react';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import logo from '../assets/images/sazsgrey.png'
// import { Outlet, useNavigate, useLocation } from 'react-router-dom';
// import { MenuItems } from './menuitems';  // Import your MenuItems


// const { Header, Content, Footer, Sider } = Layout;

// const Mainlayout = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const menuClick = ({ key }) => {
//     navigate(key);
//   };

//   const renderMenuItems = (items) =>
//     items.map((item) => {
//       if (item.dropdownItems) {
//         return {
//           key: item.href,
//           icon: item.icon,
//           label: item.name,
//           children: item.dropdownItems.map((subItem) => ({
//             key: subItem.href,
//             icon: subItem.icon,
//             label: subItem.name,
//           })),
//         };
//       }
//       return {
//         key: item.href,
//         icon: item.icon,
//         label: item.name,
//       };
//     });

//   const breadcrumbs = location.pathname.split('/').filter((i) => i);

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div className="logo" style={{
//           // height: '32px',
//           // margin: '16px',
//           // background: 'rgba(255, 255, 255, 0.3)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//           <img src={logo} alt="Logo" style={{ maxHeight: '100%', maxWidth: '100%',height:'80px' }} />
//         </div>
//         <Menu
//           theme="dark"
//           defaultSelectedKeys={['/']}
//           mode="inline"
//           items={renderMenuItems(MenuItems)}
//           onClick={menuClick}
//         />
//       </Sider>
//       <Layout>
//         <Header style={{ padding: 0, background: colorBgContainer }} />
//         <Content style={{ margin: '0 16px' }}>
//           <Breadcrumb style={{ margin: '16px 0' }}>
//             {breadcrumbs.map((crumb, index) => (
//               <Breadcrumb.Item key={index}>{crumb}</Breadcrumb.Item>
//             ))}
//           </Breadcrumb>
//           <div style={{
//             padding: 24,
//             margin: 20,
//             minHeight: '100vh',
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}>
//             <Outlet />
//           </div>
//         </Content>
//         <Footer style={{ textAlign: 'center' }}>
//           Weigh Bridge ©{new Date().getFullYear()} Created by Sazs Apps
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default Mainlayout;

// src/Mainlayout.jsx
import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { MenuItems } from './menuitems';  // Import your MenuItems
import logo from '../assets/images/sazsgrey.png'
import {
  AiFillHome,
  PiTable,
  PiFolder,
} from 'react-icons/pi';  // Import required icons

const { Header, Content, Footer, Sider } = Layout;

const Mainlayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  const menuClick = ({ key }) => {
    navigate(key);
  };

  const renderMenuItems = (items) =>
    items.map((item) => {
      if (item.dropdownItems) {
        return {
          key: item.name,
          icon: item.icon,
          label: item.name,
          children: item.dropdownItems.map((subItem) => ({
            key: subItem.href,
            icon: subItem.icon,
            label: subItem.name,
          })),
        };
      }
      return {
        key: item.href,
        icon: item.icon,
        label: item.name,
      };
    });

  const breadcrumbs = location.pathname.split('/').filter((i) => i);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" style={{
          // height: '32px',
          // margin: '16px',
          // background: 'rgba(255, 255, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src={logo} alt="Logo" style={{ maxHeight: '100%', maxWidth: '100%', height:'100px', }} />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['/']}
          mode="inline"
          items={renderMenuItems(MenuItems)}
          onClick={menuClick}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumbs.map((crumb, index) => (
              <Breadcrumb.Item key={index}>{crumb}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <div style={{
            padding: 24,
            margin: 20,
            minHeight: '100vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Weigh Bridge ©{new Date().getFullYear()} Created by Sazs Apps
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Mainlayout;

