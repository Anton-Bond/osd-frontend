<script>
	import DataTableRow from './DataTableRow.svelte';
	import DataTableCell from './DataTableCell.svelte';

	export let numeric = false;
	export let heads = [];
	export let actions = [];

	let isHeader = true;

	// const x = Array.
</script>

<thead class="data-table-header">
	<DataTableRow isHeader>
		{#if numeric}
			<DataTableCell {isHeader} width="30">#</DataTableCell>
		{/if}
		{#each heads as h}
			<DataTableCell {isHeader}>{h.name}</DataTableCell>
		{/each}
		{#each actions as a}
			<DataTableCell />
		{/each}
	</DataTableRow>
</thead>

<style>
	.data-table-header {
		box-sizing: inherit;
		background-color: #3c54ff;
	}
</style>
