import React from 'react';
import { Progress } from 'antd';

const ProgressOne = () =>(
    <div className="progressbar-block progressbar-one-block">
       <Progress type="circle" percent={48} 
       strokeWidth={3} 
       strokeColor="#fc5d7f" 
       width = {130}
       format={percent => `4.8`}  />
    </div>
);
export default ProgressOne;
