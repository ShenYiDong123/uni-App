<template>
	<view class="index-box">
		<!-- 搜索框 -->
		<ydSearch></ydSearch>
		<!-- 轮播图组件 -->
		<ydBanner></ydBanner>
		<!-- 分类组件 -->
		<ydCategory></ydCategory>
		<!-- 热门推荐 -->
		<yd-list></yd-list>
	</view>
</template>

<script>
	import ydBanner from '/components/banner/banner.vue'
	import ydCategory from '/components/category/category.vue'
	import ydSearch from '/components/search/search-input.vue'
	import ydList from '/components/list/list.vue'
	export default {
		components: {
			// 注册组件
			ydBanner,ydCategory,ydSearch,ydList
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
