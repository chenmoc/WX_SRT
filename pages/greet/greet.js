// pages/greet/greet.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  stuleap:function(e){  //学生注册函数
  app.globalData.user = 1;
  console.log(app.globalData.user);
   wx.redirectTo({
     url: '../login/login',
   })
  },

tealeap:function(e){  //老师注册函数
  app.globalData.user = 2;
  console.log(app.globalData.user);
  wx.redirectTo({
    url: '../login/login',
  })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.hideTabBar({
     animation: true,
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})