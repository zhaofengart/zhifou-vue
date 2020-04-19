<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" label-width="80px">
      <h3 class="title">华锐技术社区</h3>
      <div class="setitem">
        <el-form-item prop="workNum" label="工号">
          <el-input v-model="loginForm.workNum"
                    type="text"
                    auto-complete="off"
                    show-word-limit clearable
                    style="width: 90%"
                    placeholder="S+4位工号"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input
            v-model="loginForm.password"
            type="password"
            auto-complete="off"
            show-word-limit clearable show-password
            style="width: 90%"
            placeholder="请输入密码"
            @keyup.enter.native="handlelogin"
          >
          </el-input>
        </el-form-item>
        <el-link  @click="findPassWord"
                  style="margin-top: -5px;margin-left: 240px"
                  icon="el-icon-findpassword"
                  type="primary">忘记密码？
        </el-link>
        <el-form-item style="width:50%;">
          <div class="setbutton">
            <el-button
              :loading="loading"
              size="medium"
              type="primary"
              style="width:100%;"
              @click.native.prevent="handlelogin"
            >
              <span v-if="!loading">登录</span>
            </el-button>
            <el-button
              :loading="loading"
              size="medium"
              type="primary"
              style="width:100%; margin-left: 110px;"
              @click.native.prevent="handleRegister"
            >
              <span v-if="!loading">注册</span>
            </el-button>
          </div>
        </el-form-item>
      </div>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2020 zhifou.huarui All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
  import { Message } from 'element-ui'
  import {login} from '@/api/login'

  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          workNum: '',
          password: '',
        },
        loginRules: {
          workNum: [
            { required: true, trigger: 'blur', message: '工号不能为空' },
            {
              pattern: /^S[0-9]{4}$/,
              message: "工号不符合规范",
              trigger: "blur"
            }
          ],
          password: [
            { required: true, trigger: 'blur', message: '密码不能为空' },
            { min: 6, message: '请输入6位密码', trigger: 'blur'},
            { max: 6, message: '请输入6位密码', trigger: 'blur'}
          ],
        },
        loading: false,
      };
    },
    methods: {
      handlelogin (){
        this.$refs.loginForm.validate(valid => {
          if (valid) {
              // this.loading = true;
              // login(this.loginForm.workNum,this.loginForm.password).then(response => {
              //   this.$router.push({path: 'index2'})
              // })
              // .catch(() => {
              //   this.loading = false;
              // })
              this.$store
            .dispatch("Login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
            })
            }
          })
      },
      handleRegister () {
        this.$router.push({path: 'register'})
      },
      findPassWord (){
        this.$router.push({path: 'findPassword'})
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
    background-image: url("../assets/image/login-background.png");
    background-color: #b8e5f8;
    background-size: cover;
  }
  .setbutton {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  .setitem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: -10px;
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
