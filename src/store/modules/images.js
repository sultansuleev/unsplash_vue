import authApi from '@/api/images'

const state = {
	isLoading: false,
	images: null,
}

export const mutationTypes = {
	getRandomImagesStart: '[Images] getRandomImages start',
	getRandomImagesSuccess: '[Images] getRandomImages success',
	getRandomImagesFailure: '[Images] getRandomImages failure',
}

export const actionTypes = {
	getRandomImages: '[Images] Get Random Images',
}

export const getterTypes = {
	randomImages: '[Images] randomImages',
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
}

const actions = {
	[actionTypes.getRandomImages](context) {
		return new Promise(resolve => {
			context.commit(mutationTypes.getRandomImagesStart)
			authApi
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
}

export default {
	state,
	mutations,
	actions,
	getters,
}
