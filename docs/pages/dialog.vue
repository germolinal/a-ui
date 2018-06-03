<template>
  <div v-container>
    <h1>Dialog</h1>
    
    <p>

    There is only one Dialog available in Clean-UI, which is a modal dialog.       
    </p>

    <h3>Events</h3>

    <a-table>
        <thead>
            <tr><td>Events</td><td>Description</td></tr>
        </thead>
        <tbody>
            <tr>
                <td>close</td><td>Emitted when the dialog is closed</td>
            </tr>
        </tbody>
    </a-table>


    <h3>Properties</h3>

    <a-table>
        <thead>
            <tr><td>Property</td><td>Description</td><td>Type of data</td></tr>
        </thead>
        <tbody>
            <tr>
                <td>title</td><td>The title on the dialog</td><td>String</td>
            </tr>
            <tr>
                <td>actions</td><td>An object with functions</td><td>Object</td>
            </tr>
        </tbody>
    </a-table>


    <h2>Modal Dialog</h2>


    <h3>Example 1</h3>    

    <p>
        Dialogs require you to reference them, and then open them using the 'show()' method when something happens. 
        For example, when a button is clicked.
    </p>

    <p>
        In addition to that, you can put contents into the dialog very easily.
    </p>

    <p>For example, the following html</p>

    <textarea v-verbatim>
        <a-dialog ref='dialogOne'>
            <p>Lets put some content here!</p>
        </a-dialog>
        <a-button :variant="'primary'" @click.native="$refs.dialogOne.show()">Open dialog</a-button>
    </textarea>

    
    <p>Leads to </p>    
    
    <div class="example-content">        
        <a-dialog ref='dialogOne'>
            <p>Lets put some content here!</p>
        </a-dialog>
        <a-button :variant="'primary'" @click.native="$refs.dialogOne.show()">Open dialog</a-button>
    </div>



    <h3>Example 2</h3>    

    <p>
        You can also add a title to the dialog using the ":title" property. This will
        appear in the dialog in a slightly bigger and bold.
    </p>

    <p>The following html</p>

    <textarea v-verbatim>
        
        <a-dialog :title="'I am a title'" ref='dialogTwo'>
            <p>Lets put some content here!</p>
            <a-button :variant="'primary'" >One button inside a dialog</a-button>            
        </a-dialog>
        <a-button :variant="'primary'" @click.native="$refs.dialogTwo.show()">Open dialog</a-button>
        
    </textarea>

    
    <p>Leads to </p>  

    <div class="example-content">
        <a-dialog :title="'I am a title'" ref='dialogTwo'>
            <p>Lets put some content here!</p>
            <a-button :variant="'primary'" >One button inside a dialog</a-button>            
        </a-dialog>
        <a-button :variant="'primary'" @click.native="$refs.dialogTwo.show()">Open dialog</a-button>

    </div>  





    <h3>Example 3</h3>    

    <p>
        You can also include actions to the dialog. In order to do that, an object containing functions (i.e. {'some action' : function(){ console.log('action!')}})
        should passed to the "actions" property. One Raised-Primary button will be added for each function.
    </p>
    <p>
        After calling the function passed to the dialog (i.e. click the corresponding button), the dialog will be closed,
        and the 'close' event will be emitted.
    </p>
    <p>The following html</p>

    <textarea v-verbatim style="height: 220px">
        
        <a-dialog  :actions="actions" :title="'I am a title'" ref='dialogThree'>
            <p>Lets put some content here!</p>
            <a-button :variant="'primary'" >One button inside a dialog</a-button>            
        </a-dialog>
        
        <a-toast ref='myToast'>
            Action called!
        </a-toast>

        <a-button :variant="'primary'" @click.native="$refs.dialogThree.show()">Open dialog</a-button> 

    </textarea>

    
    <p>Leads to </p>    

    <div class="example-content">
        
        <a-dialog  :actions="actions" :title="'I am a title'" ref='dialogThree'>
            <p>Lets put some content here!</p>
            <a-button :variant="'primary'" >One button inside a dialog</a-button>            
        </a-dialog>
        
        <a-toast ref='myToast'>
            Action called!
        </a-toast>

        <a-button :variant="'primary'" @click.native="$refs.dialogThree.show()">Open dialog</a-button>        
    </div>
    



  </div>
</template>

<script>
    export default {
        methods: {
            showToast : function(){
                this.$refs.myToast.show();
            }
        },
        data: function(){
            return{                
                actions: {
                    "Show Toast": this.showToast
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
  
</style>
