// components/LineChart.tsx
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import React from 'react';

interface LineChartProps {
  data: number[];
  labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        if (ctx) { // Verificar si ctx no es null antes de proceder.
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'My First dataset',
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: data,
                            fill: false,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Line Chart Example',
                        },
                    },
                },
            });
        }
    }
}, [data, labels]);

  return <canvas ref={chartRef}></canvas>;
};

export default LineChart;
