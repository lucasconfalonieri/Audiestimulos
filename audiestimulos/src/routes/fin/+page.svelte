<script>
	import { onMount } from "svelte";
	import { goto } from '$app/navigation';

	let paciente = undefined

	const APIURL = import.meta.env.VITE_API_URL;
	const WEBURL = import.meta.env.VITE_WEB_URL;

	function obtenerPaciente() {
		fetch(`${APIURL}/api/datos`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
			.then((res) => res.json())
			.then((apiResponse) => {
                paciente = apiResponse || []
				JSON.stringify(paciente);
				console.log(paciente);
			});
	}

	function nextpage() {
		goto('/');
	}

    onMount(() => {
		obtenerPaciente()
	});
</script>

<body>
    {#if paciente && paciente.length > 0}
        <div class="title">FELICIDADES</div>
        <h1 class="text">{paciente[0].Nombre}</h1>
        <div class="text">Examen finalizado</div>
    {/if}
	<button type="button" class="btn btn-light" on:click={nextpage}>Inicio</button>
</body>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

	body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #FFF;
	}

	.title {
		font-size: 40px;
		font-weight: bold;
        align-items: center;
        justify-content: center;
		color: #31356e;
		margin-top: 60px;
		font-family: 'Montserrat';
	}       

    .text {
        font-size: 30px;
        align-items: center;
        justify-content: center;
        color: #31356e;
        margin-top: 150px;
        font-family: 'Montserrat';
    }

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 40px;
		font-size: 14px;
		padding: 6px 12px;
		border-radius: 4px;
		border: none;
		transition: background-color 0.2s ease, color 0.2s ease;
	}

	.btn-light {
		margin-top: 20%;
		background-color: #C9E6E0;
		color: #31356e;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: bold;
		cursor: pointer;
		border-radius: 10px;
		justify-content: center;
		padding: 10px 30px;
	}
</style>