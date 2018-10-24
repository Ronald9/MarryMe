// pages/invitation/invitation.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        member: {
            husband: "司马相如",
            wife: "卓文君",
            solar_calendar: "2019年9月9日",
            lunar_calendar: "2019年八月初八",
            begin_time: "12:00",
            address: "XXX市XXX县XXX镇XXX村喜来登大酒店2楼",
            longitude: "112.904501",
            latitude: "28.215876"
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 导航到婚礼现场
     */
    navigateToWeddingSite: function(e) {
        console.log("点击导航到婚礼现场");
        let latitude = this.data.member.latitude - 0;
        let longitude = this.data.member.longitude - 0;
        console.log(latitude, longitude);
        wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 18
        })
    }
})