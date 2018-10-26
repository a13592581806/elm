<template>
    <div>
        <!-- 顶部部分 -->
       <header>
    <span><router-link to="/mine">
    <img src="../mine/icon/back.png" alt="">
    </router-link></span><span><strong>密码登陆</strong></span>
      </header>
      <!-- 输入登陆 -->
      <div class="login">
          <ul>
              <li><input type="text" placeholder="账号" v-model="username"></li>
              <li><input :type="type" placeholder="密码" v-model="password">
              <img class="login_img" :src="yan"  @click="m_yan()"></li>
              <li><input type="text" placeholder="验证码" v-model="codeNumber">
              <img :src="img"><span @click="m_btn()">换一张</span></li>
          </ul>
          <p class="login_p">温馨提示：未注册过的账号，登录时将自动注册</p>
          <p class="login_p"> 注册过的用户可凭账号密码登录</p>
          <div class="login_footer"><button class="login_footer_btn" @click="submit()">登陆</button></div>
          <p><router-link style="float:right;" to="">密码重置?</router-link></p>
      </div>
    </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      img: "",
      yan: require("../../components/mine/icon/yan.png"), //眼睛看密码
      type: "password",
      username: "", //账号
      password: "", //密码
      codeNumber: "" //验证码
    };
  },
  created() {
    //请求验证码
    let url = "https://elm.cangdu.org/v1/captchas";
    this.$http({
      method: "post",
      url: url,
      //https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
      //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
      withCredentials: true // 默认false
    }).then(response => {
      console.log(response.data.code);
      this.img = response.data.code;
    });
  },
  methods: {
    //点击换一张验证码
    m_btn() {
      let api = "https://elm.cangdu.org/v1/captchas";
      this.$http.post(api).then(response => {
        console.log(response.data.code);
        this.img = response.data.code;
      });
    },
    //密码状态改为text
    m_yan() {
      if (this.yan == require("../../components/mine/icon/yan.png")) {
        this.yan = require("../../components/mine/icon/yanj.png");
        this.type = "text";
      } else {
        this.yan = require("../../components/mine/icon/yan.png");
        this.type = "password";
        console.log(this.yan);
      }
    },
    //登陆请求
    submit() {
      const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        method: "post",
        url: api,
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        console.log(res);
        if (res.data.status == 0) {
          alert(res.data.message);
        } else {
          alert("登陆成功");
          //把信息传vuex 共享数据
          this.$store.commit("logins", res.data);
          this.$router.push({ name: "mine" });
        }
      });
    }
  }
};
</script>

<style scoped>
header {
  background-color: rgb(49, 144, 232);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 0.46rem;
  background-color: rgb(49, 144, 232);
  font-size: 0.18rem;
  line-height: 0.46rem;
  text-align: center;
  color: white;
}
header span:first-child {
  float: left;
  padding-left: 0.117rem;
}
header span:first-child img {
  width: 0.2rem;
}
header span:nth-child(2) {
  padding: 0 0.3rem;
  margin-left: -2%;
}
/*登陆*/
.login {
  margin-top: 0.6rem;
}
.login li {
  height: 0.45rem;
  line-height: 0.45rem;

  border: 1px solid rgb(220, 233, 214);
  background: white;
}
.login li input {
  height: 0.2rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
}
/*密码眼睛*/
.login_img {
  position: absolute;
  right: 0.5rem;
  width: 0.3rem;
}
.login_p {
  font-size: 0.135rem;
  color: red;
  padding: 0.107rem 0.123rem;
}
/*登陆按钮*/
.login_footer {
  height: 0.6rem;
}
.login_footer_btn {
  width: 97%;
  height: 0.5rem;
  border-radius: 10px;
  background: rgb(76, 217, 100);
  color: white;
  font-size: 0.2rem;
  margin: 0 1.5%;
}
</style>
