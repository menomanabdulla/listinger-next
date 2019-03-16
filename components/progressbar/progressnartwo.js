import React from 'react';
import { Progress } from 'antd';

const ProgressTwo = () =>(
    <div className="progressbar-block progressbar-two-block">
       <Progress type="circle" percent={32} 
       strokeWidth={3} 
       strokeColor="#5d5cfd" 
       width = {90}
       format={percent => `3.2`}  />
    </div>
);
export default ProgressTwo;
