<script>
import AppHeader from './components/AppHeader.vue';
import form from './components/micro components/form.vue';
import points from './components/points.vue';
export default {
    components: {
        AppHeader,
        mainForm: form,
        points
    }
}
</script>

<template>
    <AppHeader />
    <mainForm />
    <points />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
