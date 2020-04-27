<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand :to="{name:'songs'}">MusicShutter</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name:'songs'}">Browse</b-nav-item>
        <b-nav-item :to="{name:'songs'}">Home</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
               <b-navbar-nav right>
        <b-nav-item  v-if='!$store.state.isUserLoggedIn' :to="{name:'login'}">Login</b-nav-item>
        <b-nav-item   v-if='!$store.state.isUserLoggedIn' :to="{name:'register'}">Sign Up</b-nav-item>
        <b-nav-item  v-if='$store.state.isUserLoggedIn' @click="logout"> Log out</b-nav-item>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<!--v-layout >
      <v-toolbar flat dense fixed class="green" width='100%' row dark>
         <v-toolbar-title class='mr-2'>
             <router-link
             class="home"
             tag="span"
             :to="{name:'songs'}">
             MusicShutter
             </router-link>
        </v-toolbar-title>
         <v-toolbar-items>
             <v-btn
              flat
              class="st"
              dark
              :to="{name:'songs'}">
              Browse
            </v-btn>
        </v-toolbar-items>
         <v-toolbar-items>
             <v-btn
              flat
              dark
              id="scroll">
              Home
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
</v-layout-->
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbDropdownItem } from 'mdbvue'
export default {
  name: 'NavbarPage',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbInput
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scoped>
h1{
  color: red;
}
.home{
    cursor: pointer;
}
.home:hover{
    color: turquoise;
}
.scroll {
  width: 100px;
  height: 2250px;
  background: #cccccc;
}

h4 > .scroll {
  color: red;
}
.header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
@media screen and (max-width: 550px) {
.st{
  color: red;
}
}
</style>
