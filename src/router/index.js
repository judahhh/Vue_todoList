import { createWebHistory, createRouter } from "vue-router";
// 여기에 컴포넌트를 import해와야 밑에다 적을 수 있음
import TodoDetail from '@/components/TodoDetail.vue';
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
const routes = [
    {
      path: "/TodoDetail/:id",//여기로 접속하면 아래 컴포넌트를 보여줌
      // 컴포넌트를 import해와서 적기
      name:'TodoDetail',
      component: TodoDetail,
    },
    {
      path:"/Login",
      component:Login
    },
    {
      path:"/Register",
      component:Register
    }

    
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router; 