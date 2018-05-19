<template>
  <div class="a-sidenav"> 
    <div class='wrap' v-select>
        <slot></slot>
    </div>         
  </div>
</template>

<script>
export default {  
    directives:{
        
        select : {
            inserted: function(el){
                var children = el.children;
                
                // Handle the OnClick event
                for(var i=0; i<children.length; i++){                                
                    // Unselect all elements, except with the one clicked                
                    
                    children[i].onclick=function(){                                        
                        
                        for(var j=0; j<children.length; j++){
                            children[j].classList.remove("a-selected");
                        }
                        this.classList.add("a-selected");
                    }// end of OnClick function
                    
                }
            }
        }
    },
    data(){
        return {

        }
    }
}
</script>


