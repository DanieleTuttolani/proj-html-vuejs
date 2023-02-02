<script>
import divider from '../divider.vue';
export default {

    data() {
        return {
            imgBasePath: '../../../assets/img/'
        }
    },
    props: {
        list: Array
    },
    methods: {
        makePath(p) {
            this.imgBasePath + p
        }
    },
    components: {
        divider
    }
}
</script>

<template>
    <!-- real world | rewiews -->
    <section class="real-word bgc text-center">
        <h1 class="text-light">REAL WORLD RESULTS</h1>
        <divider />
        <div class="container">
            <div class="row  row-cols-2">
                <div v-for="testimonial in list" class="col p-3">
                    <div class="card-wrapper d-flex">
                        <div class="card-img">
                            <img :src="`src/assets/img/${testimonial.pic}`" alt="testimonial pic">
                        </div>
                        <div class="card-info px-4 text-light text-start">
                            <p class="m-0">
                                <i>{{ testimonial.info }} </i>
                            </p>
                            <p>
                                <i>
                                    <strong>
                                        - {{ testimonial.name }}
                                    </strong>
                                </i>
                            </p>
                        </div>
                    </div>
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
        .card-wrapper {
            background-color: $light-dark;
            padding: 30px;
        }
    }
}
</style>