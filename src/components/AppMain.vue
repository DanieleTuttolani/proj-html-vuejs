<script>
import realWorld from './micro components/main components/realWorld.vue';
import facilities from './micro components/main components/facilities.vue';
import quoteOFDay from './micro components/main components/quoteOFDay.vue';
import trainers from './micro components/main components/trainers.vue';
export default {
    data() {
        return {
            testimonials: [
                {
                    name: 'Tara Smith',
                    info: 'The trainers at avada Gym have helped me reach my fitness goals beyound anything i could of hoped for. i love it!',
                    pic: 'review_1-compressor.jpg'
                }
                ,
                {
                    name: 'Simon Chel',
                    info: 'The atmosphere at Avada Gym is amazing people are even better. All in all, it is a place to work out.',
                    pic: 'review_2-compressor.jpg'
                }
                ,
                {
                    name: 'Jen Wirth',
                    info: 'The facilities at Avada Gym stood out to me the most. They are well maintained and have high quality equipment.',
                    pic: 'review_3-compressor-2.jpg'
                }
                ,
                {
                    name: 'Jeff Glum',
                    info: 'No bad things to say about Avada Gym they are top notch at every corner and truly take care of their customers',
                    pic: 'review_4-compressor-2.jpg'
                }
                ,
            ]
        }
    },
    components: {
        realWorld, facilities, quoteOFDay, trainers
    }
}
</script>

<template>
    <realWorld :list="testimonials" />
    <facilities />
    <quoteOFDay />
    <trainers />
</template>

<style>

</style>