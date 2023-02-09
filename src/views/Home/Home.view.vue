<template>
	<div class="home">
		<div class="container home__container">
			<galery-image-grid v-if="randomImages" :images="randomImages" />
		</div>
	</div>
</template>

<style lang="scss">
@import './Home.view.scss';
</style>

<script>
import { mapState } from 'vuex'

import GaleryImageGrid from '@/components/ImageGrid/ImageGrid.component.vue'
import { actionTypes } from '@/store/modules/images'

export default {
	name: 'HomeView',
	components: {
		GaleryImageGrid,
	},
	computed: {
		...mapState({
			randomImages: state => state.images.images,
		}),
	},
	mounted() {
		this.$store.dispatch(actionTypes.getRandomImages)
	},
}
</script>
