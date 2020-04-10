<template>
<v-layout>

      <v-toolbar flat dense fixed class="green" width='100%' dark>
         <v-toolbar-title class='mr-2'>
             <router-link
             class="home"
             tag="span"
             :to="{name:'songs'}">
             TabTrackers
             </router-link>
        </v-toolbar-title>
         <v-toolbar-items>
             <v-btn
              flat
              dark
              :to="{name:'songs'}">
              Browse
            </v-btn>
        </v-toolbar-items>
           <v-spacer></v-spacer>

            <v-toolbar-items>
              <v-btn
               v-if='!$store.state.isUserLoggedIn'
               flat
               dark
               :to="{name:'login'}">
               Login
              </v-btn>
              <v-btn
               v-if='!$store.state.isUserLoggedIn'
               flat
               dark
               :to="{name:'register'}">
               Sign Up
              </v-btn>
            <v-btn
             v-if='$store.state.isUserLoggedIn'
             flat
             dark
            @click="logout">
              Log out
            </v-btn>
        </v-toolbar-items>
      </v-toolbar>
</v-layout>
</template>

<script>
export default {
  logout () {
    this.$store.dispatch('setToken', null)
    this.$store.dispatch('setUser', null)
    this.$router.push({
      name: 'songs'
    })
  }
}
</script>

<style scoped>
.home{
    cursor: pointer;
}
.home:hover{
    color: turquoise;
}

</style>
