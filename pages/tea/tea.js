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
import geoJson from './ujn.js';


function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  echarts.registerMap('ujn', geoJson);

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },

    visualMap: {
      show: false,
      min: 0,
      max: 100,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true
    },
    toolbox: {
      show: false,
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
      mapType: 'ujn',
      label: {
        normal: {
          position: 'insideBottom',
          distance: 12,
          show: true,
          fontSize: 11,
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
      {name: '化工楼', value: 10},
			{name: '图书馆', value: 99},
			{name: '十教及八食堂', value: 66},
			{name: '\n\n\n\n校医院\n及操场', value: 78, position: 'bottom', distance: 10},
			{name: '老西门及教工宿舍', value: 45},
			{name: '新西门及三食堂', value: 33},
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
    userID: app.globalData.userID,
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
  numSteps() {
      wx.getLocation({
        type: 'wgs84',
        success: function(res){
          var lat1 = '';
          var lng1 = '';
          // console.log(res);
           lat1 = res.latitude;
           lng1 = res.longitude;
           console.log(res.latitude);
           console.log(res.longitude);
           console.log(lat1);
           console.log(lng1);
           wx.request({
            url: 'https://chenmoc.com/srt/getLocation.php',
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              longitude: res.longitude,
              latitude: res.latitude,
              ID: app.globalData.userID,
              user: app.globalData.user
            },
            success: function(res){
              console.log(res.data);
            }
          })
        }
      })
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