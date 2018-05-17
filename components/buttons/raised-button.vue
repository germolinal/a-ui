<template>

    <button class="a-raised" v-bind:class="variant">   
        <slot>Raised Button Text</slot>        
    </button>
</template>


<script>
export default {
    props: ['variant'],    
}
</script>
