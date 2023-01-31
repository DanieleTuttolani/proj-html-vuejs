<script>
import AppHeader from './components/AppHeader.vue';
import form from './components/micro components/form.vue';
export default {
    components: {
        AppHeader,
        mainForm: form
    }
}
</script>

<template>
    <AppHeader />
    <mainForm />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
