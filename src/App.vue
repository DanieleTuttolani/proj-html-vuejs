<script>
import AppHeader from './components/AppHeader.vue';
import form from './components/micro components/form.vue';
import points from './components/points.vue';
import AppMain from './components/AppMain.vue';
export default {
    components: {
        AppHeader,
        mainForm: form,
        points,
        AppMain
    }
}
</script>

<template>
    <AppHeader />
    <mainForm />
    <points />
    <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
