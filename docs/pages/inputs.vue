<template>
  <div v-container>
    
    <h1>Inputs</h1>
    
    <p>
        Inputs have a pretty straightforward use. Allowed properties are:        
    </p>

    

    <h3>Events</h3>

    <a-table>
        <thead>
            <tr><td>Events</td><td>Description</td></tr>
        </thead>
        <tbody>
            <tr>
                <td>enter</td><td>Emitted when keyup === Enter</td>
            </tr>
            <tr>
                <td>input</td><td>Emitted when any input is given</td>
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
                <td>label</td><td>Sets the placeholder and label</td><td>String</td>
            </tr>            
            <tr>
                <td>type</td><td>Can be 'number' or 'string'</td><td>String</td>
            </tr>            
            <tr>
                <td>size</td><td>The width of the input</td><td>Number</td>
            </tr>            
            <tr>
                <td>min</td><td>Minimum value or number of characters (depending on the type)</td><td>Number</td>
            </tr>            
            <tr>
                <td>max</td><td>Maximum value or number of characters (depending on the type)</td><td>Number</td>
            </tr>            
            <tr>
                <td>required</td><td>A boolean indicating if is required</td><td>Boolean</td>
            </tr>
            <tr>
                <td>disabled</td><td>A boolean indicating if disabled</td><td>Boolean</td>
            </tr>
            <tr>
                <td>error</td><td>An error message to show when the input is invalid</td><td>String</td>
            </tr>
        </tbody>
    </a-table>

    

    <h2>Input</h2>

    <h3>Examples</h3>    

    <p>The following html</p>

    <textarea v-verbatim style="height: 350px">
        
        <a-input    :size="20" 
                    :error="'this is the error message'" 
                    :label="'Between 3 and 6 chars'" 
                    :min="3" 
                    :max="6" 
                    :required="true"></a-input>
        
        <a-input    :label="'Any size of text'" 
                    :error="'Required'"
                    :required="true"></a-input>

        <a-input    :error="'Must be etween -10 and 10'" 
                    :label="'Value between -10 and 10'" 
                    :size="17" 
                    :type="'number'" 
                    :min="-10" 
                    :max="10" 
                    :step="2"></a-input>

        <a-input    :label="'Disabled'" 
                    :value="'Cannot use this one'" 
                    :size="17" 
                    :disabled="true"></a-input>
    </textarea>

    
    <p>Leads to </p>   
    
    <div class="example-content">
        <a-input    :size="20" 
                    :error="'this is the error message'" 
                    :label="'Between 3 and 6 chars'" 
                    :min="3" 
                    :max="6" 
                    :required="true"></a-input>
        
        <a-input    :label="'Any size of text'" 
                    :error="'Required'"
                    :required="true"></a-input>

        <a-input    :error="'Must be etween -10 and 10'" 
                    :label="'Value between -10 and 10'" 
                    :size="17" 
                    :type="'number'" 
                    :min="-10" 
                    :max="10" 
                    :step="2"></a-input>

        <a-input    :label="'Disabled'" 
                    :value="'Cannot use this one'" 
                    :size="17" 
                    :disabled="true"></a-input>
        
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
