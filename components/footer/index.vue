<template>
	<view class="wefooter">
		
		<view class="" v-on:tap="tosay(item)" v-for="(item,index) in footerlist" :key="index" >
		{{item}}
		</view>
		
		</view>

</template>

<script>
	
	export default {
		name:'wefooter',
		data() {
			return {
				footerlist:[1,2,3,4]
			}
		},
		methods: {
         tosay(e){
			console.log(e);	          
		 }
		}
	}
</script>

<style>
	.wefooter{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100vw;
		height: 80px;
		display: flex;
	}
	.wefooter view{
		/* width: 25vw; */
		flex: 1;
		height: 80px;
		text-align: center;
		line-height: 80px;
		border:1px solid pink;
	}
</style>
