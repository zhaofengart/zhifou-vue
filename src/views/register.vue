<template>
  <div class="login">
    <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="login-form" label-width="80px">
      <h3 class="title">知否注册</h3>
      <el-form-item prop="username" label="工号">
        <el-input v-model="registerForm.username" type="text" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="department" label="部门">
        <el-input v-model="registerForm.department" type="text" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="job" label="岗位">
        <el-input v-model="registerForm.job" type="text" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="mail" label="邮箱">
        <el-input v-model="registerForm.mail" type="text" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="16">
          <el-form-item prop="code" label="验证码">
            <el-input
              v-model="registerForm.code"
              auto-complete="off"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-button
            :loading="codeLoading"
            size="medium"
            type="primary"
            style="width:100%;"
            @click.native.prevent="handleGetCode"
          >
            <span v-if="!codeLoading">发送验证码</span>
          </el-button>
        </el-col>
      </el-row>
      <el-form-item prop="password" label="密码">
        <el-input
          v-model="registerForm.password"
          type="password"
          auto-complete="off"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="confirmPassword"  label="确认密码">
        <el-input
          v-model="registerForm.confirmPassword"
          type="password"
          auto-complete="off"
        >
        </el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleRegister"
        >
          <span v-if="!loading">注册</span>
        </el-button>
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
      codeUrl: "",
      registerForm: {
        username: '',
        name: '',
        department: '',
        job: '',
        mail: '',
        code: '',
        password: '',
        confimrPassword: ''
      },
      registerRules: {
        username: [
          { required: true, trigger: 'blur', message: '工号不能为空' }
        ],
        department: [
          { required: true, trigger: 'blur', message: '部门不能为空' }
        ],
        job: [
          { required: true, trigger: 'blur', message: '岗位不能为空' }
        ],
        mail: [
          { required: true, message: '邮箱地址不能为空', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          { required: true, trigger: 'blur', message: '密码不能为空' }
        ],
        confirmPassword: [
          { required: true, trigger: 'blur', message: '确认密码不能为空' }
        ],
        code: [
          { required: true, trigger: 'change', message: '验证码不能为空' }
        ]
      },
      loading: false,
      codeLoading: false,
      redirect: undefined
    };
  },
  watch: {
  },
  created () {
  },
  methods: {
    handleRegister () {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          Message.success({message: '你点击了注册按钮'})
          this.$router.push({path: 'login'})
        }
      })
    },
    handleGetCode () {
      Message.success({message: '你点击了获取验证码按钮'})
      this.codeLoading = true
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
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
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
