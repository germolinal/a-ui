<template>
  <div id="a-dialog-outer">
      <div id="a-dialog-inter" >          
        <div id="a-dialog-title">
            <h2 v-if="title" >{{title}}</h2>            
            <i @click="$emit('close')" class="material-icons">close</i>            
        </div>

        <div class="a-dialog-body">
            <slot>
              default body
            </slot>
        </div>

        <div class="a-dialog-footer">
          <a-raised-button :variant='"primary"' v-for='(func, name, index) in actions' :key='index' @click='func()'>{{name}}</a-raised-button>
          <a-button :variant="'primary'">Close</a-button>            
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props:['title','actions'],
  data(){
      return {}
  }
}
</script>

