<template>
  <div class="footer">
    <div class="wrap">
      <el-divider>博客门户</el-divider>
      <div class="footer-link">
        <!-- nofollow 告诉搜索引擎"不要追踪此网页上的链接或不要追踪此特定链接 -->
        <a rel="nofollow" target="_blank"
           href="/about/">github地址</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss" scoped>
  .footer {
    padding-top: 3.75rem !important;
    padding-bottom: 3.125rem !important;
    background-color: #fff;

    .wrap {
      max-width: 74.375rem;
      margin: 0 auto;

      .top-line {
        width: 62.5rem;
        height: 0.0625rem;
        background-color: #e3ebf0;
        margin: 0 auto;
      }

      .footer-link {
        height: 1.125rem;
        line-height: 1.125rem;
        margin-top: 2.5rem;
        text-align: center;
        font-size: 1rem;
        font-family: PingFangSC-Regular;

        a {
          display: inline-block;
          color: #2C2C40;
        }

        span {
          display: inline-block;
          color: #2C2C40;
          padding: 0 0.625rem;
        }

        .footer-information-box {
          font-family: PingFangSC-Regular;
          text-align: center;
          margin: 1.875rem 0;
          font-size: 0.75rem;
          line-height: 0.75rem;
          color: #2C2C40;

          a {
            color: #2C2C40;
          }
        }
      }
    }
  }
</style>
