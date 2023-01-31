<script>
import headerNav from './micro components/header components/headerNav.vue';
import Button from './micro components/Button.vue';
export default {
    data() {
        return {
            navLinks: ['HOME', 'ABOUT US', 'FACILITIES', 'MEMBERSHIPS', 'TESTIMONIALS', 'BLOG']
        }
    },
    components: {
        headerNav,
        Button
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
            <headerNav :list="navLinks" />
        </div>
        <!-- jumbo text -->
        <div class="jumbo text-center d-flex justify-content-center align-items-center py-4">
            <div class="jumbo-txt">
                <h1>NO PAIN NO GAIN</h1>
                <p>Motivation is what gets you started. Motivation is what keeps you going</p>
                <Button :fillTxt="'JOIN US TODAY'" />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/palette.scss' as *;

header {
    background-image: url(../assets/img/home-banner.jpg);
    background-position: center;
    min-height: 800px;
}

.jumbo {
    .jumbo-txt {
        h1 {
            font-size: 6rem;
            color: white;
        }

        p {
            color: rgb(209, 209, 209);
            font-size: 1.5rem;
        }
    }

}
</style>
