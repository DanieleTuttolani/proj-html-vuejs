<script>
import divider from '../divider.vue';
export default {
    components: {
        divider
    }
}
</script>

<template>
    <section class="facilities bgc">
        <div class="title-wrapper text-center text-light">
            <h1>HIGH PERFORMANCE FACILITIES</h1>
            <divider />
        </div>
        <div class="container">
            <div class="row row-cols-3">
                <div v-for="i in 6" class="col">
                    <img :src="`src/assets/img/home-image${i}.jpg`" alt="home image" class="img-fluid">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/palette.scss' as *;

.bgc {
    min-height: 400px;
    background-color: $black;
    padding: 80px 0;

    .col {
        padding: 25px;

        img {
            transition: 0.3s linear;

            &:hover {
                scale: 1.1;
            }
        }
    }

}
</style>