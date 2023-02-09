<template>
	<div class="search">
		<div class="search--faded">
			<div class="search__input">
				<input
					type="text"
					class="form-control form-control-lg"
					placeholder="Поиск"
					v-model="query"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import './Search.component.scss';
</style>

<script>
import { debounce } from '@/helpers/debounce'
import { actionTypes } from '@/store/modules/images'

export default {
	name: 'GalerySearch',
	data() {
		return {
			query: '',
		}
	},
	watch: {
		query: debounce(function (res) {
			console.log(res)
			this.$store.dispatch(actionTypes.searchImages, res)
		}, 500),
	},
}
</script>
