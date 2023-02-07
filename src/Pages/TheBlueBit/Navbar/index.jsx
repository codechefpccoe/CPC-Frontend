import React from 'react';
import './index.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Home } from '../Home';
import { About } from '../About';
import { Rules } from '../Rules';
import { Price } from '../Price';
import { FAQs } from '../FAQs';
import { CityView } from './CityView';

const { Header, Content, Footer, Sider } = Layout;



export const Navbar = () => {

    return (
        <Layout>
            <CityView/>
            {/* <Footer style={{ textAlign: 'center' }}>Copyright @2023 PCCOE Codechef Chapter all rights reserved</Footer> */}
        </Layout>
    );
};