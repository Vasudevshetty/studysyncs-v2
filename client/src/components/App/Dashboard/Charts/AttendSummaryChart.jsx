import { useTheme } from "@/components/context/ThemeContext";
import Chart from "react-apexcharts";

function AttendSummaryChart({ data }) {
  const { isDarkMode } = useTheme();

  const options = {
    chart: {
      type: "donut",
    },
    labels: data.labels,
    dataLabels: {
      enabled: true,
    },
    legend: {
      labels: {
        colors: isDarkMode ? "#dddddd" : "#616161",
      },
    },
    colors: ["#1E90FF", "#FF6347", "#32CD32", "#FFD700"],
    tooltip: {
      theme: isDarkMode ? "dark" : "light",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
      },
    },
  };

  return (
    <Chart series={data.series} options={options} type="donut" height={300} />
  );
}

export default AttendSummaryChart;
