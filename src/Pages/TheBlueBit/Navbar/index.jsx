import React from 'react';
import './index.css';
import { Layout } from 'antd';
import { CityView } from './CityView';

const { Header, Content, Footer, Sider } = Layout;

export const Navbar = () => {

    return (
        <Layout>
            <CityView/>
        </Layout>
    );
};