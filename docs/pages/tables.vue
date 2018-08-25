<template>
  <div v-container >
    
    <h1 id="main-header">Tables</h1>
    
    <p>
        Tables are meant to show information in a clear way.
    </p>
    
    

    <h2>Simple table</h2>

    <h3>Example</h3>    

    <p>The following html</p>

    <textarea v-verbatim style="height:410px">
       <a-table>
         <thead>
            <tr>
                <td>Head 1</td>
                <td>Head 2</td>
                <td>Head 3</td>
            </tr>
        </thead>  

        <tbody>
            <tr>
                <td>Body 1.1</td>
                <td>Body 1.2</td>
                <td>Body 1.3</td>
            </tr>
            <tr>
                <td>Body 2.1</td>
                <td>Body 2.2</td>
                <td>Body 2.3</td>
            </tr>
            <tr>
                <td>Body 3.1</td>
                <td>Body 3.2</td>
                <td>Body 3.3</td>
            </tr>
        </tbody>
    </a-table>

    </textarea>

    
    <p>Leads to </p>   
    <div class="example-content" >
      <a-table>
          <thead>
              <tr>
                  <td>Head 1</td>
                  <td>Head 2</td>
                  <td>Head 3</td>
              </tr>
          </thead>  

          <tbody>
              <tr>
                  <td>Body 1.1</td>
                  <td>Body 1.2</td>
                  <td>Body 1.3</td>
              </tr>
              <tr>
                  <td>Body 2.1</td>
                  <td>Body 2.2</td>
                  <td>Body 2.3</td>
              </tr>
              <tr>
                  <td>Body 3.1</td>
                  <td>Body 3.2</td>
                  <td>Body 3.3</td>
              </tr>
          </tbody>
      </a-table>
    </div>


    <h2>Double entry table</h2>

    <h3>Example</h3>    

    <p>The following html</p>

    <textarea v-verbatim style="height:440px">
       <a-double-entry-table>
         <thead>
            <tr>
                <td></td>
                <td>Column 1</td>
                <td>Column 2</td>
                <td>Column 3</td>
            </tr>
        </thead>  

        <tbody>
            <tr>
                <td>Row 1</td>
                <td>Item 1.1</td>
                <td>Item 1.2</td>
                <td>Item 1.3</td>
            </tr>
            <tr>
                <td>Row 2</td>
                <td>Item 2.1</td>
                <td>Item 2.2</td>
                <td>Item 2.3</td>
            </tr>
            <tr>
                <td>Row 3</td>
                <td>Item 3.1</td>
                <td>Item 3.2</td>
                <td>Item 3.3</td>
            </tr>
        </tbody>
    </a-double-entry-table>

    </textarea>

    
    <p>Leads to </p>   
    <div class="example-content" >
      <a-double-entry-table>
         <thead>
            <tr>
                <td></td>
                <td>Column 1</td>
                <td>Column 2</td>
                <td>Column 3</td>
            </tr>
        </thead>  

        <tbody>
            <tr>
                <td>Row 1</td>
                <td>Item 1.1</td>
                <td>Item 1.2</td>
                <td>Item 1.3</td>
            </tr>
            <tr>
                <td>Row 2</td>
                <td>Item 2.1</td>
                <td>Item 2.2</td>
                <td>Item 2.3</td>
            </tr>
            <tr>
                <td>Row 3</td>
                <td>Item 3.1</td>
                <td>Item 3.2</td>
                <td>Item 3.3</td>
            </tr>
        </tbody>
    </a-double-entry-table>

    </div>



    <h2>Check table</h2>

    <h3>Example</h3>    

    <p>The following html</p>

    <textarea v-verbatim >
       data =  {
        'column 1':['row 1','row 3'], 
        'column 2':['row 1', 'row 2','row 3'],
        'column 3':['row 1', 'row 2']},      
    };
      <a-check-table v-model="data" :rows="rows"></a-check-table>

    </textarea>

    
    <p>Leads to </p>   
    <div class="example-content" >
      data = {{data}};
      <a-check-table v-model="data" :rows="rows"></a-check-table>
    </div>



    <h2>Editable cells</h2>

    <h3>Example</h3>    

    <p>The following html</p>

    <textarea v-verbatim style="height: 250px">
       
      <a-double-entry-table>
          <thead>
              <tr>
                  <td>Column 1</td>
                  <td>Column 2</td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Row 1</td>

                  <a-editable-cell v-model="editableValue"></a-editable-cell>
              </tr>
          </tbody>
      </a-double-entry-table>

    </textarea>

    
    <p>Leads to </p>   
    <div class="example-content" >
      <a-double-entry-table>
          <thead>
              <tr>
                  <td>Column 1</td>
                  <td>Column 2</td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Row 1</td>

                  <a-editable-cell :type="'number'" v-model="editableValue"></a-editable-cell>
              </tr>
          </tbody>
      </a-double-entry-table>

      {{editableValue}}
      <br>    
      {{typeof editableValue}}
    </div>





  </div>
</template>

<script>
export default {
  data(){
    return{
      rows: ['row 1', 'row 2','row 3'],
      data: {
        'column 1':['row 1','row 3'], 
        'column 2':['row 1', 'row 2','row 3'],
        'column 3':['row 1', 'row 2']
        },
        editableValue: 'value'      
    }
  }
}
</script>


