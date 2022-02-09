<script>
	import { Row, Col, Card } from 'svelte-materialify';
	import { mdiFolderTable, mdiAccountBoxMultiple } from '@mdi/js';
	import { _ } from '../../i18n';
	import Menu from './menu';
	import Pages from './Pages.svelte';

	export let registerFocus;

	const menus = [
		{
			title: $_('main.menu.categories'),
			icon: mdiFolderTable,
			path: 'categories',
		},
		{
			title: $_('main.menu.users'),
			icon: mdiAccountBoxMultiple,
			path: 'users',
		},
	];
</script>

<div use:registerFocus>
	<Card>
		<Row>
			<Col cols={12} sm={5} md={4} lg={4}>
				<Menu {menus} />
			</Col>
			<Col cols={12} sm={7} md={8} lg={8}>
				<Pages />
			</Col>
		</Row>
	</Card>
</div>
