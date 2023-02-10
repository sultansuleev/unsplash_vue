<template>
	<div class="details" v-if="image">
		<div
			class="details__bg"
			:style="{
				'background-image': `url(${image?.urls?.regular}) `,
			}"
		></div>

		<div class="container details__container">
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

				<div class="details__actions">
					<galery-favourite-button :liked="liked" @onToggle="toggle" />
				</div>
			</div>

			<div class="details__image">
				<galery-image-card :image="image" :classNames="'card-shadow'" />
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
import GaleryFavouriteButton from '@/components/FavouriteButton/FavouriteButton.component.vue'
import { actionTypes } from '@/store/modules/images'

export default {
	name: 'DetailsView',
	components: {
		GaleryImageCard,
		GaleryFavouriteButton,
	},
	computed: {
		...mapState({
			image: state => state.images.selectedImage,
			savedImages: state => state.images.savedImages,
		}),
		photoId() {
			return this.$route.params.id
		},
		liked() {
			return this.savedImages.includes(this.image)
		},
	},
	mounted() {
		console.log(this.photoId)
		this.$store.dispatch(actionTypes.getImageDetails, this.photoId)
	},
	methods: {
		toggle() {
			console.log('Do')
			this.$store.dispatch(actionTypes.saveImage, this.image)
		},
	},
}
</script>
