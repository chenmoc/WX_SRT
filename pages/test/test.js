// pages/test/test.js
var stuname='chenmoc';
var teaname='Chen';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  stuleap:function(e){  //学生注册函数
    console.log(stuname);
    wx.hideTabBar({  //隐藏菜单栏
      animation: true,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },

tealeap:function(e){  //老师注册函数
    console.log(teaname);
    wx.showTabBar({  //显示菜单栏
      animation: true,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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