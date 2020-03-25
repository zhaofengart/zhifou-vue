<template>
  <div class = "register">
    <el-row style="bottom: -50px; left: 380px;">
      <el-col :xs="24">
        <h1 style = "margin-left: 65px">华锐技术社区</h1>
        <el-input style="width: 30%;
                color: rgb(30, 159, 255);
                background-color: rgb(0, 186, 189);
                border-top-color: rgb(117, 26, 26);"
                  v-model="loginForm.username"
                  placeholder="username"
                  type="text"
                  show-word-limit clearable>
        </el-input>
      </el-col>
      <el-col :xs="24">
        <el-input style="width: 30%;
                color: rgb(1, 170, 237);
                background-color: rgb(0, 186, 189);
                margin-top: 34px;
                margin-bottom: 34px;"
                  v-model="loginForm.password"
                  placeholder="password"
                  type="text"
                  show-word-limit clearable show-password>
        </el-input>
      </el-col>
      <el-link @click="handelFindPassword" style="margin-top: -25px;margin-left: 250px" icon="el-icon-findpassword" type="primary">忘记密码？</el-link>
      <el-col :xs="24">
        <el-button @click="handellogin" style="background-color: rgb(1, 170, 237);
                        color: rgb(57, 61, 73);">
          登录</el-button>
        <el-button @click.native.prevent="handelregister"
                   style="margin-left: 190px;
                   background-color: rgb(1, 170, 237);
                   color: rgb(57, 61, 73);">
          注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { Message } from 'element-ui'

  export default {
    name: "register",
    data() {
      return {
        loginForm: {
          username: "",
          password: "",
        },
        };
      },
    methods:{
      handelregister (){
        this.$router.push({path:'register'})
      },
      handelFindPassword (){
        this.$router.push({path:'findPassword'})
      },
      handellogin (){
        Message.success({message: '登录成功！'})
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url("../assets/image/login-background.jpg");
    background-size: cover;
  }
</style>
