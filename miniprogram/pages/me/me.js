// miniprogram/pages/me/me.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hasUserInfo: false,
        userInfo: null,
        service: [{
            name: "日志",
            img: "/images/me/log.png",
            url: "/mePackage/pages/log/log"
        }, {
            name: "意见反馈",
            img: "/images/me/react.png",
            url: "/mePackage/pages/feedback/feedback"
        }, {
            name: "关于",
            img: "/images/me/about.png",
            url: "/mePackage/pages/about/about"
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // 已经授权下，获取个人信息
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else {
            // 异步操作
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: app.globalData.userInfo,
                    hasUserInfo: true
                })
            }
        }
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
    /**
     * 授权
     */
    getUserInfo: function(e) {
        console.log("[授权][授权成功]")
        if (e.detail.userInfo) {
            // 当前页面赋值
            this.setData({
                userInfo: e.detail.userInfo,
                hasUserInfo: true
            })
            // 全局变量赋值
            app.globalData.userInfo = this.data.userInfo
            app.globalData.hasUserInfo = true
        }
    }
})