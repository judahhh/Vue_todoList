<template>
 <div>
  <TodoHeader/>
  <!-- <TodoInput/> -->
  <TodoList/>
  <TodoFooter/>

 </div>
 
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
// import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',
  components: {
   TodoHeader:TodoHeader,
  //  TodoInput:TodoInput,
   TodoList:TodoList,
   TodoFooter:TodoFooter
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
body{
  background-color: rgb(234, 234, 234);
  text-align: center;
}
input{
  width:200px;
  border-style: groove;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
}
</style>
