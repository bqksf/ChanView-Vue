<template>
	<div>

		<a-row type="flex" :gutter="24">

			<a-col :span="24" :md="24" class="mb-24">

				<CardNewsInfo></CardNewsInfo>

			</a-col>
		</a-row>

	</div>
</template>

<script>

	import CardNewsInfo from "../components/Cards/CardNewsInfo.vue";


	export default ({
		components: {
      CardNewsInfo,
		},
		data() {
			return {
			}
		},

	})

</script>

<style lang="scss">
</style>