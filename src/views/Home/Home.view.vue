<template>
	<div class="home">
		<galery-search />
		<div class="container home__container">
			<galery-image-grid v-if="images" :images="images || []" />
		</div>
	</div>
</template>

<style lang="scss">
@import './Home.view.scss';
</style>

<script>
import { mapState } from 'vuex'

import GaleryImageGrid from '@/components/ImageGrid/ImageGrid.component.vue'
import GalerySearch from '@/components/Search/Search.component.vue'
import { actionTypes } from '@/store/modules/images'

export default {
	name: 'HomeView',
	components: {
		GaleryImageGrid,
		GalerySearch,
	},
	computed: {
		...mapState({
			images: state => state.images.images,
		}),
	},
	mounted() {
		this.$store.dispatch(actionTypes.getRandomImages)
	},
}
</script>
