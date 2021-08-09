<template>
  <div class="app-tool">
    <h1>Crypto SHA</h1>
    <textarea v-model="textData"></textarea>
    <select v-model="type">
      <option value="SHA1">SHA-1</option>
      <!--option value="SHA3">SHA-3</option-->
      <option value="SHA256">SHA-256</option>
      <option value="SHA512">SHA-512</option>
    </select>
    <textarea v-model="textData2"></textarea>
    <button v-on:click="doMake">Crypto</button>
    <router-link :to="{ name: 'Home' }">Back to home</router-link>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  name: "CryptoSHA",
  data() {
    return {
      textData: null,
      textData2: null,
      type: "SHA1",
    };
  },
  methods: {
    doMake() {
      this.textData2 = "";
      switch (this.type) {
        case "SHA1":
          this.textData2 = CryptoJS.SHA1(this.textData);
          break;
        case "SHA256":
          this.textData2 = CryptoJS.SHA256(this.textData);
          break;
        case "SHA512":
          this.textData2 = CryptoJS.SHA512(this.textData);
          break;
      }
    },
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
