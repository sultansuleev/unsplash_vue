<template>
	<div class="details">
		<galery-loader v-if="isLoading" />
		<div
			class="details__bg"
			:style="{
				'background-image': `url(${image?.urls?.regular}) `,
			}"
			v-if="image"
		></div>

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

				<div class="details__actions">
					<galery-favourite-button :liked="liked" @onToggle="toggle" />
					<galery-download-button @onClick="download" />
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
import { mapState, mapGetters } from 'vuex'

import GaleryImageCard from '@/components/ImageCard/ImageCard.component.vue'
import GaleryFavouriteButton from '@/components/FavouriteButton/FavouriteButton.component.vue'
import GaleryLoader from '@/components/Loader/Loader.component'
import GaleryDownloadButton from '@/components/DownloadButton/DownloadButton.component.vue'
import { actionTypes, getterTypes } from '@/store/modules/images'

export default {
	name: 'DetailsView',
	components: {
		GaleryImageCard,
		GaleryFavouriteButton,
		GaleryDownloadButton,
		GaleryLoader,
	},
	computed: {
		...mapState({
			image: state => state.images.selectedImage,
			isLoading: state => state.images.isLoading,
			savedImages: state => state.images.savedImages,
		}),
		...mapGetters({
			liked: getterTypes.getSavedImages,
		}),
		photoId() {
			return this.$route.params.id
		},
	},
	mounted() {
		this.$store.dispatch(actionTypes.getImageDetails, this.photoId)
	},
	methods: {
		toggle() {
			console.log('savedImages', this.savedImages)
			console.log('image', this.image)
			this.$store.dispatch(actionTypes.saveImage, this.image)
		},
		download() {
			alert('Download')
		},
	},
}
</script>
