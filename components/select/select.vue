<template>
  <div class="a-select">
    <div @click="active = !active" class="a-selected" ref="sel">
        <span>{{selectedOption}}</span>
        <i class="material-icons">arrow_drop_down</i>
    </div>
    <div class="items" v-if="active">        
        <span v-for="(o, index) in options" :key="index" @click="chooseOption(o)">
            {{o}}
        </span>     
    </div>
  </div>
</template>

<script>

export default {
    props: ['value','options','placeholder'],    
    computed: {
        selectedOption: function(){
            if(!this.value){                
                return this.placeholder ? this.placeholder : "Select an option...";
            }else{                
                return this.value;
            }
        }
    },
    methods: {
        chooseOption(optionName){            
            this.$emit('input', optionName); 
            this.$emit('change');
            this.active = false;
        }
    },
    data(){
        return {
            active : false
        }
    }
};
</script>
