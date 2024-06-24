import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { FaUsers, FaDollarSign } from 'react-icons/fa';
import { HiTicket } from "react-icons/hi2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Revenue",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Dataset 1",
        data: [300, 50, 100],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  };

    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-6 text-left text-gray-800 dark:text-gray-200">Dashboard</h2>
      
      {/*Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center justify-between p-5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FaUsers size={36} className="text-cyan-400" />
          <div className="text-right">
            <h3 className="text-2xl font-semibold">155</h3>
            <p className="text-lg">Active Members</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FaDollarSign size={36} className="text-cyan-400" />
          <div className="text-right">
            <h3 className="text-2xl font-semibold">10,000 <span className="text-sm">MAD</span></h3>
            <p className="text-lg">Monthly Revenue</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <HiTicket size={36} className="text-cyan-400" />
          <div className="text-right">
            <h3 className="text-2xl font-semibold">32</h3>
            <p className="text-lg">Monthly Reservations</p>
          </div>
        </div>
      </div>

      {/* Charts*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Monthly Sales</h3>
          <Line data={lineChartData} />
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Monthly Revenue</h3>
          <Bar data={barChartData} />
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Revenue Distribution</h3>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
};

export default Dashboard;
