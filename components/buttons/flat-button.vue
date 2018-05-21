<template>

    <button class="a-flat" v-bind:class="variant">   
        <slot>Simple Button Text</slot>        
    </button>
    
</template>


<script>
export default {
    props: ['variant'],    
}
</script>
