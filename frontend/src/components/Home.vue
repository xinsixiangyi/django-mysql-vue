<template>
  <div class="home">
    <el-row display="margin-top:10px">
        <el-input v-model="input" placeholder="请输入书名" style="display:inline-table; width: 30%; float:left"></el-input>
        <el-button type="primary" @click="addBook()" style="float:left; margin: 2px;">新增</el-button>
    </el-row>
    <el-row>
        <el-table :data="bookList.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" border>
          <el-table-column prop="id" label="编号" min-width="100">
            <template scope="scope"> {{ scope.row.pk }} </template>
          </el-table-column>
          <el-table-column prop="book_name" label="书名" min-width="100">
            <template scope="scope"> {{ scope.row.fields.book_name }} </template>
          </el-table-column>
          <el-table-column prop="add_time" label="添加时间" min-width="100">
            <template scope="scope"> {{ scope.row.fields.add_time }} </template>
          </el-table-column>
           <el-table-column prop="#" label="操作" min-width="100">
             <!--<el-input v-model="book_id" type="text" value=scope.row.pk></el-input>-->
             <template scope="scope">
               <el-button type="danger" @click="del_book(scope.row.pk )"  style="float:left; margin: 2px;">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange":current-page="currentPage"  background
                            :page-sizes="[5, 10, 20, 40]"
                            :page-size="pagesize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="bookList.length">
                    </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      input: '',
      book_id:'',
      bookList: [],
      currentPage:1, //初始页
      pagesize:10,    //    每页的数据

    }
  },
  mounted: function () {
    this.showBooks()
  },
  methods: {
    addBook () {
      let url='http://192.167.3.170:8022/app01/add_book?book_name=';
      this.$http.get(url + this.input)
        .then((response) => {
          var res = JSON.parse(response.bodyText)
          if (res.error_num === 0) {
            this.showBooks()
          } else {
            this.$message.error('新增书籍失败，请重试')
            console.log(res['msg'])
          }
        })
    },
    showBooks () {
      let url='http://192.167.3.170:8022/app01/show_books/';
      this.$http.get(url)
        .then((response) => {
          var res = JSON.parse(response.bodyText)
          console.log(res)
          if (res.error_num === 0) {
            this.bookList = res['list']
          } else {
            this.$message.error('查询书籍失败')
            console.log(res['msg'])
          }
        })
    },

    del_book(bookid) {
      this.$confirm('此操作将永久删除该书籍, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'

         })
        .then(() => {
          let url='http://192.167.3.170:8022/app01/del_book?book_name=';
           this.$http.get(url +bookid)
          .then((response) => {
          var res = JSON.parse(response.bodyText)
          if (res.error_num === 0) {
            this.showBooks()
          } else {
            this.$message.error('删除书籍失败，请重试')
            console.log(res['msg'])
          }})

            //点击确定按钮的操作
         })
         .catch(() => {
            //点击删除按钮的操作
        });
     },
    // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize);
          this.showBooks()//每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage) ;//点击第几页
                this.showBooks()
        },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

