开发：
manifest.json内的transformPx已经更改为true，可以直接使用px，会自动转换为upx.

不支持 百分比样式。 可以使用vh vw。

页面布局使用flexbox布局。


公用ajax请求封装在utils=>ajax.js内。

调用方法:
import $ajax  from '@/utils/ajax.js';

$ajax.get({
url: "...",
param: {

}
}).then((res) => {
	console.log(res.data)			
})

 
