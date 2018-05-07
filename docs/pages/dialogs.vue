<template>
  <div v-fluid id="t">
      
      <h1>Simple Dialog</h1>
      <p>
        Dialog!
      </p>

    <a-raised-button :variant="'primary'"
    v-on:click.native="showCreateDialog = !showCreateDialog"
    >Show dialog</a-raised-button>
      
    <a-dialog :actions="dialogActions" :title="'Create a new material'" v-if="showCreateDialog" @close="showCreateDialog = false">        
        
          Hello, I am a dialog   
    </a-dialog>

  </div>
</template>


<script>
export default {
  data : function(){
      return{
          showCreateDialog : false,
          dialogActions: {
            'Create material' : function(){
            console.log("Create!");
            }
        }
      }
  }
}
</script>

<style>

  #t{
    padding-top:0.5in;
  }

  
</style>
