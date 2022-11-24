
<template>
  <div>
    <b-table striped hover :items="house" :fields="fields"></b-table>
    <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";
// import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'
import { mapState } from "vuex";
// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   LinearScale,
//   CategoryScale,
//   PointElement
// );
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement);
const houseStore = "houseStore";
export default {
  name: "AptList",

  computed: {
    ...mapState(houseStore, ["house"]),
  },
  components: {
    LineChartGenerator,
  },
  updated() {
    this.chartData.labels = [];
    this.chartData.datasets[0].data = [];
    console.log("fdsafdasf",this.house);
    for (let i = 0; i < this.house.length; i++) {
      const day =`${this.house[i].dealYear} / ${this.house[i].dealMonth}`;
      this.chartData.labels.push(day);
      this.chartData.datasets[0].data.push(this.house[i].dealAmount);
    }
  },

  //   created() {
  //   this.chartData.labels = [];
  //   this.chartData.datasets[0].data = [];

  //   for (let i = 0; i < this.houseHistory.length; ++i) {
  //     const day = ${this.houseHistory[i].dealYear} / ${this.houseHistory[i].dealMonth};
  //     this.chartData.labels.push(day);
  //     this.chartData.datasets[0].data.push(this.houseHistory[i].dealAmount);
  //   }
  // },
 props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      fields: [
         { key: "dealAmount", label: "거래 금액" },
        { key: "dealYear", label: "거래 연도" },
        { key: "dealMonth", label: "거래 월" },
        { key: "dealDay", label: "거래 일" },
        { key: "area", label: "평 수" },
        { key: "floor", label: "층 수" },
      ],
      chartData: {
        labels: [],
        datasets: [
          {
            label: "최근 거래가격 추이",
            backgroundColor: "#b3e5fc",
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>