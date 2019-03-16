import React from 'react';
import { Progress } from 'antd';

const ProgressFour = () =>(
    <div className="progressbar-block progressbar-four-block">
       <Progress type="circle" percent={40} 
       strokeWidth={3} 
       strokeColor="#8c7ae6" 
       width = {90}
       format={percent => `4`}  />
    </div>
);
export default ProgressFour;
