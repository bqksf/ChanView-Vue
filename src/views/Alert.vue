<!-- 
	This is the billing page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
	<div>

		<a-row type="flex" :gutter="24">

			<!-- Billing Information Column -->
			<a-col :span="24" :md="24" class="mb-24">

				<!-- Billing Information Card -->
				<CardBillingInfo></CardBillingInfo>
				<!-- / Billing Information Card -->

			</a-col>
			<!-- Billing Information Column -->
		</a-row>

    <!-- Table & Timeline -->
    <a-row :gutter="24" type="flex">

      <!-- Timeline -->
      <a-col :span="24" :md="24" class="mb-24">



      </a-col>
      <!-- / Timeline -->
    </a-row>
    <!-- / Table & Timeline -->

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