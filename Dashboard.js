
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';

const Dashboard = () => {
  const lineData = {
    labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [1.6, 1.2, 0.8],
        borderColor: 'orange',
        backgroundColor: 'orange',
        fill: false,
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Sales',
        data: [1.4, 1.0, 0.6],
        borderColor: 'lightblue',
        backgroundColor: 'lightblue',
        fill: false,
        yAxisID: 'y-axis-2',
      },
    ],
  };

  const pieData = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [44.2, 55.8],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Orders (in thousands)',
        },
        ticks: {
          callback: function (value) {
            return value + 'k';
          },
          beginAtZero: true,
          stepSize: 0.4,
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Sales',
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 0.4,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li className="active">Dashboard</li>
          <li>Inventory</li>
          <li>Order</li>
          <li>Returns</li>
          <li>Customers</li>
          <li>Shipping</li>
          <li>Channel</li>
          <li>Integrations</li>
          <li>Calculators</li>
          <li>Reports</li>
          <li>Account</li>
        </ul>
      </div>
      <div className="content">
        <div className="chart-row">
          <h3>Sales vs Orders</h3>
          <Line data={lineData} options={options} />
        </div>
        <div className="chart-row">
          <h3>Portion of Sales</h3>
          <Pie data={pieData} />
          <div className="total-sales">
            <span>Total</span>
            <span className="total-number">2659</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



