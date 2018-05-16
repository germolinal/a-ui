<template>
  <div v-container>
    
    <h1 id="main-header">Navbar</h1>
    
    <p>
        The Navbar is a basic responsive element that helps the user navigate and find options that
        are specific for the page being viewed. It gets hidden when the screen is small.
    </p>
    
    

    <h2>Navbar</h2>

    <h3>Examples</h3>    

    <p>The following html</p>

    <textarea v-verbatim style="height:550px">
        <a-navbar>
            <nuxt-link to='base'>
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
            

            <nuxt-link to="/directives">
                <a-button :variant="'primary'">Directives</a-button>
            </nuxt-link>

            <nuxt-link to="/theming">
                <a-button :variant="'primary'">Theming</a-button>
            </nuxt-link>
        
        </a-navbar>

    </textarea>

    
    <p>Leads to something very similar to the navigation on top of this documentation website</p>   
    



  </div>
</template>

