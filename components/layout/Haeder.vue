<template>
  <div class="header header-fixed">
    <div class="nav">头部</div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 3.75rem;
    border-top: 0.1875rem solid #345DC2;
    background-color: #fafafa;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, .12);
    z-index: 1501;
  }

  .header-fixed {
    position: fixed;
  }
</style>
