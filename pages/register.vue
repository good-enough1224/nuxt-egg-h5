<template>
  <div>
    <div class="header"></div>
    <div class="main">
      <div class="login-box">
        <el-form
          ref="form"
          class="login-form"
          :model="form"
          label-position="right"
          label-width="80px"
          size="small"
        >
          <el-form-item label="邮箱">
            <el-input v-model="form.email" class="email-input"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-row type="flex">
              <el-col :span="9">
                <el-input v-model="form.email" class="code-input"></el-input>
              </el-col>
              <el-col :offset="2" :span="12">
                <el-button type="success" plain size="small"
                  >发送验证码</el-button
                >
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      form: {
        email: '',
      },
    }
  },
}
</script>
<style lang="less">
.main {
  .login-box {
    margin: 0 auto;
    width: 500px;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    .login-form {
      margin-left: 40px;
      .email-input {
        width: 260px;
      }
    }
  }
}
</style>
