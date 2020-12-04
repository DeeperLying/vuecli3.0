<template>
  <div>
    <div v-if="articleList" >
      <el-row>
        <el-col v-for="(article, index) in articleList" :key="index" >
          <router-link :to="'/article/look/' + article.id" >
            {{ article.title }}
          </router-link>
        </el-col>
      </el-row>
    </div>
    <div v-else >
      暂无文章
    </div>
  </div>
</template>

<script>
import { getArticleList } from '@/api/article'
export default {
  name: "ArticleList",
  data() {
    return {
      articleList: []
    }
  },
  created() {
    this.getArticleList()
  },
  methods: {
    getArticleList() {
      getArticleList({ }).then(response => {
        console.log(response)
        this.articleList = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
