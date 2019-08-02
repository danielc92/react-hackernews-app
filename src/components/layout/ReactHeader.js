import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import svg from '../../logo/snooping.svg';
const { Header } = Layout;


function ReactHeader() {
    return (
        <Header style={{ backgroundColor:'white', position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['topStories']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="logo">
                    <img src={svg} style={{maxWidth: '38px'}}></img>
                </Menu.Item>
                
                <Menu.Item key="topStories">
                    <Link to="/top-stories">Top Stories</Link>
                </Menu.Item>

                <Menu.Item key="newStories">
                    <Link to="/new-stories">New Stories</Link>
                </Menu.Item>

                <Menu.Item key="bestStories">
                    <Link to="/best-stories">Best Stories</Link>
                </Menu.Item>

                <Menu.Item key="showStories">
                    <Link to="/show-stories">Show Stories</Link>
                </Menu.Item>

                <Menu.Item key="askStories">
                    <Link to="/ask-stories">Ask Stories</Link>
                </Menu.Item>

                <Menu.Item key="jobStories">
                    <Link to="/jobs">Jobs</Link>
                </Menu.Item>

                <Menu.Item key="github-link">
                   
                    <a 
                    target="_blank"  
                    href="https://github.com/danielc92/react-hackernews-app">
                         <Icon type="github"/>Source Code
                    </a>
                </Menu.Item>

                
            </Menu>
        </Header>
    )
}

export default ReactHeader;