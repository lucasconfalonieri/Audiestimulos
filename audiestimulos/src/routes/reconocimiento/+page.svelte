<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
  
    let activeTab = 4;
    let reconom1 = 0;
    let reconom2 = 0;
  
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
      goto('/comprension');
    }
    
    function cambiarValor(det, num) {
      localStorage.setItem(det, num)
      if(det == "reconom1"){
        reconom1 = num
      }else{
        reconom2 = num
      }
    }

    onMount(() => {
      if(localStorage.getItem("reconom1")){
			  reconom1 = localStorage.getItem("reconom1")
      }else{
          reconom1 = 0
      }
      if(localStorage.getItem("reconom2")){
        reconom2 = localStorage.getItem("reconom2")
      }else{
        reconom2 = 0
      }
    });
  </script>
  
  <body>
    <div class="page-container">
      <div class="tabs">
        {#each levels as level}
        <button
          class="tab {activeTab === level.id ? 'active' : ''}"
          on:click={() => changeTab(level.id)}
          on:keydown={(event) => handleKeyPress(event, level.id)}>
          {level.name}
        </button>
        {/each}
      </div>
  
      <div class="content">
        <div class="level-info">
          <h2>RECONOCIMIENTO</h2>
          <p>En este nivel el paciente debe poder repetir enunciados sin apoyo gráfico.</p>
        </div>
  
        <div class="enunciado-content">
          <p class="enunciado-label">PRIMER ENUNCIADO</p>
          {#if reconom1 == 0}
            <div class="enunciado">
              <p class="enunciado-text">MI HERMANO SE FUE A DORMIR TEMPRANO</p>
            </div>
          {/if}
          {#if reconom1 == 1}
          <div class="enunciadook">
            <p class="enunciado-text">MI HERMANO SE FUE A DORMIR TEMPRANO</p>
          </div>
          {/if}
          {#if reconom1 == 2}
          <div class="enunciadono">
            <p class="enunciado-text">MI HERMANO SE FUE A DORMIR TEMPRANO</p>
          </div>
          {/if}
        </div>
        {#if reconom1 == 0}
          <div class="buttons-container">
            <p>¿Pudo repetir el enunciado?</p>
            <button type="button" class="btn btn-danger" on:click={() => cambiarValor("reconom1", 2)}><span class="material-icons"><svg
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
            <button type="button" class="btn btn-success" on:click={() => cambiarValor("reconom1", 1)}><span class="material-icons"><svg
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
        {/if}
        {#if reconom1 == 1}
          <div class="buttons-container">
            <p>¿Pudo repetir el enunciado?</p>
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
        {/if}
        {#if reconom1 == 2}
          <div class="buttons-container">
            <p>¿Pudo repetir el enunciado?</p>
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
          </div>
        {/if}

        <div class="enunciado-content">
          <p class="enunciado-label">SEGUNDO ENUNCIADO</p>
          {#if reconom2 == 0}
            <div class="enunciado">
              <p class="enunciado-text">MI ABUELA ME ESPERA EN SU CASA</p>
            </div>
          {/if}
          {#if reconom2 == 1}
            <div class="enunciadook">
              <p class="enunciado-text">MI ABUELA ME ESPERA EN SU CASA</p>
            </div>
          {/if}
          {#if reconom2 == 2}
            <div class="enunciadono">
              <p class="enunciado-text">MI ABUELA ME ESPERA EN SU CASA</p>
            </div>
          {/if}
        </div>
        {#if reconom2 == 0}
          <div class="buttons-container">
            <p>¿Pudo repetir el enunciado?</p>
            <button type="button" class="btn btn-danger" on:click={() => cambiarValor("reconom2", 2)}><span class="material-icons"><svg
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
            <button type="button" class="btn btn-success" on:click={() => cambiarValor("reconom2", 1)}><span class="material-icons"><svg
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
        {/if}
        {#if reconom2 == 1}
          <div class="buttons-container">
            <p>¿Pudo repetir el enunciado?</p>
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
        {/if}
        {#if reconom2 == 2}
          <div class="buttons-container">
            <p>¿Pudo repetir el enunciado?</p>
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
          </div>
        {/if}

        <button type="button" class="btn btn-light" on:click={nextpage}>Siguiente nivel</button>
      </div>
    </div>
  </body>
  
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
  
    .enunciado-content {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      margin-right: 30px;
    }
  
    .enunciado-label {
      font-size: 10px;
      font-weight: bold;
      color: #FFF;
      margin-bottom: 5px;
    }
  
    .enunciado {
      background-color: #C9E6E0;
      padding: 10px;
      border-radius: 20px;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    
    .enunciadono {
      background-color: #d9534f;
      padding: 10px;
      border-radius: 20px;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .enunciadook {
      background-color: #5cb85c;
      padding: 10px;
      border-radius: 20px;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .enunciado-text {
      font-size: 12px;
      color: #000;
      font-weight: bold;
      margin: 0;
      padding: 2px 10px;
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

    .buttons-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 0;
        margin-bottom: 20px;
	}

	.buttons-container p {
		margin-right: 0;
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