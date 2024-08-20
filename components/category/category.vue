<template>
	<view class="category-top">
		<view class="category-box">
			<view v-for="(item,index) in categoryList" :key="index">
				<image class="category-image" :src="item.imageUrl" ></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			type: Array,
			categoryList: {
				default: () => [{
						id: 1,
						name: '外卖',
						imageUrl: '/static/category/外卖.png'
					},
					{
						id: 2,
						name: '超市',
						imageUrl: '/static/category/超市.png'
					},
					{
						id: 3,
						name: '酒店',
						imageUrl: '/static/category/酒店.png'
					},
					{
						id: 4,
						name: '娱乐',
						imageUrl: '/static/category/娱乐.png'
					},
					{
						id: 5,
						name: '团购',
						imageUrl: '/static/category/团购.png'
					},
					{
						id: 6,
						name: ' 美食',
						imageUrl: '/static/category/美食.png'
					},
					{
						id: 7,
						name: '电影',
						imageUrl: '/static/category/电影.png'
					},
					{
						id: 8,
						name: '水果',
						imageUrl: '/static/category/水果.png'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
.category-top {
	margin-top: 10rpx;
}

.category-box {
	// 使用 Flex 布局,水平方向均匀分布
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 20rpx 30rpx 0 30rpx; // 上下左右添加一些内边距

	>view {
		width: 160rpx; // 设置每个分类盒子的宽度
		height: 70rpx; // 设置每个分类盒子的高度
		background: #f5f5f5; // 设置背景色为浅灰色
		text-align: center; // 文字居中显示
		line-height: 70rpx; // 文字居中显示
		font-size: 26rpx; // 设置文字大小
		border-radius: 20rpx; // 添加圆角边框
		overflow: hidden; // 隐藏溢出部分
		margin-top: 15rpx; // 上方添加一些外边距
	}
}

.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover; // 设置图片填充模式为 cover,保持宽高比并填满容器
  max-width: 55rpx; // 设置最大宽度为 120rpx
  max-height: 60rpx; // 设置最大高度为 120rpx
}
</style>