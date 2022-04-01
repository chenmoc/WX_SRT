
import * as echarts from '../../lib/ec-canvas/echarts';
import geoJson from './campus.js';

function initChart1(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  echarts.registerMap('campus', geoJson);

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}人数: {c}'
    }, 
    visualMap: {
      show: true,  
      type: 'continuous',   
      min: 0,
      max: 1000,
      itemHeight:200,   // 组件条长度
      color: ['#E26D5C' , '#FFBE0B', '#0094C6'],
      orient: 'horizontal',  //组件排列方向，vertical为竖直方向
      align: 'left',  
      left: 'center',
      top: '88%',   // 组件离容器上侧的距离
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
      realtime:true,
    },
    series: [{
      type: 'map',
      mapType: 'campus',
      label: {
        normal: {
          position: 'insideBottom',
          distance: 12,
          show: true,
          fontSize: 14,
          formatter: '{b}'
        },
        emphasis: {
          textStyle: {
            color: '#333',
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: '#fff',
          borderWidth: 2,
          areaColor: 'blue',
        },
        emphasis: {
          areaColor: '#06D6A0',
          borderWidth: 0
        }
      },
      animation: false,

      data: [
      {name: '体育场', value: 60},
			{name: '宿舍', value: 1000},
			{name: '食堂', value: 300},
			{name: '图书馆', value: 666},
			{name: '教学楼', value: 492},
			{name: '办公室', value: 199},
      ]

    }],

  };

  chart.setOption(option);

  return chart;

}

function initChart2(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}人数: {c}'
    },
    legend: {},
    xAxis: {
      type: 'category',
      data: ['体育场', '宿舍', '食堂', '图书馆', '教学楼', '办公室'],
      axisLabel: {
        interval:0,   //代表显示所有x轴标签显示
        color: '#000'
    }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#000',
    }
    },
    grid:{
      top:48,
      left:40,// 调整这个属性
      right:50,
      bottom:50,
      },
    series: [
      {
        name: '实时人数',
        data: [300, 4598, 1594, 6666, 2995, 1035],
        type: 'bar',
        barWidth : 25,
        label: {
          show: true,
          position: 'top',
        },
        itemStyle: {
          color: '#005E7C'
        }
      },
    ]
  };

  chart.setOption(option);

  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec1: {
      onInit: initChart1
    },
    ec2: {
      onInit: initChart2
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