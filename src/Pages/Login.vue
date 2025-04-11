<template>
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="usuario" class="form-label">Usuario</label>
          <input v-model="usuario" type="text" class="form-control" id="usuario" required />
        </div>
        <div class="mb-3">
          <label for="contrasena" class="form-label">Contraseña</label>
          <input v-model="contrasena" type="password" class="form-control" id="contrasena" required />
        </div>
        <button type="submit" class="btn btn-primary">Entrar</button>
      </form>
      <p v-if="error" class="text-danger mt-3">Usuario o contraseña incorrectos</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        usuario: "",
        contrasena: "",
        error: false,
      };
    },
    methods: {
      login() {
        if (this.usuario === "admin" && this.contrasena === "1234") {
          localStorage.setItem("loggedIn", "true");
          this.$router.push("/");
        } else {
          this.error = true;
        }
      },
    },
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
  