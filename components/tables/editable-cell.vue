<template>
    <td class='editable-cell'>
        <div class='values'>
            <span >{{value}}</span>
            <i class='material-icons' v-on:click='editing = true'>mode_edit</i>       
        </div>

        <div v-if="editing" class='editor'>
            <input ref='input' :value="value" type="text" @keyup.enter="update()">                      
            <a-raised-button :variant="'primary'" v-on:click.native="update()">Done</a-raised-button>            
            <a-flat-button :variant="'primary'" v-on:click.native='editing = false'>Cancel</a-flat-button>            
        </div>         
    </td>
    
</template>

<script>
export default {
    props: ['value'],
    methods: {
        update: function(){
            this.$emit('input',this.$refs.input.value);   
            this.editing = false;         
            this.$emit('submit');   
        }
    },
    data(){
        return {
            editing: false
        }
    }

}
</script>

