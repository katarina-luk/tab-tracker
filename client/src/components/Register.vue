<template>
 <div class="l-auth">
       <v-container fluid>
  <v-row class="justify-content-md-center">
     <v-col cols="12" md="auto">
   <b-card
   bg-variant="light"
    title="Sign Up"
    class="text-center"
    tag="article"
    style="max-width: 25rem;"
    >
        <v-col cols="12" sm="20">
          <!--panel title='Login'-->
            <v-text-field
             label="Email"
                      v-model="email"
                     :rules="[rules, rules.min]"
                       required
                      color="blue darken-2"
                      style="right: 20px; left: 0px; position: absolute;"

                      >
        </v-text-field>
        </v-col> <br>
        <v-col cols="25" sm="12">
        <v-text-field label="Password"
                      prepend-icon="password"
                      style="right: 20px; left: 0px; position: absolute;"
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      counter
                      @click:append="show1 = !show1"
                      required>
        </v-text-field></v-col> <br>
    <div class='danger-alert' v-html='error' />
    <br>
    <v-col class="text-center" >
      <div class="my-2">
    <v-btn    block black @click='register'>Register</v-btn>
          <!--/panel-->
      </div>
    </v-col>
   </b-card>
     </v-col>
  </v-row>
</v-container>

</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationServise'
import Panel from '@/components/globals/Panel'
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
export default {
  data () {
    return {
      email: '',
      error: null,
      show1: false,
      password: '',
      rules: [ (value) => !!value || 'This field is required' ]
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
    MyHeader,
    MyFooter

  }
}
</script>

<style lang="scss">
  @import "../assets/style.scss";
.l-auth {
    background-color: $background-color;
    padding: 15px;
    margin: 45px auto;
    min-width: 320px;
    max-width: 420px;
    animation: bounceIn 1s forwards ease;
      label, input, .icon {
      color: #29b6f6!important;
    }
    .input-group__details {
      &:before {
        background-color: $border-color-input !important;
      }
    }
  }
   .v-input__icon--append .v-icon {
    color: rgb(55, 182, 233);
}

     .box {
          display: flex;
            justify-content: center;
        }
        .card-title{
      font-family: 'Lobster', Georgia, Times, serif;
}
.v-input__prepend-outer{
  display: none;
}
.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot> .v-label .theme--light {
  right: 20px !important;
   left: 0px !important;
   position: absolute !important;
}
.v-text-field__slot> .v-label .theme--light {
  right: 20px !important;
   left: 0px !important;
   position: absolute !important;
}
</style>
