<template>
    <td class='editable-cell'>
        <div class='values' v-on:click='editing = true' >
            <span >{{value}}</span>
            <i class='material-icons'>mode_edit</i>       
        </div>

        <div v-if="editing" class='editor'>
            <input ref='input' :value="value" type="text" v-on:input="update()" @keyup.enter="editing=false">                      
            <a-raised-button :variant="'primary'" v-on:click.native='editing = false'>Done</a-raised-button>            
        </div>         
    </td>
    
</template>

<script>
export default {
    props: ['value'],
    methods: {
        update: function(){
            this.$emit('input',this.$refs.input.value);
        }
    },
    data(){
        return {
            editing: false
        }
    }

}
</script>

