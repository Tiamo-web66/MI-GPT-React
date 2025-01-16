import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, Breadcrumb, Layout, Menu, theme } from 'antd';
import HeaderComponent from '../../components/Header';


const { Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const Config = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <HeaderComponent />
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
          trigger={null} collapsible collapsed={collapsed}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              minHeight: 'calc(100vh - 80px)',
              borderRight: 0,
            }}
            items={items2}
          />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 32,
            height: 32,
            position: 'absolute',
            bottom: 0,
            right: 20
          }}
        />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            items={[
              {
                title: 'Home',
              },
              {
                title: 'List',
              },
              {
                title: 'App',
              },
            ]}
            style={{
              margin: '16px 0', 
            }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Config;