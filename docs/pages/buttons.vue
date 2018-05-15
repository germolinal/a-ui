<template>
  <div v-container>
    <h1>Buttons</h1>
    
    <p>

    There are two kinds of buttons in Clean-UI: 
    <a-link :href="'#flat-buttons'">Flat Buttons</a-link>  and 
    <a-link :href="'#raised-buttons'">Raised Buttons</a-link>.    
    
    They both allow the following variants:        
    
    </p>
    <ul>
        <li>Primary: Primary color is used</li>
        <li>Accent: Secondary color is used.</li>
        <li>Warn: Warn color is used.</li>
        <li>Basic: Black is used.</li>
        <li>Disabled: Gray is used.</li>
    </ul>

    <p>
        The variant changes the color of the button, but not the behavior or the size. The colors come from the 
        colors in the theme.
    </p>

    <h2 id='flat-buttons'>Flat buttons</h2>

    <h3>Examples</h3>    

    <p>The following html</p>

    <textarea v-verbatim>
        <a-button :variant="'primary'">Primary</a-button>
        <a-button :variant="'accent'">Accent</a-button>
        <a-button :variant="'warn'">Warn</a-button>
        <a-button :variant="'basic'">Basic</a-button>
        <a-button :variant="'disabled'">Disabled</a-button> 
    </textarea>

    

    <p>Leads to </p>
    <a-button :variant="'primary'">Primary</a-button>
    <a-button :variant="'accent'">Accent</a-button>
    <a-button :variant="'warn'">Warn</a-button>
    <a-button :variant="'basic'">Basic</a-button>
    <a-button :variant="'disabled'">Disabled</a-button>    

    <h2 id='raised-buttons'>Raised buttons</h2>

    <h3>Examples</h3>

    <p>The following html</p>

    <textarea v-verbatim>
        <a-raised-button :variant="'primary'">Primary</a-raised-button>
        <a-raised-button :variant="'accent'">Accent</a-raised-button>
        <a-raised-button :variant="'warn'">Warn</a-raised-button>
        <a-raised-button :variant="'basic'">Basic</a-raised-button>
        <a-raised-button :variant="'disabled'">Disabled</a-raised-button>    
    </textarea>

    <p>Leads to </p>

    <div class="example-content">
        <a-raised-button :variant="'primary'">Primary</a-raised-button>
        <a-raised-button :variant="'accent'">Accent</a-raised-button>
        <a-raised-button :variant="'warn'">Warn</a-raised-button>
        <a-raised-button :variant="'basic'">Basic</a-raised-button>
        <a-raised-button :variant="'disabled'">Disabled</a-raised-button>    
    </div>


  </div>
</template>

<script>

</script>

<style scoped lang='scss'>
  div.test{
      width:auto;
  }
</style>
