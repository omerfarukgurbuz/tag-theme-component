<template>
  <div class="container">
    <app-tags v-model="tags" color="success"/> <!-- :value="tags" -->
    <app-tags v-model="tags2" color="danger"/>
    <app-tags v-model="tags2" color="info"/>
    <app-tags v-model="tags2" color="primary"/>
    <app-tags v-model="tags2" color="warning"/>
    <app-tags v-model="tags2" color="secondary"/>
  </div>
</template>
<script>
  import Tags from "./components/Tags"
  export default {
    components : {
      appTags : Tags
    },
    data(){
      return {
        tags : "test1,test2,test3",
        tags2 : "test4,test5,test6,test7,test8",
      }
    }
  }
</script>
<style>
  body {
    font-family: sans-serif;
  }
</style>
