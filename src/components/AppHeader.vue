<script>
import headerNav from './micro components/header components/headerNav.vue';
export default {
    components: {
        headerNav
    }
}
</script>

<template>
    <header>
        <div class="header-wrapper d-flex justify-content-between">
            <div class="logo-img d-flex align-items-center">
                <a href="#">
                    <img src="../assets/img/gym_logo_1x.png" class="img-fluid" alt="gym logo">
                </a>
            </div>
            <nav class="d-flex align-items-center">
                <div class="list-wrapper">
                    <ul class="d-flex ">
                        <a href="#">
                            <li>prova</li>
                        </a>
                        <a href="#">
                            <li>prova</li>
                        </a>
                        <a href="#">
                            <li>prova</li>
                        </a>
                        <a href="#">
                            <li>prova</li>
                        </a>
                        <a href="#">
                            <li>prova</li>
                        </a>


                    </ul>
                </div>
            </nav>
        </div>
        <!-- jumbo section -->

    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/palette.scss' as *;

.header-wrapper {
    min-height: 170px;
    background-color: black;

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
