<template>
  <div>
    <a-navbar>
      <nuxt-link :to='base'>
        <a-button  :variant="'primary'">Home</a-button>
      </nuxt-link>

      <nuxt-link :to="base+'/buttons'">
        <a-button  :variant="'primary'">Buttons</a-button>
      </nuxt-link>

      <nuxt-link :to="base+'/colorpick'">
        <a-button :variant="'primary'">Color pick</a-button>
      </nuxt-link>
      
      <nuxt-link :to="base+'/dialog'">
        <a-button :variant="'primary'">Dialog</a-button>
      </nuxt-link>
      
      <nuxt-link :to="base+'/inputs'">
        <a-button :variant="'primary'">Inputs</a-button>
      </nuxt-link>

      <nuxt-link :to="base+'/links'">
        <a-button :variant="'primary'">Links</a-button>
      </nuxt-link>
      

      <nuxt-link :to="base+'/directives'">
        <a-button :variant="'primary'">Directives</a-button>
      </nuxt-link>

      <nuxt-link :to="base+'/theming'">
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
      base: ""
    }
  }
}
</script>


<style lang='scss'>

@import "../assets/style";

</style>
