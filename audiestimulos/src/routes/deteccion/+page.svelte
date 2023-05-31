<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

    const progress = tweened(0, {
      duration: 400,
      easing: cubicOut
    });

	let activeTab = 1;
	let identif1 = 0;
	let identif2 = 0;

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

	function cambiarValor(det, num) {
		localStorage.setItem(det, num)
		if(det == "detec1"){
			identif1 = num
		} else {
			identif2 = num
		}
	}

	function nextpage() {
		goto('/discriminacion');
	}
	onMount(() => {
		if(localStorage.getItem("detec1")){
			identif1 = localStorage.getItem("detec1")
		}else{
			identif1 = 0
		}
		if(localStorage.getItem("detec2")){
			identif2 = localStorage.getItem("detec2")
		}else{
			identif2 = 0
		}
	});
</script>

<title>Detección</title>
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
				<h2>DETECCIÓN</h2>
				<p>En este nivel el paciente debe poder identificar la presencia de un sonido.</p>
			</div>

			<div class="audio-container">
				<div>
					<button class="audio-button" on:click={() => playAudio('/audio1-nivel1.mpeg')}>
						<span
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="60"
								height="60"
								fill="#31356E"
								class="bi bi-volume-up-fill"
								viewBox="0 0 16 16"
							>
								<path
									d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"
								/>
								<path
									d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"
								/>
								<path
									d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"
								/>
							</svg></span
						>
					</button>
					{#if identif1 == 0}
						<p class="audio-text">¿Pudo identificar el sonido?</p>
					{/if}
					{#if identif1 == 1}
						<p class="audio-textok">¿Pudo identificar el sonido?</p>
					{/if}
					{#if identif1 == 2}
						<p class="audio-textno">¿Pudo identificar el sonido?</p>
					{/if}
					
					{#if identif1 == 0}
						<div class="audio-buttons">
							<button class="btn btn-danger" on:click={() => cambiarValor("detec1",2)}>
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
							<button class="btn btn-success" on:click={() => cambiarValor("detec1", 1)}>
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
					{/if}
					{#if identif1 == 1}
						<div class="audio-buttons">
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
					{/if}
					{#if identif1 == 2}
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
						</div>
					{/if}
				</div>

				<div>
					<button class="audio-button" on:click={() => playAudio('/audio2-nivel1.mpeg')}>
						<span
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="60"
								height="60"
								fill="#31356E"
								class="bi bi-volume-up-fill"
								viewBox="0 0 16 16"
							>
								<path
									d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"
								/>
								<path
									d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"
								/>
								<path
									d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"
								/>
							</svg></span
						>
					</button>
					{#if identif2 == 0}
						<p class="audio-text">¿Pudo identificar el sonido?</p>
					{/if}
					{#if identif2 == 1}
						<p class="audio-textok">¿Pudo identificar el sonido?</p>
					{/if}
					{#if identif2 == 2}
						<p class="audio-textno">¿Pudo identificar el sonido?</p>
					{/if}

					{#if identif2 == 0}
						<div class="audio-buttons">
							<button class="btn btn-danger" on:click={() => cambiarValor("detec2", 2)}>
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
							<button class="btn btn-success" on:click={() => cambiarValor("detec2", 1)}>
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
					{/if}
					{#if identif2 == 1}
					<div class="audio-buttons">
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
					{/if}
					{#if identif2 == 2}
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
						</div>
					{/if}
				</div>
			</div>
			<progress value={0.2}></progress>
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
		border-radius: 0 20px 20px 20px;
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #cfefd7;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		padding: 8px 12px;
	}

	.audio-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;
	}

	.audio-container > div {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.audio-text {
		text-align: center;
		margin-top: 10px;
		font-size: 14px;
		font-weight: bold;
		color: #31356e;
		background-color: #fff;
		border-radius: 0 15px 15px 0;
		padding: 14px 12px;
	}

	.audio-textok {
		text-align: center;
		margin-top: 10px;
		font-size: 14px;
		font-weight: bold;
		color: #31356e;
		background-color: #5cb85c;
		border-radius: 0 15px 15px 0;
		padding: 14px 12px;
	}

	.audio-textno {
		text-align: center;
		margin-top: 10px;
		font-size: 14px;
		font-weight: bold;
		color: #31356e;
		background-color: #d9534f;
		border-radius: 0 15px 15px 0;
		padding: 14px 12px;
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
		color: #fff;
		padding: 10px;
		border-radius: 50px;
		cursor: pointer;
		justify-content: center;
	}

	.btn-success {
		background-color: #5cb85c;
		margin-left: 5px;
		color: #fff;
		cursor: pointer;
		border-radius: 50px;
		justify-content: center;
	}

	.btn-light {
		margin-top: 10px;
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
	progress {
		margin-top: 50px;
		display: block;
		width: 100%;
	}
</style>