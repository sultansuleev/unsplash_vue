<template>
	<router-link :to="{ name: 'details', params: { id: image.id } }">
		<div class="image-card" :class="classNames">
			<img :src="image.urls.regular" alt="image.alt_description" />
		</div>
	</router-link>
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
			required: false,
		},
		classNames: {
			type: String,
			required: false,
		},
	},
}
</script>
