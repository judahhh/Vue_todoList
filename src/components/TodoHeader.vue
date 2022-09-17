<template>

<div>
    <header>
       
        <div>
        <!-- 로그인 -->
        <!-- <router-link to="/Login" >로그인 </router-link> -->
        <span @click="goLogin">로그인</span>


         <!-- 회원가입 -->
         <!-- <router-link to="/Register"> 회원가입</router-link> -->
        
          <span @click="goRegister">회원가입</span>
          <div>commit1</div>
        
         </div>
    <h1>TODO it!!</h1>

    </header>
</div>

</template>

<script>

export default{ 
name:'TodoHeader',
components:{
},
data(){
    return{
};
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        goLogin(){
        this.$router.push('/Login');
        },
        goRegister(){
        this.$router.push('/Register');

        }
    }
}
</script>

<style>
h1{
    margin:30px;
    font-family: 'DynaPuff', cursive;
}
</style>