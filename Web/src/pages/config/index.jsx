import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, Breadcrumb, Layout, Menu, theme } from 'antd';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HeaderComponent from '../../components/Header';
import HomeComponent from './content/HomeComponent';
import ListComponent from './content/ListComponent';
import AppComponent from './content/AppComponent';

const { Content, Sider } = Layout;

const items2 = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'Home',
    children: [
      {
        key: '1-1',
        label: 'Home',
        path: '/',
      },
    ],
  },
  {
    key: '2',
    icon: <LaptopOutlined />,
    label: 'List',
    children: [
      {
        key: '2-1',
        label: 'List',
        path: '/list',
      },
    ],
  },
  {
    key: '3',
    icon: <NotificationOutlined />,
    label: 'App',
    children: [
      {
        key: '3-1',
        label: 'App',
        path: '/app',
      },
    ],
  },
];

const Config = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const location = useLocation();

  const siderStyle = {
    background: colorBgContainer,
    minHeight: '100vh',
  };

  const menuStyle = {
    minHeight: 'calc(100vh - 72px)',
    borderRight: 0,
  };

  const buttonStyle = {
    fontSize: '16px',
    width: 32,
    height: 32,
    position: 'absolute',
    bottom: 0,
    right: 20,
  };

  const layoutStyle = {
    padding: '0 24px 24px',
    background: 'transparent',
  };

  const breadcrumbStyle = {
    margin: '16px 0',
  };

  const contentStyle = {
    padding: 24,
    margin: 0,
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: borderRadiusLG,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  };

  const breadcrumbItems = items2.flatMap(item =>
    item.children.map(child => ({
      title: child.label,
      path: child.path,
    }))
  ).filter(item => location.pathname.includes(item.path));

  return (
    <div className='home'>
      <HeaderComponent />
      <Layout>
        <Sider
          width={200}
          style={siderStyle}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            defaultOpenKeys={['1']}
            style={menuStyle}
            items={items2}
            onClick={(e) => {
              if (e.keyPath.length > 1) {
                window.location.href = e.keyPath[0];
              }
            }}
          />
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={buttonStyle}
          />
        </Sider>
        <Layout style={layoutStyle}>
          <Breadcrumb items={breadcrumbItems} style={breadcrumbStyle} />
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/list" element={<ListComponent />} />
              <Route path="/app" element={<AppComponent />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Config;