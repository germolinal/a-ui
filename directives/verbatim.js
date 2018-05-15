export default {
    inserted: function(el){
        el.classList.add("a-verbatim");        
        if(el.tagName === 'TEXTAREA'){
            el.disabled = true;
        }
    }
}