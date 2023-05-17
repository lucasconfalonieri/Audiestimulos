<script>
	let nombreApellido = "";
	let dni = "";
	function submitForm() {
	  console.log(`Nombre y Apellido: ${nombreApellido}`);
	  console.log(`DNI: ${dni}`);
	  // Aquí puedes agregar la lógica adicional que desees para manejar el envío del formulario
	}
  </script>
  
  <style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  
	body {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  height: 95vh;
	  background-color: #F5F5DC;
	  font-family: 'Montserrat', sans-serif;
	}
  
	.container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  background-color: #B2DFDB;
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
	  background-color: #F5F5DC;
	  color: black;
	  border: none;
	  border-radius: 4px;
	  cursor: pointer;
	  font-family: 'Montserrat', sans-serif;
	}
  </style>
  
  <body>
  <div class="container">

	<div class="input-group">
	  <label for="nombreApellido">Nombre y Apellido:</label>
	  <input type="text" id="nombreApellido" bind:value="{nombreApellido}" />
	</div>
   <br>
   
	<div class="input-group">
	  <label for="dni">DNI:</label>
	  <input type="text" id="dni" bind:value="{dni}" />
	</div>
  
	<br>
	
	<button on:click="{submitForm}">Ingresar</button>
  </div>

</body>