<template>
	<div class="image-grid">
		<galery-image-card
			v-for="(image, index) in images"
			:key="index"
			:image="image"
			:class-names="'thumb'"
		/>
	</div>
</template>

<style lang="scss">
@import './ImageGrid.component.scss';
</style>

<script>
import GaleryImageCard from '@/components/ImageCard/ImageCard.component.vue'

export default {
	name: 'GaleryImageGrid',
	props: {
		images: {
			type: [Array],
			required: true,
		},
	},
	components: {
		GaleryImageCard,
	},
}
</script>
