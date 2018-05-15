<template>
  <div class="a-dialog-outer">
      <div class="a-dialog-inter" >          
        <div class="a-dialog-title">
            <h2 v-if="title" >{{title}}</h2>            
            <i v-on:click="$emit('close')" class="material-icons">close</i>            
        </div>

        <div class="a-dialog-body">
            <slot>
              default body
            </slot>
        </div>

        <div class="a-dialog-footer">
          <a-raised-button :variant='"primary"' v-for='(func, name, index) in actions' :key='index' v-on:click.native='func()'>{{name}}</a-raised-button>
          <a-button :variant="'primary'" v-on:click.native="$emit('close')">Close</a-button>            
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

