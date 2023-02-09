<template>
	<nav class="navbar">
		<div class="container navbar__container">
			<router-link class="navbar__brand" :to="{ name: 'home' }">
				<img src="@/assets/images/logo.svg" />
			</router-link>

			<div class="navbar__item">
				<router-link
					class="navbar__link"
					:to="{ name: 'favourites' }"
					exact
					active-class="active"
				>
					<img class="icon" src="@/assets/images/fav.svg" /> &nbsp; Избранное
				</router-link>
			</div>
		</div>
	</nav>
</template>

<style lang="scss">
@import './Topbar.component.scss';
</style>

<script>
export default {
	name: 'GaleryTopbar',
}
</script>
