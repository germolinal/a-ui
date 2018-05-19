<template>
  <div>
    <a-navbar>
      <nuxt-link to='/'>
        <a-button  :variant="'primary'">Home</a-button>
      </nuxt-link>

      <nuxt-link to="/buttons">
        <a-button  :variant="'primary'">Buttons</a-button>
      </nuxt-link>

      <nuxt-link to="/colorpick">
        <a-button :variant="'primary'">Color pick</a-button>
      </nuxt-link>
      
      <nuxt-link to="/dialog">
        <a-button :variant="'primary'">Dialog</a-button>
      </nuxt-link>
      
      <nuxt-link to="/inputs">
        <a-button :variant="'primary'">Inputs</a-button>
      </nuxt-link>

      <nuxt-link to="/links">
        <a-button :variant="'primary'">Links</a-button>
      </nuxt-link>

      <nuxt-link to="/navbar">
        <a-button :variant="'primary'">Navbar</a-button>
      </nuxt-link>
      
      <nuxt-link to="/select">
        <a-button :variant="'primary'">Select</a-button>
      </nuxt-link>

      <nuxt-link to="/sidenav">
        <a-button :variant="'primary'">Sidenav</a-button>
      </nuxt-link>
      
      <nuxt-link to="/tables">
        <a-button :variant="'primary'">Tables</a-button>
      </nuxt-link>
      

      <nuxt-link to="/directives">
        <a-button :variant="'primary'">Directives</a-button>
      </nuxt-link>

      <nuxt-link to="/theming">
        <a-button :variant="'primary'">Theming</a-button>
      </nuxt-link>
      
    </a-navbar>

    <nuxt/>

  </div>
</template>

<script>
var Base = require('~/plugins/base');
export default {
  data(){
    return{      
    }
  }
}
</script>


<style lang='scss'>

@import "../assets/style";

</style>
