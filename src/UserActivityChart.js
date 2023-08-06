// UserActivityChart.js
import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const UserActivityChart = ({ timeRange }) => {
  const { users } = useContext(UserContext);

  
  const generateMockUserActivityData = (range) => {
    const currentDate = new Date();
    const mockData = [];
    let daysCount = 7;

    if (range === 'monthly') {
      daysCount = 30;
    } else if (range === 'daily') {
      daysCount = 1;
    }
    
    for (let i = 0; i < daysCount; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - i);
        const formattedDate = date.toISOString().slice(0, 10);
        const newUsers = users.filter((user) => user.registerDate === formattedDate).length;
        mockData.push({
            date: formattedDate,
            newUsers,
        });
    }
    
    return mockData.reverse();
};

const [chartData, setChartData] = useState(generateMockUserActivityData(timeRange || 'weekly'));

const handleTimeRangeChange = (range) => {
    setChartData(generateMockUserActivityData(range));
};

useEffect(()=>{
  setChartData(generateMockUserActivityData(timeRange || 'weekly'));
},[users])

return (
    <div className='user-activity-chart'>
      <h2>User Activity Visualization</h2>
      <div>
        <button onClick={() => handleTimeRangeChange('weekly')}>Weekly</button>
        <button onClick={() => handleTimeRangeChange('monthly')}>Monthly</button>
        <button onClick={() => handleTimeRangeChange('daily')}>Daily</button>
      </div>
      <LineChart width={600 || 500} height={300} data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="newUsers" name="New Users" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default UserActivityChart;
