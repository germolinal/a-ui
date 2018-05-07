<template>
  <div v-fluid id="t">
      
      <h1>Flat buttons</h1>
      <p>
        Written using 'button'
      </p>
      <a-button :variant="'primary'">Primary</a-button>
      <a-button :variant="'accent'">Accent</a-button>
      <a-button :variant="'warn'">Warn</a-button>
      <a-button :variant="'basic'">Basic</a-button>

      <h1>Raised buttons</h1>
      
      <p>
        Written using 'button'
      </p>
      
      

      <a-raised-button :variant="'primary'">Primary</a-raised-button>
      <a-raised-button :variant="'accent'">Accent</a-raised-button>
      <a-raised-button :variant="'warn'">Warn</a-raised-button>
      <a-raised-button :variant="'basic'">Basic</a-raised-button>

  </div>
</template>



<style>

  #t{
    padding-top:0.5in;
  }

  
</style>
