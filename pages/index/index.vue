<template>
	<view class="container">
		<Footer></Footer>
	</view>
</template>

<script>
	import Footer from '../../components/footer/index.vue';
	import $ajax  from '@/utils/ajax.js';
	console.log($ajax);
	export default {
		components:{
			Footer,
		},
		data() {
			return {
				
			}
		},
		methods: {
          
		},
		onLoad() {
			console.log(this);
		$ajax.get({
			url: `api/news`,
			param: {
			
			}
		}).then((res) => {
				console.log(res.data)			
		})
			
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
