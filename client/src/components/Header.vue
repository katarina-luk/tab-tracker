<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand :to="{name:'songs'}">MusicShutter</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name:'player'}">PopularMusic</b-nav-item>
        <!--b-nav-item :to="{name:'songs'}">Home</b-nav-item-->
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

.home{
    cursor: pointer;
}
.navbar-brand {
  font-family: 'Lobster', Georgia, Times, serif;
}
.navbar-nav .nav-link{
  font-family: 'Lobster', Georgia, Times, serif;
  padding-top: 0px;
}

/*.header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}*/

</style>
