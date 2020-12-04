<template>
  <div>
    <el-row>
      <el-col :span="12" >
        <el-form ref="form" :model="newFrom" label-width="140px" >
          <el-row>
            <el-col>
              <el-form-item label="文章标题：">
                <el-input v-model="newFrom.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item label="文章简介：">
                <el-input v-model="newFrom.articleAbstract" placeholder="如无简写，系统将自动剪裁" ></el-input>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item label="文章时间：">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="newFrom.articleDate"
                    style="width: 100%;"
                    value-format="timestamp"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
    <tinymce-editor
      ref="editor"
      v-model="newFrom.contentHtml"
      @input="childEvent"
      @onClick="onClick">
    </tinymce-editor>
    <el-button @click="clearArticle" >清空编辑</el-button>
    <el-button type="primary" @click="saveArticle" >发表文章</el-button>
  </div>
</template>
<script>
import TinymceEditor from '@/components/tinyEditor'
import { saveArticle } from '@/api/article'
export default {
  data() {
    return {
      newFrom: {
        contentHtml: null,
        title: null,
        articleAbstract: null,
        articleDate: null
      }
    }
  },
  components: {
    TinymceEditor
  },
  methods: {
    onClick(ev) {
    },
    childEvent(articleHtml) {
    },
    clearArticle() {
      this.$refs.editor.clear()
    },
    saveArticle() {
      let data = {
        ...this.newFrom,
      }
      console.log(data)
      saveArticle(data).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>
