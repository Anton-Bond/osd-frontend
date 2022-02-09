<script>
	import { ExpansionPanel, ExpansionPanels } from 'svelte-materialify';
	import DataTable from '../../common/DataTable';
	import { _ } from '../../i18n';

	let categories = [
		{ id: '111', name: 'category one', tables: [
			{ id: '101', name: 'table 1' },
			{ id: '102', name: 'table 2' },
			{ id: '103', name: 'table 3' },
			{ id: '104', name: 'table 4' },
		]},
		{ id: '222', name: 'category two', tables: [
			{ id: '101', name: 'table 1' },
			{ id: '102', name: 'table 2' },
		]},
		{ id: '333', name: 'category three', tables: [
			{ id: '101', name: 'table 1' },
			{ id: '102', name: 'table 2' },
			{ id: '103', name: 'table 3' },
			{ id: '104', name: 'table 4' },
			{ id: '105', name: 'table 5' },
			{ id: '106', name: 'table 6' },
		]},
	];

	let tableHeaders = [
		{name: 'table_name', key: 'name'},
	];

	let value = [];
	let about = { index: '', active: '' };
	function onChange(e) {
		about = e.detail;
	}
</script>

<!-- <p class="text-center">Value: [{value}]</p>
<p class="text-center">
	Index: <b>{about.index}</b>, Active: <b>{about.active}</b>
</p> -->

<div class="categories-page">
	<ExpansionPanels on:change={onChange} bind:value>
		{#each categories as category, i (category.id)}
			<ExpansionPanel>
				<span slot="header">{i + 1}. {category.name}</span>
				<div class="data-table-wrapper">
					<DataTable heads={tableHeaders} data={category.tables} numeric/>
				</div>
			</ExpansionPanel>
		{/each}
	</ExpansionPanels>
</div>

<style>
	.categories-page {
		margin-top: 2rem;
	}
	.data-table-wrapper {
		width: 100%;
	}
</style>
