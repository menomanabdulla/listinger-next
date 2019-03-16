import React from 'react';
import { Progress } from 'antd';

const ProgressThree = () =>(
    <div className="progressbar-block progressbar-three-block">
       <Progress type="circle" percent={45} 
       strokeWidth={3} 
       strokeColor="#54a0ff" 
       width = {90}
       format={percent => `4.5`}  />
    </div>
);
export default ProgressThree;
