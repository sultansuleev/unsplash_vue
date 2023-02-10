<template>
	<div class="favourites">
		<div class="container favourites__container">
			<h1>Избранное</h1>
			<galery-image-grid v-if="savedImages.length > 0" :images="savedImages" />
			<h1 v-else>Список избранных пуст</h1>
		</div>
	</div>
</template>

<style lang="scss">
@import './Favourites.view.scss';
</style>

<script>
import { mapState } from 'vuex'

import GaleryImageGrid from '@/components/ImageGrid/ImageGrid.component.vue'

export default {
	name: 'FavouritesView',
	components: {
		GaleryImageGrid,
	},
	computed: {
		...mapState({
			savedImages: state => state.images.savedImages,
		}),
	},
}
</script>
