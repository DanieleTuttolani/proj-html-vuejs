<script>
export default {
    props: {
        list: Array
    }
}
</script>

<template>
    <nav class="d-flex align-items-center">
        <div class="list-wrapper">
            <ul class="d-flex ">
                <a href="#" v-for="link in list">
                    <li>{{ link }}</li>
                </a>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.header-wrapper {
    min-height: 170px;

    img {
        scale: 0.8;
    }

    ul {
        padding: 0;

        li {
            color: white;
            padding: 5px 30px;
        }
    }

}
</style>