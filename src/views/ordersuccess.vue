<template>
  <div class="ordersuccess">
    <!-- 头部图像 -->
    <div class="orderHeader">
      <span class="before"><i class="icon iconfont icon-xitongfanhui"></i></span>
    </div>
    <div class="maincontent">
      <div class="content">
        <h2 class="title">商家已接单</h2>
        <p>商品准备中，请稍等，有问题请联系商家</p>        
        <div class="button">
        <button class="press" :class="{'buttonbgcolor': isAtive1}" @click="choose1">取消</button>
        <button class="press" :class="{'buttonbgcolor': isAtive2}" @click="choose2">加菜</button>
        </div>
      </div>
      <div class="foodlist">
          <div class="foodlistHesder">
              <span class="shopname">深圳麦当劳红荔西路餐厅<i></i></span>             
          </div>
          <div class="foodlistcontent">
              <div class="fooddetail" v-for="food in foodlist">
                <ul>
                    <li>
                        <img>
                        <span>{{ food.c_name}}</span>
                        <span>￥{{ food.piece }}</span>
                    </li>
                </ul>
              </div>
              <div class="total">
                <span>合计</span>
                <span class="redcolor">￥{{ totalprice }}</span>
              </div>
          </div>         
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api';
export default {
    name: 'orderSuccess',
    data () {
        return {
            isAtive1: false,
            isAtive2: true,
            foodlist: []
        };
    },
    computed: {
        totalprice () {
            let total = 0;
            for (let i = 0; i < this.foodlist.length; i++) {
                total += this.foodlist[i].c_num * (this.foodlist[i].price * 100);
            }
            return total / 100;
        }
    },
    created () {
        const id = this.$route.params['o_id'];
        api.orderList(id).then(res => {
            console.log(res.data.data);
            this.foodlist = res.data.data;
        });
    },
    methods: {
        choose1 () {
            this.isAtive1 = true;
            this.isAtive2 = false;
        },
        choose2 () {
            this.isAtive2 = true;
            this.isAtive1 = false;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
    margin: 0;
    padding: 0;
}
.ordersuccess {
    padding:5px 10px;
    background:  #F8F8F8;
}
.orderHeader {
    width: 100%;
    height: 150px;
    background: url("/static/img/logo.jpg");
}
.before i {
    float: left;
    margin: 10px 0 0 10px;
}
.maincontent {
    width: 100%;
    height: 100%;
}
.content {
    height: 100px;
    position: relative;
    padding: 10px;
    background: #fff;
    margin: 10px 0;
}
.title {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin: 5px 0;
}
.content p {
    font-size: 14px;
    text-align: center;
    color: #999;
    margin-bottom: 10px;
}
.button {
    text-align: center;
    background: #fff;
}
.press {
    width: 25%;
    height: 30px;
    border: 1px solid #999;
    margin: 0 10px;
    background: #fff;
    color: #999;
}
.buttonbgcolor {
    background: #ffda61;
}
.foodlist {
    margin-top: 20px;
    width: 100%;
    background: #fff;
}
.foodlistHesder {
    height: 30px;
    padding: 3px;
    color: #999;
    text-align: center;   
}
.total {
    float: right;
}
.redcolor {
    color: red;
}
</style>
