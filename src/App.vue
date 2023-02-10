<template>
	<div class="app">
		<Galery-topbar />

		<router-view />
	</div>
</template>

<style>
@import '@/assets/styles/main.scss';
</style>

<script>
import GaleryTopbar from '@/components/Topbar/Topbar.component'

export default {
	name: 'GaleryApp',
	components: {
		GaleryTopbar,
	},
}
</script>
