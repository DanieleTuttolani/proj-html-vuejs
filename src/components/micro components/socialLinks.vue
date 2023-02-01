<script>
export default {}
</script>

<template>
    <div class="wrapper d-flex">
        <div class="social">
            <a href="#">
                <i class="bi bi-facebook"></i>
            </a>
        </div>
        <div class="social  distant">
            <a href="#">
                <i class="bi bi-twitter"></i>
            </a>
        </div>
        <div class="social">
            <a href="#">
                <i class="bi bi-instagram"></i>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/palette.scss' as *;

.social {
    height: 40px;
    width: 40px;
    text-align: center;
    background-color: $black;
    cursor: pointer;


    a {
        color: white;
    }
}

.distant {
    margin: 0 10px;
}

.bi {
    position: relative;
    top: 18%;
}
</style>