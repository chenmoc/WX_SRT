// pages/schedule/schedule.js
var vtime1 = ''
var vtime2 = ''
var vtime3 = ''
var vtime4 = ''
var vtime5 = ''
var vtime6 = ''
var vtime7 = ''
var vtime8 = ''


Page({

  /**
   * 页面的初始数据
   */
  data: {
    time1: '20:09',
    time2: '20:30',
    time3: '21:00',
    time4: '21:30',
    time5: '22:00',
    time6: '22:39',
    time7: '23:00',
    time8: '23:30',
  },

  leap: function(){
    var that = this;
    wx.chooseMessageFile({
      count: 8,
      type: 'all',
      success(res){
        console.log(res)
        const tempFilePaths = res.tempFiles;
        const tvtime1 = that.data.time1;
        const tvtime2 = that.data.time2;
        const tvtime3 = that.data.time3;
        const tvtime4 = that.data.time4;
        const tvtime5 = that.data.time5;
        const tvtime6 = that.data.time6;
        const tvtime7 = that.data.time7;
        const tvtime8 = that.data.time8;
        console.log(tempFilePaths)
        for( var i=0 ; i<8; i++){
          if(i<7){
            wx.uploadFile({
            url: 'https://chenmoc.com:5000/auto',
            filePath: tempFilePaths[i].path,
            name: 'file',
            formData: {
              file_name: tempFilePaths[i].name,
              num: 8,
              time1: tvtime1,
              time2: tvtime2,
              time3: tvtime3,
              time4: tvtime4,
              time5: tvtime5,
              time6: tvtime6,
              time7: tvtime7,
              time8: tvtime8,
            },
            header:{
              // 'content-type': 'application/x-www-form-urlencoded',
              'content-type': 'multipart/form-data',
              'chartset': 'utf-8'
            },
            success:function(res){
              console.log(res.data);
            },
            fail:function(res){ 
              console.log(res)
            }
          })
        }
        else{
          wx.uploadFile({
            url: 'https://chenmoc.com:5000/auto',
            filePath: tempFilePaths[i].path,
            name: 'file',
            formData: {
              file_name: tempFilePaths[i].name,
              num: 8,
              time1: tvtime1,
              time2: tvtime2,
              time3: tvtime3,
              time4: tvtime4,
              time5: tvtime5,
              time6: tvtime6,
              time7: tvtime7,
              time8: tvtime8,
            },
            header:{
              'content-type': 'multipart/form-data',
              'chartset': 'utf-8'
            },
            success:function(res){
              console.log(res.data);
              wx.request({
                url: 'https://chenmoc.com:5000/send',
                method: 'GET',
                data: {
                  num: 8,
                },
                
                header: {
                  'content-type' : 'application/x-www-form-urlencoded'
                },
                responseType: 'arraybuffer',
                success:function(res){
                  const fs = wx.getFileSystemManager();
                  fs.writeFile({
                    filePath: wx.env.USER_DATA_PATH + "/schedule.xls",
                    data: res.data,
                    encoding: "binary",
                    success:function(res){
                      wx.openDocument({
                        filePath: wx.env.USER_DATA_PATH + "/schedule.xls",
                        showMenu: true,
          
                      })
                    }
                  })
                }
              })
            },
            fail:function(res){ 
              console.log(res)
            }
          })
        }
      }
      }
    })
},


  Time1Change: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if(e.detail.value > this.data.time2){
      wx.showModal({
        content:'选择的时间区间不符合规范噢',
        showCancel: false
      })
    }
    else if(e.detail.value < this.data.time2){
      this.setData({
        time1: e.detail.value
      })
      vtime1 = e.detail.value;
    }
  },

  Time2Change: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if(e.detail.value < this.data.time1 || e.detail.value > this.data.time3){
      wx.showModal({
        content:'选择的时间区间不符合规范噢',
        showCancel: false
      })
    }
    else if(e.detail.value > this.data.time1){
      this.setData({
        time2: e.detail.value
      })
      vtime2 = e.detail.value;
    }
  },

  Time3Change: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if(e.detail.value > this.data.time4 ||  e.detail.value < this.data.time2){
      wx.showModal({
        content:'选择的时间区间不符合规范噢',
        showCancel: false
      })
    }
    else if(e.detail.value < this.data.time4){
      this.setData({
        time3: e.detail.value
      })
      vtime3 = e.detail.value;
    }
  },

  Time4Change: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if(e.detail.value < this.data.time3 || e.detail.value > this.data.time5){
      wx.showModal({
        content:'选择的时间区间不符合规范噢',
        showCancel: false
      })
    }
     else if(e.detail.value > this.data.time3){
      this.setData({
        time4: e.detail.value
      })
      vtime4 = e.detail.value;
    }
  },

  Time5Change: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if(e.detail.value > this.data.time6 ||  e.detail.value < this.data.time4){
      wx.showModal({
        content:'选择的时间区间不符合规范噢',
        showCancel: false
      })
    }
    else if(e.detail.value < this.data.time6){
      this.setData({
        time5: e.detail.value
      })
      vtime5 = e.detail.value;
    }
  },

  Time6Change: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if(e.detail.value < this.data.time5 ||  e.detail.value > this.data.time7){
      wx.showModal({
        content:'选择的时间区间不符合规范噢',
        showCancel: false
      })
    }
    else if(e.detail.value > this.data.time5){
      this.setData({
        time6: e.detail.value
      })
      vtime6 = e.detail.value;
    }
  },

  Time7Change: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if(e.detail.value > this.data.time8 ||  e.detail.value < this.data.time2){
      wx.showModal({
        content:'选择的时间区间不符合规范噢',
        showCancel: false
      })
    }
    else if(e.detail.value < this.data.time8){
      this.setData({
        time7: e.detail.value
      })
      vtime7 = e.detail.value;
    }
  },

  Time8Change: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if(e.detail.value < this.data.time7){
      wx.showModal({
        content:'选择的时间区间不符合规范噢',
        showCancel: false
      })
    }
    else if(e.detail.value > this.data.time7){
      this.setData({
        time8: e.detail.value
      })
      vtime8 = e.detail.value;
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