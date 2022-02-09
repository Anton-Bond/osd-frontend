<script>
	import { map } from 'lodash';
	import DataTableHead from './DataTableHead.svelte';
	import DataTableBody from './DataTableBody.svelte';

	export let numeric = false;
	export let heads = [];
	export let data = [];
	export let actions = [];

	// $: tableHeads = numeric ? [{ name: '#'}, ...heads] : heads;
</script>

<div class="data-table-wrapper">
	<!-- <div class="data-table-header">
		<table>
			<DataTableHead {heads} />
		</table>
	</div>

	<div class="data-table-body">
		<table>
			<DataTableBody keys={map(heads, 'key')} {data} />
		</table>
	</div> -->

	<table>
		<DataTableHead {heads} {numeric} {actions} />
		<DataTableBody {numeric} headKeys={map(heads, 'key')} {data} {actions} />
	</table>
</div>


<style>
	.data-table-wrapper {
		/* position: relative; */
		margin-top: 1.2rem;
		margin-bottom: 1.2rem;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 0 40px 0 rgba(0,0,0,.15);
		-moz-box-shadow: 0 0 40px 0 rgba(0,0,0,.15);
		-webkit-box-shadow: 0 0 40px 0 rgba(0,0,0,.15);
		-o-box-shadow: 0 0 40px 0 rgba(0,0,0,.15);
		-ms-box-shadow: 0 0 40px 0 rgba(0,0,0,.15);
	}
	table {
		width: 100%;
		border-collapse: collapse;
		box-sizing: border-box;
	}

	/* .data-table-header {
		position: absolute;
	}
	.data-table-body {
		position: relative;
		max-height: 64vh;
		overflow-y: auto;
	} */
</style>
