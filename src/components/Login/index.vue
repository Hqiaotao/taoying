<template>
  <div class="login_body">
    <div>
      <input class="login_text" type="text" placeholder="账户名/手机号/E-mail" />
    </div>
    <div>
      <input class="login_text" type="password" placeholder="请输入您的密码" />
    </div>
    <div>
      <input class="login_btn" type="submit" value="登录" />
    </div>
    <div class="login_link">
      <a href="#">立即注册</a>
      <a href="#">找回密码</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>
#content .login_body {
  width: 100%;
  margin: 15px auto;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px auto;
}
.login_body .login_btn {
  height: 50px;
  width: 100%;
  margin: 1 15px auto;
  
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: flex;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 5px;
  font-size: 20px;
}
</style>