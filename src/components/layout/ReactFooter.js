import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;


function ReactHeader() {
    return (
        <Footer style={{ textAlign: 'center', color: 'white', backgroundColor: '#001529' }}>
            <p>Developed by <strong>Daniel Corcoran</strong></p>
            <p>Built by <strong>React</strong> and <strong>Ant Design UI</strong></p>
            <p>Powered by <strong>Hacker News Firebase API</strong></p>
        </Footer>
    )
}

export default ReactHeader;
