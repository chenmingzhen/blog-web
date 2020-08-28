<template>
  <div class="header header-fixed">
    <div class="nav">
      <el-row type="flex" justify="space-between">
        <!--任意模式都是4格-->
        <el-col :xs="4" :sm="4" :md="4" class="logo">
          <nuxt-link to="/"
            ><img src="@/assets/images/logo.png" alt="logo" height="40px"
          /></nuxt-link>
        </el-col>
        <!--当设置 :sm=“0” 后，如果使用 md, lg, xl，窗口宽度变小再变更大，对应列都不显示-->
        <!-- Element 额外提供了一系列类名，用于在某些条件下隐藏元素。
        这些类名可以添加在任何 DOM 元素或自定义组件上。-->
        <el-col class="hidden-sm-and-down" :md="10">
          <el-menu
            mode="horizontal"
            router
            default-active="/"
            background-color="#fafafa"
            active-text-color="#345dc2"
          >
            <el-menu-item index="/">博客</el-menu-item>
            <el-menu-item index="/question">问答</el-menu-item>
            <el-menu-item index="/label">标签</el-menu-item>
          </el-menu>
        </el-col>
        <!--        手机平板18格 其他8格-->
        <el-col class="nav-right" :xs="18" :sm="18" :md="8">
          <div class="nav-sign">
            <el-button type="test">管理后台</el-button>
            <el-button
              type="test"
              @click="$store.dispatch('LoginPage')"
              v-if="!userInfo"
              >登录</el-button
            >
            <el-button
              type="test"
              size="small"
              round
              v-if="!userInfo"
              @click="$store.dispatch('LoginPage')"
              >注册
            </el-button>
          </div>
          <el-dropdown @command="handleCommand">
            <el-avatar
              :src="userInfo ? userInfo.imageUrl : null"
              icon="el-icon-user-solid"
            />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="article">写文章</el-dropdown-item>
              <el-dropdown-item command="question">提问题</el-dropdown-item>
              <el-dropdown-item command="user">我的主页</el-dropdown-item>
              <el-dropdown-item command="logout" v-if="userInfo"
                >退出</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    //下拉调用
    handleCommand(command) {
      if (!this.userInfo) {
        return this.$store.dispatch("LoginPage");
      }
      switch (command) {
        case "article":
          //打开新窗口
          let routeData = this.$router.resolve("/article/edit");
          window.open(routeData.href, "_blank");
          break;
        case "question":
          routeData = this.$router.resolve("/question/edit");
          window.open(routeData.href, "_blank");
          break;
        case "logout":
          this.$store.dispatch("UserLogout");
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  border-top: 0.1875rem solid #345dc2;
  background-color: #fafafa;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.12);
  z-index: 1501;

  .nav {
    max-width: 71.25rem;
    margin: auto;
    padding: 0.625rem;

    .nav-right {
      text-align: right;

      .nav-sign {
        position: absolute;
        right: 0;
        margin-right: 50px;
      }
    }
  }
}

.header-fixed {
  position: fixed;
}

.el-menu.el-menu--horizontal {
  /* 去除底部边框 */
  border-bottom: 0;
  margin-top: -0.625rem;
}

div:focus {
  outline: none;
}
</style>
