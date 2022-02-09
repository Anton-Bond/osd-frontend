<script>
	export let isHeader = false;
	export let width = null;
</script>

<!-- <td class="data-table-cell" class:header-cell={isHeader}> -->
<td
	class="data-table-cell {isHeader ? "header-cell" : "body-cell"}"
	style="--cell_width: {width}px;"
>
	<slot />
	<slot name="icon" />
</td>

<style>
	.data-table-cell {
		box-sizing:inherit;
		text-align: left;
		padding: .5rem;
		width: var(--cell_width);
	}
	.header-cell {
		font-weight: 600;
		box-sizing:inherit;
		text-align: left;
		padding-top: .8rem;
		padding-bottom: .8rem;
		font-size: 18px;
		color: #fff;
		line-height: 1.4;
		/* background-color: #6c7ae0; */
	}
	/* .header-cell:first-child {
		border-top-left-radius: .3rem;
	}
	.header-cell:last-child {
		border-top-right-radius: .3rem;
	} */
	.body-cell	 {
		font-size: 15px;
		color: gray;
		line-height: 1.4;
	}
</style>
