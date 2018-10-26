<template>
    <div id="loginContainer">
        <header id="head_top">
            <i class="el-icon-arrow-left" @click="routerback"></i>
            <span class="login_span">密码登录</span>
        </header>
        <div class="inputs">
            <div class="input_container">
                <input type="text" class="search_input" placeholder="账号">
            </div>
            <div class="input_container">
                <input :type="value==true?'text':'password'" class="search_input" placeholder="密码">
                <el-switch v-model="value" active-text="" inactive-text="" class="switch">
                </el-switch>
            </div>
            <div class="input_container">
                <input type="text" class="search_input" placeholder="验证码">
                <div class="change_img">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        value: true
    };
  },
  methods: {
    routerback: function() {
      this.$router.back(-1);
    },
    changeText(){
      if(this.value){
        this.type = text;
      }else{
        this.type = password;
      }
    }
  }
};
</script>

<style scoped>
#loginContainer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(245, 245, 245);
}
#head_top {
  width: 100%;
  height: 0.6rem;
  position: fixed;
  top: 0;
  left: 0;
  background: blue;
  z-index: 100;
}
.el-icon-arrow-left {
  color: white;
  font-size: 0.35rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.login_span {
  color: white;
  font-size: 0.25rem;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.inputs {
  width: 100%;
  height: 1.85rem;
  background-color: white;
  margin-top: 0.75rem;
}
.input_container {
  width: 90%;
  height: 0.25rem;
  padding: 0.18rem 0.23rem;
}
.search_input {
  width: 50%;
  height: 0.25rem;
  font-size: 0.25rem;
  line-height: 0.25rem;
  border: 0px;
  outline: none;
}
.switch{
    float: right;
}
</style>