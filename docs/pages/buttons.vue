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





    <h2 id='raised-buttons'>Raised buttons</h2>

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
