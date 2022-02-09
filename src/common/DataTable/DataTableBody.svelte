<script>
	import { Button, Icon, Tooltip } from 'svelte-materialify';
	import DataTableRow from './DataTableRow.svelte';
	import DataTableCell from './DataTableCell.svelte';

	export let numeric = false;
	export let headKeys = [];
	export let data = [];
	export let actions = [];
</script>

<tbody class="data-table-body">
	{#each data as item, i (item?.id)}
		<DataTableRow>
			{#if numeric}
				<DataTableCell width="30">{i + 1}</DataTableCell>
			{/if}
			{#each headKeys as headKey}
				<DataTableCell>{item[headKey]}</DataTableCell>
			{/each}
			{#each actions as action}
				<DataTableCell width="30">
				<Tooltip slot="icon" top>
					<Button icon class={`${action.iconColor}-text`} on:click={action.fn(item.id)}>
						<Icon path={action.icon} />
					</Button>
					<span slot="tip">{action.tooltip}</span>
				</Tooltip>
				</DataTableCell>
			{/each}
		</DataTableRow>
	{/each}
</tbody>

<style>
	.data-table-body {
		box-sizing: inherit;
	}
</style>
