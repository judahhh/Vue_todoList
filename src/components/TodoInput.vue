<template>

<div>
    <form action="post" class="inputBox shadow">
        <input type="text" v-model="Input.todo" placeholder="할일을 입력하세요" >
        <span class="addContainer" @click="submit">
            <i class="fas fa-solid fa-plus addBtn"></i>
        </span>
    </form>



    <Modal v-if="showModal" >
    <!-- slot문법으로 모달 ui재정의 해주기-->
    <template>
        <div>
            
        </div>
    </template>
    </Modal>

</div>


</template>

<script>
import Modal from "./common/Modal.vue"
import api from "../api/index.js"

export default{ 
name:'TodoInput',
components:{
    Modal:Modal,
    
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
                await api.createTodo(data)
            }catch(err){
                console.log(err);
            }
           
        }
    }
}
</script>

<style>
input:focus{
    outline: none;
}
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    /* width:80%; */
    vertical-align: center;
    margin-left: 80px;
    margin-right: 80px;
    
    
}
.inputBox input{
border-style: none;
font-size: 1.5rem;
width:80%;
height:50px; 
/* font-family: 'Open Sans', sans-serif; */

}
.addContainer{
    float: right;
    background-color: rgb(222, 191, 222);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color:white;
     vertical-align: middle; 
   
}
</style>