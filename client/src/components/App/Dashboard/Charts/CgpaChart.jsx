import { useTheme } from "@/components/context/ThemeContext";
import Chart from "react-apexcharts";

function CgpaChart({ data }) {
  const { isDarkMode } = useTheme();

  const options = {
    chart: {
      type: "line",
      height: 240,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#20B2AA", "#FF6347"],
    xaxis: {
      categories: data.categories,
      labels: {
        style: {
          colors: isDarkMode ? "#dddddd" : "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: isDarkMode ? "#dddddd" : "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      borderColor: isDarkMode ? "#ddd" : "#a0a0a0",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    tooltip: {
      theme: isDarkMode ? "dark" : "light",
    },
  };

  return (
    <Chart series={data.series} options={options} type="line" height={300} />
  );
}

export default CgpaChart;