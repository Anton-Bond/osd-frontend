<script>
	import { mdiAlertCircle } from '@mdi/js';
	import DataTable from '../../common/DataTable';
	import ModalForm from '..../../common/ModalForm/ModalWindow.svelte
	import { _ } from '../../i18n';

	let heads = [
		{name: $_('pages.users.table.name'), key: 'name'},
		{name: $_('pages.users.table.email'), key: 'email'},
		{name: $_('pages.users.table.role'), key: 'role'},
		{name: $_('pages.users.table.comment'), key: 'comment'},
	];
	let users = [
		{ id: '1', name: 'user0', email: 'user1@test.com', role: 'admin', comment: 'text' },
		{ id: '2', name: 'user1', email: 'user1@test.com', role: 'admin', comment: 'text' },
		{ id: '3', name: 'user1', email: 'user1@test.com', role: 'admin', comment: 'text' },
		{ id: '4', name: 'user1', email: 'user1@test.com', role: 'admin', comment: 'text' },
		{ id: '5', name: 'user1', email: 'user1@test.com', role: 'admin', comment: 'text' },
		{ id: '6', name: 'user1', email: 'user1@test.com', role: 'admin', comment: 'text' },
		{ id: '7', name: 'user1', email: 'user1@test.com', role: 'admin', comment: 'text' },
		{ id: '8', name: 'user1', email: 'user1@test.com', role: 'admin', comment: 'text' },
		{ id: '9', name: 'user1', email: 'user1@test.com', role: 'admin', comment: 'text' },
		{ id: '10', name: 'user100', email: 'user1@test.com', role: 'admin', comment: 'text' },
	];
	let actions = [
		{ tooltip: 'informing', icon: mdiAlertCircle, iconColor: 'green', fn: open },
		{ tooltip: 'informing', icon: mdiAlertCircle, iconColor: 'red', fn: inf },
	];

	let isOpen = false;

	function inf(id) {
		console.log('this is user: ', id);
	}

	function open() {
		isOpen = true;
	}
	function handleCancel() {
		isOpen = false;
	}
</script>

<DataTable {heads} data={users} numeric {actions} />

<ModalForm active={isOpen} onCancel={handleCancel} />
