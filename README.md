# MyMarry
forked from pengMaster/marry
https://github.com/pengMaster/marry

婚礼邀请函 - 婚柬 - 微信小程序 - 小程序端

重新实现了部分内容(精简实现了). 原内容有很多无用且无关的代码.


待定

1: 原生实现
2: 使用 UI 框架实现
3: 添加后台功能实现

使用并注意:

1: clone 下来之后, 自己在 app.json 中调整初始显示界面为 "pages/main/home/home", 因为 splash 界面还没改完.

2: 数据都为本地数据, 还没改造完成 网络数据. 

API
https://easy-mock.com/mock/5a586ceb3dcb200788d28970/example/v1/navigation/{memberId}

例如:
https://easy-mock.com/mock/5a586ceb3dcb200788d28970/example/v1/navigation/1

获取 数据

只弄了这一个网络请求API数据, 你也可以去用.

3: 关于 接口 https://easy-mock.com/mock/5a586ceb3dcb200788d28970/example/v1/navigation/1 中的经纬度地址

    "longitude": "112.904501",
    "latitude": "28.215876"
    
  你可以在 https://developer.amap.com/console/show/picker 这里识取你自己想要的坐标, 并替换成你自己想要的.


最后, 动动你的小手, 点击右上角的 star 来解除老夫身上的印封. 多谢!
