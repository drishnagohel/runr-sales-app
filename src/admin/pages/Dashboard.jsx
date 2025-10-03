"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import MasterLayout from "../components/layout/MasterLayout";
import { initDropdowns } from "../scripts/dropdown";

const Dashboard = () => {
  const weeklyChartRef = useRef(null);
  const sourceChartRef = useRef(null);
  const salespersonChartRef = useRef(null);
  const salesmangerChartRef = useRef(null);
  const clientChartRef = useRef(null);

  useEffect(() => {
    // Weekly Performance Chart (Bar)
    let weeklyChart;
    if (weeklyChartRef.current) {
      weeklyChart = echarts.init(weeklyChartRef.current, null, {
        renderer: "canvas",
        useDirtyRect: false,
      });

      weeklyChart.setOption({
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        legend: { bottom: 0, itemWidth: 14, icon: "roundRect" },
        grid: { left: "3%", right: "4%", bottom: "10%", containLabel: true },
        xAxis: {
          type: "category",
          data: ["1 Feb", "2 Feb", "3 Feb", "4 Feb", "5 Feb", "6 Feb", "7 Feb"],
        },
        yAxis: { type: "value" },
        series: [
          { name: "Untouched", type: "bar", stack: "total", color: "#dfe6e9", label: { show: true }, data: [15,17,19,12,16,14,18] },
          { name: "Attempted", type: "bar", stack: "total", color: "#74b9ff", label: { show: true }, data: [28,23,27,21,25,23,24] },
          { name: "Validated", type: "bar", stack: "total", color: "#a29bfe", label: { show: true }, data: [12,14,16,11,17,15,21] },
          { name: "Unqualified", type: "bar", stack: "total", color: "#ff7675", label: { show: true }, data: [47,45,44,68,30,32,34] },
        ],
      });
    }

    // Creator Chart
    let sourceChart;
    if (sourceChartRef.current) {
      sourceChart = echarts.init(sourceChartRef.current, null, {
        renderer: "svg", // SVG renderer
        useDirtyRect: false,
      });

      const option = {
        tooltip: { trigger: "item" },
        legend: { orient: "horizontal", bottom: 0, itemWidth: 14, icon: "roundRect" },
        series: [
          {
            name: "Source",
            type: "pie",
            radius: ["40%", "60%"],
            data: [
              { value: 15, name: "Direct" },
              { value: 20, name: "Customer Reference" },
              { value: 10, name: "Employee Reference" },
              { value: 55, name: "Channel Partner" },
            ],
            emphasis: {
              itemStyle: { shadowBlur: 10, shadowOffsetX: 0 },
            },
          },
        ],
        color: ["#dfe6e9", "#74b9ff", "#a29bfe", "#ff7675"],
        label: { formatter: "{b}: {d}%" },
      };

      sourceChart.setOption(option);
    }
    // sales chart
    let SalespersonChart;
    if (salespersonChartRef.current) {
      SalespersonChart = echarts.init(salespersonChartRef.current, null, {
        renderer: "svg", // SVG renderer
        useDirtyRect: false,
      });

      const option = {
        tooltip: { trigger: "item" },
        legend: { orient: "horizontal", bottom: 0, itemWidth: 14, icon: "roundRect" },
        series: [
          {
            name: "Sales",
            type: "pie",
            radius: ["40%", "60%"],
            data: [
              { value: 15, name: "Direct" },
              { value: 20, name: "Customer Reference" },
              { value: 10, name: "Employee Reference" },
              { value: 55, name: "Channel Partner" },
            ],
            emphasis: {
              itemStyle: { shadowBlur: 10, shadowOffsetX: 0 },
            },
          },
        ],
        color: ["#dfe6e9", "#74b9ff", "#a29bfe", "#ff7675"],
        label: { formatter: "{b}: {d}%" },
      };

      SalespersonChart.setOption(option);
    }
    // sales manager chart
    let SalesmangerChart;
    if (salesmangerChartRef.current) {
      SalesmangerChart = echarts.init(salesmangerChartRef.current, null, {
        renderer: "svg", // SVG renderer
        useDirtyRect: false,
      });

      const option = {
        tooltip: { trigger: "item" },
        legend: { orient: "horizontal", bottom: 0, itemWidth: 14, icon: "roundRect" },
        series: [
          {
            name: "Sales",
            type: "pie",
            radius: ["40%", "60%"],
            data: [
              { value: 15, name: "Direct" },
              { value: 20, name: "Customer Reference" },
              { value: 10, name: "Employee Reference" },
              { value: 55, name: "Channel Partner" },
            ],
            emphasis: {
              itemStyle: { shadowBlur: 10, shadowOffsetX: 0 },
            },
          },
        ],
        color: ["#dfe6e9", "#74b9ff", "#a29bfe", "#ff7675"],
        label: { formatter: "{b}: {d}%" },
      };

      SalesmangerChart.setOption(option);
    }
    let ClientChart;
    if (clientChartRef.current) {
      ClientChart = echarts.init(clientChartRef.current, null, {
        renderer: "svg", // SVG renderer
        useDirtyRect: false,
      });

      const option = {
        tooltip: { trigger: "item" },
        legend: { orient: "horizontal", bottom: 0, itemWidth: 14, icon: "roundRect" },
        series: [
          {
            name: "Sales",
            type: "pie",
            radius: ["40%", "60%"],
            data: [
              { value: 15, name: "Direct" },
              { value: 20, name: "Customer Reference" },
              { value: 10, name: "Employee Reference" },
              { value: 55, name: "Channel Partner" },
            ],
            emphasis: {
              itemStyle: { shadowBlur: 10, shadowOffsetX: 0 },
            },
          },
        ],
        color: ["#dfe6e9", "#74b9ff", "#a29bfe", "#ff7675"],
        label: { formatter: "{b}: {d}%" },
      };

      ClientChart.setOption(option);
    }

    const handleResize = () => {
      weeklyChart?.resize();
      sourceChart?.resize();
      SalespersonChart?.resize();
      SalesmangerChart?.resize();
      ClientChart?.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      weeklyChart?.dispose();
      sourceChart?.dispose();
      SalespersonChart?.dispose();
      SalesmangerChart?.dispose();
      ClientChart?.dispose();
    };
  }, []);

  useEffect(() => {
    initDropdowns();
    return () => {
      document.querySelectorAll('[data-toggle="dropdown"]').forEach((button) => {
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
          {/* Weekly Performance Chart */}
          <div className="column is-12">
            <div className="card h-100 w-100">
              <div className="card-header pb-0 is-flex is-justify-content-space-between is-gap-3">
                <div className="card-title mb-0">
                  <h5 className="mb-0">Day Wise</h5>
                  <div className="tag-list mt-1">
                    <span className="tag tag-gray tag-small">1 Jun - 7 Jun</span>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="bg-transparent border-0" type="button" data-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-dots-vertical">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                  </button>
                  <div className="dropdown-menu pt-0 pb-1">
                    <span className="fs-8 fw-bold dark-3 bg-light px-3 py-2 rounded-top mb-2">Select Time Range</span>
                    <a className="dropdown-item" href="#">Today</a>
                    <a className="dropdown-item" href="#">Yesterday</a>
                    <a className="dropdown-item" href="#">This Week</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="theme-chart" ref={weeklyChartRef} style={{ height: "300px" }}></div>
              </div>
            </div>
          </div>

          {/* Creator Chart */}
          <div className="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen">
            <div className="card h-100">
              <div className="card-header pb-0 is-flex is-justify-content-space-between is-gap-3">
                <div className="card-title mb-0">
                  <h5 className="mb-0">Creator</h5>
                  <div className="tag-list mt-1">
                    <span className="tag tag-gray tag-small">1 Jun - 7 Jun</span>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="bg-transparent border-0" type="button" data-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-dots-vertical">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                  </button>
                  <div className="dropdown-menu pt-0 pb-1">
                    <span className="fs-8 fw-bold dark-3 bg-light px-3 py-2 rounded-top mb-2">Select Time Range</span>
                    <a className="dropdown-item" href="#">Today</a>
                    <a className="dropdown-item" href="#">Yesterday</a>
                    <a className="dropdown-item" href="#">This Week</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="theme-chart" ref={sourceChartRef} style={{ height: "300px" }}></div>
              </div>
            </div>
          </div>
          {/* Sales Person Chart */}
          <div className="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen">
            <div className="card h-100">
              <div className="card-header pb-0 is-flex is-justify-content-space-between is-gap-3">
                <div className="card-title mb-0">
                  <h5 className="mb-0">Sales Person</h5>
                  <div className="tag-list mt-1">
                    <span className="tag tag-gray tag-small">1 Jun - 7 Jun</span>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="bg-transparent border-0" type="button" data-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-dots-vertical">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                  </button>
                  <div className="dropdown-menu pt-0 pb-1">
                    <span className="fs-8 fw-bold dark-3 bg-light px-3 py-2 rounded-top mb-2">Select Time Range</span>
                    <a className="dropdown-item" href="#">Today</a>
                    <a className="dropdown-item" href="#">Yesterday</a>
                    <a className="dropdown-item" href="#">This Week</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="theme-chart" ref={salespersonChartRef} style={{ height: "300px" }}></div>
              </div>
            </div>
          </div>
          {/* Sourcing Manager Chart */}
          <div className="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen">
            <div className="card h-100">
              <div className="card-header pb-0 is-flex is-justify-content-space-between is-gap-3">
                <div className="card-title mb-0">
                  <h5 className="mb-0">Sales Manager</h5>
                  <div className="tag-list mt-1">
                    <span className="tag tag-gray tag-small">1 Jun - 7 Jun</span>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="bg-transparent border-0" type="button" data-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-dots-vertical">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                  </button>
                  <div className="dropdown-menu pt-0 pb-1">
                    <span className="fs-8 fw-bold dark-3 bg-light px-3 py-2 rounded-top mb-2">Select Time Range</span>
                    <a className="dropdown-item" href="#">Today</a>
                    <a className="dropdown-item" href="#">Yesterday</a>
                    <a className="dropdown-item" href="#">This Week</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="theme-chart" ref={salesmangerChartRef} style={{ height: "300px" }}></div>
              </div>
            </div>
          </div>
          {/* Client Chart */}
          <div className="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen">
            <div className="card h-100">
              <div className="card-header pb-0 is-flex is-justify-content-space-between is-gap-3">
                <div className="card-title mb-0">
                  <h5 className="mb-0">Client</h5>
                  <div className="tag-list mt-1">
                    <span className="tag tag-gray tag-small">1 Jun - 7 Jun</span>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="bg-transparent border-0" type="button" data-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-dots-vertical">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                  </button>
                  <div className="dropdown-menu pt-0 pb-1">
                    <span className="fs-8 fw-bold dark-3 bg-light px-3 py-2 rounded-top mb-2">Select Time Range</span>
                    <a className="dropdown-item" href="#">Today</a>
                    <a className="dropdown-item" href="#">Yesterday</a>
                    <a className="dropdown-item" href="#">This Week</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="theme-chart" ref={clientChartRef} style={{ height: "300px" }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </MasterLayout>
  );
};

export default Dashboard;
