<script>
	let nombreApellido = '';
	let dni = '';
	let fail = undefined;

	const APIURL = import.meta.env.VITE_API_URL;
	const WEBURL = import.meta.env.VITE_WEB_URL;

	function registrarDatos() {
		if (nombreApellido != '' && dni != '') {
			localStorage.setItem("Nombre", nombreApellido)
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
			location.href = `/deteccion`;
		} else {
			fail = 1;
		}
	}
</script>

<title>Inicio</title>
<body>
	<img src="/favicon.png" alt="Logo">
	<div class="title">AUDIESTÍMULOS</div>
		<div class="input-group">
			<label for="nombreApellido">Nombre y Apellido</label>
			<input type="text" id="nombreApellido" bind:value={nombreApellido} />
		</div>
		<br />
		<div class="input-group">
			<label for="dni">DNI</label>
			<input type="text" id="dni" bind:value={dni} />
		</div>
		<br />
		<button on:click={registrarDatos}>Comenzar</button>
		{#if fail}
			<h3>
				<strong>Datos no ingresados.</strong>
			</h3>
		{/if}
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

	h3{
		color: #31356e;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;
	}

	label {
		margin-bottom: 5px;
		font-weight: bold;
		color: #31356e;
		font-size: 13px;
	}

	input {
		padding: 5px;
		border: 1px solid #ccc;
		border-radius: 20px;
		width: 200px;
		background-color: #C9E6E0;
	}

	button {
		padding: 8px 16px;
		margin-top: 10px;
		background-color: #C9E6E0;
		color: #31356e;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-family: 'Montserrat', sans-serif;
	}

	.title {
		font-size: 35px;
		font-weight: bold;
		color: #31356e;
		margin-bottom: 30%;
		margin-top: 10%;
		font-family: 'Montserrat', sans-serif;
	}

	img {
		width: 150px;
		height: 150px;
		object-fit: cover;
		border-radius: 15%;
		cursor: pointer;
	}
</style>