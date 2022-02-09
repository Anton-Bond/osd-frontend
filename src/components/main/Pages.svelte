<script>
	import { Route } from 'svelte-navigator';
	import Categories from '../../pages/categories/Categories.svelte';
	import Users from '../../pages/users/Users.svelte';
	import { _ } from '../../i18n';
	import Caption from './caption/Caption.svelte';

</script>

<section class="pages-wrapper">
	<Route>
		<Caption title={$_('pages.welcome')} />
		<p>welcome, user_name</p>
	</Route>

	<Route path="categories">
		<Caption title={$_('pages.categories.title')} />
		<Categories />
	</Route>

	<Route path="users">
		<Caption title={$_('pages.users.title')} />
		<Users />
	</Route>
</section>

<style>
	.pages-wrapper {
		min-height: 83vh;
		margin-right: 2rem;
	}
</style>
