import React from 'react';
import { Timeline } from 'antd';

const Round2 = () => {

    return (
        <>
            <Timeline mode={"left"}>
                <Timeline.Item label="Day 3 (16 Mar) 8:30 AM">Reporting Time</Timeline.Item>
                <Timeline.Item label="Day 3 (16 Mar) 9:00 AM">Release of Improved Problem Statement</Timeline.Item>
                <Timeline.Item label="Day 3 (16 Mar) 9:30 AM">Hackathon Ends</Timeline.Item>
                <Timeline.Item label="Day 3 (16 Mar) 4:00 PM">Offline round ends</Timeline.Item>
                <Timeline.Item label="Day 3 (16 Mar) 4:00 PM">Evaluation Starts</Timeline.Item>
                <Timeline.Item label="Day 3 (16 Mar) 6:00 PM">Tentative Evaluation Ends</Timeline.Item>
            </Timeline>
        </>
    );
};

export default Round2;


// import React from 'react';
// import { Space, Table, Tag } from 'antd';
// import { ColumnsType } from 'antd/es/table';


// const columns = [
//     {
//         title: 'Event',
//         dataIndex: 'event',
//         key: 'event',
//         render: (text) => <a>{text}</a>,
//     },
//     {
//         title: 'Date',
//         dataIndex: 'date',
//         key: 'date',
//     },
//     {
//         title: 'Time',
//         dataIndex: 'time',
//         key: 'time',
//     },
// ];

// const data = [
//     {
//         key: '1',
//         event: 'Reporting Time',
//         date: 'Day 3 (16 Mar)',
//         time: '8:30 AM',
//     },
//     {
//         key: '2',
//         event: 'Release of Improved Problem Statement',
//         date: 'Day 3 (16 Mar)',
//         time: '9:00 AM',
//     },
//     {
//         key: '3',
//         event: 'Hackathon starts',
//         date: 'Day 3 (16 Mar)',
//         time: '9:30 AM',
//     },
//     {
//         key: '4',
//         event: 'Offline round ends',
//         date: 'Day 3 (16 Mar)',
//         time: '4:00 PM',
//     },
//     {
//         key: '5',
//         event: 'Evaluation Starts',
//         date: 'Day 3 (16 Mar)',
//         time: '4:00 PM',
//     },
//     {
//         key: '6',
//         event: 'Tentative Evaluation Ends',
//         date: 'Day 3 (16 Mar)',
//         time: '6:00 PM',
//     },
// ];

// const TableBox = () => <Table columns={columns} dataSource={data} />;

// export default TableBox;