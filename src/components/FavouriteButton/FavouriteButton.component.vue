<template>
	<button class="btn fav-btn" @click="favToggle">
		<img :src="imagePath" class="icon" />
	</button>
</template>

<style lang="scss">
@import './FavouriteButton.component.scss';
</style>

<script>
export default {
	name: 'GaleryFavouriteButton',
	props: {
		liked: {
			type: Boolean,
			required: true,
		},
		classNames: {
			type: String,
			required: false,
		},
	},
	computed: {
		imagePath() {
			return require(`@/assets/images/${
				this.liked ? 'fav-active' : 'fav-black'
			}.svg`)
		},
	},
	methods: {
		favToggle() {
			this.$emit('onToggle')
		},
	},
}
</script>
