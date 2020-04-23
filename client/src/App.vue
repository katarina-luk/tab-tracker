<template>
  <div id='app'>
   <!-- <PageHeader />
    <img src="./assets/logo.png">-->
    <router-view></router-view>
     <!-- PageFooter/ -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin: 0%;
  padding: 0%;
  width: 100%;
  height: 100%;

}

 .input-group--text-field input{
   border-bottom: 1px solid black;
 }
 .toolbar__title{
   color: white;
 }
.btn__content{
  color: white;
}
.layout.column{
  text-align: center;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 100px;
}

.layout.column>.flex{
   margin-left: 30%;
    margin-right: 30%;
}
.danger-alert{
  color: red;
  margin-bottom: 5px;
}

</style>
