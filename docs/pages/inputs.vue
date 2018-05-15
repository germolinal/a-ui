<template>
  <div v-container>
    
    <h1>Inputs</h1>
    
    <p>
        Inputs have a pretty straightforward use. Allowed properties are:        
    </p>
    <ul>
        <li>
            label: This works as a placeholder as well
        </li>
        <li>
            type: Defaults to text
        </li>
        <li>
            size: Defines the width of the input
        </li>
        <li>
            min: Define the minimum value (or number of characters, in case of text)
        </li>
        <li>
            max: Define the maximum value (or number of characters, in case of text)
        </li>
        <li>
            required: Defines if a value is required or not
        </li>
    </ul>
    

    <h2>Input</h2>

    <h3>Examples</h3>    

    <p>The following html</p>

    <textarea v-verbatim>
        
        <a-input :label="'Between 3 and 6 chars'" :min="3" :max="6" :required="true"></a-input>
        <a-input :label="'Any size of text'" ></a-input>
        <a-input :label="'Value between -10 and 10'" :size="17" :type="'number'" :min="-10" :max="10" :step="2"></a-input>


    </textarea>

    
    <p>Leads to </p>   
    
    <div class="example-content">
        <a-input :label="'Between 3 and 6 chars'" :min="3" :max="6" :required="true"></a-input>
        <a-input :label="'Any size of text'" ></a-input>
        <a-input :label="'Value between -10 and 10'" :size="17" :type="'number'" :min="-10" :max="10" :step="2"></a-input>
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
