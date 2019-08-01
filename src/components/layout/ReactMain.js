import React, { Component } from 'react'
import { Layout } from 'antd'
import ReactTopStories from '../stories/ReactTopStories';
import ReactNewStories from '../stories/ReactNewStories';
import ReactBestStories from '../stories/ReactBestStories';
import {Route} from 'react-router-dom';

export default class ReactMain extends Component {
    render() {
        return (
            <Layout.Content style={{ padding: '10px', marginTop: 64 }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                <Route path="/top-stories" component={ReactTopStories}/>
                <Route path="/new-stories" component={ReactNewStories}/>
                <Route path="/best-stories" component={ReactBestStories}/>
            </div>
            </Layout.Content>
        )
    }
}
