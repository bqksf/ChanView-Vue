<template>

	<!-- Projects Table Column -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{padding: 0,}">
		<template #title>
			<a-row type="flex" align="middle">
				<a-col :span="24" :md="12">
					<h6 class="font-semibold m-0" >{{title}}</h6>
				</a-col>
				<a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
					<p>更新于 33分钟前</p>
				</a-col>
			</a-row>
		</template>
		<a-table :columns="columns" :data-source="data" size="small">

      <template slot="company" slot-scope="company">
        <h6 class="m-0">
          {{ company.name }}
        </h6>
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
      title: {
        type: String,
        default: null
      }
		},
		data() {
			return {
				// Active button for the "Projects" table's card header radio button group.
				projectHeaderBtns: 'all',
			}
		},
	})

</script>