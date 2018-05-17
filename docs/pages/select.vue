<template>
  <div v-container>
    
    <h1 id="main-header">Select</h1>
    
    <p>
        The select item basically replaces the default html select.
    </p>
    
    

    <h2>Select</h2>

    <h3>Example 1</h3>    

    <p>Options are passed in an array to the 'options' property</p>

    <textarea v-verbatim >        
        <a-select v-model="selectedOption1" :options="options" ></a-select>
    </textarea>

    
    <p>Leads to </p>   
    
    <div class="example-content" >
        <a-select v-model="selectedOption1" :options="options" ></a-select>
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
                "Option 2  pppppppppppp",
                "Option 3",
                "Option 4",
            ]
        }
    }
}
</script>

