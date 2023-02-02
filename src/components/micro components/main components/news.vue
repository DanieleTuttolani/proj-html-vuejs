<script>
import { store } from '../../../assets/data/store'
import divider from '../divider.vue';
import Button from '../Button.vue';
export default {
    data() {
        return {
            store
        }
    },
    components: {
        divider, Button
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
            <div class="row row-cols-3 justify-content-start g-4">
                <div v-for="add in store.news" class="col d-flex flex-column" :key="add.id">
                    <div class="overlay-wrapper">
                        <div class="overlay d-flex">
                            <a href="#"><i class="bi bi-link-45deg"></i></a>
                            <a href="#"><i class="bi bi-search"></i></a>
                        </div>
                        <div class="img-wrapper">
                            <img :src="`src/assets/img/${add.pic}`" class="img-fluid" alt="news pic">
                        </div>
                    </div>
                    <div class="text-wrapper text-light p-4">
                        <p><strong>{{ add.title }}</strong></p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tenetur fuga repudiandae
                            officiis magni suscipit sit accusantium amet recusandae commodi culpa ut labore,
                            reprehenderit rerum. Quis dolorum facilis nemo earum[...]
                        </p>
                    </div>
                </div>
            </div>
            <div class="text-center btn-wrapper">
                <Button :fillTxt="'READ ALL ARTICLES'" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../../assets/scss/palette.scss' as *;

.news {
    min-height: 500px;
    background-color: $light-dark;
    padding: 100px 0;

    .col {
        &:hover .overlay {
            display: flex;
            z-index: 1;
        }
    }

    .overlay-wrapper {
        position: relative;

        .overlay {
            position: absolute;
            display: none;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #7fd8bdd7;
            justify-content: center;
            align-items: center;
            font-size: 3rem;

            a {
                color: white;
            }

        }

        .img-wrapper {
            img {
                position: relative;

            }
        }

    }


    .text-wrapper {
        background-color: $black;
    }

    .btn-wrapper {
        margin-top: 70px;
    }
}
</style>