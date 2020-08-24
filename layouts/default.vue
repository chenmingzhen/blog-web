<template>
  <div class="container">
    <Header/>
    <div class="main">
      <nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../components/layout/Haeder"
  import Footer from "../components/layout/Footer";

  export default {
    components: {
      Header, Footer
    },
    mounted() {
      this.resetFontSize();
    },
  };
</script>

<style scoped lang="scss">
  .main {
    padding-top: 5.625rem;
    max-width: 71.25rem;
    margin: 0 auto;
  }
</style>
