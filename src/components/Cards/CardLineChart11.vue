<template>

	<a-card :bordered="false" class="dashboard-bar-line header-solid">
		<template #title>
			<h6>Gas费中位数2</h6>
			<p>更新于 {{updateTime | date("MM-DD HH:mm:ss")}}</p>
		</template>
		<template #extra>
			<a-badge color="primary" class="badge-dot-primary" text="Traffic" />
			<a-badge color="primary" class="badge-dot-secondary" text="Sales" />
		</template>
    <canvas ref="chart" style="height: 310px"></canvas>
	</a-card>

</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

	export default ({
		data() {
			return {
        chart: null,
        updateTime: '',
				lineChartData: {
          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "Mobile apps",
            tension: 0.4,
            pointRadius: 0,
            borderColor: "#FADB14",
            backgroundColor: 'rgba(220,195,134,0.22)',
            borderWidth: 3,
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            maxBarThickness: 6,
            fill: true
          }],
        },
			}
		},
    mounted () {

      let ctx = this.$refs.chart.getContext("2d");

      this.chart = new Chart(ctx, {
        type: "line",
        data: this.lineChartData,
        options: {
          layout: {
            padding: {
              top: 30,
              right: 15,
              left: 10,
              bottom: 5,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          interaction: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            y: {
              grid: {
                display: true,
                color: "rgba(0, 0, 0, .2)",
                zeroLineColor: "#000000",
                borderDash: [6],
                borderDashOffset: [6],
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 1000,
                display: true,
                color: "#8C8C8C",
                font: {
                  size: 14,
                  lineHeight: 1.8,
                  weight: '600',
                  family: "Open Sans",
                },
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                display: true,
                color: "#8C8C8C",
                font: {
                  size: 14,
                  lineHeight: 1.5,
                  weight: '600',
                  family: "Open Sans",
                },
              },
            },
          },
        }
      });
      this.fetch();
    },
    // Right before the component is destroyed,
    // also destroy the chart.
    beforeDestroy: function () {
      this.chart.destroy() ;
    },
    methods:{
      async fetch(){
        const res = await this.$http.get("rest/chart/6251b4290ac5f15d28214c77");
        this.chart.data.labels = res.data.col;
        this.chart.data.datasets[0].data = res.data.data;
        // 更新时间
        this.updateTime = res.data.updateAt;
        this.chart.update();
      }
    },
  })

</script>