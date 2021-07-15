// pages/login/login.js
var app = getApp();
var userNum = '';
var userPW = '';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  inputNum: function(e){
    userNum = e.detail.value;
 },

 inputPW: function(e){
   console.log(e.detail.value);
   userPW = e.detail.value;
 },

sure: function(){
  console.log(app.globalData.user);
  var num = Number(userNum);
  if(isNaN(num) || num == ""){
    wx.showModal({
      title: '提示',
      content: '输入的学号或教工号格式不正确，请检查后重新输入',
      showCancel: false
    })
  }
  else if(userPW == "" ){
    wx.showModal({
      title: '提示',
      content: '密码不能为空，请检查密码输入',
      showCancel: false
    })
  }
  else{
    wx.request({
      url: 'https://chenmoc.xyz/login.php',
      method: 'GET',
        data: {
          num: userNum,
          password: userPW,
          check: app.globalData.user
        },
        header: {
          'content-type' : 'application/json'
        },
        success: function(res){
          console.log(res.data);
          if(res.data.status == -2){
            wx.showModal({
              title: '提示',
              content: '此学号未注册，请返回注册页面',
              showCancel: false
            })
          }
          else if(res.data.status == -3){
            wx.showModal({
              title: '提示',
              content: '此职工号未注册，请返回注册页面',
              showCancel: false
            })
          }
          else if(res.data.status == -4){
            wx.showModal({
              title: '提示',
              content: '密码错误，请检查密码后重新输入',
              showCancel: false
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