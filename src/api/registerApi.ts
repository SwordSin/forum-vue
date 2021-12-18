import request from '@/unit/request'
import { RegisterForm, ResponseBodyType } from '@/shims'
// import { decryptPassword } from '@/unit/security'
import { decryptPassword } from '@/unit/security'

// 注册用户
export const registerUser = (data:RegisterForm) => {
    decryptPassword(data)
    return request({
        url: '/userInfo/registerInfo',
        method: 'post',
        data,
    })
}