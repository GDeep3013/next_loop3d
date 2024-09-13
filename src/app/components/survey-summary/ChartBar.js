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

const ChartBar = ({ competency, data }) => {
   
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: 'Average Weightage',
                data: Object.values(data).map((item) => item.averageWeightage),
                backgroundColor: 'rgb(23,74,109)',
            },
            {
                label: 'Total Questions',
                data: Object.values(data).map((item) => item.totalQuestions),
                backgroundColor: 'rgb(122,188,219)',
            },
            {
                label: 'Total Weightage',
                data: Object.values(data).map((item) => item.totalWeightage),
                backgroundColor: 'rgb(158,179,194)',
            },
        ],
    };

    const options = {
        indexAxis: 'y', // This makes the bars horizontal
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Competency Chart',
            },
        },
    };

    return (
        <div>
            <h3 className="text-custom-color text-lg sm:text-xl font-poppins font-extrabold uppercase">
                            Competency: {competency}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
            The {competency} competency is the proactive and empathetic approach leaders take to understand...
        </p>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default ChartBar;
