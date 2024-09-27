<template>
  <div class="auth-container">
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required />
      </div>

      <button type="submit">Signup</button>
    </form>
    <p>Already have an account? <router-link to="/login">Login here</router-link>.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    signup() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Handle signup logic here
      console.log("Signing up with:", this.email, this.password);
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
