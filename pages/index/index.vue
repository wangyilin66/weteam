<template>
	<view class="container">
		<Footer></Footer>
		<Imview></Imview>
	</view>
</template>

<script>
	import Footer from '../../components/footer/index.vue';
	import Imview from '../../components/imview/index.vue';
    import $ajax  from '@/utils/ajax.js';
	export default {
		components:{
			Footer,
			Imview,
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
				
		});
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
