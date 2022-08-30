<template>

<div>{{this.content.todo}}</div>

</template>

<script>
//  import api from '../api/index.js';

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
        this.getContent()
       
    },   
    mounted(){  },
    unmounted(){},
    methods:{
        async getContent(){
            try{
                //  const res=await api.getTodoDetail(this.DetailId)
                // this.content=res.data
            
               this.$store.dispatch('GET_DATA_DETAIL',this.DetailId);
               this.content=this.$store.state.todoList
               
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