<script lang="ts">
import { defineComponent } from 'vue'
import { RegisterForm, ResponseBodyType } from '@/shims'
import { registerUser } from '@/api/registerApi'

// 非空验证
const notNullRules = (msg:string) => ({
    required: true,
    message: msg,
    trigger: 'blur',
})

// 最小长度验证
const minLenghtValidate = (len:number, name:string) => ({
    min: len,
    message: name + '最小长度必须大于' + len,
    trigger: 'blur',
})

export default defineComponent({
    data() {
        const validatePass = (rule:any, value:string, callback:Function) => {
            if (value === '') {
                callback(new Error('密码不能为空'))
            } else {
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                const that:any = this
                if (that.passwordAgain !== '') {
                    that.$refs.form.validateField('passwordAgain')
                }
                callback()
            }
            console.log(value, rule)
            callback('shuru')
        }
        const validatePass2 = (rule:any, value:string, callback:Function) => {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const that:any = this
            if (value === '') {
                callback(new Error('密码不能为空'))
            } else if (value !== that.form.password) {
                callback(new Error('两次输入的密码不一致'))
            } else {
                callback()
            }
        }

        // 邮箱验证
        const emailValidate = (rule:any, value:string, callback:Function) => {
            // eslint-disable-next-line max-len
            const reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$') // 正则表达式
            if (value === '') {
                callback(new Error('邮箱不能为空'))
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的邮箱格式'))
            } else {
                callback()
            }
        }
        return {
            form: {
                username: '',
                password: '',
                passwordAgain: '',
                email: '',
            } as RegisterForm,
            // 表单验证
            formRules: {
                username: [
                    notNullRules('用户名不能为空'),
                    minLenghtValidate(5, '用户名'),
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' },
                ],
                passwordAgain: [
                    { validator: validatePass2, trigger: 'blur' },
                ],
                email: [
                    { validator: emailValidate, trigger: 'blur' },
                ],
                netName: [
                    notNullRules('昵称不能为空'),
                    minLenghtValidate(4, '昵称'),
                ],
            },
        }
    },
    methods: {
        goLogin() {
            this.$router.push({
                path: '/login',
            })
        },
        register() {
            registerUser(this.form).then(resp => {
                if (resp.status === 1) {
                    console.log('注册成功请到登录界面')
                } else {
                    this.$refs.form.resetFields()
                }
            })
        },
    },
})
</script>

<template>
    <el-form
        ref="form"
        :model="form"
        label-width="120px"
        class="login-from"
        :rules="formRules"
    >
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="netName">
            <el-input v-model="form.netName"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="passwordAgain">
            <el-input v-model="form.passwordAgain" show-password></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="register">注册</el-button>
            <el-button @click="goLogin">登录</el-button>
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