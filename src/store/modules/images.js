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
}

export const actionTypes = {
	getRandomImages: '[Images] Get Random Images',
	searchImages: '[Images] Search Images',
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
}

export default {
	state,
	mutations,
	actions,
	getters,
}
