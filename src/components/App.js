import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Content, Header,  Footer } = Layout;

export default class App extends Component {

    render() {
        return (
               <Layout>
                <ReactHeader/>
                <Content style={{ padding: '50px', marginTop: 64 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
                </Content>
                <ReactFooter/>
            </Layout>
        )
    }
}
