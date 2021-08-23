var app = getApp();
var lat1 = '';
var lng1 = '';

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


function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
 
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
 
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
 
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
 
module.exports = {
  formatTime: formatTime

}

import * as echarts from '../../lib/ec-canvas/echarts';
import geoJson from './mapData.js';


function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  echarts.registerMap('henan', geoJson);

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },

    visualMap: {
      min: 0,
      max: 100,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    series: [{
      type: 'map',
      mapType: 'henan',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      itemStyle: {

        normal: {
          borderColor: '#389BB7',
          areaColor: '#fff',
        },
        emphasis: {
          areaColor: '#389BB7',
          borderWidth: 0
        }
      },
      animation: false,

      data: [
        { name: '郑州市', value: 100 },
        { name: '洛阳市', value: 10 },
        { name: '开封市', value: 20 },
        { name: '信阳市', value: 30 },
        { name: '驻马店市', value: 40 },
        { name: '南阳市', value: 41 },
        { name: '周口市', value: 15 },
        { name: '许昌市', value: 25 },
        { name: '平顶山市', value: 35 },
        { name: '新乡市', value: 35 },
        { name: '漯河市', value: 35 },
        { name: '商丘市', value: 35 },
        { name: '三门峡市', value: 35 },
        { name: '济源市', value: 35 },
        { name: '焦作市', value: 35 },
        { name: '安阳市', value: 35 },
        { name: '鹤壁市', value: 35 },
        { name: '濮阳市', value: 35 },
        { name: '开封市', value: 45 }
      ]

    }],

  };

  chart.setOption(option);

  return chart;

}
Page({
  data: {
    ec: {
      onInit: initChart
    },
    userNum: app.globalData.userNum,
    time: '',
    time1: '',
    time2: '',
    time3: '',
    time4: '',
    time5: '',
    temper: '',
    temper1: '',
    temper2: '',
    temper3: '',
    temper4: '',
    temper5: '',
    temperNum: 0,
    btnText: '开始',
    basics: 0,
    n: 0,
    icon_style: 'visibility:hidden',
    icon_style1: 'visibility:hidden',
    icon_style2: 'visibility:hidden',
    icon_style3: 'visibility:hidden',
    icon_style4: 'visibility:hidden',
    icon_style5: 'visibility:hidden',
    list1: 'visibility:hidden',
    list2: 'visibility:hidden',
    list3: 'visibility:hidden',
    list4: 'visibility:hidden',
    list5: 'visibility:hidden',
    numList: [{
      name: '准备'
    }, {
      name: '等待'
    }, {
      name: '签到成功'
    },  
  ],
    num: -1,
  },
  onLoad(){
    function initChart(canvas, width, height, dpr) {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      canvas.setChart(chart);
    
      echarts.registerMap('henan', geoJson);
    
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}'
        },
    
        visualMap: {
          min: 0,
          max: 100,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        series: [{
          type: 'map',
          mapType: 'henan',
          label: {
            normal: {
              show: true
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          itemStyle: {
    
            normal: {
              borderColor: '#389BB7',
              areaColor: '#fff',
            },
            emphasis: {
              areaColor: '#389BB7',
              borderWidth: 0
            }
          },
          animation: false,
    
          data: [
            { name: '郑州市', value: 100 },
            { name: '洛阳市', value: 10 },
            { name: '开封市', value: 20 },
            { name: '信阳市', value: 30 },
            { name: '驻马店市', value: 40 },
            { name: '南阳市', value: 41 },
            { name: '周口市', value: 15 },
            { name: '许昌市', value: 25 },
            { name: '平顶山市', value: 35 },
            { name: '新乡市', value: 35 },
            { name: '漯河市', value: 35 },
            { name: '商丘市', value: 35 },
            { name: '三门峡市', value: 35 },
            { name: '济源市', value: 35 },
            { name: '焦作市', value: 35 },
            { name: '安阳市', value: 35 },
            { name: '鹤壁市', value: 35 },
            { name: '濮阳市', value: 35 },
            { name: '开封市', value: 45 }
          ]
    
        }],
    
      };
    
      chart.setOption(option);
    
      return chart;
    }
  },
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  numSteps() {
    console.log(app.globalData.userNum);
    if(this.data.n == 0){
      this.data.n++;
      this.setData({
        num: this.data.num == this.data.numList.length - 1 ? 0 : this.data.num + 1,
        btnText: '下一步'
      })
      wx.getLocation({
        type: 'wgs84',
        success: function(res){
          console.log(res)
           lat1 = res.latitude;
           lng1 = res.longitude;
           console.log(res.latitude);
           console.log(res.longitude);
           wx.request({
             url: 'https://chenmoc.com/srt/getLocation.php',
             method: 'GET',
             header: {
               "content-type" : 'application/json'
             },
             data: {
               longitude: res.longitude,
               latitude: res.latitude,
               userNum: app.globalData.userNum
             },
             success: function(res){
               console.log("damn good!");
               console.log(res.data);
             }
           })
        }
      })
      console.log(lng1);
      console.log(lat1);
    }
   else  if(this.data.n == 1){
     this.data.n++;
    this.setData({
      num: this.data.num == this.data.numList.length - 1 ? 0 : this.data.num + 1,
      btnText: '下一步'
    })
  }
  else if(this.data.n == 2){
    this.data.n++;
    this.setData({
      num: this.data.num == this.data.numList.length - 1 ? 0 : this.data.num + 1,
      btnText: '结束'
    })
  }
},
temper(){
  console.log(this.data.temperNum);
  var time = formatTime(new Date());
  if(this.data.temperNum == 0){
  this.data.temperNum++;
  this.setData({
    list1: 'visibility: visible',
    temper: 36.5+0.1*Math.floor(Math.random()*10)+'°C',
    time: time,
    icon_style: 'visibility: visible',
  })
}
else if(this.data.temperNum == 1){
  this.data.temperNum++;
  this.setData({
    list2: 'visibility: visible',
    temper1: 36.5+0.1*Math.floor(Math.random()*10)+'°C',
    time1: time,
    icon_style1: 'visibility: visible',
  })
}
else if(this.data.temperNum == 2){
  this.data.temperNum++;
  this.setData({
    list3: 'visibility: visible',
    temper2: 36.5+0.1*Math.floor(Math.random()*10)+'°C',
    time2: time,
    icon_style2: 'visibility: visible',
  })
}
else if(this.data.temperNum == 3){
  this.data.temperNum++;
  this.setData({
    list4: 'visibility: visible',
    temper3: 36.5+0.1*Math.floor(Math.random()*10)+'°C',
    time3: time,
    icon_style3: 'visibility: visible',
  })
}
else if(this.data.temperNum == 4){
  this.data.temperNum++;
  this.setData({
    list5: 'visibility: visible',
    temper4: 36.5+0.1*Math.floor(Math.random()*10)+'°C',
    time4: time,
    icon_style4: 'visibility: visible',
  })
}
else if(this.data.temperNum == 5){
  this.data.temperNum++;
  this.setData({
    temper5: 36.5+0.1*Math.floor(Math.random()*10)+'°C',
    time5: time,
    icon_style5: 'visibility: visible',
  })
}
}
})