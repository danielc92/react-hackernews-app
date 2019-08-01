import React, { Component } from 'react'
import { Layout } from 'antd'
import ReactTopStories from '../ReactTopStories';
import {Route} from 'react-router-dom';

export default class ReactMain extends Component {
    render() {
        return (
            <Layout.Content style={{ padding: '50px', marginTop: 64 }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                <Route path="/top-stories" component={ReactTopStories}/>
            </div>
            </Layout.Content>
        )
    }
}
