// src/pages/Home/index.jsx
import React from 'react';
import Header from './components/Header'
const Home = () => {
    return (
        <>
        <Header/>
        <div className="home">
            <div className="home-content">
                <div className="home-content-title">欢迎使用 MiGPT</div>
                <div className="home-content-subtitle">基于 React 的 MiGPT 可视化配置界面，提供直观的服务管理和参数配置能力。</div>
            </div>
        </div>
        </>
    );
}

export default Home;