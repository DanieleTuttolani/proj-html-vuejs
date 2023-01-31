<script>
import divider from './divider.vue';
    export default{
        components:{
            divider
        }
    }
</script>

<template>
    <main>
        <!--! top section  -->
        <div class="info-bgc">
            <div class="alt-container">
                <div class="info text-center p-5">
                    <h2>WORLD CLASS Fitness</h2>
                    <divider/>
                    <p class="p-3">From Avada Gym evrything we do, from top to bottom is highest quality to ensure we're equipped to help you reach your goals of healty and fit lifestyle.</p>
                </div>
            </div>
        </div>
       <!-- form -->
        <div class="form-bgc p-5">
            <div class="alt-container">
                <div class="d-flex wrapper">
                    <div class="left d-flex justfy-content-center align-items-center">
                        <img src="../../assets/img/home_img-compressor.jpg" class="" alt="home">
                    </div>
                    <div class="right">
                        <h3 class="text-light">Sing Up for a free trial session</h3>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Name*</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Email*</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1">
                                </div>
                                <button type="submit" class="btn">START NOW!</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
            
    </main>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/palette.scss' as *;
main{
    .info-bgc{
        background-color: $light-dark;
        .info{
            min-height: 200px;
            h2{
                color: white;
                padding-top: 50px;
            }
            p{
                color: lightgrey;
            }
        }
    }
    .form-bgc{
        background-color: $black;
        .wrapper{
            min-height: 350px;
            .left{
                flex-basis: 50%;
            }
            .right{
                padding: 0 35px;
            }
            .form-control{
                background-color: transparent;
                border-color: gray;
            }
            .form-label{
                color: gray;
            }
            .btn{
                width: 100%;
                background-color: $main-red;
                color: white;
            }
        }
    }
}
</style>
