<template>
  <div id='app'>
    <PageHeader />
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
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
