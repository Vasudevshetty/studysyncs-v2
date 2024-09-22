import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartRecharts = () => {
  return (
    <ResponsiveContainer width="80%" height="80%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius="60%"
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="vertical" // Change layout to vertical
          align="right" // Align legend to the right
          verticalAlign="middle" // Vertically center the legend
          formatter={(value) => (
            <span className="text-[10px] md:text-lg lg:text-xl">{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartRecharts;
