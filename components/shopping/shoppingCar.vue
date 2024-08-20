<template>
	<view>
		<view v-for="product in products" :key="product.id">
			<view>{{product.name}} - {{product.price}}</view>
			<button @click="addToCart(product)">加入购物车</button>
		</view>

		<view>
			<view v-for="item in cartItems">
				<view>{{ item.name }} - ￥{{ item.price }} - 数量：{{ item.quantity }} </view>
				<button @click="increaseQuantity(item)">增加数量</button>
				<button @click="decreaseQuantity(item)">减少数量</button>
				<button @click="removeFromCart(item)">移除</button>
			</view>
			<view>{{total}}</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				products: [{
						id: 1,
						name: '商品1',
						price: 10
					},
					{
						id: 2,
						name: '商品2',
						price: 20
					},
				],
				cartItems: []
			};
		},
		
		methods: {
			addToCart(product){
				console("加入购物车");
			},
			increaseQuantity(item){
				item.quantity++;
			},
			decreaseQuantity(item){
				if(item.quantity > 1){
					item.quantity--;
				}
			},
			removeFromCart(item){
				const index = this.cartItems.indexOf(item);
				this.cartItems.splice(index,1);
			}
		}
	}
</script>

<style>
</style>