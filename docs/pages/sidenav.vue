<template>
  <div v-container v-with-sidenav>
    
    <h1 id="main-header">Sidenav</h1>
    
    <p>
        Sidenav is a set of buttons on the left-side of the screen. It can be used as a fixed
        component, or be hidden and shown when needed, as a contextual menu.
    </p>    
    
    <h3>Events</h3>

    <a-table>
        <thead>
            <tr><td>This component has no events</td></tr>
        </thead>        
    </a-table>


    <h3>Properties</h3>

    <a-table>
        <thead>
            <tr><td>This component has no properties</td></tr>
        </thead>        
    </a-table>
    

    <h2>Navbar</h2>

    <h3>Examples</h3>    

    <p>The following html</p>

    <textarea v-verbatim style="height:310px">
       
    <a-sidenav ref="sidenav">
        <a-sidenav-item v-selected>
            <i class="material-icons">close</i>
            <span>Close</span>    
        </a-sidenav-item>

        <a-sidenav-item>
            <i class="material-icons">code</i>
            <span>Code</span>    
        </a-sidenav-item>

        <a-sidenav-item>
            <i class="material-icons">explore</i>
            <span>Explore</span>    
        </a-sidenav-item>

        <a-sidenav-item>
            <i class="material-icons">question_answer</i>
            <span>Forum</span>    
        </a-sidenav-item>
    </a-sidenav>


    </textarea>

    
    <p>Leads to the sidenav available in this page</p>   
    
    <a-sidenav ref="sidenav">
        <a-sidenav-item v-selected>
            <i class="material-icons">close</i>
            <span>Close</span>    
        </a-sidenav-item>

        <a-sidenav-item>
            <i class="material-icons">code</i>
            <span>Code</span>    
        </a-sidenav-item>

        <a-sidenav-item>
            <i class="material-icons">explore</i>
            <span>Explore</span>    
        </a-sidenav-item>

        <a-sidenav-item>
            <i class="material-icons">question_answer</i>
            <span>Forum</span>    
        </a-sidenav-item>
    </a-sidenav>

    <p>It is also possible to hide, show and toggle the sidenav by calling thise methods. For instance:</p>

    <textarea v-verbatim style="height:30px">
        <a-button :variant="'primary'" v-on:click.native="$refs.sidenav.hide()">Hide Sidenav</a-button>
        <a-button :variant="'primary'" v-on:click.native="$refs.sidenav.show()">Show Sidenav</a-button>
        <a-button :variant="'primary'" v-on:click.native="$refs.sidenav.toggle()">Toggle Sidenav</a-button>
    </textarea>

    <a-button :variant="'primary'" v-on:click.native="$refs.sidenav.hide()">Hide Sidenav</a-button>
    <a-button :variant="'primary'" v-on:click.native="$refs.sidenav.show()">Show Sidenav</a-button>
    <a-button :variant="'primary'" v-on:click.native="$refs.sidenav.toggle()">Toggle Sidenav</a-button>

  </div>
</template>

