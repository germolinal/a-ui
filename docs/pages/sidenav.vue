<template>
  <div v-container v-with-sidenav>
    
    <h1 id="main-header">Sidenav</h1>
    
    <p>
        Sidenav is a set of buttons on the left-side of the screen
    </p>
    
    

    <h2>Navbar</h2>

    <h3>Examples</h3>    

    <p>The following html</p>

    <textarea v-verbatim style="height:210px">
       
    <a-sidenav>
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
    
    <a-sidenav>
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



  </div>
</template>

