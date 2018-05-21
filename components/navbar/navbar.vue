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
                    if(element.tagName === 'INPUT' ){
                        element.addEventListener("keyup", function(event) {                            
                            event.preventDefault();                            
                            if (event.keyCode === 13) {                                
                                e.classList.toggle("a-shown");
                            }
                        });
                    }else if(element.tagName === 'DIV' && element.classList.contains('a-input')){                        
                        element.children[0].addEventListener("keyup", function(event) {                            
                            event.preventDefault();                            
                            if (event.keyCode === 13) {                                
                                e.classList.toggle("a-shown");
                            }
                        });                           
                    }else{
                        element.onclick = function(){
                            e.classList.toggle("a-shown");
                        }
                    }
                }
                
            }
        }
    }      
}
</script>

