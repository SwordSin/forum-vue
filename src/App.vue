<script setup lang="ts">
import Layout from '@/layout/Layout.vue'
</script>

<template>
    <div>
        <Layout></Layout>
        <router-view></router-view>
    </div>
</template>

<style>
body {
    margin: 0px;
    padding: 0px;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
