<script>
	import {
		Card,
		CardText,
		CardActions,
		Button,
		TextField,
		Divider,
		CardTitle,
		CardSubtitle,
	} from 'svelte-materialify';
	import { useNavigate } from 'svelte-navigator';
	import { _ } from '../../i18n';

	const navigate = useNavigate();
	let login = '';
	let password = '';

	const submit = () => {
		sessionStorage.setItem('token', Math.random());
		navigate('/main');
	};

	$: formIsValid = login && password;
</script>

<div class="d-flex justify-center mt-4 mb-4">
	<Card style="width: 450px;">
		<CardTitle>{$_('pages.login.title')}</CardTitle>
		<Divider />

		<CardSubtitle>
			<form on:submit|preventDefault={submit}>
				<TextField outlined bind:value={login}
					>{$_('pages.login.login')}</TextField
				>
				<br />
				<TextField outlined bind:value={password} type="password"
					>{$_('pages.login.password')}</TextField
				>
			</form>
		</CardSubtitle>

		<CardActions>
			<Button
				class="{formIsValid && 'success-color'} sign-in-button"
				disabled={!formIsValid}
				on:click={submit}>{$_('pages.login.signIn')}</Button
			>
		</CardActions>
	</Card>
</div>

<style lang="scss" global>
	.sign-in-button {
		margin: auto;
		margin-bottom: 1rem;
	}
</style>
