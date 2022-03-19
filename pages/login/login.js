// pages/login/login.js
var app = getApp();
var userID = '';
var userPW = '';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  inputID: function(e){
    userID = e.detail.value;
 },

 inputPW: function(e){
   console.log(e.detail.value);
   userPW = e.detail.value;
 },

sure: function(){
  console.log(app.globalData.user);
  var ID = Number(userID);
  if(isNaN(ID) || ID == ""){
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
    wx.login({
      success(res){
        wx.request({
          url: 'https://chenmoc.com/srt/login.php',
          method: 'POST',
            data: {
              ID: userID,
              password: userPW,
              user: app.globalData.user,
              temp_code: res.code
            },
            header: {
              'content-type' : 'application/x-www-form-urlencoded'
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
              else if(res.data.status == -1){
                wx.showModal({
                  title: '提示',
                  content: '密码错误，请检查密码后重新输入',
                  showCancel: false
                })
              }
              else if(app.globalData.user == 1){
                app.globalData.userID = userID;
                wx.redirectTo({
                  url: '../index/index',
                })
              }
              else{
                app.globalData.userID = userID;
                wx.redirectTo({
                  url: '../tea/tea',
                })
              }
            }
        })
      }
    })
  }

},

  register: function (){
    wx.redirectTo({
      url: '../register/register',
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