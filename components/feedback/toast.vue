<template>
    <p v-bind:class="{showing : showing}" class='a-toast'>
        <slot>This is a Toast</slot>    
    </p>
</template>

<script>
export default {
    props: ['duration'],
    methods: {
        show : function(time){
            time = time || 1.8;

            this.showing = true;
            var t = this;
            setTimeout(function(){
                t.showing=false;
            },time*1000)
        }
    },
    data(){
        return{
            showing: false
        }
    }
        
}
</script>

