<template>
  <div class="login">
    <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="login-form" label-width="80px">
      <h3 class="title">知否注册</h3>
      <el-form-item prop="workNum" label="工号">
        <el-input v-model="registerForm.workNum" type="text" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="name" label="姓名">
        <el-input v-model="registerForm.name" type="text" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="departmentId" label="部门">
        <el-select v-model="registerForm.departmentId">
          <el-option v-for="item in deptList" :key="item.id" :label="item.departmentName" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="jobId" label="岗位">
        <el-select v-model="registerForm.jobId">
          <el-option v-for="item in jobList" :key="item.id" :label="item.jobName" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="registerForm.email" type="text" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="15">
          <el-form-item prop="code" label="验证码">
            <el-input
              v-model="registerForm.code"
              auto-complete="off"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-button
            size="medium"
            type="primary"
            style="width:100%;"
            @click.native.prevent="handleGetCode"
            :disabled="!disabledCodeBtn">
            <span>{{codeText}}</span>
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
import { listDept } from '@/api/dept'
import { listJob } from '@/api/job'
import { getCode, register } from '@/api/login'

export default {
  name: "Register",
  data() {
    return {
      deptList: [],
      jobList: [],
      codeText: '发送验证码',
      disabledCodeBtn: true,
      registerForm: {
        workNum: '',
        name: '',
        departmentId: '',
        jobId: '',
        email: '',
        code: '',
        password: '',
        confimrPassword: ''
      },
      registerRules: {
        workNum: [
          { required: true, trigger: 'blur', message: '工号不能为空' },
          {
            pattern: /^S[0-9]{4}$/,
            message: "工号不符合规范",
            trigger: "blur"
          }
        ],
        name: [
          { required: true, trigger: 'blur', message: '姓名不能为空' },
          { max: 15, message: '姓名不能超过15个汉字', trigger: 'blur'},
        ],
        departmentId: [
          { required: true, trigger: 'blur', message: '部门不能为空' }
        ],
        jobId: [
          { required: true, trigger: 'blur', message: '岗位不能为空' }
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
          { required: true, trigger: 'blur', message: '密码不能为空' }
        ],
        confirmPassword: [
          { required: true, trigger: 'blur', message: '确认密码不能为空' },
          { validator: (rule, value, callback) => {
              if(value === ''){
                callback(new Error('请再次输入密码'))
              }else if(value !== this.registerForm.password){
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
    this.getDeptList()
    this.getJobList()
  },
  methods: {
    // 获取部门
    getDeptList () {
      listDept().then(response => {
        this.deptList = response.data
      })
    },
    // 获取岗位
    getJobList () {
      listJob().then(response => {
        this.jobList = response.data
      })
    },
    handleRegister () {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          Message.success({message: '你点击了注册按钮'})
          register(this.registerForm, this.registerForm.code).then(response => {
            this.$router.push({path: 'login'})
          })
        }
      })
    },
    handleGetCode () {
      // 对邮箱进行单独验证
      this.$refs.registerForm.validateField('email', (error => {
        if (!error) {
          this.countDown(60)
          console.log(this.registerForm.email)
          getCode(this.registerForm.email)
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
