<script>
	import { useLocation, useNavigate } from 'svelte-navigator';
	import { _ } from '../../i18n';

	const location = useLocation();
	const navigate = useNavigate();
	$location.pathname === '/' && navigate('main');
</script>

<section id="not-found-wrapper">
	<h3>404</h3>
	<h4>{$_('main.not_found')}</h4>
</section>

<style>
	#not-found-wrapper {
		background-color: rgba(255, 255, 255, 0.8);
		padding-top: 10%;
		height: 65vh;
		text-align: center;
		border-radius: 1rem;
		box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
	}
</style>
