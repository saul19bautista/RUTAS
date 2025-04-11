<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form>
      <div class="mb-3">
        <label for="usuario" class="form-label">Usuario</label>
        <input type="text" class="form-control" id="usuario" placeholder="Ingresa tu usuario" />
      </div>
      <div class="mb-3">
        <label for="contrasena" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="contrasena" placeholder="Ingresa tu contraseña" />
      </div>
      <button type="button" class="btn btn-primary">Entrar</button>
    </form>
    <p class="text-danger mt-3" style="display: none;">Usuario o contraseña incorrectos</p>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
