// pages/schedule/schedule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    time1: '08:00',
    time2: '09:50',
    time3: '10:10',
    time4: '12:00',
    time5: '14:00',
    time6: '15:50',
    time7: '16:10',
    time8: '18:00',
  },
  
  leap: function () {
    var that = this;
    wx.chooseMessageFile({
      count: 100,
      type: 'all',
      success(res) {
        console.log(res)
        var uploaded = 0;
        const tempFilePaths = res.tempFiles;
        const tvtime1 = that.data.time1;
        const tvtime2 = that.data.time2;
        const tvtime3 = that.data.time3;
        const tvtime4 = that.data.time4;
        const tvtime5 = that.data.time5;
        const tvtime6 = that.data.time6;
        const tvtime7 = that.data.time7;
        const tvtime8 = that.data.time8;
        console.log(tempFilePaths);
        console.log(tempFilePaths.length);
        for (var i = 0; i < tempFilePaths.length; i++) {
          if (i < tempFilePaths.length - 1) {
            console.log(i);
            wx.uploadFile({
              url: 'https://chenmoc.com:5000/schedule',
              filePath: tempFilePaths[i].path,
              name: 'file',
              formData: {
                file_name: tempFilePaths[i].name,
                file_num: tempFilePaths.length,
              },
              header: {
                'content-type': 'multipart/form-data',
                'chartset': 'utf-8'
              },
              success: function (res) {
                uploaded += 1
                console.log(res.data);
                if (uploaded == tempFilePaths.length - 1) {
                  wx.uploadFile({
                    url: 'https://chenmoc.com:5000/schedule',
                    filePath: tempFilePaths[tempFilePaths.length - 1].path,
                    name: 'file',
                    formData: {
                      file_name: tempFilePaths[tempFilePaths.length - 1].name,
                      file_num: tempFilePaths.length,
                      time1: tvtime1,
                      time2: tvtime2,
                      time3: tvtime3,
                      time4: tvtime4,
                      time5: tvtime5,
                      time6: tvtime6,
                      time7: tvtime7,
                      time8: tvtime8,
                    },
                    header: {
                      'content-type': 'multipart/form-data',
                      'chartset': 'utf-8'
                    },
                    success: function (res) {
                      console.log(res.data);
                      wx.request({
                        url: 'https://chenmoc.com:5000/send',
                        method: 'GET',
                        data: {
                          num: tempFilePaths.length,
                        },

                        header: {
                          'content-type': 'application/x-www-form-urlencoded'
                        },
                        responseType: 'arraybuffer',
                        success: function (res) {
                          const fs = wx.getFileSystemManager();
                          fs.writeFile({
                            filePath: wx.env.USER_DATA_PATH + "/schedule.xls",
                            data: res.data,
                            encoding: "binary",
                            success: function (res) {
                              wx.openDocument({
                                filePath: wx.env.USER_DATA_PATH + "/schedule.xls",
                                showMenu: true,

                              })
                            }
                          })
                        }
                      })
                    },
                    fail: function (res) {
                      console.log(res)
                    }
                  })
                }
              },
              fail: function (res) {
                console.log(res)
              }
            })
          }
          else if (tempFilePaths.length == 1){
            wx.uploadFile({
              url: 'https://chenmoc.com:5000/schedule',
              filePath: tempFilePaths[0].path,
              name: 'file',
              formData: {
                file_name: tempFilePaths[0].name,
                file_num: 1,
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
                    num: 1,
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


  Time1Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.detail.value > this.data.time2 || e.detail.value < '08:00') {
      wx.showModal({
        content: '选择的时间区间不符合规范噢',
        showCancel: false
      })
    } else if (e.detail.value < this.data.time2) {
      this.setData({
        time1: e.detail.value
      })
    }
  },

  Time2Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.detail.value < this.data.time1 || e.detail.value > '09:50') {
      wx.showModal({
        content: '选择的时间区间不符合规范噢',
        showCancel: false
      })
    } else if (e.detail.value > this.data.time1) {
      this.setData({
        time2: e.detail.value
      })
    }
  },

  Time3Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.detail.value > this.data.time4 || e.detail.value < '10:10') {
      wx.showModal({
        content: '选择的时间区间不符合规范噢',
        showCancel: false
      })
    } else if (e.detail.value < this.data.time4) {
      this.setData({
        time3: e.detail.value
      })
    }
  },

  Time4Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.detail.value < this.data.time3 || e.detail.value > '12:00') {
      wx.showModal({
        content: '选择的时间区间不符合规范噢',
        showCancel: false
      })
    } else if (e.detail.value > this.data.time3) {
      this.setData({
        time4: e.detail.value
      })
    }
  },

  Time5Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.detail.value > this.data.time6 || e.detail.value < '14:00') {
      wx.showModal({
        content: '选择的时间区间不符合规范噢',
        showCancel: false
      })
    } else if (e.detail.value < this.data.time6) {
      this.setData({
        time5: e.detail.value
      })
    }
  },

  Time6Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.detail.value < this.data.time5 || e.detail.value > '15:50') {
      wx.showModal({
        content: '选择的时间区间不符合规范噢',
        showCancel: false
      })
    } else if (e.detail.value > this.data.time5) {
      this.setData({
        time6: e.detail.value
      })
    }
  },

  Time7Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.detail.value > this.data.time8 || e.detail.value < '16:10') {
      wx.showModal({
        content: '选择的时间区间不符合规范噢',
        showCancel: false
      })
    } else if (e.detail.value < this.data.time8) {
      this.setData({
        time7: e.detail.value
      })
    }
  },

  Time8Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.detail.value < this.data.time7 || e.detail.value > '18:00') {
      wx.showModal({
        content: '选择的时间区间不符合规范噢',
        showCancel: false
      })
    } else if (e.detail.value > this.data.time7) {
      this.setData({
        time8: e.detail.value
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