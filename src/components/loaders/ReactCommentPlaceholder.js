import React from 'react';
import { Skeleton } from 'antd';

export default function ReactCommentPlaceholder() {
    return (
        <div>
            <Skeleton 
            loading={true}
            active
            paragraph={{ rows: 1 }} 
                />
        </div>
    )
}
