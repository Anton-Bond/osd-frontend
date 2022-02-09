<script>
	import { Router } from 'svelte-navigator';
	import { MaterialApp, Container } from 'svelte-materialify';
	import Header from './components/header';
	import Routes from './routes';
	import { setupI18n } from './i18n';

	setupI18n({ withLocale: 'en' });
</script>

<Router>
	<MaterialApp>
		<section class="app-wrapper">
			<Header />
			<Container>
				<Routes />
			</Container>
		</section>
	</MaterialApp>
</Router>

<style lang="scss" global>
	.app-wrapper {
		background-color: rgba(128, 128, 128, 0.3);
		width: 100%;
		min-height: 100vh;
	}
</style>
