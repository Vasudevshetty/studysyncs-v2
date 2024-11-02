import { useTheme } from "@/components/context/ThemeContext";
import Chart from "react-apexcharts";

function AttendanceChart({ data }) {
  const { isDarkMode } = useTheme();

  const options = {
    chart: {
      type: "bar",
      height: 240,
      toolbar: {
        show: false,
      },
    },
    title: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#007bff"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 3,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: isDarkMode ? "#dddddd" : "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: data.categories.map((id) => id.toUpperCase()),
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
      show: true,
      borderColor: isDarkMode ? "#dddddd60" : "#a0a0a0",
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
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <Chart series={data.series} options={options} type="bar" height={250} />
  );
}

export default AttendanceChart;
