<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
	}
image{
	border: 0;
	width: 100%;
	height: 100%;
}

:-webkit-scrollbar { display: none;}
@import './common/css/style.scss';
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */


</style>
