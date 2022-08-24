import { createStore } from "vuex"
import api from '../api/index.js';

const store = createStore({
    state () {
      return {
       todoList:[]

      }
      
    },
      mutations :{
     SET_TODO(state,data){
      state.todoList=data;
      
     }
      },
      actions:{
    // 서버에서 api 호출하여 통신하는것은 actions에서
     
    CREATE_DATA(context,data){
        api.createTodo(data)
        .then(res=>{
          console.log(res);
          // context.commit('SET_TODO',data)
        })
        .catch(err=>{
          console.log(err);
        }) 
      },

      GET_DATA(context){
          api.getTodoAll()
          .then(res=>{
            console.log(res);
            context.commit('SET_TODO',res.data);
  
          })
          .catch(err=>{
            console.log(err);
          }) 
          
      },
     
      GET_DATA_DETAIL(context,id){
        api.getTodoDetail(id)
        .then(res=>{
          console.log(res);

        })
        .catch(err=>{
          console.log(err);
        }) 
      },
     
      DELETE_DATA(context,id){
        api.deleteTodo(id)
        .then(res=>{
          console.log(res);
          context.commit('SET_TODO',res.data);

        })
        .catch(err=>{
          console.log(err);
        }) 
      },
   
      EDIT_DATA(context,id){
        api.editTodo(id)
        .then(res=>{
          console.log(res);

        })
        .catch(err=>{
          console.log(err);
        }) 
      }

        
      },
      getters:{

      }
    }
  
)
export default store;