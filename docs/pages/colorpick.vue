<template>
  <div v-container>
    <h1>Color Picks</h1>
    
    <p>

    There is only one color pick available for now in Clean-UI.       
    </p>
    

    <h2>RGB color pick</h2>

    <h3>Examples</h3>    

    <p>The following html</p>

    <textarea v-verbatim>
        <!-- NOTE THAT YOU NEED TO DEFINE A PROPERTY CALLED color -->

        
        <a-hsv-color-pick v-model="color"></a-hsv-color-pick> 
    </textarea>

    
    <p>Leads to </p>    
    
    <div class="example-content">
        <a-hsv-color-pick v-model="color"></a-hsv-color-pick> 
    </div>


  </div>
</template>

<script>
    export default {
        data: function(){
            return{
                color: {r: 60, g: 60, b: 60}
            }
        }
    }
</script>

<style scoped lang='scss'>
  input{
      width: 4em;
  }
</style>
