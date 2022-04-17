// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sList: [{
      id: 1,
        type: 'image',
        url: '../../images/bg1.jpg'
    }, {
      id: 2,
      type: 'image',
      url: '../../images/bg2.jpg'
    }, {
      id: 3,
      type: 'image',
      url: '../../images/bg3.jpg'
    }, {
      id: 4,
      type: 'image',
      url: '../../images/bg4.jpg'
    }, {
      id: 5,
      type: 'image',
      url: '../../images/bg5.jpg'
    }],
    acts: [{
      title: '上课签到',
      name: 'sign',
      color: 'cr1',
      icon: 'time'
    },
    {
      title: '人群密度',
      name: 'density',
      color: 'cr2',
      icon: 'locationfill'
    },
    {
      title: '体温填报',
      name: 'temper',
      color: 'cr3',
      icon: 'edit'
    },
    {
      title: '核酸抽检',
      name: 'check',
      color: 'cr4',
      icon: 'scan'
    },
    {
      title: '自动排班',
      name: 'schedule',
      color: 'cr5',
      icon: 'roundright'
    },
    {
      title: '课程提醒',
      name: 'remind',
      color: 'cr6',
      icon: 'notification'
    },],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.towerSwiper('sList');
  },

  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
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