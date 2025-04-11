<template>
    <div class="register-container">
      <div class="register-box shadow">
        <h2 class="text-center mb-4">📝 Registro</h2>
        <form>
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre completo</label>
            <input type="text" class="form-control" id="nombre" placeholder="Ingresa tu nombre" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="email" placeholder="correo@ejemplo.com" />
          </div>
          <div class="mb-3">
            <label for="usuario" class="form-label">Nombre de usuario</label>
            <input type="text" class="form-control" id="usuario" placeholder="Nombre de usuario" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" placeholder="Contraseña" />
          </div>
          <div class="d-grid">
            <button type="button" class="btn btn-success">Registrarme</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Registrar"
  }
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to right, #e0f7fa, #b2ebf2);
  }
  
  .register-box {
    background-color: white;
    padding: 2rem;
    border-radius: 15px;
    width: 100%;
    max-width: 450px;
    animation: fadeIn 0.8s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(25px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  input.form-control {
    border-radius: 10px;
    padding: 0.6rem;
    font-size: 1rem;
  }
  
  button.btn {
    padding: 0.6rem;
    font-size: 1.1rem;
    border-radius: 12px;
  }
  </style>
  