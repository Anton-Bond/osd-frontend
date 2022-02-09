<!-- <script>
	import TextInput from "./TextInput.svelte";
</script>

<form on:submit|preventDefault={submitForm}>
	<TextInput
		id="title"
		label="Title"
		valid={titleValid}
		validityMessage="Please enter a valid title."
		value={title}
		on:input={(event) => (title = event.target.value)}
	/>
	<TextInput
		id="subtitle"
		label="Subtitle"
		valid={subtitleValid}
		validityMessage="Please enter a valid subtitle."
		value={subtitle}
		on:input={(event) => (subtitle = event.target.value)}
	/>
	<TextInput
		id="address"
		label="Address"
		valid={addressValid}
		validityMessage="Please enter a valid address."
		value={address}
		on:input={(event) => (address = event.target.value)}
	/>
	<TextInput
		id="imageUrl"
		label="Image URL"
		valid={imageUrlValid}
		validityMessage="Please enter a valid image url."
		value={imageUrl}
		on:input={(event) => (imageUrl = event.target.value)}
	/>
	<TextInput
		id="email"
		label="E-Mail"
		type="email"
		valid={emailValid}
		validityMessage="Please enter a valid email address."
		value={email}
		on:input={(event) => (email = event.target.value)}
	/>
	<TextInput
		id="description"
		label="Description"
		controlType="textarea"
		valid={descriptionValid}
		validityMessage="Please enter a valid description."
		bind:value={description}
	/>
</form>
<div slot="footer">
	<Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
	<Button type="button" on:click={submitForm} disabled={!formIsValid}
		>Save</Button
	>
</div>

<style>
	form {
		width: 100%;
	}
</style> -->
