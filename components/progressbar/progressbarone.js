import React from 'react';
import { Progress } from 'antd';

const ProgressOne = () =>(
    <div className="progressbar-block progressbar-one-block">
       <Progress type="circle" percent={85} 
       strokeWidth={4} 
       strokeColor="#fc5d7f" 
       width = {130}
       format={percent => `4.8`}  />
    </div>
);
export default ProgressOne;
