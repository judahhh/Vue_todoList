import axios from 'axios'

// 1. HTTP Reqest &Response와 관련된 기본 설정
const config={
    baseUrl:''
}

// 2. API 함수들을 정리
function createTodo () {
   return axios.get(`${config.baseUrl}news/1.json`);
    
  }
function editTodo () {
    return axios.get(`${config.baseUrl}jobs/1.json`);
     
}
function deleteTodo () {
    return axios.get(`${config.baseUrl}ask/1.json`);
     
}
   
  export {
    createTodo,
    editTodo,
    deleteTodo
    
    
}