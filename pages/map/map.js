// pages/map/map.js
var lat1= 'null';
var lng1 = 'null';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      long1: "n",
      lan1: "n",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      wx.getLocation({
        type: 'wgs84',
        success: function(res){
          console.log(res)
           lat1 = res.latitude;
           lng1 = res.longitude;
           console.log(res.latitude);
           console.log(res.longitude);
        }
      })
      console.log(lng1);
      console.log(lat1);
      var me = this;
      setTimeout(
        function(){
      me.setData({
        'long1': lng1,
        'lan1': lat1
      })
    },5000
      )
    //  document.getElementById("chen").innerHTML = "当前位置\n经度："+lat1+"\n维度："+lng1;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    this.setData({
      'long1': lng1,
      'lan1': lat1
    })
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