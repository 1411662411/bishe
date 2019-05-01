<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:190px;">
                    <div class="user-info">
                        <img src="static/img/img.jpg" class="user-avator" alt="">
                        <div class="user-info-cont">
                            <div class="user-info-name">{{name}}</div>
                            <div>{{role}}</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-card shadow="hover" style="height:190px;">
                    <div slot="header" class="clearfix">
                         <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入网址"
                            v-model="textarea"/>
                    </div>
                    <el-button type="primary" size="large" style="margin-top:0px;margin-left:5px;" @click="searchDate">爬取数据</el-button>
                </el-card>
            </el-col>
        </el-row>
         <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-notice grid-con-icon"></i>

                                <div class="grid-cont-right">
                                    <div class="grid-num">{{titleTag.list.length}}</div>
                                    <div >关键字</div>
                                </div>
                            </div>
                            <div style="padding:15px 15px;min-height:280px;">
                                <el-tag type="success" v-for="(v,i) in titleTag.list" :key="i">{{v}}</el-tag>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-people grid-con-icon"></i>

                                <div class="grid-cont-right">
                                    <div class="grid-num">{{metaTag.count}}</div>
                                    <div>摘要</div>
                                </div>
                            </div>
                              <div style="padding:15px 15px;min-height:280px;" v-for="(v,i) in metaTag.list" :key="i">
                                {{v}}
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{aTag.count}}</div>
                                    <div>链接数量</div>
                                </div>
                            </div>
                            <div>
                                 <el-table :data="aTag.list" :show-header="false" height="304" style="width: 100%;font-size:14px;">
                                    <el-table-column>
                                        <template slot-scope="scope">
                                            <div class="todo-item"><span style="margin-right:25px;">点击访问：</span><a :href="scope.row" style="color:rgb(45, 140, 240)" target="_blank">{{scope.row}}</a></div>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
    </div>
</template>

<script>
    // import {XXX} from '@/api/spider'
    import Schart from 'vue-schart';
    // import bus from '../common/bus';
    export default {
        name: 'dashboard',
        data() {
            return {
                textarea:"",
                name: localStorage.getItem('ms_username'),
                titleTag:{
                    count:0,
                    list:[]
                },
                metaTag:{
                    count:0,
                    list:[]
                },
                 aTag:{
                    count:0,
                    list:[]
                },
                
            }
        },
        components: {
            Schart
        },
        computed: {
            role() {
                return this.name === 'admin' ? '超级管理员' : '普通用户';
            }
        },
        created(){
          
        },
     
        deactivated(){
          
        },
        methods: {
           searchDate(){
                var data={
                    name:'111',
                    age:2222
                }
                this.$http.get(`${Window.ip}/beam_ht/crawler/search?url=${this.textarea}&userName=${this.name}`)
                .then(res=> {
                    res=res.data;
                    this.aTag=res.data.aTag;
                    this.titleTag=res.data.titleTag;
                    this.metaTag=res.data.metaTag;
                })
           }
        }
    }

</script>


<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }

    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .todo-item {
        font-size: 14px;
    }

    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }

    .schart {
        width: 100%;
        height: 300px;
    }

</style>
