import React from 'react';
import { Spin } from 'antd';

function ReactSpinner() {
    return (
        <div style={{textAlign: 'center', paddingTop: '1.6rem'}}>
            <Spin 
            delay={1200}
            tip="Fetching data..."
            size="large"/>
        </div>
    )
}

export default ReactSpinner;
