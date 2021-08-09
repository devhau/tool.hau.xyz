<template>
  <div class="app-tool">
    <h1>Wellcome to Tool.Hau.xyz</h1>
    <h5>Source vuejs: <a href="https://github.com/devhau/tool.hau.xyz" target="break">https://github.com/devhau/tool.hau.xyz</a></h5>
    <h5>Icon : <a href="https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free" target="break">https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free</a></h5>
    <ul>
      <li v-for="item in menu" :key="item.router">
        <router-link :to="{ name: item.router }"
          ><i class="fa-5x" :class="item.icon"></i> {{ item.text }}</router-link
        >
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
  data() {
    return {
      menu: [
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "CryptoMd5",
          text: "Crypto MD5",
          icon: "fab fa-scribd",
        },
        {
          router: "CryptoSHA",
          text: "Crypto SHA",
          icon: "fas fa-retweet",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon: "fab fa-jsfiddle",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
ul li {
  margin: 0;
  width: 25%;
  padding: 5px;
  display: inline-block;
  position: relative;

}
ul li a {
  width: 95%;
  background: #eee;
  border: 1px solid blue;
  margin: auto;
  display: inline-block;
  padding: 5px;
  text-decoration: none;
}
ul li:hover a {
  background: olive;
}
ul li a i {
  width: 100%;
}
</style>
