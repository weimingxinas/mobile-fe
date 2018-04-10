<!-- 商家模块头部 组件 -->
<template>
  <div class="seller-header" v-if="seller">
      <!-- 主要内容：左侧头像、右侧描述 -->
      <div class="content-wrapper"> 
          <div class="avatar">
              <img :src="seller.avatar">
          </div>
          <div class="content">
              <div class="title">
                  <span class="brand"></span>
                  <span class="name">{{ seller.name }}</span>
              </div>
              <div class="description">
                  <span>{{ seller.desctiption }} / {{ seller.deliveryTime }}</span>分钟送达
              </div>

              <!-- 活动 -->
              <div class="supports" v-if="seller.supports">
                  <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                  <span class="text">{{ seller.supports[0].description }}</span>
              </div>
          </div>

          <!-- 活动个数 -->
          <div class="supports-count" v-if="seller.supports" @click="detailShow = true">
              <span>{{ seller.supports.length }}个活动</span>
              <i class="icon-keyboard_arrow_right"></i>
          </div>
      </div>

      <!-- 公告 -->
      <div class="bulletin-wrapper" @click="detailShow = true">
          <span class="brand"></span>
          <span class="text">{{ seller.bulletin }}</span>
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
</template>
<script>
export default{
    components: {},
    data(){
        return {
            detailShow:false,
            classMap:['decrease','discount','special','invoice','guarantee']
        }
    },
    props: {
        seller:{
            type:Object
        }
    },
    watch:{},
    methods:{
        back(){
            this.$router.push({
                path:'/index'
            })
        }
    },
    filters:{},
    computed:{},
    created() {},
    mounted() {},
    destroyed() {}
}
</script>
<style>
.seller-header{
    position: relative;
    color:#fff;
    line-height: 1;
    font-size: 13px;
    font-weight: 200;
    overflow: hidden;
    background-color: rgba(7,17,27,0.5);
}
.content-wrapper{
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;

}
</style>