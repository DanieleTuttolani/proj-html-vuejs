<script>
import Button from '../Button.vue';
export default {
    components: {
        Button
    }
}
</script>

<template>
    <section class="join-us bgc">
        <div class="alt-container d-flex justify-content-between">
            <div class="info text-light">
                <h1>Achive your Fitness Goals</h1>
                <p>Flexible membership packages to suit all levels of athlete and achive your fitness goals</p>
            </div>
            <div class="btn-wrapper">
                <Button :fillTxt="'Join us'" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.join-us {
    padding-top: 5%;
}

.bgc {
    min-height: 200px;
    background-image: url(../../../assets/img/home-parallax.jpg);
    background-size: cover;
    background-position: center;

}
</style>