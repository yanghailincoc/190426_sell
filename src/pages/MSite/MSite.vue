<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
      <span class="header_search" slot="left">
        <i class="iconfont iconsearch"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <mt-swipe :auto="4000" :show-indicators="true" class="swipe">
        <mt-swipe-item class="swipe_item">
          <div class="item_div">
            <img src="./images/nav/1.jpg">
            <span>甜品饮品</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/2.jpg">
            <span>商超便利</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/3.jpg">
            <span>美食</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/4.jpg">
            <span>简餐</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/5.jpg">
            <span>新店特惠</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/6.jpg">
            <span>准时达</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/7.jpg">
            <span>预定早餐</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/8.jpg">
            <span>土豪推荐</span>
          </div>
        </mt-swipe-item>
        <mt-swipe-item class="swipe_item">
          <div class="item_div">
            <img src="./images/nav/1.jpg">
            <span>甜品饮品</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/2.jpg">
            <span>商超便利</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/3.jpg">
            <span>美食</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/4.jpg">
            <span>简餐</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/5.jpg">
            <span>新店特惠</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/6.jpg">
            <span>准时达</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/7.jpg">
            <span>预定早餐</span>
          </div>
          <div class="item_div">
            <img src="./images/nav/8.jpg">
            <span>土豪推荐</span>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      
      <!-- ShopList 商品列表 -->
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
import "mint-ui/lib/style.css";
import ShopList from '../../components/ShopList/ShopList.vue'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  components: {
    HeaderTop,
    ShopList
  },
  methods: {
    handleChange(index) {
      console.log(index);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.msite // 首页
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swipe
      width 100%
      height 100%
      .swipe_item
        width 100%
        display flex
        justify-content space-around
        align-items flex-start
        flex-wrap wrap
        .item_div
          width 25%
          display block
          text-align center
          padding-bottom 10px
          font-size 0
          img
            display inline-block
            width 50px
            height 50px
          span
            display block
            width 100%
            text-align center
            font-size 13px
            color #666
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
    
</style>