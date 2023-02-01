<script>
import { store } from '../../../assets/data/store'
import divider from '../divider.vue';
export default {
    data() {
        return {
            store
        }
    },
    components: {
        divider
    }
}
</script>

<template>
    <section class="news">
        <div class="title-wrapper text-center text-light">
            <h1>Performance News</h1>
            <divider />
        </div>
        <div class="container">
            <div class="row row-cols-3 justify-content-start">
                <div v-for="add in store.news" class="col">
                    <div class="img-wrapper">
                        <img :src="`src/assets/img/${add.pic}`" class="img-fluid" alt="news pic">
                    </div>
                    <div class="text-wrapper text-light">
                        <p><strong>{{ add.title }}</strong></p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tenetur fuga repudiandae
                            officiis magni suscipit sit accusantium amet recusandae commodi culpa ut labore,
                            reprehenderit rerum. Quis dolorum facilis nemo earum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../../assets/scss/palette.scss' as *;

.news {
    min-height: 500px;
    background-color: $light-dark;

    .text-wrapper {
        background-color: $black;
    }
}
</style>