<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let paciente = undefined;

	const APIURL = import.meta.env.VITE_API_URL;
	const WEBURL = import.meta.env.VITE_WEB_URL;

	function obtenerPaciente() {
		fetch(`${APIURL}/api/datos`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
			.then((res) => res.json())
			.then((apiResponse) => {
				paciente = apiResponse || [];
				JSON.stringify(paciente);
				console.log(paciente);
			});
	}

	function nextpage() {
		localStorage.clear();
		goto('/');
	}

	onMount(() => {
		obtenerPaciente();
	});
</script>

<title>Fin</title>
<body>
	<div class="container">
		<div class="title">¡FELICIDADES!</div>
		{#if paciente && paciente.length > 0}
			<h1 class="text">{paciente[0].Nombre}</h1>
			<div class="text">Lograste el objetivo</div>
		{/if}
		<button type="button" class="btn btn-light" on:click={nextpage}>Inicio</button>
	</div>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

	body {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f2f1ec;
		height: 80vh;
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
	}

	.container {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		font-size: 38px;
		font-weight: bold;
		color: #31356e;
		margin-top: 50px;
	}

	.text {
		font-size: 26px;
		color: #31356e;
		margin-top: 80px;
		font-weight: bold;
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 30%;
		font-size: 14px;
		padding: 6px 12px;
		border-radius: 4px;
		border: none;
		transition: background-color 0.2s ease, color 0.2s ease;
	}

	.btn-light {
		background-color: #c9e6e0;
		color: #31356e;
		font-weight: bold;
		cursor: pointer;
		border-radius: 10px;
		padding: 10px 30px;
	}
</style>
