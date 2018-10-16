<template>
  <div>
    <a-navbar>

      <nuxt-link to='/'>
        <a-button  :variant="'primary'">Home</a-button>
      </nuxt-link>

      <nuxt-link to='/components'>
        <a-button  :variant="'primary'">Components</a-button>
      </nuxt-link>


      <nuxt-link to="/directives">
        <a-button :variant="'primary'">Directives</a-button>
      </nuxt-link>

      <nuxt-link to="/filters">
        <a-button :variant="'primary'">Filters</a-button>
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
