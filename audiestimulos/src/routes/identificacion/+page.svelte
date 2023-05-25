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
                <p>¿Qué palabra contiene /m/?</p>
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
						<img src="camion-nivel3.png" alt="Camión" />
						<p>CAMIÓN</p>
					</div>
					<div class="image">
						<img src="banana-nivel3.png" alt="Banana" />
						<p>BANANA</p>
					</div>
				</div>
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

	.image-container {
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		margin-top: 20px;
		padding: 10px;
		border-radius: 20px;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}

    .image-container p{
		color: #31356e;
        font-weight: bold;
	}

	.left-images,
	.right-images {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.image {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		justify-content: center;
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
		margin: 0;
		margin-top: 5px;
        margin-left: 5px;
		font-size: 16px;
		color: #000;
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
		margin-top: 50px;
		background-color: #b0e9e6;
		color: #31356e;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: bold;
		cursor: pointer;
		border-radius: 10px;
		justify-content: center;
		padding: 10px;
	}
</style>