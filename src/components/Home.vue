<template>
  <div class="app">
    <h1>Wellcome to Tool.Hau.xyz</h1>
    <h3>Source vuejs:https://github.com/devhau/tool.hau.xyz</h3>
    <ul>
      <li v-for="item in menu" :key="item.router">
        <router-link :to="{ name: item.router}"><i class="fa-5x" :class="item.icon"></i> {{item.text}}</router-link>
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
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },
        {
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        },{
          router: "FormatJson",
          text: "Format Json",
          icon:'fab fa-jsfiddle'
        }
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app{
  width: 90%;
  max-width: 900px;
  margin: auto;
}
ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
ul li{
  background: #eee;
  margin: 2px;
  padding: 0;
  border: 1px solid blue;
  display: inline-block;
}
ul li:hover{
  background: olive;
}
ul li a{
  display: inline-block;
  padding: 5px;
  margin: 0;
  text-decoration: none;
}
ul li a i{
  width: 100%;
}
</style>
