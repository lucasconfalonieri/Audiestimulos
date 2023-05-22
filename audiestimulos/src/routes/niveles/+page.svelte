<script>
    import { onMount } from 'svelte';
  
    let activeTab = 1;
  
    let levels = [
      { id: 1, name: 'Detección', content: 'Contenido del Nivel 1' },
      { id: 2, name: 'Discriminación', content: 'Contenido del Nivel 2' },
      { id: 3, name: 'Identificación', content: 'Contenido del Nivel 3' },
      { id: 4, name: 'Reconocimiento', content: 'Contenido del Nivel 4' },
      { id: 5, name: 'Comprensión', content: 'Contenido del Nivel 5' }
    ];
  
    let currentLevel = levels.find(level => level.id === activeTab);
  
    function changeTab(tabId) {
      activeTab = tabId;
      currentLevel = levels.find(level => level.id === activeTab);
    }
  
    function handleKeyPress(event, tabId) {
      if (event.key === 'Enter' || event.key === ' ') {
        changeTab(tabId);
      }
    }
  
    onMount(() => {
      // Aquí puedes realizar acciones adicionales cuando el componente se monta, como redireccionar a la nueva URL
      // o realizar lógica específica para el nivel seleccionado
    });
  </script>
  
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
    {currentLevel.content}
  </div>


  <style>
    .tab {
      display: inline-block;
      padding: 10px 20px;
      background-color: #eee;
      cursor: pointer;
      border-radius: 4px 4px 0 0;
      margin-right: 5px;
    }
  
    .tab.active {
      background-color: #ccc;
    }
  
    .content {
      background-color: #f5f5f5;
      padding: 20px;
      border-radius: 0 4px 4px 4px;
    }
  </style>
  

  
  

  