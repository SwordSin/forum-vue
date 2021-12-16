<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const register = () => {
    console.log('注册')
}
const username = ref('')
const password = ref('')
const router = useRouter()
const goLogin = () => {
    router.push({
        path: '/login',
    })
}

</script>

<template>
    <el-form ref="form" label-width="120px" class="login-from">
        <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="password" show-password></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="goLogin">登录</el-button>
            <el-button @click="register">注册</el-button>
        </el-form-item>
    </el-form>
</template>

<style scoped>
.login-from {
    width: 400px;
    margin: auto;
    margin-top: 50px;
}
</style>