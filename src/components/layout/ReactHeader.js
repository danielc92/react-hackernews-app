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
                <Menu.Item key="topStories">Top Stories</Menu.Item>
                <Menu.Item key="newStories">New Stories</Menu.Item>
                <Menu.Item key="bestStories">Best Stories</Menu.Item>
                <Menu.Item key="showStories">Show Stories</Menu.Item>
                <Menu.Item key="askStories">Ask Stories</Menu.Item>
                <Menu.Item key="jobStories">Job Stories</Menu.Item>
            </Menu>
        </Header>
    )
}

export default ReactHeader;