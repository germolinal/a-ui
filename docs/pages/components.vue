<template>
    <div v-container>


      <nuxt-link to="/buttons">
        <a-button  :variant="'primary'">Buttons</a-button>
      </nuxt-link><br>

      <nuxt-link to="/colorpick">
        <a-button :variant="'primary'">Color pick</a-button>
      </nuxt-link><br>
            
      
      <nuxt-link to="/dialog">
        <a-button :variant="'primary'">Dialog</a-button>
      </nuxt-link><br>
      
      <nuxt-link to="/inputs">
        <a-button :variant="'primary'">Inputs</a-button>
      </nuxt-link><br>

      <nuxt-link to="/links">
        <a-button :variant="'primary'">Links</a-button>
      </nuxt-link><br>

      <nuxt-link to="/navbar">
        <a-button :variant="'primary'">Navbar</a-button>
      </nuxt-link><br>
      
      <nuxt-link to="/select">
        <a-button :variant="'primary'">Select</a-button>
      </nuxt-link><br>

      <nuxt-link to="/sidenav">
        <a-button :variant="'primary'">Sidenav</a-button>
      </nuxt-link><br>
      
      <nuxt-link to="/tables">
        <a-button :variant="'primary'">Tables</a-button>
      </nuxt-link><br>
      
      <nuxt-link to="/feedback">
        <a-button :variant="'primary'">Feedback</a-button>
      </nuxt-link><br>      
    </div>
</template>

<style lang="scss" scoped>
    a-button {
        display: block;
    }
</style>

