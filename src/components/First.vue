<template>
    <div>
        <h1> {{msg}} </h1>
    </div>
</template>

<style scoped>
    h1 {
        color: white;
        padding: 10px 50px;
        background-color: #bbb;
    }
</style>

<script>
export default {
    name: "first_ok",
    props: {
        msg : String
    }
}
</script>