<template>

    <button class="a-common" v-bind:class="variant">   
        <slot>Flat Button Text</slot>        
    </button>
</template>


<script>
export default {
    props: ['variant'],    
}
</script>
