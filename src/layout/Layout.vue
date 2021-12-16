<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const input2 = ref('')
const router = useRouter()

const routerRedirect = (path: string) => {
    router.push({
        path,
    })
}

</script>

<template>
    <el-row class="row-style">
        <el-col class="col-style" :span="3" :offset="2">
            <img class="logo" src="@/assets/v2ex@2x.png" alt="">
        </el-col>
        <el-col class="col-style" :span="3">
            <el-input
                v-model="input2"
                placeholder="输入想要搜索的内容"
                :prefix-icon="Search"
            />
        </el-col>
        <el-col :span="6" :offset="10">
            <el-menu
                mode="horizontal"
            >
                <el-menu-item index="1" @click="routerRedirect('/home')">首页</el-menu-item>
                <el-menu-item index="2" @click="routerRedirect('/register')">注册</el-menu-item>
                <el-menu-item index="3" @click="routerRedirect('/login')">登录</el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<style scoped>
    .row-style {
        border-bottom: solid 1px var(--navbar-bottom-border);
    }
    .col-style {
        margin-top: 7px;
    }
    .logo {
        height: 40px;
    }
</style>