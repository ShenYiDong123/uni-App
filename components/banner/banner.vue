<template>
  <view class="banner-box">
    <swiper class="swiper" indicator-dots="true" indicator-color="rgba(255, 255, 255, 0.3)" indicator-active-color="#ffffff" autoplay="true" circular="true" duration="500" interval="3000">
      <swiper-item v-for="(item,index) in bannerList" :key="index" @click="handleAdvertClick(item.advertUrl)">
        <image class="banner-image" :src="item.imageUrl"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  props: {
	bannerList: {
		type: Array,
		default: () => [
			{
				id:1,
				imageUrl: '/static/banner/2.png',
				background:'#009B8C',
				advertUrl:'/pages/my/my'
			},
			{
				id:2,
				imageUrl: '/static/banner/2.png',
				background:'#009B8C',
				advertUrl:'/pages/my/my'
			},
			{
				id:3,
				imageUrl: '/static/banner/2.png',
				background:'#009B8C',
				advertUrl:'/pages/my/my'
			}
		]
	}  
  },
  data() {
    return {
      // 
    }
  },
  methods: {
    // 点击事件
	handleAdvertClick(advertUrl){
		uni.switchTab({
			url:advertUrl
		});
	}
  }
}
</script>

<style>
.banner-box {
  width: 100%;
  height: 320rpx;
  overflow: hidden;
  border-radius: 16rpx;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
  margin-top: 20rpx; /* 将轮播图往下移动 100rpx */
}

.swiper {
  width: 100%;
  height: 100%;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.uni-swiper-dot {
  width: 8rpx;
  height: 8rpx;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: inline-block;
  transition: all 0.3s ease;
}

.uni-swiper-dot-active {
  width: 20rpx;
  border-radius: 5rpx;
  background-color: #ffffff;
}
</style>