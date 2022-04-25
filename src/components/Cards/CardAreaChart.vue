<template>

	<a-card :bordered="false" class="dashboard-bar-line header-solid">
		<template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <h6 class="font-semibold m-0">矿工历史挖掘分析</h6>
        </a-col>
        <a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
          <p>更新于 {{updateTime | date("MM-DD HH:mm:ss")}}</p>
        </a-col>
      </a-row>
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
        updateTime: null,
				// Data for line chart.
				lineChartData: {
					labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets: [{
						label: "数量",
						borderColor: "#1890FF",
						data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            fill: 1
					},
					{
						label: "奖励",
						borderColor: "#B37FEB",
						data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            fill: -1
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
            filler: {
              propagate: false
            },
            'samples-filler-analyser': {
              target: 'chart-analyser'
            }
          },
          interaction: {
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
      this.fetch()
    },
    // Right before the component is destroyed,
    // also destroy the chart.
    beforeDestroy: function () {
      this.chart.destroy() ;
    },
    methods:{
      async fetch(){
        const res = await this.$http.get("rest/chart/6251887136e5c4ee535e278c");
        this.chart.data.labels = res.data.col;
        this.chart.data.datasets[0].data = res.data.data1;
        this.chart.data.datasets[1].data = res.data.data2;
        // 更新时间
        this.updateTime = res.data.updateAt;
        this.chart.update();
      }
    },
	})

</script>