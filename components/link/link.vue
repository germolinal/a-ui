<template>

    <span v-on:click="scroll" :href="href" class="a-link">   
        <slot>Link text</slot>        
    </span>
</template>


<script>
export default {
    props: ['href'],  
    methods:{
        scroll: function(){
            if(!this.href){
                return;
            }
            if(this.href.startsWith('#')){
                document.querySelector(this.href).scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }else{
                window.location=this.href;
            }
            
        }
    },
    data: function(){
        return {

        }
    }  
}
</script>
