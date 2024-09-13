import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const CompetencyBar = ({ data }) => {
    // Extract competency names as labels
    const labels = Object.keys(data); // Competencies like 'Communication', 'Leadership', 'Problem Solving'

    console.log(labels);
    // Create datasets for each rater category using 'averageWeightage'
    const chartData = {
        labels, // Competency names on the y-axis
        datasets: [
            {
                label: 'Self',
                data: labels.map((competency) => data[competency]?.Self?.averageWeightage || 0),
                backgroundColor: 'rgb(23,74,109)', 
            },
            {
                label: 'Direct Report',
                data: labels.map((competency) => data[competency]?.['Direct Report']?.averageWeightage || 0),
                backgroundColor: 'rgb(122,188,219)', 
            },
            {
                label: 'Teammate',
                data: labels.map((competency) => data[competency]?.Teammate?.averageWeightage || 0),
                backgroundColor: 'rgb(204,204,204)', 
            },
            {
                label: 'Supervisor',
                data: labels.map((competency) => data[competency]?.Supervisor?.averageWeightage || 0),
                backgroundColor: 'rgb(0,0,0)', 
            },
            {
                label: 'Other',
                data: labels.map((competency) => data[competency]?.Other?.averageWeightage || 0),
                backgroundColor: 'rgb(153,153,153)', 
            },
        ],
    };

    // Chart options configuration
    const options = {
        indexAxis: 'y', // Horizontal bars
        responsive: true,
        scales: {
            x: {
                beginAtZero: true, // Ensure the chart starts at 0
            },
            y: {
                beginAtZero: true, // Ensure the y-axis starts at 0
                grid: {
                    display: false, // Hide grid lines for a cleaner look
                },
            },
        },
        plugins: {
            legend: {
                position: 'top', // Position legend at the top of the chart
            },
            title: {
                display: true,
                text: 'Competency Chart by Rater Type', // Clear title indicating the data
            },
        },
    };

    return (
        <div>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default CompetencyBar;
