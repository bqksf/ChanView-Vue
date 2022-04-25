<template>

	<!-- Active Users Card -->
	<a-card :bordered="false" class="dashboard-bar-chart">
		<chart-bar :height="220" :data="barChartData"></chart-bar>

		<div class="card-title">
			<h6>关键词统计</h6>
			<p>出现频率最高 {{name}}<span class="text-success">{{num}}</span></p>
		</div>
	</a-card>
	<!-- Active Users Card -->

</template>

<script>

	// Bar chart for "Active Users" card.
	import ChartBar from '../Charts/ChartBar' ;

	export default ({
		components: {
			ChartBar,
		},
		data() {
			return {
				// Data for bar chart.
				barChartData: {
					labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
					datasets: [{
						label: "Sales",
						backgroundColor: '#fff',
						borderWidth: 0,
						borderSkipped: false,
						borderRadius: 6,
						data: [850, 600, 500, 620, 900, 500, 900, 630, 900],
						maxBarThickness: 20,
					}, ],
				},
        name: null,
        num: null,
			}
		},
    methods:{
      async getData(){
        const res = await this.$http.get("rest/segmentation/getWord");
        this.name = res.data.col[8];
        this.num = res.data.data[8];
        }
    },
    created() {
      this.getData();
    }
  })

</script>