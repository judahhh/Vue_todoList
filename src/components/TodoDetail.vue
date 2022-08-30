<template>

<div>Todo Detail Context</div>

</template>

<script>
// import api from '../api/index.js';

export default{ 
name:'TodoDetail',
components:{
},
data(){
    return{
        DetailId:this.$route.params.id,
        content:{}
};
    }, 
    setup(){},
    created(){
        this.getContent();
    },   
    mounted(){},
    unmounted(){},
    methods:{
        async getContent(){
            try{
                // const res=await api.getTodoDetail(id)
                this.$store.dispatch('GET_DATA_DETAIL',this.DetailId);
               if(this.$store.state.todoList.id==this.DetailId)
               this.content=this.$store.state.todoList.todo
            }
            catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style>
</style>