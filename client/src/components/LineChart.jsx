// LineChartRecharts.js
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 40 },
  { name: "Feb", sales: 30 },
  { name: "March", sales: 50 },
  { name: "April", sales: 70 },
  { name: "May", sales: 60 },
  { name: "June", sales: 80 },
];

const LineChartRecharts = () => {
  return (
    <ResponsiveContainer width="80%" height="80%">
      <LineChart data={data}>
        <XAxis dataKey="name" tick={{ className: "text-sm md:text-base" }} />
        <YAxis tick={{ className: "text-sm md:text-base" }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartRecharts;
