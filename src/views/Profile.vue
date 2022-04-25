<template>
	<div>

		<div class="profile-nav-bg" style="background-image: url('images/bg-profile.jpg')"></div>

		<a-card :bordered="false" class="card-profile-head" :bodyStyle="{padding: 0,}">
			<template #title>
				<a-row type="flex" align="middle">
					<a-col :span="24" :md="12" class="col-info">
						<div class="avatar-info">
							<h4 class="font-semibold m-0">个人中心</h4>
							<p>在此可以修改您的个人资料</p>
						</div>
					</a-col>
					<a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
            <router-link to="/users/edit" class="btn btn-primary">
              <a-button>
                修改密码
              </a-button>
            </router-link>

          </a-col>
				</a-row>
			</template>
		</a-card>
		<!-- User Profile Card -->

<!--		<a-row type="flex" :gutter="24">-->

			<!-- Platform Settings Column -->
<!--			<a-col :span="24" :md="12" class="mb-24">-->

				<!-- Platform Settings Card -->
<!--				<CardPlatformSettings></CardPlatformSettings>-->
				<!-- / Platform Settings Card -->

<!--			</a-col>-->
			<!-- / Platform Settings Column -->

			<!-- Profile Information Column -->
<!--			<a-col :span="24" :md="12" class="mb-24">-->

				<!-- Profile Information Card -->
<!--				<CardProfileInformation></CardProfileInformation>-->
				<!-- / Profile Information Card -->

<!--			</a-col>-->
			<!-- / Profile Information Column -->

<!--		</a-row>-->

    <a-row type="flex" :gutter="24">
    <!-- Your Transactions Column -->
    <a-col :span="24" :md="24" class="mb-24">

      <!-- Your Transactions Card -->
      <CardTransactions
          :data="items"
      ></CardTransactions>
      <!-- / Your Transactions Card -->

    </a-col>
    <!-- / Your Transactions Column -->
    </a-row>
	</div>
</template>

<script>

	import CardPlatformSettings from "../components/Cards/CardPlatformSettings"
	import CardProfileInformation from "../components/Cards/CardProfileInformation"
  import CardTransactions from "../components/Cards/CardTransactions"


  // "Your Transactions" list data.
  const transactionsData = [
    {
      title: "Netflix",
      datetime: "27 March 2021, at 12:30 PM",
      amount: "2,500",
      type: -1,// 0 is for pending, 1 is for deposit, -1 is for withdrawal.
      status: 'danger',
    },
    {
      title: "Apple",
      datetime: "27 March 2021, at 04:30 AM",
      amount: "2,000",
      type: 1,
      status: 'success',
    },
    {
      title: "Stripe",
      datetime: "26 March 2021, at 12:30 AM",
      amount: "750",
      type: 1,
      status: 'success',
    },
    {
      title: "HubSpot",
      datetime: "26 March 2021, at 11:30 AM",
      amount: "1,050",
      type: 1,
      status: 'success',
    },
    {
      title: "Creative Tim",
      datetime: "26 March 2021, at 07:30 AM",
      amount: "2,400",
      type: 1,
      status: 'success',
    },
    {
      title: "Webflow",
      datetime: "26 March 2021, at 04:00 AM",
      amount: "Pending",
      type: 0,
      status: 'warning',
    },
  ];

	export default ({
		components: {
			CardPlatformSettings,
			CardProfileInformation,
      CardTransactions,
		},
		data() {
			return {
				// Active button for the "User Profile" card's radio button group.
				profileHeaderBtns: 'overview',

        // Associating "Your Transactions" list data with its corresponding property.
        transactionsData,

        items: [],
			}
		},
    methods:{
      async fetch(){
        const res = await this.$http.get("rest/order/getOrder");
        this.items = res.data;
        // await this.$http.post("rest/datas", {
        //   name: "other",
        //   data: {
        //   }
        // });
      }
    },
    created() {
      this.fetch();
    }
	})

</script>

<style lang="scss">
</style>