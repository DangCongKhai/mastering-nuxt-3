<script setup>

    const data = ref([
        {id : 0, name : 'shirt'},
        {id : 1, name : 'baba'},
        {id : 2, name : 'sab'}
    ])
        

    const reorder = () => {
        data.value = [data.value[1], data.value[2], data.value[0]]
    }

</script>

<template>
   <p> xin chao</p>
    <!-- <button @click="reorder" >Reorder</button>
    <div v-for="product in data" :key= "product.id"
    >
        {{product.name}}
        <input type="number" placeholder="Quantity" />
    </div> -->
</template>