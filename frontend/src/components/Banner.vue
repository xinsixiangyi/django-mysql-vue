<template>
    <el-carousel height="520px" :interval="3000" arrow="always">
       <el-carousel-item>
       	<img src="@/assets/image/image1.jpg" alt="">
       </el-carousel-item>
       <el-carousel-item>
       	<img src="@/assets/image/image2.jpg" alt="">
       </el-carousel-item>
       <el-carousel-item>
       	<img src="@/assets/image/image3.jpg" alt="">
       </el-carousel-item>
    </el-carousel>
</template>
<script>
    export default {
        name: "Banner",
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-carousel__item img {
        text-align: center;
        height: 520px;
        margin: 0 auto;
        display: block;
    }
</style>
