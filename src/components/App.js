import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Content, Header,  Footer } = Layout;


export default class App extends Component {

    render() {
        return (
               <Layout>
                <ReactHeader/>
                <ReactMain/>
                <ReactFooter/>
            </Layout>
        )
    }
}
