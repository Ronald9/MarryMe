# MyMarry
forked from pengMaster/marry
https://github.com/pengMaster/marry

特别鸣谢: 中年人 QQ: 946549990

本项目为微信小程序的项目, 它来源于 中年人 的项目. 项目地址在上方.

本项目是一个: 婚礼邀请函 - 婚柬 - 微信小程序 - 小程序端

主要精简实现了相关页面, 去除并一些无用且无关的代码.

待定

1: 使用原生实现

2: 使用 UI 框架实现

3: 添加后台功能实现

使用并注意:

1: clone 下来之后, 自己先在 app.json 中调整初始显示界面为 "pages/main/home/home", 因为 splash 界面还没改完.

2: 数据都为本地数据, 还没改造完成网络数据. 

只弄了这一个网络请求 API 数据, 你也可以去用.

https://easy-mock.com/mock/5a586ceb3dcb200788d28970/example/v1/navigation/{memberId}

例如:

https://easy-mock.com/mock/5a586ceb3dcb200788d28970/example/v1/navigation/1

它将返回如下格式的数据:

{
  "success": true,
  "code": 1,
  "msg": "获取用户数据成功",
  "currentTime": "2018-10-24 10:27:28",
  "data": {
    "husband": "司马相如",
    "wife": "卓文君",
    "solar_calendar": "2019年9月9日",
    "lunar_calendar": "2019年八月初八",
    "begin_time": "12:00",
    "address": "XXX市XXX县XXX镇XXX村喜来登大酒店2楼",
    "longitude": "112.904501",
    "latitude": "28.215876"
  }
}

3: 关于接口 https://easy-mock.com/mock/5a586ceb3dcb200788d28970/example/v1/navigation/1 中的经纬度地址

    "longitude": "112.904501",
    "latitude": "28.215876"
    
建议你先在 https://developer.amap.com/console/show/picker 这里识取你自己想要的坐标, 并替换成你自己的.


最后, 动动你的小手, 点击右上角的 star 来解除老夫身上的印封. 多谢!
