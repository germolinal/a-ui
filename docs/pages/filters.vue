<template>
    <div v-container>
        <h1>Filters</h1>

        <p>
            There are some usful filters here
        </p>

        <h2>Fix String</h2>
        <p>
            This filter aims to transform strings from snake case into 'normal' strings
        </p>
        
        <div class="example-content">
            'minimum_length_of_a_string' | fixString 
            <i class="material-icons">arrow_forward</i> 
            {{'minimum_length_of_a_string' | fixString }}
        </div>

        <h2>Limit String</h2>
        <p>
            This filter aims to limit the length of a string
        </p>
        
        <div class="example-content">
            '123456789' | limitString(4) 
            <i class="material-icons">arrow_forward</i> 
            {{'123456789' | limitString(4) }}

            <br><br>  

            '1234' | limitString(4) 
            <i class="material-icons">arrow_forward</i> 
            {{'1234' | limitString(4) }}
        </div>

        <h2>Trim</h2>
        <p>
            This filter trims a string. That is, eliminates blank spaces at the beggining and end of the string.
        </p>
        
        <div class="example-content">
            '    auto     ' | trim 
            <i class="material-icons">arrow_forward</i> 
            {{'    auto     ' | trim }}
        </div>

        <h2>Round</h2>
        <p>
            This filter rounds a number to a certain number of decimals.
        </p>
        
        <div class="example-content">
            10.123123 | round(2) 
            <i class="material-icons">arrow_forward</i> 
            {{10.123123 | round(2) }}
        </div>

        <div class="example-content">
            10.123123 | round(4) 
            <i class="material-icons">arrow_forward</i> 
            {{10.123123 | round(4) }}
        </div>

        <div class="example-content">
            10.123123 | round(0) 
            <i class="material-icons">arrow_forward</i> 
            {{10.123123 | round(0) }}
        </div>

    </div>
</template>


