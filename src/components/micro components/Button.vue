<script>
export default {
    props: {
        fillTxt: String
    }
}

</script>

<template>
    <button>{{ fillTxt }}</button>
</template>

<style lang="scss" scoped>
button {
    background-color: transparent;
    font-size: 30px;
    border-color: rgb(151, 151, 151);
    color: rgb(206, 206, 206);
    padding: 5px 35px;
}
</style>