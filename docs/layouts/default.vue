<template>
  <div>
    <a-navbar>

      <nuxt-link to="/buttons">    
        <a-button :variant="'primary'">Buttons</a-button>    
      </nuxt-link>

      <nuxt-link to="/colorpicks">    
        <a-button :variant="'primary'">Color picks</a-button>    
      </nuxt-link>
      
      <nuxt-link to="/dialogs">    
        <a-button :variant="'primary'">Dialogs</a-button>    
      </nuxt-link>

      <nuxt-link to="/inputs">    
        <a-button :variant="'primary'">Inputs</a-button>    
      </nuxt-link>

      <nuxt-link to="/navbar">    
        <a-button :variant="'primary'">Navbar</a-button>    
      </nuxt-link>


      <nuxt-link to="/selects">    
        <a-button :variant="'primary'">Selects</a-button>    
      </nuxt-link>


      <nuxt-link to="/sidenav">    
        <a-button :variant="'primary'">Sidenav</a-button>    
      </nuxt-link>

    </a-navbar>
    
    <nuxt/>
  </div>
</template>

<style lang="scss">


@import "../assets/style.scss"

</style>
