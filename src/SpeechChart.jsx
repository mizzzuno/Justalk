import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const SpeechChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['自分', '他の人'],
        datasets: [{
          data: [40, 60],
          backgroundColor: ['#4299e1', '#e53e3e'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: 'white'
            }
          }
        }
      }
    });
  }, []);

  return <canvas ref={chartRef} id="speechChart" />;
};

export default SpeechChart;