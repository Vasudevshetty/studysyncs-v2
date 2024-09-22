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
  { name: "Jan", sales: 40},
  { name: "Feb", sales: 30},
  { name: "March", sales: 50},
  { name: "April", sales: 70},
  { name: "May", sales: 60},
  { name: "June", sales: 80},
];

const LineChartRecharts = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
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
