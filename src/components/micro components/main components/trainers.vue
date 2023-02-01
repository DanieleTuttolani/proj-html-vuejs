<script>
import divider from '../divider.vue';
import { store } from '../../../assets/data/store';
import socialLinks from '../socialLinks.vue';
import Button from '../Button.vue'
export default {
    data() {
        return {
            store
        }
    },
    components: {
        divider, socialLinks, Button
    }
}
</script>

<template>
    <div class="bgc">
        <div class="title-wrapper text-center text-light">
            <h1>Meet our trainers</h1>
            <divider />
        </div>
        <div class="container">
            <div class="row row-cols-3">
                <div class="col" v-for="trainer in store.trainers">
                    <div class="img-wrapper">
                        <img :src="`src/assets/img/${trainer.pic}`" class="img-fluid" alt="trainer pic">
                    </div>
                    <div class="info-wrapper text-light p-5">
                        <p>
                            <strong>{{ trainer.name }}</strong>
                        </p>
                        <p>
                            <strong>{{ trainer.role }}</strong>
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae modi, totam tenetur
                            libero animi vitae odit fugit unde ducimus, iure, fugiat explicabo incidunt atque. Facere
                            fuga impedit nisi sint harum?
                        </p>
                        <socialLinks />
                    </div>
                </div>
            </div>

            <div class="text-center">
                <Button :fillTxt="'VIEW ALL TRAINERS'" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/palette.scss' as *;

.bgc {
    background-color: $black;

    .container {
        min-height: 800px;

        .info-wrapper {
            background-color: $light-dark;
        }
    }
}
</style>