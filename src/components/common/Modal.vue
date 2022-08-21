<template>

<div>
    <div>
    <div class="modal-header">
        <slot name="header">경고</slot>
    </div>

    <div class="madal-body">
         <slot name="body">경고 내용</slot>
    </div>
    <button class="modal-close">X</button>
   </div>

</div>

</template>

<script>

export default{ 
name:'MoDal',
components:{
},
data(){
    return{
        showModal:false,
};
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>

<style>
</style>