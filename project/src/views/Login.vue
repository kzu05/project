<template>
  <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <router-link to="/signup">Sign up here</router-link>.</p>
    <p class="text-base md:text-xl">The quick brown fox jumps over the lazy dog.</p>

    <span class="text-[500px]">HELLO RONNIE</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Handle login logic here
      console.log("Logging in with:", this.email, this.password);
    }
  }
};
</script>

<style scoped>
.auth-container {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
}
.form-group {
  margin-bottom: 15px;
}
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
