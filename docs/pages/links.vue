<template>
  <div v-container>
    
    <h1 id="main-header">Links</h1>
    
    <p>
        Links are intended to be use within text.
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
                <td>href</td><td>The destination of the link.</td><td>String</td>
            </tr>                        
        </tbody>
    </a-table>

    
    

    <h2>Link</h2>

    <h3>Examples</h3>    

    <p>The following html</p>

    <textarea v-verbatim>
                
        <p>
            Links can lead to sections within the website (i.e. the <a-link :href="'#main-header'">main header</a-link>),
            or they can lead to an external website (i.e. <a-link :href="'http://www.github.com'">Github.com</a-link> ).
        </p>
        <p>
            Mind the '#' and the 'http://' for each kind of link.
        </p>

    </textarea>

    
    <p>Leads to </p>   
    
    <div class='example-content'>

        <p>
            Links can lead to sections within the website (i.e. the <a-link :href="'#main-header'">main header</a-link>),
            or they can lead to an external website (i.e. <a-link :href="'http://www.github.com'">Github.com</a-link> ).
        </p>
        <p>
            Mind the '#' and the 'http://' for each kind of link.
        </p>
    </div>



  </div>
</template>

<script>
    export default {
        data: function(){
            return{
                
            }
        }
    }
</script>

<style scoped lang='scss'>
  input{
      width: 4em;
  }
</style>
