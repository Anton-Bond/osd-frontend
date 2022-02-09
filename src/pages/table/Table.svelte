<script>
	export let registerFocus;
	export let id;

	$: console.log('table id: ', id);
</script>

<div use:registerFocus>
	<h4>table page</h4>
</div>
