<template>
    <td class='editable-cell'>
        <div class='values'>
            <span >{{value}}</span>
            <i class='material-icons' v-on:click='editing = true'>mode_edit</i>       
        </div>

        <div v-if="editing" class='editor'>
            <input ref='input' :value="value" @keyup.enter="update()">   
            <small v-if="!isValid" class='warn'>* This needs to be a number</small>            
            <a-raised-button :variant="'primary'" v-on:click.native="update()">Done</a-raised-button>            
            <a-flat-button :variant="'primary'" v-on:click.native='editing = false'>Cancel</a-flat-button>            
        </div>         
    </td>
    
</template>


<script>
export default {
    props: ['value','type'],    
    methods: {
        update: function(){
            var v = this.$refs.input.value;
            if(this.type === 'number'){
                if(isNaN(parseFloat(v)) ){
                    this.isValid = false; 
                    return;
                }
                this.isValid = true;
                v = parseFloat(v);                
            }
            this.$emit('input',v);   
            this.editing = false;         
            this.$emit('submitCell');   
        }        
    },
    data(){
        return {
            editing: false,
            isValid:true
        }
    }

}
</script>

