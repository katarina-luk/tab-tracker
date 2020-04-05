<template>
<v-layout column>
  <v-flex>
      <div class="pa-4 ma-2">
    <div class="white elevation-2 d-flex flex-column mb-6">
      <v-toolbar  dense dark>
        <v-toolbar-title >Register</v-toolbar-title>
      </v-toolbar>
      <form name="tab-tracker-form" autocomplete="off">
    <v-text-field v-model='email' label='Email'></v-text-field> <br>
    <v-text-field v-model='password' label='Password' type='password' autocomplete='new-password'></v-text-field>
      </form>
    <br>
    <div class='error' v-html='error' />
    <br>
    <v-btn class='cyan' @click='register'>Register</v-btn>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
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
