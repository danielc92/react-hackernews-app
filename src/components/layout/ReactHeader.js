import React from 'react'
import { Layout, Menu } from 'antd';
const { Header } = Layout;


function ReactHeader() {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="top-stories">Top Stories</Menu.Item>
                <Menu.Item key="2">Ask Stories</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
    )
}

export default ReactHeader;