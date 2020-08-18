<template>
  <div class="container">
    <vtag v-model="tags" color="success"/> <!-- :value="tags" -->
    <vtag v-model="tags2" color="danger"/>
    <vtag v-model="tags2" color="info"/>
    <vtag v-model="tags2" color="primary"/>
    <vtag v-model="tags2" color="warning"/>
    <vtag v-model="tags2" color="secondary"/>
  </div>
</template>
<script>

  export default {

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
