import React from 'react';
import { Skeleton } from 'antd';

export default function ReactCommentPlaceholder() {
    return (
        <div>
            <Skeleton 
            loading={true}
            avatar 
            active
            paragraph={{ rows: 2 }} 
                />
        </div>
    )
}
