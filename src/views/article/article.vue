<template>
  <div>
    <tinymce-editor
      ref="editor"
      v-model="contentHtml">
    </tinymce-editor>
  </div>
</template>

<script>
import TinymceEditor from '@/components/tinyEditor'
export default {
  name: "ArticleLook",
  components: {
    TinymceEditor
  },
  data() {
    return {
      contentHtml: null
    }
  }
}
</script>

<style scoped>

</style>
