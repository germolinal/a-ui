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

    <textarea v-verbatim style="height:210px">
        <a-navbar>
            <a-button :variant="'primary'">Home</a-button>                        
            <a-button :variant="'primary'">Buttons</a-button>            
            <a-button :variant="'primary'">Color pick</a-button>    
            <a-button :variant="'primary'">Dialog</a-button>            
            <a-button :variant="'primary'">Inputs</a-button>            
            <a-button :variant="'primary'">Links</a-button>
            <a-button :variant="'primary'">Navbar</a-button>
            <a-button :variant="'primary'">Directives</a-button>
            <a-button :variant="'primary'">Theming</a-button>            
        </a-navbar>

    </textarea>

    
    <p>Leads to something very similar to the navigation on top of this documentation website</p>   
    



  </div>
</template>

