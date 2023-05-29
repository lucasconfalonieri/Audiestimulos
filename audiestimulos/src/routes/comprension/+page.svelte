<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
  
    let activeTab = 5;
  
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
      goto('/fin');
    }
  
    onMount(() => {
      // Aquí puedes realizar acciones adicionales cuando el componente se monta
    });
  
    let startBox = null;
    let endBox = null;
  
    function handleBoxClick() {
      if (!startBox) {
        startBox = this;
        this.style.backgroundColor = "yellow";
      } else if (!endBox) {
        endBox = this;
        this.style.backgroundColor = "yellow";
        connectBoxes();
      }
    }
  
    function connectBoxes() {
      const startBoxRect = startBox.getBoundingClientRect();
      const endBoxRect = endBox.getBoundingClientRect();
  
      const arrow = document.createElement("div");
      arrow.classList.add("arrow");
  
      if (startBoxRect.top < endBoxRect.top) {
        arrow.classList.add("down");
      } else {
        arrow.classList.add("up");
      }
  
      const startX = startBoxRect.left + startBoxRect.width / 2;
      const startY = startBoxRect.top + startBoxRect.height / 2;
      const endX = endBoxRect.left + endBoxRect.width / 2;
      const endY = endBoxRect.top + endBoxRect.height / 2;
  
      const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
  
      const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  
      arrow.style.left = startX + "px";
      arrow.style.top = startY + "px";
      arrow.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      arrow.style.width = distance + "px";
  
      document.body.appendChild(arrow);
  
      startBox.style.backgroundColor = "";
      endBox.style.backgroundColor = "";
  
      startBox = null;
      endBox = null;
    }
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
          <h2>COMPRENSIÓN</h2>
          <p>En este nivel el paciente debe poder realizar distintas tareas cognitivas del lenguaje.</p>
        </div>
  
        <div class="boxes">
            <button class="box" on:click={handleBoxClick} on:keydown={(event) => handleKeyPress(event, 'box1')}></button>
            <button class="box" on:click={handleBoxClick} on:keydown={(event) => handleKeyPress(event, 'box2')}></button>
        </div>
          
          
  
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
      border-radius: 20px 0 20px 20px;
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
  
    .boxes {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  
    .box {
      width: 100px;
      height: 100px;
      background-color: #b0e9e6;
      margin-right: 10px;
      cursor: pointer;
    }
  
    .arrow {
      position: absolute;
      height: 4px;
      background-color: white;
      z-index: 1;
    }
  
    .arrow.up {
      top: 0;
    }
  
    .arrow.down {
      bottom: 0;
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
  