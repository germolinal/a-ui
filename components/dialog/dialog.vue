<template>
  <div v-bind:class="{open: open}" class="a-dialog-outer">
      <div class="a-dialog-inter" >          
        <div class="a-dialog-title">
            <h2 v-if="title" >{{title}}</h2>            
            <i v-on:click="show()" class="material-icons">close</i>            
        </div>

        <div class="a-dialog-body">
            <slot>
              default body
            </slot>
        </div>

        <div class="a-dialog-footer">
          <a-raised-button :variant='"primary"' v-for='(func, name, index) in actions' :key='index' v-on:click.native='func()'>{{name}}</a-raised-button>
          <a-flat-button :variant="'primary'" v-on:click.native="show()">Close</a-flat-button>            
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props:['title','actions'],
  methods: {    
    show: function(){
      this.open = !this.open;
    }
  },
  data(){
      return {
        open: false
      }
  }
}
</script>

