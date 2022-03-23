<template>

	<a-card :bordered="false" class="dashboard-bar-line header-solid">
		<template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <h6 class="font-semibold m-0">前20名处理者燃料费对应平台排名</h6>
        </a-col>
        <a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
          <p>更新于 33分钟前</p>
        </a-col>
      </a-row>
		</template>
		<chart-area :height="310" :data="lineChartData"></chart-area>
	</a-card>

</template>

<script>

	// Bar chart for "Active Users" card.
	import ChartArea from '../Charts/ChartArea' ;

	export default ({
		components: {
      ChartArea,
		},
		data() {
			return {

				// Data for line chart.
				lineChartData: {
					labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets: [{
						label: "Mobile apps",
						borderColor: "#1890FF",
						data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            fill: 1
					},
					{
						label: "Websites",
						borderColor: "#B37FEB",
						data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            fill: -1
					}],
				},
			}
		},
	})

</script>