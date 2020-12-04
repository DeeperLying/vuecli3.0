<template>
  <div>
    <tinymce-editor
      class="custom-tinymce-editor-style"
      ref="editor"
      :defaultSetting="defaultSetting"
      :disabled="true"
      v-model="contentHtml">
    </tinymce-editor>
  </div>
</template>

<script>
import TinymceEditor from '@/components/tinyEditor'
import { getArticle } from '@/api/article'
export default {
  name: "ArticleLook",
  components: {
    TinymceEditor
  },
  data() {
    return {
      contentHtml: null,
      routerParams: {},
      defaultSetting: {
        readonly:true,
        branding: false,//是否禁用“Powered by TinyMCE”
        menubar: false,//顶部菜单栏显示
        elementpath: false,
        statusbar: false,
        toolbar: false
      }
    }
  },
  created() {
    const routerParams = this.routerParams = this.$route.params
    console.log(routerParams)
    this.getArticle()
  },
  methods: {
    getArticle() {
      getArticle({ id:  this.routerParams.id }).then(response => {
        console.log(response)
        this.contentHtml = response.data.contentHtml
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-tinymce-editor-style {
  /deep/.tox-tinymce {
    border: none;
  }
}
</style>
