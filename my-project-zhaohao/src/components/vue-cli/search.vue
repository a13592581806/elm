<template>
  <div id="content">
    <header id="head_top">
      <i class="el-icon-arrow-left" @click="routerback"></i>
      <span class="login_span">搜索</span>
    </header>
    <div class="search_form">
      <el-input v-model="input" class="search_input" placeholder="请输入商家或美食名称"></el-input>
      <el-button type="primary" class="search_submit">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    routerback: function() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
#content {
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
.search_form {
  width: 96%;
  height: 0.45rem;
  margin-top: 0.6rem;
  padding: 0.1rem;
  background-color: white;
}
.search_input {
  width: 75%;
  height: 0.45rem;
  line-height: 0.45rem;
  font-size: 0.2rem;
}
.search_submit {
  width: 23%;
  height: 0.45rem;
}
</style>