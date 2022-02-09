<script>
	import { List, ListItemGroup, NavigationDrawer } from 'svelte-materialify';
	import MenuItem from './MenuItem.svelte';
	import Caption from '../caption/Caption.svelte';

	export let menus = [];
</script>

<NavigationDrawer width="100%" class="margin-side">
	<div class="margin-side">
		<Caption title="Menu"/>
	</div>

	<List nav dense>
		<ListItemGroup mandatory>
			{#each menus as m}
				<MenuItem title={m.title} icon={m.icon} path={m.path} />
			{/each}
		</ListItemGroup>
	</List>
</NavigationDrawer>

<style>
	.margin-side {
		margin: 0 1rem;
	}
</style>
