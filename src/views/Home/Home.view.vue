<template>
	<div class="home">
		<galery-search />

		<galery-loader v-if="isLoading" />

		<div class="container home__container">
			<galery-image-grid v-if="images" :images="images" />
		</div>
	</div>
</template>

<style lang="scss">
@import './Home.view.scss';
</style>

<script>
import { mapState } from 'vuex'

import GaleryImageGrid from '@/components/ImageGrid/ImageGrid.component.vue'
import GaleryLoader from '@/components/Loader/Loader.component'
import GalerySearch from '@/components/Search/Search.component.vue'
import { actionTypes } from '@/store/modules/images'

export default {
	name: 'HomeView',
	components: {
		GaleryImageGrid,
		GalerySearch,
		GaleryLoader,
	},
	computed: {
		...mapState({
			images: state => state.images.images,
			isLoading: state => state.images.isLoading,
		}),
	},
	mounted() {
		this.$store.dispatch(actionTypes.getRandomImages)
	},
}
</script>
