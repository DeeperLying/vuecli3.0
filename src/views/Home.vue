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
          <el-button type="primary" @click="reg" >注册</el-button>
          </el-col>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      activeName: 'first',
      userForm: {
        userName: null,
        password: null,
      }
    }
  },
  created() {
  },
  methods: {
    login() {
      let params = { ...this.userForm }
      this.$axios.get('/login',{
        params
      }).then(response => {
        console.log(response)
      })
    },
    reg() {
      let data = { ...this.userForm }
      this.$axios.post('/reg', data).then(response => {
        console.log(response, '没有吧测试')
      })
    }
  }
}
</script>
