<template>
  <div class="">
    <h1>Wellcome to Tool.Hau.xyz</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'FormatJson' }">Format Json</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
