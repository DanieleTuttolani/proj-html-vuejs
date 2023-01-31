<script>
import divider from './micro components/divider.vue';
export default {
    data() {
        return {
            points: [
                {
                    icon: 'bi-person',
                    title: 'Strenght & Cordination'
                }
                ,
                {
                    icon: 'bi-bicycle',
                    title: 'Fitness & Cardio'
                }
                ,
                {
                    icon: 'bi-cloud',
                    title: 'Flexibility & Rest'
                }
                ,
                {
                    icon: 'bi-heart',
                    title: 'Health & Diet'
                }
                ,
            ]
        }
    },
    components: {
        divider
    }
}
</script>


<template>
    <div class="wrapper">

        <div class="container">
            <div class="row row-cols-4">
                <div v-for="point in points" class="col text-center text-light">
                    <div class="img-wrapper mx-auto">
                        <i class="bi" :class="point.icon"></i>
                    </div>
                    <h3>{{ point.title }}</h3>
                    <divider />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit in deserunt reiciendis nobis
                        asperiores unde provident commodi natus adipisci placeat perspiciatis veniam voluptate impedit
                        nam, earum eum quod quas minima?</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/palette.scss' as *;

.wrapper {
    background-image: url(../assets/img/gym_bkgd_bw-compressor.jpg);
    background-position: center;

    .container {
        min-height: 400px;

        .img-wrapper {
            height: 100px;
            width: 100px;
            border-radius: 50%;
            border: 2px solid $main-red;
            padding-top: 5px;

            .bi {
                color: $main-red;
                font-size: 50px;
            }
        }
    }
}
</style>