<template>
  <view class="search-box">
    <input class="search-input" type="text" placeholder="搜索" />
  </view>
</template>

<script>
export default {
  name: 'SearchBox'
}
</script>

<style>
.search-box {
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
  padding: 20rpx 0;
}

.search-input {
  background-color: #f0f0f0;
  height: 70rpx;
  line-height: 70rpx;
  text-align: center;
  border-radius: 35rpx;
  margin: 0 0rpx;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
}
</style>