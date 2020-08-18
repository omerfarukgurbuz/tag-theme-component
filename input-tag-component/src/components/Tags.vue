<template>
  <div class="tag-container">
    <Tag
      v-for="(tag, index) in tags"
      :tag="tag"
      :index="index"
      :tagColor="color"
      @removeOneTagEvent="removeOneTag($event)"
    />
    <input
      type="text"
      @keydown.enter="addTag"
      @keydown.backspace="removeTag"
    />
    <div class="error" v-if="error">This tag has been used before</div>
  </div>
</template>
<script>
  import Tag from "./Tag"
  export default {
    components : {
      Tag
    },
    data() {
      return {
        tags: [],
        error: false
      }
    },
    methods : {

      /*::::::::::::| Add tag in tags list |::::::::::::*/
      addTag(event) {
        let text = event.target;
        let matchedTag = false;

        if (text.value.length > 0) {
          this.tags.forEach(tag => {
            if (tag.toLowerCase() === text.value.toLowerCase()) {
              matchedTag = true
            }
          })
          if (!matchedTag) {
            this.tags.push(text.value)
            text.value = ''
          } else {
            this.error = true;
            setTimeout(() => {
              this.error = false
            }, 2000)
          }
        }
      },

      /*::::::::::::| If input value is empty and we can press backspace delete last item |::::::::::::*/
      removeTag(e){
        if(e.target.value.length <= 0){
          this.tags.splice(this.tags.length - 1, 1)
        }
      },

      /*::::::::::::| Delete index in tags |::::::::::::*/
      removeOneTag(index){
        this.tags.splice(index, 1)
      }
    },
    props : {

      /*::::::::::::| Get value in App.vue with v-model |::::::::::::*/
      value : {
        required : false
      },

      /*::::::::::::| Get value in App.vue with v-model |::::::::::::*/
      color : {
        type : String,
        required: false,
        default : "primary"
      }
    },
    created(){

      /*::::::::::::| When value is not empty this tags list equal value |::::::::::::*/
      if(this.value){
        if(this.value.length > 0){
          this.tags = this.value.split(",")
        }
      }
    },
    watch : {

      /*::::::::::::| When tags list changes creat event input |::::::::::::*/
      tags(){
        this.$emit("input", this.tags.join(","))
      }
    }
  }
</script>
<style scoped>

  .tag-container {
    border: 1px solid #ccc;
    padding: 20px;
  }

  input {
    outline: none;
    height: 30px;
    width: 100px;
  }

  .error {
    font-size: 12px;
    color: red;
    margin-top: 5px;
  }

</style>
