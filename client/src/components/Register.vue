<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="example@gmail.com" />
    <br />
    <input type="password" name="password" v-model="password" placeholder="password" />
    <br />
    <div class="error" v-html="error" />
    <button @click.prevent="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
