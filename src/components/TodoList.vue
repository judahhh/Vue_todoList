<template>

<div>
    <router-view></router-view>
     <form action="post" class="inputBox shadow" @submit.prevent>
        <input type="text" v-model="Input.todo" 
        placeholder="할일을 입력하세요" @keypress.enter.prevent="submit">
        <span class="addContainer" @click="submit" >
            <i class="fas fa-solid fa-plus addBtn"></i>
        </span>
    </form>


    <div v-for="(todo,idx) in this.$store.state.todoList" :key="idx"
    class="List">
    <div>
        <!-- <div class="ListNum"> No : {{todo.id}}</div> -->
        <span @click="getDetail(todo.id)"> {{todo.todo}}</span>
         <i class="fas fa-trash-alt btnDelete"
        @click="todoDelete(todo.id)"></i>
    </div>
    </div>
   



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
// import api from '../api/index.js';

export default{ 
name:'TodoList',
components:{
     Modal:Modal,
},
data(){
    return{
        // todoList:[],
           showModal:false,
        todo:'',
        Input:{
            todo:''
          }
    };
 },
    setup(){},
    created(){
         this.$store.dispatch('GET_DATA');
    },
    mounted(){
        // this.init();
    },
    unmounted(){}, 
    methods:{
         async submit(){
            try{
                const data={
                 todo:this.Input.todo
                 }
                //  api함수 불러오기
                this.$store.dispatch('CREATE_DATA',data);
                this.$store.dispatch('GET_DATA');
                this.Input.todo=''

            }catch(err){
                console.log(err);
            }
           
        },
        async todoDelete(id){
            try{
             this.$store.dispatch('DELETE_DATA',id);
            //  id--;
              this.$store.dispatch('GET_DATA');
            }catch(err){
                console.log(err);
            }

        },
        async getDetail(id){
            try{
                //  console.log(id);
                this.$router.push(
                  `/TodoDetail/${id}`,
                 
                    )
            }catch(err){
                console.log(err)
            }
        }
    },
        init(){
            
        },
        // getTodoAll(){
        //     try{
        //     const res= api.getTodoAll();
        //     this.todoList=res.data.todoList
            
        //     }catch(err){
        //         console.log(err);
        //     }
        // }
    }

</script>

<style>
body{
     
font-family: 'Open Sans', sans-serif;
 
}
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
    margin-bottom:30px;
    
    
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
.List{

    margin :30px;
    font-size: 25px;

}
/* .ListNum{
   font-size: 18px; 
} */
.btnDelete{
    margin:0px;
    margin-left: 20px;
}
</style>