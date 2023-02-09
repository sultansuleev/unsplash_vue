<template>
	<div class="details">
		<div class="container details__container" v-if="image">
			<div class="details__info">
				<div class="user">
					<div class="user__icon">
						<img
							:src="image.user?.profile_image.medium"
							alt="image.alt_description"
						/>
					</div>
					<div class="user__info">
						<span>{{ image.user?.name }}</span>
						<span>@{{ image.user?.username }}</span>
					</div>
				</div>
			</div>

			<div class="details__image">
				<galery-image-card :image="image" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import './Details.view.scss';
</style>

<script>
import { mapState } from 'vuex'

import GaleryImageCard from '@/components/ImageCard/ImageCard.component.vue'
import { actionTypes } from '@/store/modules/images'

export default {
	name: 'DetailsView',
	components: {
		GaleryImageCard,
	},
	computed: {
		...mapState({
			image: state => state.images.selectedImage,
		}),
		photoId() {
			return this.$route.params.id
		},
	},
	mounted() {
		console.log(this.photoId)
		this.$store.dispatch(actionTypes.getImageDetails, this.photoId)
	},
}
</script>
