<template>
  <div class="home">
    <el-form ref="form" :model="userForm" label-width="80px">
      <el-tabs v-model="activeName" >
        <el-tab-pane label="登陆" name="first">
          <el-col :span="8" >
            <el-form-item label="用户名">
              <el-input v-model="userForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="userForm.password"></el-input>
            </el-form-item>
          <el-button type="primary" @click="login" >登陆</el-button>
          </el-col>
        </el-tab-pane>
        <el-tab-pane label="注册" name="second">
          <el-col :span="8" >
            <el-form-item label="用户名">
              <el-input v-model="userForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="userForm.password"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input v-model="userForm.code"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="userForm.email">
                <el-button slot="append" @click="getEmail" >获取验证码</el-button>
              </el-input>
            </el-form-item>
          <el-button type="primary" @click="reg" >注册</el-button>
            <el-button type="primary" @click="info" >验证拦截器</el-button>
          </el-col>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { login, reg, sendEmail, info } from '@/api/user'
import Cookie from 'js-cookie'
export default {
  name: 'Home',
  data() {
    return {
      activeName: 'first',
      userForm: {
        userName: null,
        password: null,
        email: null
      }
    }
  },
  created() {
  },
  methods: {
    login() {
      let params = { ...this.userForm }
      login(params).then(response => {
        if (response.code === 200) {
          const data = response.data
          if (data.token) {
            this.$message({
              message: '恭喜你，登陆成功',
              type: 'success'
            });
            Cookie.set('token', data.token)
          }
        }
      })
    },
    reg() {
      let data = { ...this.userForm }
      reg(data).then(response => {
        console.log(response, '没有吧测试')
      })
    },
    getEmail() {
      let params = {
        email: this.userForm.email
      }
      sendEmail(params).then(response => {
        console.log(response)
      })
    },
    info() {
      let params = { ...this.userForm }
      info(params).then(response => {
        console.log(response)
      })
    }
  }
}
</script>
