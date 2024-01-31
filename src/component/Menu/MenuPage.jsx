import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useRoutes, useNavigate, redirect  } from "react-router-dom";
import routes from '../..//router/router'
import { HeartOutlined } from '@ant-design/icons'

import './index.css'

const MenuPage = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key,{replace: true});
    console.log(e);
  };
  return <Menu onClick={onClick}  mode="horizontal" items={routes} className='menu'/>;
 };
 export default MenuPage;