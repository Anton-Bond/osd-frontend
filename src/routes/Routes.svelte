<script>
	import { Route } from 'svelte-navigator';
	import PrivateRoute from './PrivateRoute.svelte';
	import Login from '../pages/login/Login.svelte';
	import Main from '../components/main';
	import Table from '../pages/table/Table.svelte';
	import NotFound from '../pages/not-found/NotFound.svelte';
</script>

<Route path="login">
	<Login />
</Route>

<PrivateRoute path="main/*" let:location let:registerFocus>
	<Main {registerFocus} />
</PrivateRoute>

<PrivateRoute path="table/:id" let:location let:registerFocus let:params>
	<Table {registerFocus} id={params.id} />
</PrivateRoute>

<!-- <PrivateRoute path="profile" let:location let:registerFocus>
	<h3 use:registerFocus>Welcome {$user.username}</h3>
	<button on:click={handleLogout}>Logout</button>
</PrivateRoute> -->

<Route path="*">
	<NotFound />
</Route>
