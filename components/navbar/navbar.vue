<template>
  
    <div class="a-navbar">
        <a-button :variant="'primary'" v-on:click.native="toggle()" class="a-open-navbar">            
                <i class="material-icons">menu</i>                        
        </a-button>

        <div class='a-actions' v-children-close ref="menu">            
            <a-button class="a-close-navbar" :variant="'primary'"  >
                <i class="material-icons">close</i>
                <a>
                    CLOSE
                </a>
            </a-button>
            <slot></slot>
        </div>

        <div v-on:click="toggle()" class='a-curtain'></div>
    </div>

</template>

<script>
export default {
  
    methods: {
        toggle: function(){            
            this.$refs.menu.classList.toggle("a-shown");
        }
    },
    directives: {
        childrenClose : {
            inserted: function(e){
                var children = e.children;
                const n = children.length;
                for(var i=0; i< n; i++){
                    var element = children[i];                    
                    if(element.tagName === 'INPUT'){
                        continue;
                    }
                    element.onclick = function(){
                        e.classList.toggle("a-shown");
                    }
                }
                
            }
        }
    }      
}
</script>

