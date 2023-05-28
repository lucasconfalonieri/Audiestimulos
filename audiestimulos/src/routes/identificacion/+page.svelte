<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let activeTab = 3;

	let levels = [
		{ id: 1, name: 'Nivel 1', url: '/deteccion' },
		{ id: 2, name: 'Nivel 2', url: '/discriminacion' },
		{ id: 3, name: 'Nivel 3', url: '/identificacion' },
		{ id: 4, name: 'Nivel 4', url: '/reconocimiento' },
		{ id: 5, name: 'Nivel 5', url: '/comprension' }
	];

	let currentLevel = levels.find((level) => level.id === activeTab);

	function changeTab(tabId) {
		activeTab = tabId;
		currentLevel = levels.find((level) => level.id === activeTab);
		goto(currentLevel.url);
	}

	function handleKeyPress(event, tabId) {
		if (event.key === 'Enter' || event.key === ' ') {
			changeTab(tabId);
		}
	}

	function nextpage() {
		goto('/reconocimiento');
	}

	onMount(() => {
		// Aquí puedes realizar acciones adicionales cuando el componente se monta
	});
</script>

<body>
	<div class="page-container">
		<div class="tabs">
			{#each levels as level}
				<button
					class="tab {activeTab === level.id ? 'active' : ''}"
					on:click={() => changeTab(level.id)}
					on:keydown={(event) => handleKeyPress(event, level.id)}
				>
					{level.name}
				</button>
			{/each}
		</div>

		<div class="content">
			<div class="level-info">
				<h2>IDENTIFICACIÓN</h2>
				<p>En este nivel el paciente debe elegir la palabra que contenga el fonema solicitado.</p>
			</div>

			<div class="image-container">
				<div class="top-text">
                <p>¿Qué palabra contiene /m/?</p>
				</div>
				<div class="image-row">
					<div class="left-images">
						<div class="image">
							<img src="niño-nivel3.png" alt="Niño" />
							<p>NIÑO</p>
						</div>
						<div class="image">
							<img src="pelota-nivel3.png" alt="Pelota" />
							<p>PELOTA</p>
						</div>
					</div>
					<div class="right-images">
						<div class="image">
							<p class="bottom-p">CAMIÓN</p>
							<img src="camion-nivel3.png" alt="Camión" />
						</div>
						<div class="image">
							<p class="bottom-p">BANANA</p>
							<img src="banana-nivel3.png" alt="Banana" />
						</div>
					</div>
				</div>
			</div>

			<div class="buttons-container">
				<p>¿Pudo identificar la palabra?</p>
				<button type="button" class="btn btn-danger"><span class="material-icons"><svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					fill="currentColor"
					class="bi bi-x-lg"
					viewBox="0 0 16 16"
				>
					<path
						d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
					/>
				</svg></span></button>
				<button type="button" class="btn btn-success"><span class="material-icons"><svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					fill="currentColor"
					class="bi bi-check-lg"
					viewBox="0 0 16 16"
				>
					<path
						d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
					/>
				</svg></span></button>
			</div>
			<button type="button" class="btn btn-light" on:click={nextpage}>Siguiente nivel</button>
		</div>
	</div>
</body>

<style>
	body {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		background-color: #fff;
		margin: 5;
		padding: 0;
	}

	.page-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		min-height: 100vh;
		padding-top: 20px;
	}

	.tabs {
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
		margin-top: -20px;
		max-width: 600px;
		width: 100%;
	}

	.tab {
		padding: 10px 20px;
		background-color: #b0e9e6;
		color: #31356e;
		cursor: pointer;
		border: none;
		border-bottom: 2px solid transparent;
		font-size: 14px;
		font-weight: bold;
		border-radius: 10px 10px 0 0;
		margin-right: 5px;
		transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
	}

	.tab:hover {
		background-color: #e0e0e0;
	}

	.tab.active {
		background-color: #31356e;
		color: #fff;
		border-color: #31356e;
	}

	.content {
		background-color: #31356e;
		padding: 20px;
		margin-top: -20px;
		max-width: 600px;
		color: white;
		width: 100%;
		border-radius: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.level-info {
		text-align: center;
	}

	.level-info h2 {
		margin-top: 20px;
		font-size: 24px;
		color: #fff;
	}

	.level-info p {
		margin-left: 10px;
		font-size: 14px;
		color: #fff;
	}

	.top-text {
		text-align: center;
		margin-bottom: 10px;
  	}

  	.top-text p {
		color: #fff;
		font-weight: bold;
		font-size: 16px;
		margin: 0;
  	}

  	.image-container {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;
		padding: 10px;
		border-radius: 20px;
  	}

  	.image-row {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
	}

	.left-images,
	.right-images {
		display: flex;
		flex-direction: column;
		align-items: self-start;
	}

	.right-images p {
		margin-top: 50px;
	}
	
	.left-images p {
		margin-top: -30px;
	}

	.image {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		margin-top: 20px;
		margin-bottom: 10px;
		width: 50%;
	}

	.image img {
		width: 80px;
		height: 80px;
		object-fit: cover;
		border-radius: 15%;
	}

	.image p {
		font-size: 16px;
		color: #000;
		font-weight: bold;
		margin-left: 5px;
		margin-right: 5px;
	}

    .image-container p{
		color: #31356e;
        font-weight: bold;
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 0px;
		font-size: 14px;
		padding: 6px 12px;
		border-radius: 4px;
		border: none;
		transition: background-color 0.2s ease, color 0.2s ease;
	}

	.btn-light {
		margin-top: 20px;
		background-color: #b0e9e6;
		color: #31356e;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: bold;
		cursor: pointer;
		border-radius: 10px;
		justify-content: center;
		padding: 10px;
	}

	.buttons-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}

	.buttons-container p {
		margin-right: 10px;
		color: white;
		font-weight: bold;
		font-size: 14px;
	}

	.btn-success {
		margin-left: 10px;
		background-color: #5cb85c;
		color: white;
		border-radius: 20px;
		cursor: pointer;
	}

	.btn-danger {
		background-color: #d9534f;
		color: white;
		border-radius: 20px;
		margin-left: 20px;
		cursor: pointer;
	}

	.btn-success:hover{
		background-color: #1e7e34;
	}

	.btn-danger:hover {
		background-color: #872b34;
	}
</style>
