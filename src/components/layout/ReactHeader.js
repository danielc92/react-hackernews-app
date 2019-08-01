import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;


function ReactHeader() {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['topStories']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="topStories"><Link to="/top-stories">Top Stories</Link></Menu.Item>
                <Menu.Item key="newStories"><Link to="/new-stories">New Stories</Link></Menu.Item>
                <Menu.Item key="bestStories"><Link to="/best-stories">Best Stories</Link></Menu.Item>
                <Menu.Item key="showStories"><Link to="/show-stories">Show Stories</Link></Menu.Item>
                <Menu.Item key="askStories"><Link to="/ask-stories">Ask Stories</Link></Menu.Item>
                <Menu.Item key="jobStories"><Link to="/job-stories">Jobs</Link></Menu.Item>
            </Menu>
        </Header>
    )
}

export default ReactHeader;