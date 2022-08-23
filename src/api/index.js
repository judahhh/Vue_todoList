import axios from 'axios'

// 1. HTTP Reqest &Response와 관련된 기본 설정
const instance = axios.create({
   proxy:{
      baseURL: 'http://52.79.172.230:3001',
      changeOrigin: true
   }
  })

// 2. API 함수들을 정리
function createTodo (data) {
   return instance.post(`/todo`, data);
    
  }
function getTodoAll(){
    return instance.get(`/todo`);
}
function getTodoDetail(id){
    return instance.get(`/todo/${id}`);
}

function editTodo  (id,data) {
    return instance.put(`/todo/${id}`,data);
     
}
function deleteTodo (id) {
    return instance.delete(`/todo/${id}`);
     
}
//   여기 꼭  export default 로 내보내줘야함
  export default{
    createTodo,
    getTodoAll,
    getTodoDetail,
    editTodo,
    deleteTodo,
   
    
    
    
}