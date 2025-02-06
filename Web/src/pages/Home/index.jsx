// src/pages/Home/index.jsx
import React from 'react';
import Header from './components/Header';
import HeaderComponent from '../../components/Header';
import './index.less';
const Home = () => {
    return (
        <>
        {/* <div className="home">
            <div className='header'>
                <div className='headerLeft'>Ti - GPT</div>
                <div className='headerRight'><a href=""><ControlOutlined style={{marginRight: '6px'}} />配置中心</a></div>
            </div>
            <div className="home-content">
                <div className="home-content-title">欢迎使用 MiGPT</div>
                <div className="home-content-subtitle">基于 React 的 MiGPT 可视化配置界面，提供直观的服务管理和参数配置能力。</div>
            </div>
        </div> */}
            <div className='home'>
                <HeaderComponent />
                <div class="content">
                    <h1 style={{ textAlign: 'center' }}>欢迎使用 MiGPT</h1>
                    <p>基于 React 的 MiGPT 可视化配置界面，提供直观的服务管理和参数配置能力。</p>
                </div>
                <div class="footer">
                    <p>版权所有 © 2024</p>
                </div>
            </div>
        </>
    );
}

export default Home;