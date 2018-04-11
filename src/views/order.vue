<template>
  <div class="order">
    <!-- 商家模块头部 组件 -->
    <div class="sellerHeader">
        <!-- 主要内容：左侧头像、右侧描述 -->
        <div class="contentWrapper"> 
            <div class="sellerLogo">
                <img src="http://adminsub.soupu.com/upload/editor/2016/12/2016122009502862_y.jpg">
            </div>
            <div class="content">
                <div class="title">
                    <span>深圳麦当劳红荔西路餐厅</span>
                </div>
                <div class="description">
                    <span>欢迎光临，很高兴为你服务~</span>
                </div>

                <!-- 活动 -->
                <div class="supports">
                  <li v-for="">
                    <span class="text">{{  }}</span>
                  </li>
                </div>
            </div>
        </div>

        <!-- 公告 -->
        <div class="bulletin-wrapper" @click="detailShow = true">
            <span class="brand"></span>
            <span class="text">{{  }}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>

        <!-- 背景 -->
        <div class="background">
            <img :src="seller.avatar">
        </div>

        <!-- 浮层详情 -->
        <transition name="fade">
            <div class="detail" v-show="detailShow">
                <div class="detail-wrapper clearfix">
                    <div class="detail-main">
                        <h1 class="name">{{ seller.name }}</h1>
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">优惠信息</div>
                            <div class="line"></div>
                        </div>

                        <ul class="detail-supports" v-if="seller.supports">
                            <li class="supports-item" v-for="(item,index) in seller.supports">
                                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                                <span class="text">{{ seller.supports[index].description }}</span>
                            </li>
                        </ul>

                        <div class="title">
                            <div class="line"></div>
                            <div class="text">商家公告</div>
                            <div class="line"></div>
                        </div>

                        <div class="detail-text">
                            <p class="text">{{ seller.bulletin }}</p>
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
      <div class="tab-item">
        <router-link to="">点菜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="">商家</router-link>
      </div>
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
    line-height: 1;
    font-size: 13px;
    font-weight: 200;
    overflow: hidden;
    background-color: rgba(7,17,27,0.5);
}
.contentWrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
}
.sellerLogo {
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
    display: inline-block;
    margin-left: 16px;
}
.content title {
    margin:2px 0 8px 0;
}
.content brand {
    width: 30px;
    height: 18px;
    display: inline-block;
    vertical-align: top;
    background-size: 30px 18px;
    background-repeat: no-repeat;
}
</style>
