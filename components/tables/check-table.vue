<template>
    <a-double-entry-table>
        <thead>
            <tr>
                <td></td>
                <td v-for="(col,index) in columns" v-bind:key="index">{{col}}</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row,index) in allRows" v-bind:key="index">
                <td>{{row}}</td>
                <td v-on:click="check(row,value[col])" class="selectable check-cell" v-for="(col,index) in columns" v-bind:key="index">
                    <i v-if="isChecked(row,value[col])" class="material-icons">check</i>
                </td>
            </tr>
        </tbody>
    </a-double-entry-table>
</template>
<script>
export default {
    methods:{
        isChecked : function(option,col){
            return col.includes(option);
        },
        check: function(option,col){
            if(col.includes(option)){                
                var index = col.indexOf(option);                
                col.splice(index, 1);                
            }else{
                col.push(option);
            }
        }
    },
    computed:{
        columns: function(){
            if(this.value){                
                return Object.keys(this.value);
            }else{
                return [];
            }
        },
        allRows: function(){
            if(this.rows){
                return this.rows;
            }
            var ret = [];
            var cols = this.columns;
            for(var i=0; i<cols.length; i++){
                var checks = this.value[cols[i]];                
                for(var j=0; j<checks.length; j++){  
                    var check = checks[j];                  
                    if(!ret.includes(check)){
                        ret.push(check)
                    }
                }
            }

            return ret;
        }        
    },
    props:[
        'value','rows'
    ]        
}
</script>
