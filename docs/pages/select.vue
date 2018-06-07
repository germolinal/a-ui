<template>
  <div v-container>
    
    <h1 id="main-header">Select</h1>
    
    <p>
        The select item basically replaces the default html select.
    </p>
    
    
    <h3>Events</h3>

    <a-table>
        <thead>
            <tr><td>Events</td><td>Description</td></tr>
        </thead>
        <tbody>
            <tr>
                <td>change</td><td>Emitted when the option is changed</td>
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
                <td>options</td><td>An array with the available options</td><td>Array of String</td>
            </tr>
            <tr>
                <td>placeholder</td><td>Text to show when no option is selected</td><td>String</td>
            </tr>
        </tbody>
    </a-table>


    <h2>Select</h2>

    <h3>Example 1</h3>    

    <p>Options are passed in an array to the 'options' property</p>

    <textarea v-verbatim >        
        <a-select @change="$refs.selectChanged.show()" v-model="selectedOption1" :options="options" ></a-select>
        <a-toast ref='selectChanged'>Select changed to '\{\{selectedOption1\}\}'</a-toast>
    </textarea>

    
    <p>Leads to </p>   
    
    <div class="example-content" >
        <a-select @change="$refs.selectChanged.show()" v-model="selectedOption1" :options="options" ></a-select>
        <a-toast ref='selectChanged'>Select changed to '{{selectedOption1}}'</a-toast>
    </div>


    <h3>Example 2</h3>    

    <p>The default placeholder can be replace by using the 'placeholder' property</p>

    <textarea v-verbatim >        
        <a-select v-model="selectedOption2" :options="options" :placeholder="'My custom placeholder...'"></a-select>
    </textarea>

    
    <p>Leads to </p>   
    
    <div class="example-content" >
        <a-select v-model="selectedOption2" :options="options" :placeholder="'My custom placeholder...'"></a-select>
    </div>


    

  </div>
</template>

<script>
export default {
    data(){
        return {
            selectedOption1: null,
            selectedOption2: null,
            options: [
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4",
            ]
        }
    }
}
</script>

