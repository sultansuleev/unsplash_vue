import imagesApi from '@/api/images'

const getDefaultState = () => {
	return {
		isLoading: false,
		images: [],
		selectedImage: null,
		savedImages: [],
	}
}

const state = getDefaultState()

export const mutationTypes = {
	getRandomImagesStart: '[Images] getRandomImages start',
	getRandomImagesSuccess: '[Images] getRandomImages success',
	getRandomImagesFailure: '[Images] getRandomImages failure',

	searchImagesStart: '[Images] searchImages start',
	searchImagesSuccess: '[Images] searchImages success',
	searchImagesFailure: '[Images] searchImages failure',

	getImageDetailsStart: '[Images] getImageDetails start',
	getImageDetailsSuccess: '[Images] getImageDetails success',
	getImageDetailsFailure: '[Images] getImageDetails failure',

	saveImage: '[Images] saveImage',
}

export const actionTypes = {
	getRandomImages: '[Images] Get Random Images',
	searchImages: '[Images] Search Images',
	getImageDetails: '[Images] Get Image Details',
	saveImage: '[Images] Save Image',
}

export const getterTypes = {
	images: '[Images] Images',
	selectedImage: '[Images] Selected Image',
	savedImages: '[Images] Saved Images',
	getSavedImages: '[Images] Get Saved Images',
}

const getters = {
	[getterTypes.randomImages]: state => {
		return state.randomImages
	},
	[getterTypes.selectedImage]: state => {
		return state.selectedImage
	},
	[getterTypes.savedImages]: state => {
		return state.savedImages
	},
	[getterTypes.getSavedImages]: state => {
		return Boolean(
			state.savedImages.find(img => img.id === state.selectedImage.id)
		)
	},
}

const mutations = {
	[mutationTypes.getRandomImagesStart](state) {
		state.images = null
		state.isLoading = true
		state.validationErrors = null
	},
	[mutationTypes.getRandomImagesSuccess](state, payload) {
		state.images = payload
		state.isLoading = false
	},
	[mutationTypes.getRandomImagesFailure](state) {
		state.isLoading = false
	},

	[mutationTypes.searchImagesStart](state) {
		state.images = null
		state.isLoading = true
		state.validationErrors = null
	},
	[mutationTypes.searchImagesSuccess](state, payload) {
		state.images = payload
		state.isLoading = false
	},
	[mutationTypes.searchImagesFailure](state) {
		state.isLoading = false
	},

	[mutationTypes.getImageDetailsStart](state) {
		state.images = null
		state.selectedImage = null
		state.isLoading = true
		state.validationErrors = null
	},
	[mutationTypes.getImageDetailsSuccess](state, payload) {
		state.selectedImage = payload
		state.isLoading = false
	},
	[mutationTypes.getImageDetailsFailure](state) {
		state.isLoading = false
	},

	[mutationTypes.saveImage](state, payload) {
		if (state.savedImages.find(img => img.id === state.selectedImage.id)) {
			state.savedImages = state.savedImages.filter(i => {
				i.id !== payload.id
			})
		}

		state.savedImages.push(payload)
	},
}

const actions = {
	[actionTypes.getRandomImages](context) {
		return new Promise(resolve => {
			context.commit(mutationTypes.getRandomImagesStart)
			imagesApi
				.getRandomPhotos()
				.then(response => {
					context.commit(mutationTypes.getRandomImagesSuccess, response.data)
					resolve(response.data)
				})
				.catch(result => {
					console.log(result)
					context.commit(mutationTypes.getRandomImagesFailure)
				})
		})
	},

	[actionTypes.searchImages](context, credentials) {
		return new Promise(resolve => {
			context.commit(mutationTypes.searchImagesStart)
			imagesApi
				.searchPhotos(credentials)
				.then(response => {
					context.commit(
						mutationTypes.searchImagesSuccess,
						response.data.results
					)
					resolve(response.data.results)
				})
				.catch(result => {
					console.log(result)
					context.commit(mutationTypes.searchImagesFailure)
				})
		})
	},

	[actionTypes.getImageDetails](context, credentials) {
		return new Promise(resolve => {
			context.commit(mutationTypes.getImageDetailsStart)
			imagesApi
				.getPhotoDetails(credentials)
				.then(response => {
					context.commit(mutationTypes.getImageDetailsSuccess, response.data)
					resolve(response.data)
				})
				.catch(result => {
					console.log(result)
					context.commit(mutationTypes.getImageDetailsFailure)
				})
		})
	},

	[actionTypes.saveImage](context, credentials) {
		return new Promise(resolve => {
			context.commit(mutationTypes.saveImage, credentials)

			resolve(credentials)
		})
	},
}

export default {
	state,
	mutations,
	actions,
	getters,
}
