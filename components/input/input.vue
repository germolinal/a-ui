<template>

  <div ref="main" class="a-input">                     
        <input             
                v-on:keyup.enter="$emit('enter')"
                ref="in" 
                :disabled="disabled" 
                :min="min" 
                :max="max" 
                :size="size || 14" 
                :value="value"                 
                @input="update()">
      
    <label>{{label | fixString}}</label>    
    <small v-if="error">{{error | fixString}}</small>
    
  </div>

</template>

<script>
//import FixString from "../../filters/fix-string";

export default {
    props: ['value','label','type','step','size','min','max','required','disabled','error'],
    
    methods: {
        update() {
            var input = this.$refs.in;
            var main = this.$refs.main;
            var value = input.value;     

            // Check pristinness        
            if(!value ){
                main.classList.remove('non-pristine');                
            }else {
                main.classList.add('non-pristine');
            }            
        
            // Check validity          
            if(this.required){
                if(!value){
                    main.classList.add('invalid');                     
                    return;               
                }else{
                    main.classList.remove('invalid');                    
                }
            } 

            if(this.type === 'number'){                    
                if (isNaN(value)){                
                    main.classList.add('invalid');                    
                }else{
                    var n = Number(value);
                    if((this.min && n < this.min) || (this.max && n > this.max)){
                        main.classList.add('invalid');                    
                    }else{
                        main.classList.remove('invalid');                    
                    }
                }                
                this.$emit('input', parseFloat(value));
            }else{
                if(!value){
                    main.classList.remove('invalid');                                            
                }else{
                    if((this.min && this.min > value.length) || (this.max && this.max < value.length)){
                        main.classList.add('invalid');
                    }else{
                        main.classList.remove('invalid');                    
                    }
                }
                this.$emit('input', value)
            }
                
        }
    },
    mounted(){
        this.update();
    }
};
</script>

<style lang="scss" scoped>
    
</style>
