<template>
  <div>
    <tinymce-editor
      ref="editor"
      v-model="newFrom.contents"
      @onClick="onClick">
    </tinymce-editor>
  </div>
</template>
<script>
import TinymceEditor from '@/components/tinyEditor'
export default {
  data() {
    return {
      newFrom: {
        contents: null,
      },
      consts: {
        key: "bunenghuan" +
          ""
      }
    }
  },
  components: {
    TinymceEditor
  },
  methods: {
    onClick(ev) {
      console.log(ev)
    }
  }
}
</script>

<style scoped>

</style>
