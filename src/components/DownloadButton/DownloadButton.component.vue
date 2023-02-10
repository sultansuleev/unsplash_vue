<template>
	<button class="btn download-btn" @click="download">
		<img src="@/assets/images/download.svg" alt="" />
		&nbsp; Download
	</button>
</template>

<style lang="scss">
@import './DownloadButton.component.scss';
</style>

<script>
export default {
	name: 'GaleryDownloadButton',
	props: {
		classNames: {
			type: String,
			required: false,
		},
	},
	methods: {
		download() {
			this.$emit('onClick')
		},
	},
}
</script>
