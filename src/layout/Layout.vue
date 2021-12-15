<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input2 = ref('')

</script>

<template>
    <el-row class="row-style">
        <el-col class="col-style" :span="3" :offset="2">
            <img class="logo" src="@/assets/v2ex@2x.png" alt="">
        </el-col>
        <el-clo class="col-style" :span="3">
            <el-input
                v-model="input2"
                placeholder="输入想要搜索的内容"
                :prefix-icon="Search"
            />
        </el-clo>
        <el-col :span="6" :offset="10">
            <el-menu
                mode="horizontal"
            >
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">注册</el-menu-item>
                <el-menu-item index="3">登录</el-menu-item>
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