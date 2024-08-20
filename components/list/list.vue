<template>
  <view class="container">
    <scroll-view scroll-y="true" class="scroll-view">
      <transition-group name="fade">
        <view v-for="item in showToShow" :key="item.id" class="item">
          <view class="item-row">
            <view class="item-image-container">
              <image class="item-image" :src="item.imageUrl1"></image>
              <text class="item-title">{{ item.title1 }}</text>
			  <view class="price-container">
					<text class="price">￥{{ item.price1 }}</text>
			  </view>
            </view>
            <view class="item-image-container">
              <image class="item-image" :src="item.imageUrl2"></image>
              <text class="item-title">{{ item.title2 }}</text>
			  <view class="price-container">
					<text class="price">￥{{ item.price2 }}</text>
			  </view>
            </view>
          </view>
        </view>
      </transition-group>
    </scroll-view>
    <view class="load-more" @click="showMoreItems">
      <text v-if="loading">加载中</text>
      <text v-else>查看更多</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title1: '蜜雪冰城 冰鲜柠檬水',
		  price1:2.8,
		  price2:14.44,
          title2: '水果捞 500g',
          imageUrl1: '/static/list/1.jpg',
          imageUrl2: '/static/list/2.png'
        },
        {
          id: 2,
          title1: 'Item 3',
          title2: 'Item 4',
		  price1:4.4,
		  price2:33.33,
          imageUrl1: '/static/list/3.png',
          imageUrl2: '/static/list/4.png'
        },
        {
          id: 3,
          title1: 'Item 5',
          title2: 'Item 6',
		  price1:109.00,
		  price2:33.33,
          imageUrl1: '/static/list/5.png',
          imageUrl2: '/static/list/6.png'
        },
        {
          id: 4,
          title1: 'Item 7',
          title2: 'Item 8',
		  price1:200.00,
		  price2:33.33,
          imageUrl1: '/static/list/5.png',
          imageUrl2: '/static/list/6.png'
        },
        // Add more items as needed
      ],
      currentItemCount: 2,
	  loading: false
    };
  },
  computed: {
	  // 初始化
	  showToShow() {
	  		  return this.items.slice(0,this.currentItemCount);
	  }
  },
  methods: {
	// 查看更多
    showMoreItems() {
	   this.loading = true;
	  setTimeout(()=>{
		  this.currentItemCount += 4;
		  this.$forceUpdate(); // 强制重新渲染
		  this.loading = false;
	  },2000);
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 56vh;
  background-color: #f5f5f5;
  margin-top: 30rpx;
}

.scroll-view {
  flex: 1;
  padding: 16px;
}

.item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  padding: 16px;
}

.item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
}

.item-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.item-title {
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.load-more {
  background-color: #fff;
  padding: 16px 0;
  text-align: center;
  color: #666;
  cursor: pointer;
  border-top: 1px solid #e5e5e5;
}

.price-container {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.price {
  font-size: 14px;
  font-weight: bold;
  color: #FF0000;
}

.meituan-tag {
  width: 40px;
  height: 16px;
  margin-left: 8px;
}
</style>