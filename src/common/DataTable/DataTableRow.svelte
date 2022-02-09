<script>
	export let isHeader = false;
</script>

<tr class="data-table-row" class:indicate={!isHeader}>
	<slot />
</tr>

<style>
	.data-table-row {
		box-sizing: inherit;
	}
	.data-table-row:nth-child(2n) {
		background-color: #f8f6ff;
	}
	.data-table-row:after {  /* clearing float */
		content: ' ';
		display: block;
		visibility: hidden;
		clear: both;
	}
	.indicate:hover {
		background-color: rgb(220, 220, 220);
	}
</style>
