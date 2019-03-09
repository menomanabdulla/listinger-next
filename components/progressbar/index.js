import React from 'react';
import ProgressOne from './progressbarone';
import ProgressTwo from './progressnartwo';
import ProgressThree from './progressbarthree';
import ProgressFour from './progressbarfour';

import 'antd/dist/antd.css';
import '../../style/progressbar.scss';
const ProgressBar = () =>(
    <div className="progressbar-wrap">
        <ProgressOne />
        <ProgressTwo />
        <ProgressThree />
        <ProgressFour />
    </div>
);

export default ProgressBar;