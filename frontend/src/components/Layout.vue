from ./ import Footer
<template>
	<div>
		<el-container style="height: 500px; border: 1px solid #eee">
			<el-header style="text-align: right; font-size: 15px">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="2">
						<i class="el-icon-info"></i>博客中心</el-menu-item>
					<el-menu-item index="3" disabled>消息中心</el-menu-item>
					<el-menu-item index="1" class="align-left">处理中心</el-menu-item>
					<el-menu-item index="4">
						<a href="https://www.ele.me" target="_blank">订单管理</a>
					</el-menu-item>
					<el-menu-item index="5">个人信息</el-menu-item>
					<a href="#" style="font-size: 30px">
						<i class="el-icon-setting"></i>
					</a>
				</el-menu>

			</el-header>

			<el-container>

				<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
					<el-menu :default-openeds="['2', ]">
						<el-submenu index="1">
							<template slot="title">
								<i t class="el-icon-message"></i>留言</template>
							<el-menu-item-group>
								<template slot="title">全部留言</template>
								<el-menu-item index="1-1">留言管理</el-menu-item>
								<el-menu-item index="1-2">待审留言</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="1-3">设置</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-4">
								<template slot="title">天</template>
								<el-menu-item index="1-4-1">选项4-1</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title">
								<i class="el-icon-menu"></i>菜单</template>
							<el-menu-item-group>
								<template slot="title">my all</template>
								<el-submenu index="2-1">
									<template slot="title">我的电影</template>
								</el-submenu>
								<el-submenu index="2-2">
									<template slot="title">我的电视</template>
								</el-submenu>
								<el-submenu index="2-3">
									<template slot="title">我的回忆</template>
									<el-menu-item style="font-size: 10px" index="2-3-1">我的大学</el-menu-item>
								</el-submenu>

							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="2-4">国漫</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="2-4">
								<template slot="title">选项4</template>
								<el-menu-item index="2-4-1">选项4-1</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title">
								<i class="el-icon-setting"></i>设置</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="3-1">选项1</el-menu-item>
								<el-menu-item index="3-2">选项2</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="3-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="3-4">
								<template slot="title">选项4</template>
								<el-menu-item index="3-4-1">选项4-1</el-menu-item>
							</el-submenu>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-container>
					<el-main>
						<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" border>
							<el-table-column prop="item" label="主题" width="140">
							</el-table-column>
							<el-table-column prop="date" label="发布时间" width="140">
							</el-table-column>
							<el-table-column prop="name" label="作者" width="120">
							</el-table-column>
							<el-table-column prop="address" label="备注">
							</el-table-column>
						</el-table>
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" background
						    :page-sizes="[5, 10, 20, 40]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
						</el-pagination>
					</el-main>
				</el-container>



			</el-container>
			<el-footer>
				<button type="text" id="help" @click="Help">帮助</button>
				<button type="text" id="33" @click="Report">举报</button>
				<button type="text" id="3" @click="Feedback">反馈</button>
			</el-footer>
		</el-container>


	</div>

</template>



<style>
	.el-header,
	.el-footer {
		background-color: #279fff;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 10px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>
<script>
	export default {
		data() {
			const item = {
				item: '测试',
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
				tableData: Array(20).fill(item),
				currentPage: 1, //初始页
				pagesize: 10,
			}
		},
		methods: {

			// 初始页currentPage、初始每页数据数pagesize和数据data
			handleSizeChange: function (size) {
				this.pagesize = size;
				console.log(this.pagesize);
				this.tableData //每页下拉显示数据
			},
			handleCurrentChange: function (currentPage) {
				this.currentPage = currentPage;
				console.log(this.currentPage); //点击第几页
				this.tableData
			},
			Help() {
				this.$confirm('确定需要帮助吗?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '已经拨打114114!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消帮助'
					});
				});
			},
			Report() {
				this.$confirm('确定举报吗?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'warning',
						message: '已经拨打110！！！'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消举报'
					});
				});
			},
			Feedback() {
				this.$confirm('确定需要反馈吗?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '请发邮件至xinsixiangyi7@163.com'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消反馈'
					});
				});
			},
		}
	}
</script>
