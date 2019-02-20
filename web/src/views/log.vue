<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i>日志管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-table :data="data.dataList" border class="table">
                <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
                <el-table-column prop="date" label="日期"  width="150">
                </el-table-column>
                <el-table-column prop="name" label="操作人" width="120">
                </el-table-column>
                <el-table-column prop="address" label="搜索地址" :formatter="formatter">
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :page-count="data.pages">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'basetable',
        data() {
            return {
              data:{
                  dataList:[],
                  pages:5,
                  size:11,
              }
            }
        },
        created() {
            this.getData(1);
        },
        computed: {
           
        },
        methods: {
            handleCurrentChange(val) {
                this.getData(val);
            },
            getData(param) {
                this.$http.get(`/alllog/page=${param}&size=${this.data.size}`)
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
            },
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .table{
        width: 100%;
        font-size: 14px;
    }
    .red{
        color: #ff0000;
    }
</style>
