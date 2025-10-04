"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import MasterLayout from "../components/layout/MasterLayout";
import { initDropdowns } from "../scripts/dropdown";

import {
  getCreatorChart,
  getSalesPersonChart,
  getSalesMangerChart,
  getClientChart,
  getSalesChart,
} from "../../api";

const Dashboard = () => {
  const chartRefs = {
    chart1: useRef(null),
    creator: useRef(null),
    salesperson: useRef(null),
    salesmanager: useRef(null),
    client: useRef(null),
  };

  // Utility function for pie charts
  const renderPieChart = (ref, fetchData) => {
    if (!ref.current) return;

    const chart = echarts.init(ref.current, null, {
      renderer: "svg",
      useDirtyRect: false,
    });

    const fetchChartData = async () => {
      try {
        const response = await fetchData();
        const labels = response.labels ?? [];
        const data = response.data ?? [];

        if (labels.length === 0 || data.length === 0) {
          chart.dispose();
          ref.current.innerHTML = `
            <div style="display:flex; align-items:center; justify-content:center; height:100%; color:#555; font-weight:bold;">
              No data found
            </div>
          `;
          return;
        }

        const seriesData = labels.map((label, index) => ({
          name: label,
          value: data[index] ?? 0,
        }));

        const option = {
          tooltip: { trigger: "item" },
          legend: {
            orient: "horizontal",
            bottom: 0,
            itemWidth: 14,
            icon: "roundRect",
          },
          series: [
            {
              type: "pie",
              radius: "70%",
              data: seriesData,
              emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0 } },
              label: { formatter: "{b}: {d}%" },
            },
          ],
          color: ["#dfe6e9", "#74b9ff", "#a29bfe", "#ff7675"],
        };

        chart.setOption(option);
      } catch (error) {
        console.error("Error fetching chart:", error);
        chart.dispose();
      }
    };

    fetchChartData();
    return chart;
  };

  useEffect(() => {
    // Chart1 (Line Chart)
    let Chart1;
    const initLineChart = async () => {
      if (!chartRefs.chart1.current) return;

      Chart1 = echarts.init(chartRefs.chart1.current, null, {
        renderer: "canvas",
        useDirtyRect: false,
      });

      try {
        const response = await getSalesChart();
        const labels = response.labels ?? [];
        const data = response.data ?? [];

        if (labels.length === 0 || data.length === 0) {
          Chart1.dispose();
          chartRefs.chart1.current.innerHTML = `
            <div style="display:flex; align-items:center; justify-content:center; height:100%; color:#555; font-weight:bold;">
              No data found
            </div>
          `;
          return;
        }

        const option = {
          tooltip: { trigger: "axis", axisPointer: { type: "line" } },
          legend: { bottom: 0, itemWidth: 14, icon: "roundRect" },
          grid: { left: "3%", right: "4%", bottom: "10%", containLabel: true },
          xAxis: { type: "category", data: labels },
          yAxis: { type: "value" },
          series: [
            {
              name: "Sales",
              type: "line",
              color: "#3673d7",
              label: { show: true },
              emphasis: { focus: "series" },
              data: data,
              smooth: true,
              connectNulls: true,
            },
          ],
        };

        Chart1.setOption(option);
      } catch (error) {
        console.error("Error fetching sales chart:", error);
        Chart1.dispose();
      }
    };

    initLineChart();

    // Pie Charts
    const creatorChart = renderPieChart(chartRefs.creator, getCreatorChart);
    const salespersonChart = renderPieChart(
      chartRefs.salesperson,
      getSalesPersonChart
    );
    const salesmanagerChart = renderPieChart(
      chartRefs.salesmanager,
      getSalesMangerChart
    );
    const clientChart = renderPieChart(chartRefs.client, getClientChart);

    // Resize handler
    const handleResize = () => {
      Chart1?.resize();
      creatorChart?.resize();
      salespersonChart?.resize();
      salesmanagerChart?.resize();
      clientChart?.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Chart1?.dispose();
      creatorChart?.dispose();
      salespersonChart?.dispose();
      salesmanagerChart?.dispose();
      clientChart?.dispose();
    };
  }, []);

  useEffect(() => {
    initDropdowns();
    return () => {
      document
        .querySelectorAll('[data-toggle="dropdown"]')
        .forEach((button) => {
          button.replaceWith(button.cloneNode(true));
        });
    };
  }, []);

  return (
    <MasterLayout>
      <div className="px-5 py-4">
        <div className="card-title">
          <h1 className="fs-5 fw-600 lh-1">Dashboard</h1>
        </div>
      </div>

      <div className="px-5">
        <div className="columns is-mobile is-multiline row-dashboard">
          {/* Line Chart */}
          <div className="column is-12">
            <div className="card h-100 w-100">
              <div className="card-header pb-0 is-flex is-justify-content-space-between is-gap-3">
                <div className="card-title mb-0">
                  <h5 className="mb-0">Sales Chart</h5>
                  <div className="tag-list mt-1">
                    {/* <span className="tag tag-gray tag-small">
                      1 Jun - 7 Jun
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div
                  className="theme-chart"
                  ref={chartRefs.chart1}
                  style={{ height: "300px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Creator Chart */}
          <PieChartCard ref={chartRefs.creator} title="Creator" />

          {/* Sales Person Chart */}
          <PieChartCard ref={chartRefs.salesperson} title="Sales Person" />

          {/* Sales Manager Chart */}
          <PieChartCard ref={chartRefs.salesmanager} title="Sales Manager" />

          {/* Client Chart */}
          <PieChartCard ref={chartRefs.client} title="Client" />
        </div>
      </div>
    </MasterLayout>
  );
};

// Reusable Pie Chart Card Component
const PieChartCard = ({ ref, title }) => (
  <div className="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen mb-5">
    <div className="card h-100">
      <div className="card-header pb-0 is-flex is-justify-content-space-between is-gap-3">
        <div className="card-title mb-0">
          <h5 className="mb-0">{title}</h5>
          {/* <div className="tag-list mt-1">
            <span className="tag tag-gray tag-small">1 Jun - 7 Jun</span>
          </div> */}
        </div>
        <DropdownMenu />
      </div>
      <div className="card-body">
        <div
          className="theme-chart"
          ref={ref}
          style={{ height: "300px" }}
        ></div>
      </div>
    </div>
  </div>
);

// Reusable Dropdown
const DropdownMenu = () => (
  <div className="dropdown">
    <button
      className="bg-transparent border-0"
      type="button"
      data-toggle="dropdown"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icon-tabler-dots-vertical"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      </svg>
    </button>
    <div className="dropdown-menu pt-0 pb-1">
      <span className="fs-8 fw-bold dark-3 bg-light px-3 py-2 rounded-top mb-2">
        Select Time Range
      </span>
      <a className="dropdown-item" href="#">
        Today
      </a>
      <a className="dropdown-item" href="#">
        Yesterday
      </a>
      <a className="dropdown-item" href="#">
        This Week
      </a>
    </div>
  </div>
);

export default Dashboard;
