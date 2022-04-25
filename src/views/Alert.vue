<template>
	<div>

		<a-row type="flex" :gutter="24">

			<a-col :span="24" :md="24" class="mb-24">

				<CardBillingInfo></CardBillingInfo>

			</a-col>
		</a-row>

	</div>
</template>

<script>

	import CardBillingInfo from "../components/Cards/CardBillingInfo"


	export default ({
		components: {
			CardBillingInfo,
		},
		data() {
			return {
			}
		},
	})

</script>

<style lang="scss">
</style>