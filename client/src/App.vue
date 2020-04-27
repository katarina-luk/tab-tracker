<template>
  <div id='app'>
   <!-- <PageHeader />
    <img src="./assets/logo.png">-->
    <router-view></router-view>
     <!-- PageFooter/ -->
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  color: #2c3e50;
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
