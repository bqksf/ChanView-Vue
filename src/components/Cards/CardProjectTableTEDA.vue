<template>

	<!-- Projects Table Column -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{padding: 0,}">
		<template #title>
			<a-row type="flex" align="middle">
				<a-col :span="24" :md="12">
					<h6 class="font-semibold m-0">ETH2 锁仓地址排名</h6>
				</a-col>
				<a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
					<p>更新于 33分钟前</p>
				</a-col>
			</a-row>
		</template>
		<a-table :columns="columns" :data-source="data" size="small" :pagination="{'show-total':(total, range) => `目前${range[0]}-${range[1]} 总${total}个`}">

      <template slot="company" slot-scope="company">
        <h6 class="m-0">
          <img :src="company.logo" width="25" style="margin-right: 10px;">
          {{ company.name }}
        </h6>
      </template>

			<template slot="completion" slot-scope="completion">
				<div class="progress-right">
					<div class="text-sm font-semibold text-muted text-right pr-10" style="display: block;min-width: 30px;">{{ completion }}</div>
					<a-progress class="m-0" :percent="completion" :show-info="false" size="small" style="min-width: 50px;" />
				</div>
			</template>

		</a-table>
	</a-card>
	<!-- / Projects Table Column -->

</template>

<script>

	export default ({
		props: {
			data: {
				type: Array,
				default: () => [],
			},
			columns: {
				type: Array,
				default: () => [],
			},
		},
		data() {
			return {
				// Active button for the "Projects" table's card header radio button group.
				projectHeaderBtns: 'all',
			}
		},
	})

</script>