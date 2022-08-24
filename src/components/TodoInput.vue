<template>

<div>
   

</div>


</template>

<script>

// import api from "../api/index.js"

export default{ 
name:'TodoInput',
components:{
   
    
},
data(){
    return{
        showModal:false,
        todo:'',
        Input:{
            todo:''
          }
};
    },
    setup(){},
    created(){

    },
    mounted(){},
    unmounted(){},
    methods:{
        async submit(){
            try{
                const data={
                 todo:this.Input.todo
                 }
                //  api함수 불러오기
                this.$store.dispatch('CREATE_DATA',data);
            }catch(err){
                console.log(err);
            }
           
        }
    }
}
</script>

<style>

</style>