<script>
export default {
    props: {
        list: Array
    }
}
</script>

<template>
    <!-- header nav section -->
    <nav class="d-flex align-items-center">
        <div class="list-wrapper">
            <ul class="d-flex ">
                <li v-for="link in list" :key="link">
                    <a href="#">
                        {{ link }}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/palette.scss' as *;

.header-wrapper {
    min-height: 170px;

    img {
        scale: 0.8;
    }

    ul {
        padding: 0;

        li {
            color: white;
            padding: 5px 30px;

            a {
                color: white;
            }

            &:hover a {
                color: $main-red;
            }
        }
    }

}
</style>