<template>
  <div class="app-tool">
    <h1>Crypto Md5</h1>
    <textarea v-model="textData"></textarea>
    <textarea v-model="textData2"></textarea>
    <button v-on:click="doMake">Crypto</button>
    <router-link :to="{ name: 'Home' }">Back to home</router-link>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  name: "CryptoMd5",
  data() {
    return {
      textData: null,
      textData2: null,
    };
  },
  methods: {
    doMake() {
      this.textData2 = CryptoJS.MD5(this.textData);
    },
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
