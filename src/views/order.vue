<template>
  <div class="order">
    <!-- 商家模块头部 组件 -->
    <div class="sellerHeader">
        <!-- 主要内容：左侧头像、右侧描述 -->
        <div class="contentWrapper"> 
            <div class="sellerLogo">  
                <img v-bind:src="logoimg"/>             
            </div>
            <div class="content">
                <h3 id="shopName">深圳麦当劳红荔西路餐厅</h3>
                <span>欢迎光临，很高兴为你服务~</span>

                <!-- 评价 -->
                <div class="supports">
                  <li v-for="">
                    <span class="text">{{  }}</span>
                  </li>
                </div>
            </div>
            
        </div>
    </div>
    <!-- 公告 -->
    <div class="notice">
        <div class="bulletinWrapper" @click="detailShow = true">
            <span class="brand"></span>
            <span class="text">{{  }}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>

        <!-- 背景 -->
        <div class="background">       
        </div>

        <!-- 浮层详情 -->
        <transition name="fade">
            <div class="detail" v-show="detailShow">
                <div class="detailWrapper clearfix">
                    <div class="detail-main">
                        <h1 class="name">深圳麦当劳红荔西路餐厅</h1>
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">优惠信息</div>
                            <div class="line"></div>
                        </div>

                        <ul class="detail-supports">
                            <li class="supports-item" v-for="">
                                <span class="icon"></span>
                                <span class="text"></span>
                            </li>
                        </ul>

                        <div class="title">
                            <div class="line"></div>
                            <div class="text">商家公告</div>
                            <div class="line"></div>
                        </div>

                        <div class="detail-text">
                            <p class="text"></p>
                        </div>
                    </div>
                </div>

                <div class="detail-close" @click="detailShow = false">
                    <i class="icon-arrow_lift"></i>
                </div>
            </div>
        </transition>

        <!-- 返回按钮 -->
        <div class="back" @click="back">
            <i class="icon-arrow_lift"></i>
        </div>
    </div>
    <div class="tab">
      <el-tabs>
              <el-tab-pane><router-link to="">点菜</router-link></el-tab-pane>
              <el-tab-pane><router-link to="">评价</router-link></el-tab-pane>
              <el-tab-pane><router-link to="">商家</router-link></el-tab-pane>
      </el-tabs>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>      
  </div>
</template>
<script>
export default {
    name: 'order',
    components: {},
    data () {
        return {
            logoimg: '/static/img/logo.jpg',
            detailShow: false,
            classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        };
    },
    props: {
        seller: {
            type: Object
        }
    },
    watch: {},
    methods: {
        back () {
            this.$router.push({
                path: '/index'
            });
        }
    },
    filters: {},
    computed: {},
    created () {},
    mounted () {},
    destroyed () {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.sellerHeader {
    width: 100%;
    height: 100px;
    position: relative;
    color:#fff;
    font-weight: 200;
    overflow: hidden;
    background-color: rgba(7,17,27,0.5);
}
.contentWrapper {
    position: relative;
    float: left;
    padding: 32px 12px 18px 24px;
}
.sellerLogo {
    position: relative;
    float: left;
    width: 64px;
    height: 64px;
    font-size: 14px;
    vertical-align: top;
}
.sellerLogo img {
    width: 64px;
    height: 64px;
    border-radius: 2px;
}
.content {
    position: relative;
    float: right;
    margin-left: 10px;
    height: 64px;
    width: 200px;

}
#shopName {
    margin:0 4px 4px 0;
    float: left;
    font-size: 16px;
}
span {
    margin:2px 0 8px 0;
    font-size: 10px;

}
.notice{
    width: 100%;
    height: 20px;
    position: relative;
}
.content brand {
    width: 30px;
    height: 18px;
    display: inline-block;
    vertical-align: top;
    background-size: 30px 18px;
    background-repeat: no-repeat;
}
.tab{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.tabItem {
    float: left;
    text-align:center;

}
</style>
