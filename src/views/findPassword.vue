<template>
  <div class="findPassword">
    <el-form ref="findPasswordForm" :model="findPasswordForm" :rules="findPasswordRules" class="findPassword-form" label-width="110px">
      <h3 class="title">找回密码</h3>
      <el-form-item prop="workNum" label="工号">
        <el-input v-model="findPasswordForm.workNum" type="text" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="findPasswordForm.email" type="text" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="16">
          <el-form-item prop="code" label="验证码">
            <el-input
              v-model="findPasswordForm.code"
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
            :disabled="!disabledCodeBtn">
            <span>{{codeText}}</span>
          </el-button>
        </el-col>
      </el-row>
      <el-form-item prop="password" label="新密码">
        <el-input
          v-model="findPasswordForm.password"
          type="password"
          auto-complete="off"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="confirmPassword"  label="确认新密码">
        <el-input
          v-model="findPasswordForm.confirmPassword"
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
          @click.native.prevent="handlefindPassword"
        >
          <span v-if="!loading">确认</span>
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
  import { getCode,findPassword } from "@/api/login"

  export default {
    name: "Register",
    data() {
      return {
        codeUrl: "",
        codeText: '发送验证码',
        disabledCodeBtn: true,
        findPasswordForm: {
          workNum: '',
          email: '',
          code: '',
          password: '',
          confirmPassword: ''
        },
        findPasswordRules: {
          workNum: [
            { required: true, trigger: 'blur', message: '工号不能为空' }
          ],
          email: [
            { required: true, message: '邮箱地址不能为空', trigger: 'blur' },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change']
            }
          ],
          password: [
            { required: true, trigger: 'blur', message: '密码不能为空' },
            { min: 6, message: '请输入6位密码', trigger: 'blur'},
            { max: 6, message: '请输入6位密码', trigger: 'blur'}
          ],
          confirmPassword: [
            { required: true, trigger: 'blur', message: '确认密码不能为空' },
            { validator: (rule, value, callback) => {
                if(value === ''){
                  callback(new Error('请再次输入密码'))
                }else if(value !== this.findPasswordForm.password){
                  callback(new Error('两次输入密码不一致'))
                }else{
                  callback( )
                }
              }, trigger: ['blur', 'change']
            }
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
      handlefindPassword () {
        this.$refs.findPasswordForm.validate(valid => {
          if (valid) {
            Message.success({message: '密码修改成功！'})
            findPassword(this.findPasswordForm, this.findPasswordForm.code).then(response => {
              this.$router.push({path: 'login'})
            })
          }
        })
      },
      handleGetCode () {
        // 对邮箱进行单独验证
        this.$refs.findPasswordForm.validateField('email', (error => {
          if (!error) {
            this.countDown(60)
            console.log(this.findPasswordForm.email)
            getCode(this.findPasswordForm.email)
          }
        }))
      },
      // 发送验证码倒计时
      countDown (time) {
        if (time === 0) {
          this.disabledCodeBtn = true
          this.codeText = "发送验证码"
          return
        } else {
          this.disabledCodeBtn = false;
          this.codeText = '重新发送(' + time + ')'
          time--
        }
        setTimeout(()=> {
          this.countDown(time)
        }, 1000)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .findPassword {
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

  .findPassword-form {
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
