import React, { Component } from 'react';
import { Layout } from 'antd';
import ReactHeader from './layout/ReactHeader';
import ReactFooter from './layout/ReactFooter';
import ReactMain from './layout/ReactMain';


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
