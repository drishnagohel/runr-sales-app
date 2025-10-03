/**Chart 1**/
var dom = document.getElementById("chart-1");
var Chart1 = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {
    bottom: 0,
    itemWidth: 14,
    icon: "roundRect",
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "10%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["1 Feb", "2 Feb", "3 Feb", "4 Feb", "5 Feb", "6 Feb", "7 Feb"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Untouched",
      type: "bar",
      stack: "total",
      color: "#dfe6e9",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [15, 17, 19, 12, 16, 14, 18],
    },
    {
      name: "Attempted",
      type: "bar",
      stack: "total",
      color: "#74b9ff",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [28, 23, 27, 21, 25, 23, 24],
    },
    {
      name: "Validated",
      type: "bar",
      stack: "total",
      color: "#a29bfe",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [12, 14, 16, 11, 17, 15, 21],
    },
    {
      name: "Unqualified",
      type: "bar",
      stack: "total",
      color: "#ff7675",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [47, 45, 44, 68, 30, 32, 34],
    },
  ],
};

if (option && typeof option === "object") {
  Chart1.setOption(option);
}

window.addEventListener("resize", Chart1.resize);
/**End Chart 1**/

/**Chart 2**/
var dom = document.getElementById("chart-2");
var Chart2 = echarts.init(dom, null, {
  renderer: "svg",
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "horizontal",
    bottom: 0,
    itemWidth: 14,
    icon: "roundRect",
  },
  series: [
    {
      name: "",
      type: "pie",
      radius: ["40%", "60%"],
      data: [
        { value: 15, name: "Direct" },
        { value: 20, name: "Customer Reference" },
        { value: 10, name: "Employee Reference" },
        { value: 55, name: "Channel Partner" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
        },
      },
    },
  ],
  color: ["#dfe6e9", "#74b9ff", "#a29bfe", "#ff7675"],
  label: {
    formatter: "{b}: {@1 Feb} ({d}%)",
  },
};
if (option && typeof option === "object") {
  Chart2.setOption(option);
}

window.addEventListener("resize", Chart2.resize);
/**End Chart 2**/

/**Chart 3**/
var dom = document.getElementById("chart-3");
var Chart3 = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  toolbox: {
    feature: {
      dataView: { show: false, readOnly: false },
      magicType: { show: false, type: ["line", "bar"] },
      restore: { show: false },
      saveAsImage: { show: false },
    },
  },
  legend: {
    data: [
      "First SV",
      "Repeat SV",
      "Scheduled SV",
      "Direct SV",
    ],
  },
  xAxis: [
    {
      type: "category",
      data: ["1 Feb", "2 Feb", "3 Feb", "4 Feb", "5 Feb", "6 Feb", "7 Feb"],
      axisPointer: {
        type: "shadow",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "Line",
      //min: 0,
      //max: 120,
      //interval: 30,
      axisLabel: {
        formatter: "{value}",
      },
    },
    {
      type: "value",
      name: "Bar",
      //min: 0,
      //max: 60,
      //interval: 10,
      axisLabel: {
        formatter: "{value}",
      },
    },
  ],
  series: [
    {
      name: "First SV",
      type: "bar",
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value;
        },
      },
      data: [58, 49, 68, 56, 48, 59, 44],
    },
    {
      name: "Repeat SV",
      type: "bar",
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value;
        },
      },
      data: [18, 25, 30, 19, 15, 23, 15],
    },
    {
      name: "Scheduled SV",
      type: "line",
      color: "#C4DBEE",
      tooltip: {
        valueFormatter: function (value) {
          return value + "";
        },
      },
      data: [26, 5, 12, 7, 6, 10, 7],
    },
    {
      name: "Direct SV",
      type: "line",
      color: "#EAB2A4",
      tooltip: {
        valueFormatter: function (value) {
          return value + "";
        },
      },
      data: [3, 2, 3, 2, 2, 4, 0],
    },
  ],
  color: ["#dfe6e9", "#74b9ff", "#a29bfe", "#ff7675"],
};

if (option && typeof option === "object") {
  Chart3.setOption(option);
}

window.addEventListener("resize", Chart3.resize);
/**End Chart 3**/