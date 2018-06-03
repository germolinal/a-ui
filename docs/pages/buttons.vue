<template>
  <div v-container>
    <h1>Buttons</h1>
    
    <p>

    There are two kinds of buttons in Clean-UI: 
    <a-link :href="'#common-buttons'">Common Buttons</a-link>, 
    <a-link :href="'#flat-buttons'">Flat Buttons</a-link>, and   
    <a-link :href="'#raised-buttons'">Raised Buttons</a-link>.    
    
    All of them allow the following variants:        
    
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
            <tr><td>Property</td><td>Description</td><td>Type of data</td></tr>
        </thead>
        <tbody>
            <tr>
                <td>variant</td><td>Defines the style. See examples</td><td>String</td>
            </tr>                        
        </tbody>
    </a-table>

    <p>
        The variant changes the color of the button, but not the behavior or the size. The colors come from the 
        colors in the theme.
    </p>

    <h2 id='common-buttons'>Common buttons</h2>

    <h3>Example 1</h3>    

    <p>Simple buttons only require text. For example,</p>

    <textarea v-verbatim>
        <a-button :variant="'primary'">Primary</a-button>
        <a-button :variant="'accent'">Accent</a-button>
        <a-button :variant="'warn'">Warn</a-button>
        <a-button :variant="'basic'">Basic</a-button>
        <a-button :variant="'disabled'">Disabled</a-button> 
    </textarea>

    

    <p>Leads to </p>
    <div class="example-content">
        <a-button :variant="'primary'">Primary</a-button>
        <a-button :variant="'accent'">Accent</a-button>
        <a-button :variant="'warn'">Warn</a-button>
        <a-button :variant="'basic'">Basic</a-button>
        <a-button :variant="'disabled'">Disabled</a-button>           
    </div>

    <h3>Example 2</h3>    

    <p>But buttons may also have icons. In such case, it is recommended to use
        a Material Design icon and a span with the text. For example,
    </p>

    <textarea v-verbatim style="height:200px">
        <a-button :variant="'primary'">
            <i class="material-icons">close</i>
            <span> CLOSE</span>
        </a-button>
        <a-button :variant="'accent'">
            <i class="material-icons">menu</i>
            <span> MENU</span>
        </a-button>
        <a-button :variant="'warn'">
            <i class="material-icons">account_box</i>
            <span> Log In</span>
        </a-button>
    </textarea>

    

    <p>Leads to </p>
    <div class="example-content" >
         <a-button :variant="'primary'">
            <i class="material-icons">close</i>
            <span> CLOSE</span>
        </a-button>
        <a-button :variant="'accent'">
            <i class="material-icons">menu</i>
            <span> MENU</span>
        </a-button>
        <a-button :variant="'warn'">
            <i class="material-icons">account_box</i>
            <span> Log In</span>
        </a-button>         
    </div>





    <h2 id='flat-buttons'>Flat buttons</h2>

    <p>
        Inspired in Material Design, flat buttons are meant to represent the secondary actions in dialogs. 
        They are supposed to offer the user some 'other' options, but that are not supposed to be the obvious
        choice (i.e. close).
    </p>

    <h3>Example 1</h3>

    <p>The following html</p>

    <textarea v-verbatim>
        <a-flat-button :variant="'primary'">Primary</a-flat-button>
        <a-flat-button :variant="'accent'">Accent</a-flat-button>
        <a-flat-button :variant="'warn'">Warn</a-flat-button>
        <a-flat-button :variant="'basic'">Basic</a-flat-button>
        <a-flat-button :variant="'disabled'">Disabled</a-flat-button>    
    </textarea>

    <p>Leads to </p>

    <div class="example-content">
        <a-flat-button :variant="'primary'">Primary</a-flat-button>
        <a-flat-button :variant="'accent'">Accent</a-flat-button>
        <a-flat-button :variant="'warn'">Warn</a-flat-button>
        <a-flat-button :variant="'basic'">Basic</a-flat-button>
        <a-flat-button :variant="'disabled'">Disabled</a-flat-button>    
    </div>


    <h3>Example 2</h3>    

    <p>
        Link buttons may also have icons. In such case, it is recommended to use
        a Material Design icon and a span with the text. For example,
    </p>

    <textarea v-verbatim style="height:200px">
        <a-flat-button :variant="'primary'">
            <i class="material-icons">close</i>
            <span> CLOSE</span>
        </a-flat-button>
        <a-flat-button :variant="'accent'">
            <i class="material-icons">menu</i>
            <span> MENU</span>
        </a-flat-button>
        <a-flat-button :variant="'warn'">
            <i class="material-icons">account_box</i>
            <span> Log In</span>
        </a-flat-button>
    </textarea>

    

    <p>Leads to </p>
    
    <div class="example-content" >
        <a-flat-button :variant="'primary'">
            <i class="material-icons">close</i>
            <span> CLOSE</span>
        </a-flat-button>
        <a-flat-button :variant="'accent'">
            <i class="material-icons">menu</i>
            <span> MENU</span>
        </a-flat-button>
        <a-flat-button :variant="'warn'">
            <i class="material-icons">account_box</i>
            <span> Log In</span>
        </a-flat-button>    
    </div>




    <h2 id='raised-buttons'>Raised buttons</h2>

    <p>
        Inspired in Material Design, raised buttons are meant to represent the main button in a dialog. 
        They are supposed to attract the user's attention more than link and normal buttons, and offer 
        access to the main action (i.e. submit, send, accept).
    </p>
    <h3>Example 1</h3>

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


    <h3>Example 2</h3>    

    <p>Raised buttons may also have icons. In such case, it is recommended to use
        a Material Design icon and a span with the text. For example,
    </p>

    <textarea v-verbatim style="height:200px">
        <a-raised-button :variant="'primary'">
            <i class="material-icons">close</i>
            <span> CLOSE</span>
        </a-raised-button>
        <a-raised-button :variant="'accent'">
            <i class="material-icons">menu</i>
            <span> MENU</span>
        </a-raised-button>
        <a-raised-button :variant="'warn'">
            <i class="material-icons">account_box</i>
            <span> Log In</span>
        </a-raised-button>
    </textarea>

    

    <p>Leads to </p>
    
    <div class="example-content" >
        <a-raised-button :variant="'primary'">
            <i class="material-icons">close</i>
            <span> CLOSE</span>
        </a-raised-button>
        <a-raised-button :variant="'accent'">
            <i class="material-icons">menu</i>
            <span> MENU</span>
        </a-raised-button>
        <a-raised-button :variant="'warn'">
            <i class="material-icons">account_box</i>
            <span> Log In</span>
        </a-raised-button>    
    </div>




  </div>
</template>
