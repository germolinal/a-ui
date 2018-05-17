<template>

    <button class="a-flat" v-bind:class="variant">   
        <slot>Flat Button Text</slot>        
    </button>
</template>


<script>
export default {
    props: ['variant'],    
}
</script>
