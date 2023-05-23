<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let activeTab = 1;

  let levels = [
    { id: 1, name: 'Nivel 1', url: '/deteccion' },
    { id: 2, name: 'Nivel 2', url: '/discriminacion' },
    { id: 3, name: 'Nivel 3', url: '/identificacion' },
    { id: 4, name: 'Nivel 4', url: '/reconocimiento' },
    { id: 5, name: 'Nivel 5', url: '/comprension' }
  ];

  let currentLevel = levels.find(level => level.id === activeTab);

  function changeTab(tabId) {
    activeTab = tabId;
    currentLevel = levels.find(level => level.id === activeTab);
    goto(currentLevel.url);
  }

  function handleKeyPress(event, tabId) {
    if (event.key === 'Enter' || event.key === ' ') {
      changeTab(tabId);
    }
  }

  onMount(() => {
    // Aquí puedes realizar acciones adicionales cuando el componente se monta
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

<style>
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .tab {
    padding: 10px 20px;
    background-color: #F5F5F5;
    color: #333;
    cursor: pointer;
    border: none;
    border-bottom: 2px solid transparent;
    font-size: 16px;
    border-radius: 4px 4px 0 0;
    margin-right: 5px;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }

  .tab:hover {
    background-color: #E0E0E0;
  }

  .tab.active {
    background-color: #4CAF50;
    color: #FFF;
    border-color: #4CAF50;
  }
</style>



  
  

  