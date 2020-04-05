<template>
<v-layout column>
  <v-flex>
      <div class="pa-4 ma-2">
    <div class="white elevation-2 d-flex flex-column mb-6">
      <v-toolbar  dense dark>
        <v-toolbar-title >Login</v-toolbar-title>
      </v-toolbar>
    <v-text-field v-model='email' label='Email'></v-text-field> <br>
    <v-text-field v-model='password' label='Password' type='password'></v-text-field>
    <br>
    <div class='error' v-html='error' />
    <br>
    <v-btn class='cyan' @click='login'>Login</v-btn>
    </div>
    </div>
  </v-flex>
</v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationServise'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
 }
</style>
