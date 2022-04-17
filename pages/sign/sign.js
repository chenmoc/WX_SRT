// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numList: [{
      icon: 'radioboxfill',
      name: '已发布签到'
    }, {
      icon: 'roundcheckfill',
      name: '签到成功'
    },
   ],
    btnList:[
      {
        name: '开始签到'
      },{
        name: '签到已完成'
      },
    ],
    num: 0
  },

  numSteps() {
    this.setData({
      num: this.data.num == this.data.numList.length - 1 ? 0 : this.data.num + 1
    })
  },

   consent() {
    const SUBSCRIBE_ID='ZfW9ljIGw9tYb5y0K-k8wRjUxsW-iyRpe5jfS_0AzXA';
    let that = this;
    if (wx.requestSubscribeMessage) {
      wx.requestSubscribeMessage({
        tmplIds: [SUBSCRIBE_ID],
        success(res) {
          if (res[SUBSCRIBE_ID] === 'accept') {
            // 用户主动点击同意...do something
            wx.showToast({
              title: 'right',
            })
          } else if (res[SUBSCRIBE_ID] === 'reject') {
            // 用户主动点击拒绝...do something
          } else {
            wx.showToast({
              title: '授权订阅消息有误',
              icon: 'none'
            })
          }
        },
        fail(res) {
          // 20004:用户关闭了主开关，无法进行订阅,引导开启
          if (res.errCode == 20004) {
          	// 显示引导设置弹窗
            that.setData({
              isShowSetModel: true
            })
          }else{
          	// 其他错误信息码，对应文档找出原因
            wx.showModal({
              title: '提示',
              content: res.errMsg,
              showCancel: false
            })
          }
        }
      });
    } else {
      wx.showModal({
        title: '提示',
        content: '请更新您微信版本，来获取订阅消息功能',
        showCancel: false
      })
    }
  },

  mess(){
    wx.request({
      url: 'https://chenmoc.com/srt/check.php',
      success(res){
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})