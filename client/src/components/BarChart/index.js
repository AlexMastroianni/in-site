import React from 'react';
import { Pie } from 'react-chartjs-2';

function barChart() {
  const data = {
    labels: ['Uncompleted', 'Completed', 'Sites', 'Users'],
    datasets: [
      {
        label: 'Metrics',
        data: [6, 19, 5, 5],
        backgroundColor: [
          'rgba(255, 99, 132 )',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };
  const options = {};
  return (
    <div>
      <Pie data={data} options={options}></Pie>
    </div>
  );
}

export default barChart;
