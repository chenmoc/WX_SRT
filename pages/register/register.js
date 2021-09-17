// pages/register/register.js
var app = getApp();
var userNum = '';
var userPW = '';
var userPWA = '';

Page({

  /**
   * 页面的初始数据
   */
  data: {
      
  },

  inputNum: function(e){
     userNum = e.detail.value;
     app.globalData.userNum = userNum;
  },

  inputPW1: function(e){
    console.log(e.detail.value);
    userPW = e.detail.value;
  },

  inputPW2: function(e){
    console.log(e.detail.value);
    userPWA = e.detail.value;
  },

  sure:function(){
    console.log(app.globalData.userNum);
      var num = Number(userNum);
      if(isNaN(num) || num == ""){
        wx.showModal({
          title: '提示',
          content: '输入的学号或教工号格式不正确，请检查后重新输入',
          showCancel: false
        })
      }
      else if(userPW == "" || userPWA == ""){
        wx.showModal({
          title: '提示',
          content: '密码不能为空，请检查密码输入',
          showCancel: false
        })
      }
      else if(userPW != userPWA){
        wx.showModal({
          title: '提示',
          content: '两次输入的密码不一致，请检查后重新输入',
          showCancel: false
        })
      }
      else{
        wx.login({
          success(res){
            wx.request({
              url: 'https://chenmoc.com/srt/register.php',
              method: 'GET',
              data: {
                num: userNum,
                password: userPW,
                user: app.globalData.user,
                temp_code: res.code
              },
              header: {
                'content-type' : 'application/json'
              },
              success: function(res){
                if(res.data.status == -1){
                  wx.showModal({
                    title: '提示',
                    content: '此学号或教工号已被注册，请直接登陆',
                    showCancel: false
                  })
                }
                else if(app.globalData.user == 2){
                  wx.redirectTo({
                    url: '../tea/tea',
                  })
                }
                else{
                  wx.redirectTo({
                    url: '../index/index',
                  })
                }
              }
            })
          }
        })
    }
  },


  login:function(){
    wx.redirectTo({
      url: '../login/login',
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