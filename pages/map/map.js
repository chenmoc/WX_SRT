// pages/map/map.js
var lat1= 'null';
var lng1 = 'null';

function distance(lat1,long1,lat2,long2) {  //距离函数：根据两点经纬度计算距离（km）
  var lat3 = lat1*Math.PI/180.0;
  var lat4 = lat2*Math.PI/180.0;
  var a = Math.abs(lat1-lat2) * Math.PI/180.0;
  var b = Math.abs(long1-long2) * Math.PI/180.0;
  var d = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2)+Math.cos(lat3)*Math.cos(lat4)*Math.pow(Math.sin(b/2),2)));
  console.log(typeof(d));
  d = d * 6370.856;
  d = Math.round(d*10000)/10000;
  return d;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
      lat_4: 36.617216,
      long_4: 116.952421,
      lat_12: 36.646048,
      long_12: 116.967579,
      long1: "n",
      lan1: "n",
      dt: 0,
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
      });
      console.log(typeof(lat1));
      console.log(typeof(me.data.lat_12));
    },5000
      );
      setTimeout(
        function(){
          me.setData({
            'dt': Number(distance(lat1,lng1,me.data.lat_12,me.data.long_12))
          });
          console.log(distance(me.data.lat_4,me.data.long_4,me.data.lat_12,me.data.long_12)*1000);
        },6000
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

