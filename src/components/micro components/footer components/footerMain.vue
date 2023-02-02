<script>
import socialLinks from '../socialLinks.vue';

export default {
    data() {
        return {
            posts: ['Train whit free weights or your body weight?', 'Nutritional advice that will keep you raining']
        }
    },
    components: {
        socialLinks
    }
}
</script>

<template>
    <!-- footer start -->
    <section class="footer-main bgc">
        <div class="container">
            <div class="foot-wrapper justify-content-between d-flex">
                <div class="link-lists d-flex">
                    <div class="info m-4">
                        <h3 class="title">Come Find Us</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    1234 North Main Street
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    New York, NY 555555
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Phone : 1.800.555.6789
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Email: info@your-domain.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="recent-post m-4">
                        <h3 class="title">Recent Posts</h3>
                        <ul>
                            <li v-for="post in posts" class="d-flex" :key="post">
                                <i class="bi bi-chevron-right"></i>
                                <div>
                                    <a href="#">
                                        <p>{{ post }}</p>
                                        <div class="divider"></div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="openings m-4">
                        <h3 class="title">Opening times</h3>
                        <ul>
                            <li class="d-flex">

                                <div>
                                    <p>Weekdays Monday - Friday</p>
                                    <p class="hour">09:00 - 19:00</p>
                                </div>
                            </li>
                            <li class="d-flex">

                                <div>
                                    <p>Weekdays Saturday - Sunday</p>
                                    <p class="hour">09:00 - 21:00</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img src="../../../assets/img/gym_ad-compressor.jpg" alt="gym ad">
                </div>
            </div>
        </div>
        <!-- copriright and final part -->
        <div class="footer-bottom">
            <div class="container h-100">
                <div class="text-wrapper d-flex align-items-center justify-content-between h-100">
                    <p class="m-0">
                        <i class="bi bi-c-circle"></i>
                        Copyright 2012 - 2020 | Avada Theme by Theme Fusion | All Right Reserved | Powered By Word Press
                    </p>
                    <socialLinks />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/palette.scss' as *;

.bgc {
    background-color: $black;
}

.footer-main {
    color: gray;

    .divider {
        height: 2px;
        width: 100%;
        border: 1px solid gray;
    }

    .foot-wrapper {
        padding-top: 100px;

        .title {
            color: gray;
        }
    }

    ul {
        margin: 0;
        padding: 0;

        li {
            color: rgb(146, 146, 146);
            margin-bottom: 20px;

            a {
                color: gray
            }
        }
    }

    .openings {
        .hour {
            color: gray;
        }
    }

    .footer-bottom {
        height: 100px;
        background-color: $light-dark;
    }
}
</style>