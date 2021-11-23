<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>  {{teste}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
   return {
      teste: ''
   }
  },
  methods: {

  getVal(){
      axios.get('/teste').then(res => {
      this.teste = res.data.var
      console.log(res.data)
    })
  }

  },
  created(){
    this.getVal()
  }
}
</script>
