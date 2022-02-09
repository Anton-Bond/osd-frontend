<script>
	import {
		AppBar,
		Button,
		Icon,
		Menu,
		ListItem,
		MaterialApp,
	} from 'svelte-materialify';
	import { mdiMenu, mdiDotsVertical } from '@mdi/js';
	import { _ } from '../../i18n';

</script>

<AppBar>
	<div slot="icon">
		<Button fab depressed>
			<Icon path={mdiMenu} />
		</Button>
	</div>
	<span slot="title">{$_('main.app_title')}</span>
	<div style="flex-grow:1" />
	<Button>Item</Button>
	<Menu right>
		<div slot="activator">
			<Button fab depressed>
				<Icon path={mdiDotsVertical} />
			</Button>
		</div>
		<ListItem>Item 1</ListItem>
		<ListItem>Item 2</ListItem>
		<ListItem>Item 3</ListItem>
	</Menu>
</AppBar>
