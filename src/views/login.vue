<template>
  <div class="login">
    <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="login-form" label-width="80px">
      <h3 class="title">华锐技术社区</h3>
      <el-form-item prop="username" label="用户名">
        <el-input v-model="registerForm.username"
                  type="text"
                  auto-complete="off"
                  show-word-limit clearable
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input
          v-model="registerForm.password"
          type="password"
          auto-complete="off"
          show-word-limit clearable show-password
        >
        </el-input>
      </el-form-item>
      <el-link  @click="findPassWord"
                style="margin-top: -25px;margin-left: 250px"
                icon="el-icon-findpassword"
                type="primary">忘记密码？ >
      </el-link>
      <el-form-item style="width:50%;">
        <el-button-group>
          <el-button
            :loading="loading"
            size="medium"
            type="primary"
            style="width:50%;"
            @click.native.prevent="handlelogin"
          >
            <span v-if="!loading">登录</span>
          </el-button>
          <el-button
            :loading="loading"
            size="medium"
            type="primary"
            style="width:50%; margin-left: 160px;margin-top: -35.5px"
            @click.native.prevent="handleRegister"
          >
            <span v-if="!loading">注册</span>
          </el-button>
        </el-button-group>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2020 zhifou.huarui All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
  import { Message } from 'element-ui'

  export default {
    name: "Register",
    data() {
      return {
        registerForm: {
          username: '',
          password: '',
        },
        registerRules: {
          username: [
            { required: true, trigger: 'blur', message: '用户名不能为空' }
          ],
          password: [
            { required: true, trigger: 'blur', message: '密码不能为空' }
          ],
        },
        loading: false,
      };
    },
    methods: {
      handlelogin (){
        this.$refs.registerForm.validate(valid => {
          if (valid) {
            Message.success({message: '你点击了登录按钮'})
          }
        })
      },
      handleRegister () {
        this.$router.push({path: 'register'})
      },
      findPassWord (){
        this.$router.push({path: 'findPassWord'})
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url("../assets/image/login-background.jpg");
    background-color: #b8e5f8;
    background-size: cover;
  }
  .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
  }

  .login-form {
    border-radius: 6px;
    background: #ffffff;
    width: 400px;
    padding: 25px 25px 5px 25px;
    .el-input {
      height: 38px;
      input {
        height: 38px;
      }
    }
  }
  .el-login-footer {
    height: 40px;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: Arial;
    font-size: 12px;
    letter-spacing: 1px;
  }
</style>
