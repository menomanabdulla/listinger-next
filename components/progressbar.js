import React from 'react';
import { Progress } from 'antd';

const PrograssOne = () =>(
    <div>
        <Progress type="circle" percent={75} format={ () => `<h3> 4.8 </h3> <span> 15 Reviews </span>`} />
    </div>
);
export default PrograssOne;