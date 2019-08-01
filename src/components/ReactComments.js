import React, { Component } from 'react';
import ReactComment from './ReactComment';


export default class ReactComments extends Component {

    render() {
        const { kids } = this.props;
        return (
            <React.Fragment>
                { kids.map(id => <ReactComment id={id}/>)}          
            </React.Fragment>
        )
    }
}
