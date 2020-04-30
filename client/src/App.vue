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

<style lang="scss">
  @import "/assets/style.scss";

  body {
    background: url('./assets/images/background.jpg') no-repeat  center center fixed;
    background-size: cover;
    &:after {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: $background-tint;
      opacity: .3;
      z-index: -1;
    }
    .application {
      background: none;
    }
  }
</style>
