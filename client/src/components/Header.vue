<template>
<v-layout>

      <v-toolbar flat dense fixed class="green" width='100%' dark>
         <v-toolbar-title class='mr-2'>
             <span
             class="home"
             @click="navigateTo({name:'root'})">
            TabTrackers
             </span>
        </v-toolbar-title>
         <v-toolbar-items>
            <v-btn flat dark>
                Browser
            </v-btn>
        </v-toolbar-items>
           <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat dark
            @click="navigateTo({name:'login'})">
               Login
            </v-btn>
            <v-btn flat dark
            @click="navigateTo({name:'register'})">
               Sign Up
            </v-btn>
        </v-toolbar-items>
      </v-toolbar>
</v-layout>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
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
