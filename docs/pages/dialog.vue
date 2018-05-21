<template>
  <div v-container>
    <h1>Dialog</h1>
    
    <p>

    There is only one Dialog available in Clean-UI, which is a modal dialog.       
    </p>
    

    <h2>Modal Dialog</h2>

    <h3>Example 1</h3>    

    <p>
        Dialogs require you to set a variable to toggle them. This needs to be done
        by setting the "v-if" and the "@close" property to the dialog component; and 
        by adding a "show" to a button (or certain event that would show the dialog).
    </p>

    <p>
        In addition to that, you can put contents into the dialog very easily.
    </p>

    <p>For example, the following html</p>

    <textarea v-verbatim>
        <a-button :variant="'primary'" @click.native="showDialog1 = true">Open dialog</a-button>
        
        <a-dialog v-if="showDialog1"  @close="showDialog1 = false">
            <p>Lets put some content here!</p>
        </a-dialog>
    </textarea>

    
    <p>Leads to </p>    
    
    <div class="example-content">
        <a-button :variant="'primary'" @click.native="showDialog1 = true">Open dialog</a-button>
        <a-dialog v-if="showDialog1" @close="showDialog1 = false">
            <p>Lets put some content here!</p>
        </a-dialog>
    </div>



    <h3>Example 2</h3>    

    <p>
        You can also add a title to the dialog using the ":title" property. This will
        appear in the dialog in a slightly bigger and bold.
    </p>

    <p>The following html</p>

    <textarea v-verbatim>
        
        <a-button  :variant="'primary'" @click.native="showDialog2 = true">Open dialog</a-button>
        
        <a-dialog :title="'I am a title'" v-if="showDialog2"  @close="showDialog2 = false">
            <p>Lets put some content here!</p>
            <a-button :variant="'primary'" >One button inside a dialog</a-button>            
        </a-dialog>
    </textarea>

    
    <p>Leads to </p>  

    <div class="example-content">
        <a-button  :variant="'primary'" @click.native="showDialog2 = true">Open dialog</a-button>
            
        <a-dialog :title="'I am a title'" v-if="showDialog2"  @close="showDialog2 = false">
            <p>Lets put some content here!</p>
            
            <a-button :variant="'primary'" >One button inside a dialog</a-button>            
        </a-dialog>
    </div>  





    <h3>Example 3</h3>    

    <p>
        You can also include actions to the dialog. In order to do that, an object containing functions 
        should passed to the ":actions" property. One Raised-Primary button will be added for each function. 
    </p>
    <p>The following html</p>

    <textarea v-verbatim>
        
        <a-button :variant="'primary'" @click.native="showDialog3 = true">Open dialog</a-button>
        
        <a-dialog :actions="actions" :title="'I am a title'" v-if="showDialog3"  @close="showDialog3 = false">
            <p>Lets put some content here!</p>
            <a-button :variant="'primary'" >One button inside a dialog</a-button>            
        </a-dialog>
    </textarea>

    
    <p>Leads to </p>    

    <div class="example-content">
        <a-button  :variant="'primary'" @click.native="showDialog3 = true">Open dialog</a-button>
            
        <a-dialog :actions="actions" :title="'I am a title'" v-if="showDialog3"  @close="showDialog3 = false">
            <p>Lets put some content here!</p>
            
            <a-button :variant="'primary'" >One button inside a dialog</a-button>            
        </a-dialog>
    </div>


  </div>
</template>

<script>
    export default {
        data: function(){
            return{
                showDialog1: false,
                showDialog2: false,
                showDialog3: false,
                actions: {
                    "Test": function(){
                        alert("Test");
                    }
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
  
</style>
