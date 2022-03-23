<template>

	<a-card :bordered="false" class="dashboard-bar-line header-solid">
		<template #title>
			<h6>ETH 锁仓统计</h6>
			<p>更新于 2小时前</p>
		</template>
		<chart-line :height="310" :data="lineChartData"></chart-line>
	</a-card>

</template>

<script>

	// Bar chart for "Active Users" card.
	import ChartLine from '../Charts/ChartLine' ;

	export default ({
		components: {
			ChartLine,
		},
		data() {
			return {

				// Data for line chart.
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
	})

</script>