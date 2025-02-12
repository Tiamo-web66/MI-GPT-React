import React, { useState } from 'react';
import ConfigMenu from './components/ConfigMenu';
import Header from '../../components/Header'
import './index.less';
const Config = () => {
  return (
    <div className='config'>
      <Header />
      <div className='body'>
        <div className='sidebar'>
          <ConfigMenu />
        </div>
        <div className='views'>
          
        </div>
      </div>
    </div>
  );
};

export default Config;