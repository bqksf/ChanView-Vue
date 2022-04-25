<template>

	<!-- Your Transactions Card -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{paddingTop: 0, paddingBottom: '16px' }">
		<template #title>
			<h6 class="font-semibold m-0">账单记录</h6>
		</template>
<!--		<p slot="extra" class="card-header-date">-->
<!--			<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--				<path class="fill-muted" fill-rule="evenodd" clip-rule="evenodd" d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z" fill="#111827"/>-->
<!--			</svg>-->
<!--			<span>23 - 30 March 2021</span>-->
<!--		</p>-->
		<a-list
			class="transactions-list"
			item-layout="horizontal"
			:split="false"
			:data-source="data"
		>
			<a-list-item slot="renderItem" slot-scope="item">
				<template v-if="item.period">
					<h6>{{ item.period }}</h6>
				</template>
				<template v-else>
					<a-list-item-meta
						title="购买VIP计划"
						:description="item.createdAt | date('YYYY-MM-DD HH:mm:ss')"
					>
            <a-avatar size="small"  slot="avatar" style="background-color: #FEE9EA">
              <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="fill-danger" fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 9.44772 5.44772 9 6 9L14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11L6 11C5.44772 11 5 10.5523 5 10Z"/>
              </svg>
            </a-avatar>
					</a-list-item-meta>
					<div class="amount">
						<span class="text-danger">
							- ${{ item.money }}
						</span>
					</div>
				</template>
			</a-list-item>
		</a-list>
	</a-card>
	<!-- / Your Transactions Card -->

</template>

<script>

	export default ({
		props: {
			data: {
				type: Array,
				default: () => [],
			},
		},
  })

</script>