import React, { Component } from 'react'
import { Layout } from 'antd'
import ReactTopStories from '../stories/ReactTopStories';
import ReactNewStories from '../stories/ReactNewStories';
import ReactBestStories from '../stories/ReactBestStories';
import ReactShowStories from '../stories/ReactShowStories';
import ReactAskStories from '../stories/ReactAskStories';
import ReactJobs from '../stories/ReactJobs';
import {Route} from 'react-router-dom';


export default class ReactMain extends Component {
    render() {
        return (
            <Layout.Content style={{ padding: '10px', marginTop: 64 }}>
            <div className="container-custom">
                {/* Default to top stories if no path specified */}
                <Route path="/" exact component={ReactTopStories}/>
                <Route path="/top-stories" component={ReactTopStories}/>
                <Route path="/new-stories" component={ReactNewStories}/>
                <Route path="/best-stories" component={ReactBestStories}/>
                <Route path="/show-stories" component={ReactShowStories}/>
                <Route path="/ask-stories" component={ReactAskStories}/>
                <Route path="/jobs" component={ReactJobs}/>

            </div>
            </Layout.Content>
        )
    }
}
