import React from 'react';
import {  Timeline } from 'antd';

const Round1 = () => {

    return (
        <>
            <Timeline mode={"left"}>
                <Timeline.Item label="Day 1 (11 Mar) 10:00 AM">Release of Problem Statement</Timeline.Item>
                <Timeline.Item label="Day 1 (11 Mar) 12:00 PM">Lock the Options + Hackathon starts</Timeline.Item>
                <Timeline.Item label="Day 2 (12 Mar) 11:59 PM">Hackathon Ends</Timeline.Item>
            </Timeline>
        </>
    );
};

export default Round1;
