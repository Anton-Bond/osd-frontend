<script>
	import {
		Button,
		Dialog,
		Card,
		CardTitle,
		CardText,
		CardActions,
	} from 'svelte-materialify';
	import TextInput from "./TextInput.svelte";

	export let active = false;
	export let onCancel;

	// function open() {
	// 	active = true;
	// }
	// function close() {
	// 	active = false;
	// }
</script>

<Dialog persistent bind:active>
	<Card>
		<CardTitle>Do you Agree?</CardTitle>
		<CardText>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
			deleniti natus dolore, rerum hic beatae officiis at ea sequi labore.
		</CardText>
		<CardActions class="justify-end">
			<Button on:click={onCancel} text>Save</Button>
			<Button on:click={onCancel} text class="red-text">Cancel</Button>
		  </CardActions>
	</Card>
</Dialog>
