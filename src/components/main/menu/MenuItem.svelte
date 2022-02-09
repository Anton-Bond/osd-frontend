<script>
	import { Link } from "svelte-navigator";
	import { ListItem, Icon } from 'svelte-materialify';

	export let title = '';
	export let icon = null;
	export let path = '';
</script>

<Link to={path} class="skip-decaration">
	<ListItem>
		<span slot="prepend">
			<Icon path={icon} />
		</span>
		{title}
	</ListItem>
</Link>

<style lang="scss" global>
	.skip-decaration {
		text-decoration: none;
		// color: inherit !important;
	}
</style>
