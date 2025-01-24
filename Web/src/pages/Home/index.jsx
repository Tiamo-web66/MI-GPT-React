// src/pages/Home/index.jsx
import React from 'react';
import Header from './components/Header';
import './index.less';
import { ControlOutlined } from '@ant-design/icons';
const Home = () => {
    return (
        <>
        <div className="home">
            <div className='header'>
                <div className='headerLeft'>Ti - GPT</div>
                <div className='headerRight'><a href=""><ControlOutlined style={{marginRight: '6px'}} />配置中心</a></div>
            </div>
            <div className="home-content">
                <div className="home-content-title">欢迎使用 MiGPT</div>
                <div className="home-content-subtitle">基于 React 的 MiGPT 可视化配置界面，提供直观的服务管理和参数配置能力。</div>
            </div>
        </div>
        </>
    );
}

export default Home;