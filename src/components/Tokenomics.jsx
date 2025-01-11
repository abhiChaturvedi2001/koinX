import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Tokenomics = () => {
  const data = {
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#007bff", "#ffa500"],
        hoverBackgroundColor: ["#0056b3", "#cc8400"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 10,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[60vw] max-md:w-full">
        <h2 className="text-lg font-bold">Tokenomics</h2>
        <h2 className="text-lg font-semibold mt-4">Intial Distribution</h2>
        <div className="mt-4 flex gap-2 items-center">
          <div className="w-1/5 h-40">
            <Doughnut data={data} options={options} />
          </div>
          <div className="text-sm">
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 inline-block bg-blue-500 rounded-full"></span>
              Crowdsale Investors: 80%
            </p>
            <p className="flex items-center gap-2 mt-2">
              <span className="w-3 h-3 inline-block bg-orange-500 rounded-full"></span>
              Foundation: 20%
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultricies nibh sodales massa habitasse
          massa felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
