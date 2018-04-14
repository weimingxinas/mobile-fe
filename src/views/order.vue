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
        <div class="tabItem">
            <router-link to=''>点餐</router-link>
        </div>
        <div class="tabItem">
            <router-link to='#'>评价</router-link>
        </div>
        <div class="tabItem">
            <router-link to='#'>商家</router-link>
        </div>
    </div>
    <hr>
    <div class="foodItem">
        <div class="leftNav">
            <ul id="meum">
                <li v-for="name in typeFood">                   
                    <span>{{ name.typeName }}</span>
                </li>
            </ul>
        </div>
        <div class="foodlist">
            <ul class="food">
                <li v-for="foodname in foodDetail">
                    <span></span>
                    <span>{{ foodname.name}}</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="shopcar">
        <div class="content">
            <div class="main">
                <div class="left">
                    <div class="logoPart">
                        <div class="logo" :class="{'logoLight': count > 0}">
                            <i class="icon iconfont icon-gouwuche"></i>
                        </div>
                        <div class="count" v-show="count > 0">{{ count }}</div>
                    </div>
                    <div class="price" :class="{'priceLight': count >0}">￥{{ totalPrice }}</div>
                </div>
                <div class="right"@click.stop="pay">
                    <div class="pay">{{ payDesc }}</div>
                </div>
            </div>
        </div>
    </div>   

    

    <keep-alive>
      <router-view></router-view>
    </keep-alive>      
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import axios from 'axios';
export default {
    name: 'order',
    components: {},
    data () {
        return {
            logoimg: '/static/img/logo.jpg',
            detailShow: false,
            typeFood: [],
            foodDetail: []
        };
    },
    props: {
        seller: {
            type: Object
        },
        food: {
            type: Object
        },
        //  加入购物车的商品
        selectFoods: {
            type: Array,
            default () {
                return [];
            }
        },
        // 起送费
        minPrice: {
            type: Number,
            default: 0
        }
    },
    watch: {},
    methods: {
        back () {
            this.$router.push({
                path: '/index'
            });
        },
        pay () {
            let _this = this;
            MessageBox.confirm(`您共需支付 ${_this.totalPrice} 元`, '结算');
        }
    },
    filters: {},
    computed: {
        totalPrice () {
            let _this = this;
            let total = 0;
            _this.selectFoods.forEach((food) => {
                total += food.price * food.count;
            });
            return total;
        },
        // 所选商品总数量
        count () {
            let _this = this;
            let total = 0;
            _this.selectFoods.forEach((food) => {
                total += food.count;
            });
            return total;
        },
        // 20元起送 、 还差10元起送 、 去结算
        payDesc () {
            let _this = this;
            if (_this.totalPrice === 0) {
                return `10元起送`;
            } else {
                return '去结算';
            }
        }
    },
    created () {
        axios.get('https://www.easy-mock.com/mock/5acb17c501cfb12e35c2cf78/api/food')
            .then(response => {
                console.log(response);
                this.typeFood = response.data;
            })
            .catch(error => {
                console.log(error);
                alert('网络不可用');
            });
    },
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
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.tabItem {
    text-align:center;
    width: 33.3%;
}
a {
    text-decoration:none;
    color:rgb(77, 85, 93);
}
.tab a :hover {
    color: black;
    text-decoration: underline;
}
hr {
    margin: 0 ;
}
.fooditem{
    width: 100%;
    height: 100%;
}
.leftNav{
    width: 25%;
    height: 100%;
    position: relative;
}
#meum li {
    list-style-type: none;
}
.content {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 48px;
    z-index: 50;
}
.main {
    display: flex;
    width: 100%;
    height: 48px;
    font-size: 0;
    background-color: #141d27;
}
.left {
    flex:1;
}
.logoPart {
    display: inline-block;
    position: relative;
    top: -10px;
    box-sizing: border-box;
    margin: 0 12px;
    padding: 6px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    vertical-align: top;
    text-align: center;
    background-color: #141d27;
}
.logo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #2b343c;
}
.logo i {
    font-size: 24px;
    line-height: 44px;
    color: #80858a;
}
.logoLight {
    background-color: #ffda61;
}
.logoLight i{
    color: #333;
}
.count{
    position: absolute;
    right: 0;
    top: 0;
    width: 24px;
    height: 16px;
    line-height: 16px;
    border-radius: 12px 12px;
    font-size: 9px;
    font-weight: 700;
    color: #fff;
    background-color: rgb(240, 20, 20);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
}
.price {
    display: inline-block;
    box-sizing: border-box;
    margin-top: 12px;
    padding-right: 12px;
    vertical-align: top;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.4);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
}
.pcicelight{
    color: #fff;
}
desc {
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
    margin: 12px 0 0 12px;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.4);
}
.right {
    flex: 0 0 105px;
    width: 105px;
    text-align: center;
}
.pay {
    height: 48px;
    line-height: 48px;
    font-size: 12px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.4);
    background-color: #2b333b;
}
.payLight {
    background-color: #FFDA61;
    color: #333;
}
</style>
