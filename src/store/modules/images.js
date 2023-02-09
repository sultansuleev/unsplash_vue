import imagesApi from '@/api/images'

const state = {
	isLoading: false,
	images: null,
}

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
}

export const actionTypes = {
	getRandomImages: '[Images] Get Random Images',
	searchImages: '[Images] Search Images',
	getImageDetails: '[Images] Get Image Details',
}

export const getterTypes = {
	images: '[Images] Images',
}

const getters = {
	[getterTypes.randomImages]: state => {
		return state.randomImages
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
		state.isLoading = true
		state.validationErrors = null
	},
	[mutationTypes.getImageDetailsSuccess](state, payload) {
		state.images = payload
		state.isLoading = false
	},
	[mutationTypes.getImageDetailsFailure](state) {
		state.isLoading = false
	},
}

const actions = {
	[actionTypes.getRandomImages](context) {
		return new Promise(resolve => {
			context.commit(mutationTypes.getRandomImagesStart)
			imagesApi
				.getRandomPhotos()
				.then(response => {
					console.log(response.data)
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
			context.commit(mutationTypes.getRandomImagesStart)
			imagesApi
				.searchPhotos(credentials)
				.then(response => {
					console.log(response.data)
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
					console.log(response.data)
					context.commit(mutationTypes.getImageDetailsSuccess, response.data)
					resolve(response.data)
				})
				.catch(result => {
					console.log(result)
					context.commit(mutationTypes.getImageDetailsFailure)
				})
		})
	},
}

export default {
	state,
	mutations,
	actions,
	getters,
}
