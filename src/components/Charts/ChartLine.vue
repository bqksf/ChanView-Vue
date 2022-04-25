<template>
	<div>
		<canvas ref="chart" :style="{'height': height + 'px'}"></canvas>
	</div>
</template>

<script>
	import { Chart, registerables } from 'chart.js';
	Chart.register(...registerables);

	export default ({
		props: [
			'data',
			'height',
		],
		data(){
			return {
				chart: null,
			} ;
		},
    computed: {
      chartData: function() {
        return this.data;
      }
    },
		mounted () { 
    		let ctx = this.$refs.chart.getContext("2d");

			this.chart = new Chart(ctx, {
				type: "line",
				data: this.chartData,
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
		},
		// Right before the component is destroyed,
		// also destroy the chart.
		beforeDestroy: function () {
			this.chart.destroy() ;
		},
    watch: {
      data: function() {
        //this.renderChart(this.data, this.options);
        this.chart.update();
      }
    }
	})

</script>

<style lang="scss" scoped>
</style>