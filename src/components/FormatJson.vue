<template>
  <div class="app-tool">
    <h1>Format Json</h1>
    <textarea v-model="textJson"></textarea>
    <button v-on:click="formatJson">Format</button>
    <router-link :to="{ name: 'Home' }">Back to home</router-link>
  </div>
</template>

<script>
export default {
  name: "FormatJson",
  data() {
    return {
      textJson: null,
    };
  },
  methods: {
    formatJson() {
        this.textJson= JSON.stringify(JSON.parse(this.textJson), null, 4);
    },
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  height: 500px;
}
</style>
