<template>
    <span class='a-contextual-menu'>
        <slot></slot> 
    </span>
</template>

<script>
export default {
    methods: {
        show: function (x,y){                        
            this.$refs['all'].style.display="block";  
            this.$refs['all'].style.left=10+x+"px";  
            this.$refs['all'].style.top=10+y+"px";  
                     
        },
        hide: function(){
            this.$refs['all'].style.top=-100+"px";            
        }
    }
}
</script>


