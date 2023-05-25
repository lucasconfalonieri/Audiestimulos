<script>
	let nombreApellido = '';
	let dni = '';
	let fail = undefined;

	const APIURL = import.meta.env.VITE_API_URL;
	const WEBURL = import.meta.env.VITE_WEB_URL;

	function registrarDatos() {
		if (nombreApellido != '' && dni != '') {
			fetch(`${APIURL}/api/datos/`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ dni: dni, nombre: nombreApellido })
			})
				.then((res) => res.json())
				.then((apiResponse) => {
					JSON.stringify(apiResponse);
					console.log(apiResponse);
				});
			location.href = `${WEBURL}/deteccion`;
		} else {
			fail = 1;
		}
	}
</script>

<body>
	<div class="title">AUDIESTÍMULOS</div>
	<br />
	<br />
	<br />
	<div class="container">
		<div class="input-group">
			<label for="nombreApellido">Nombre y Apellido:</label>
			<input type="text" id="nombreApellido" bind:value={nombreApellido} />
		</div>
		<br />
		<div class="input-group">
			<label for="dni">DNI:</label>
			<input type="text" id="dni" bind:value={dni} />
		</div>
		<br />
		<button on:click={registrarDatos}>Comenzar</button>
		{#if fail}
			<h3>
				<strong>Datos no ingresados.</strong>
			</h3>
		{/if}
	</div>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

	body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 75vh;
		background-color: #f2f1ec;
		font-family: 'Montserrat', sans-serif;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #b2dfdb;
		padding: 20px;
		border-radius: 8px;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;
	}

	label {
		margin-bottom: 5px;
		font-weight: bold;
	}

	input {
		padding: 5px;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 200px;
	}

	button {
		padding: 8px 16px;
		background-color: #f5f5dc;
		color: black;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-family: 'Montserrat', sans-serif;
	}

	.title {
		font-size: 40px;
		font-weight: bold;
		color: #31356e;
		margin-bottom: 20px;
		font-family: 'Montserrat', sans-serif;
	}
</style>