<template>
	<div class="image-card">
		<img :src="image.urls.regular" alt="image.alt_description" />
	</div>
</template>

<style lang="scss">
@import './ImageCard.component.scss';
</style>

<script>
export default {
	name: 'GaleryImageCard',
	props: {
		image: {
			type: Object,
			required: true,
		},
	},
}
</script>
