// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isPlayingMusic: true,
        musicUrl: "http://dl.stream.qqmusic.qq.com/C100000gSW7F2IKT1w.m4a?fromtag=46",

        swiperOption: {
            indicatorDots: true,
            autoplay: true,
            interval: 2600,
            duration: 1200,
        },

        swiperData: [{
                index: 0,
                imgUrl: 'https://pengmaster.com/party/wechat/marry/tai_miao_zip/HY2A0764.jpg',
                type: '别致角楼'
            },
            {
                index: 1,
                imgUrl: 'https://pengmaster.com/party/wechat/marry/ozfq_zip/HY2A1165.jpg',
                type: '欧洲风情'
            },
            {
                index: 2,
                imgUrl: 'https://pengmaster.com/party/wechat/marry/fhjr_zip/HY2A1065.jpg',
                type: '粉红佳人'
            },
            {
                index: 3,
                imgUrl: 'https://pengmaster.com/party/wechat/marry/dqdy_zip/HY2A1159.jpg',
                type: '大气典雅'
            },
            {
                index: 4,
                imgUrl: 'https://pengmaster.com/party/wechat/marry/gwtx_zip/HY2A1088.jpg',
                type: '狗娃特写'
            },
            {
                index: 5,
                imgUrl: 'https://pengmaster.com/party/wechat/marry/zgf_zip/HY2A1049.jpg',
                type: '中国风'
            },
            {
                index: 6,
                imgUrl: 'https://pengmaster.com/party/wechat/marry/jbytj_zip/HY2A1214.jpg',
                type: '酒吧一条街'
            },
            {
                index: 7,
                imgUrl: 'https://pengmaster.com/party/wechat/marry/huahai_zip/HY2A0893.jpg',
                type: '绿叶红花'
            },
            {
                index: 8,
                imgUrl: 'https://pengmaster.com/party/wechat/marry/lyxz_zip/HY2A0868.jpg',
                type: '绿野仙踪'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

    toViewDetail: function(e) {
        let index = e.detail.index;
        // console.log(index, e);
        wx.navigateTo({
            url: '/pages/main/detail/home-detail?index=' + index
        })
    }
})