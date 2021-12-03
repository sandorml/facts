import React from 'react'
import { BackTop, Layout, Menu } from 'antd';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Header, Content } = Layout;

const ContentP = styled(Content)`
    padding: 25px;
`;

const Container = () => {
    return (
        <Layout >
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item><Link to="/">Facts</Link></Menu.Item>
                    <Menu.Item><Link to="/about">About</Link></Menu.Item>
                </Menu>
            </Header>
            <ContentP>
                <Outlet />
            </ContentP>
            <BackTop />
        </Layout>
    )
}

export default Container;