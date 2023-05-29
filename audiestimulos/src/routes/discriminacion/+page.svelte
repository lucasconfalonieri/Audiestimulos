<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let activeTab = 2;

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

	function playAudio(audioSrc) {
		const audio = new Audio(audioSrc);
		audio.play();
	}

	function nextpage() {
		goto('/identificacion');
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
				<h2>DISCRIMINACIÓN</h2>
				<p>
					En este nivel el paciente deberá percibir si dos sonidos del habla son iguales o
					diferentes.
				</p>
				<h1 class="small">(Presionar la letra para escuchar el audio)</h1>
			</div>

			<div class="audio-container">
				<div>
					<button class="audio-button" on:click={() => playAudio('/K-nivel2.mpeg')}>
						<span>K</span>
					</button>
					<button class="audio-button" on:click={() => playAudio('/T-nivel2.mpeg')}>
						<span>T</span>
					</button>
					<p class="audio-text">¿Logró diferenciar los sonidos?</p>
					<div class="audio-buttons">
						<button class="btn btn-danger">
							<span class="glyphicon glyphicon-remove"
								><svg
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
								</svg></span
							>
						</button>
						<button class="btn btn-success">
							<span class="glyphicon glyphicon-ok"
								><svg
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
								</svg></span
							>
						</button>
					</div>
				</div>

				<div>
					<button class="audio-button" on:click={() => playAudio('/L-nivel2.mpeg')}>
						<span>L</span>
					</button>
					<button class="audio-button" on:click={() => playAudio('/R-nivel2.mpeg')}>
						<span>R</span>
					</button>
					<p class="audio-text">¿Logró diferenciar los sonidos?</p>
					<div class="audio-buttons">
						<button class="btn btn-danger">
							<span class="glyphicon glyphicon-remove"
								><svg
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
								</svg></span
							>
						</button>
						<button class="btn btn-success">
							<span class="glyphicon glyphicon-ok"
								><svg
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
								</svg></span
							>
						</button>
					</div>
				</div>

				<div>
					<button class="audio-button" on:click={() => playAudio('/P-nivel2.mpeg')}>
						<span>P</span>
					</button>
					<button class="audio-button" on:click={() => playAudio('/B-nivel2.mpeg')}>
						<span>B</span>
					</button>
					<p class="audio-text">¿Logró diferenciar los sonidos?</p>
					<div class="audio-buttons">
						<button class="btn btn-danger">
							<span class="glyphicon glyphicon-remove"
								><svg
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
								</svg></span
							>
						</button>
						<button class="btn btn-success">
							<span class="glyphicon glyphicon-ok"
								><svg
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
								</svg></span
							>
						</button>
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

	.small {
		font-size: 12px;
		font-weight: lighter;
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

	.audio-button {
		margin-left: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #cfefd7;
		font-size: 28px;
		color: #31356e;
		font-weight: bold;
		border: none;
		width: 60px;
		height: 60px;
		border-radius: 10px;
		cursor: pointer;
		padding: 8px 12px;
	}

	.audio-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 0px;
	}

	.audio-container > div {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.audio-text {
		text-align: center;
		margin-top: 10px;
		font-size: 12px;
		font-weight: bold;
		color: #31356e;
		background-color: #fff;
		border-radius: 0 15px 15px 0;
		padding: 10px 12px;
	}

	.audio-buttons {
		display: flex;
		margin-left: 5px;
		margin-top: 0;
		justify-content: center;
		border-radius: 0 20px 20px 0;
		padding: 7px;
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

	.btn-danger {
		background-color: #d9534f;
		color: white;
		border-radius: 20px;
		margin-left: 5px;
		cursor: pointer;
	}	

	.btn-success {
		margin-left: 10px;
		background-color: #5cb85c;
		color: white;
		border-radius: 20px;
		cursor: pointer;
	}

	.btn-light {
		margin-top: 30px;
		background-color: #b0e9e6;
		color: #31356e;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: bold;
		cursor: pointer;
		border-radius: 10px;
		justify-content: center;
		padding: 10px;
	}

	.glyphicon {
		margin-right: 5px;
	}
</style>