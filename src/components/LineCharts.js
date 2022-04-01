import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';

const LineCharts = () => {
    const course = [
        {
            name: 'Python',
            student: 10,
            fees: 12,
        },
        {
            name: 'PHP',
            student: 15,
            fees: 24,
        },
        {
            name: 'Java',
            student: 20,
            fees: 32,
        },
        {
            name: 'C++',
            student: 12,
            fees: 18,
        },
        {
            name: 'C#',
            student: 30,
            fees: 8,
        },
    ]
    return (
        <div>
            <ResponsiveContainer width='100%' aspect={3}>
                <LineChart data={course} width={500} height={400} margin={{top:5, right:100, left:25, bottom:5}} >
                    <CartesianGrid stroke="#ccc"/>
                    <XAxis dataKey='name' interval={'preserveStartEnd'} tickFormatter={(value) => value + ' Programming'} />
                    <YAxis/>
                    <Tooltip contentStyle={{backgroundColor: 'yellow'}}/>
                    <Legend />
                    <Line type='monotone' dataKey='student' stroke='red' activeDot={{r: 10}} />
                    <Line type='linear' dataKey='fees'  stroke='green' activeDot={{r: 10}} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineCharts