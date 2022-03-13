<template>

	<!-- Platform Settings Card -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{paddingTop: 0, paddingBottom: 0 }">
		<template #title>
			<h6 class="font-semibold m-0">系统设置</h6>
		</template>
		<ul class="list settings-list">
			<li>
				<h6 class="list-header text-sm text-muted">通知</h6>
			</li>
			<li>
				<a-switch v-model="emailForFollows" />
				<span>触发提醒规则时发邮件通知</span>
			</li>
			<li>
				<a-switch v-model="emailForAnswers"/>
				<span>平台更新时发邮件通知</span>
			</li>
			<li>
				<a-switch v-model="emailForMentions" />
				<span>有重大行情时发邮件通知</span>
			</li>
		</ul>
	</a-card>
	<!-- / Platform Settings Card -->

</template>

<script>

	export default ({
		data() {
			return {
				// Binded model property for "Platform Settings" switch button for "Email ... follows me" .
				emailForFollows: true,

				// Binded model property for "Platform Settings" switch button for "Email ... answers me" .
				emailForAnswers: false,

				// Binded model property for "Platform Settings" switch button for "Email ... mentions me" .
				emailForMentions: true,

			}
		},
	})

</script>