<template>

<div>
    <div v-for="(todo,idx) in todoList" :key="idx">
        <div>{{todo}}</div>
    </div>
</div>

</template>

<script>
import api from '../api/index.js';

export default{ 
name:'TodoList',
components:{
},
data(){
    return{
        todoList:[]
};
    },
    setup(){},
    created(){},
    mounted(){
        this.init();
    },
    unmounted(){},
    methods:{
        init(){
            
        },
        getTodoAll(){
            try{
            const res= api.getTodoAll();
            this.todoList=res.data.todoList
            
            }catch(err){
                console.log(err);
            }
        }
    }
}
</script>

<style>
body{
    font-family: 'Open Sans', sans-serif;
}
</style>