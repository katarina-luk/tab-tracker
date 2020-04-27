<template>
<div>
 <my-header />
 <b-container fluid >
  <b-row class="justify-content-md-center">
     <b-col cols="12" md="auto">
   <b-card
    title="Login"
    img-src= "https://i.pinimg.com/originals/c5/71/54/c5715484a6bcc1b2bb46b2c4334dbca5.gif"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 25rem;"
    >
          <!--panel title='Login'-->
    <v-text-field v-model='email' label='Email'></v-text-field> <br>
    <v-text-field v-model='password' label='Password' type='password'></v-text-field>
    <br>
    <div class='danger-alert' v-html='error' />
    <br>
    <v-btn class='cyan mb-5' black @click='login'>Login</v-btn>
          <!--/panel-->
   </b-card>
     </b-col>
  </b-row>
</b-container>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationServise'
import Panel from '@/components/globals/Panel'
import MyHeader from '@/components/Header.vue'
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
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel,
    MyHeader
  }
}
</script>

<style scoped>

@media (max-width: 400px) {
  body, html {
    width: 100%;
    height: 100%;
  }
        .box {
          display: flex;
            justify-content: center;
        }
}

</style>
