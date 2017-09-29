/**
 * Created by ibm on 2017/9/29.
 */
$(function () {
    var SORT = 'up';
    $('.sort').on('click', function () {
        if (SORT == 'up') {
            console.log('1')
            myChart1.setOption({

                series : [
                    {
                        data:[4100, 4200, 3800, 3900, 4400],

                    },
                    {
                        data:[3200, 3100, 2900, 2500, 3000],

                    },
                    {
                        data:[2000, 2500, 2300, 2100, 1900],
                    },

                ],
            });
            myChart2.setOption({
                legend: {
                    data:['2017', '2016', '2015'],
                },
                series : [
                    {
                        data:[4100, 4200, 3800, 3900, 4400],

                    },
                    {
                        data:[3200, 3100, 2900, 2500, 3000],

                    },
                    {
                        data:[2000, 2500, 2300, 2100, 1900],
                    },

                ],
            });
            myChart3.setOption({
                legend: {
                    data:['2017', '2016', '2015'],
                },
                series : [
                    {
                        data:[4100, 4200, 3800, 3900, 4400],

                    },
                    {
                        data:[3200, 3100, 2900, 2500, 3000],

                    },
                    {
                        data:[2000, 2500, 2300, 2100, 1900],
                    },

                ],
            });
            myChart4.setOption({
                legend: {
                    data:['2017', '2016', '2015'],
                },
                series : [
                    {
                        data:[4100, 4200, 3800, 3900, 4400],

                    },
                    {
                        data:[3200, 3100, 2900, 2500, 3000],

                    },
                    {
                        data:[2000, 2500, 2300, 2100, 1900],
                    },

                ],
            });

            SORT = 'down';

        } else {
            console.log('2')
            myChart1.setOption({

                series : [
                    {
                        data:[2000, 2500, 2300, 2100, 1900],
                    },
                    {
                        data:[3200, 3100, 2900, 2500, 3000],
                    },
                    {
                        data:[4100, 4200, 3800, 3900, 4400],

                    },

                ],
            });
            myChart2.setOption({
                legend: {
                    data:['2015', '2016', '2017'],
                },
                series : [
                    {
                        data:[2000, 2500, 2300, 2100, 1900],
                    },
                    {
                        data:[3200, 3100, 2900, 2500, 3000],
                    },
                    {
                        data:[4100, 4200, 3800, 3900, 4400],

                    },

                ],
            });
            myChart3.setOption({
                legend: {
                    data:['2015', '2016', '2017'],
                },
                series : [
                    {
                        data:[2000, 2500, 2300, 2100, 1900],
                    },
                    {
                        data:[3200, 3100, 2900, 2500, 3000],
                    },
                    {
                        data:[4100, 4200, 3800, 3900, 4400],

                    },

                ],
            });
            myChart4.setOption({
                legend: {
                    data:['2015', '2016', '2017'],
                },
                series : [
                    {
                        data:[2000, 2500, 2300, 2100, 1900],
                    },
                    {
                        data:[3200, 3100, 2900, 2500, 3000],
                    },
                    {
                        data:[4100, 4200, 3800, 3900, 4400],

                    },

                ],
            });

            SORT = 'up';
        }
    });

    //        区域选择
    $('.chose-region').on('click', function () {
        $('header').append('<a class="success">完成</a>');
        $('header').prepend('<a class="return">返回</a>');
        $('.time').slideUp();
        $('header .return').on('click', function () {
            $(this).siblings('.success').remove();
            $(this).remove();
            $('.main').css({
                position: 'static',
                overflow: 'auto'
            });
            $('.region').animate({
                right: '100%'
            }, 500)
        });
        $('header .success').on('click', function () {
            var node = $('.city').not('.none');
            var cityName = $('.province ul li.active').text();
            cityName += node.find('.title-act').text();
            $('.chose-region').find('span').text(cityName);

            $(this).siblings('.return').remove();
            $(this).remove();
            $('.main').css({
                position: 'static',
                overflow: 'auto'
            });
            $('.region').animate({
                right: '100%'
            }, 500);
        });
//            禁止外层滚动
        $('.main').css({
            position: 'fixed',
            overflow: 'hidden'
        });
        $('.region').animate({
            right: 0
        }, 500)
    });
    $('.city-option .title').on('click', function () {
        if ($(this).next('.content').height() != 0) {
            $(this).next('.content').animate({
                height: 0,
                padding: '0 7px',
                borderBottom: 'none'
            }, 500)
        }else {

            $(this).next('.content').animate({
                height: 151,
                padding: '10px 7px 0 7px',
                borderBottom: 'border: 1px solid #242935'
            }, 500)
        }
        if (!$(this).hasClass('title-act')) {
            $(this).addClass('title-act');
            $('.city-option .title').not($(this)).removeClass('title-act')
        }
    });
    $('.item').on('click', function () {
        $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
    });
    $('.province ul li').on('click', function () {
        var index = $('.province ul li').index($(this));
        $(this).addClass('active')
            .siblings().removeClass('active');
        $('.city').eq(index).removeClass('none')
            .siblings('.city').addClass('none');
    });
})

var myChart1 = echarts.init(document.getElementById('echart1'));
var myChart2 = echarts.init(document.getElementById('echart2'));
var myChart3 = echarts.init(document.getElementById('echart3'));
var myChart4 = echarts.init(document.getElementById('echart4'));
var option1 = {
    backgroundColor: '#071f45',
    title: {
        text: 'm³',
        top: 0,
        left: 25,
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    legend: {//图例组件，颜色和名字
        right:10,
        top:0,
        itemWidth: 20,
        itemHeight: 4,
        data:['15日', '22日', '31日'],
        textStyle: {
            color: '#fff',
            fontSize: 12,
        }
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,//坐标轴两边留白
            data: ['三星镇污水处理厂', '平窝乡污水处理厂', '踏水镇污水处理厂', '新星乡污水处理厂', '涌泉镇污水处理厂'],
            axisTick:{//坐标轴刻度相关设置。
                show: false
            },
            axisLine:{//坐标轴轴线相关设置
                show: false
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线。
                show: false,
            },
            axisLabel:{
                interval: 0,//标签设置为全部显示
                formatter:function(params){
                    //粘贴以下function内未注释的代码

                    var newParamsName = "";// 最终拼接成的字符串
                    var paramsNameNumber = params.length;// 实际标签的个数
                    var provideNumber = 3;// 每行能显示的字的个数
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                    /**
                     * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                     */
                    // 条件等同于rowNumber>1
                    if (paramsNameNumber > provideNumber) {
                        /** 循环每一行,p表示行 */
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";// 表示每一次截取的字符串
                            var start = p * provideNumber;// 开始截取的位置
                            var end = start + provideNumber;// 结束截取的位置
                            // 此处特殊处理最后一行的索引值
                            if (p == rowNumber - 1) {
                                // 最后一次不换行
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                // 每一次拼接字符串并换行
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;// 最终拼成的字符串
                        }

                    } else {
                        // 将旧标签的值赋给新标签
                        newParamsName = params;
                    }
                    //将最终的字符串返回
                    return newParamsName;
                }
            }
        }
    ],
    grid: {
        top: '35px',
        left: '55px',
        bottom: '50px'
    },
    yAxis: [
        {
            type: 'value',
            splitNumber: 5,
            axisLine:{
                show: false
            },
            axisTick:{
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#262836']
                }
            }

        }
    ],
    series : [
        {
            name:'15日',
            type:'bar',
            data:[2000, 2500, 2300, 2100, 1900],
            barWidth: 8,
            barGap:0,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(93, 156, 256, 0.2)'
                    },{
                        offset: 0.9, color: 'rgba(93, 156, 256, 0.4)'
                    },{
                        offset: 0.31, color: 'rgba(93, 156, 256, 0.6)'
                    },{
                        offset: 0.15, color: 'rgba(93, 156, 256, 1)'
                    }, {
                        offset: 0, color: 'rgba(93, 156, 256, 1)'
                    }], false),
                },
            },
        },
        {
            name:'22日',
            type:'bar',
            data:[3200, 3100, 2900, 2500, 3000],
            barWidth: 8,
            barGap:0.2,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(72, 207, 174, 0.2)'
                    },{
                        offset: 0.9, color: 'rgba(72, 207, 174, 0.4)'
                    },{
                        offset: 0.25, color: 'rgba(72, 207, 174, 1)'
                    }, {
                        offset: 0, color: 'rgba(72, 207, 174, 1)'
                    }], false),
                },
            },
        },
        {
            name:'31日',
            type:'bar',
            data:[4100, 4200, 3800, 3900, 4400],
            barWidth: 8,
            barGap:0.2,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(255, 206, 85, 0.2)'
                    },{
                        offset: 0.9, color: 'rgba(255, 206, 85, 0.4)'
                    },{
                        offset: 0.25, color: 'rgba(255, 206, 85, 1)'
                    }, {
                        offset: 0, color: 'rgba(255, 206, 85, 1)'
                    }], false)
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart1.setOption(option1);
var option2 = {
    backgroundColor: '#071f45',
    title: {
        text: 'm³',
        top: 0,
        left: 25,
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    legend: {//图例组件，颜色和名字
        right:10,
        top:0,
        itemWidth: 20,
        itemHeight: 4,
        data:['三月', '五月', '九月'],
        textStyle: {
            color: '#fff',
            fontSize: 12,
        }
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,//坐标轴两边留白
            data: ['三星镇污水处理厂', '平窝乡污水处理厂', '踏水镇污水处理厂', '新星乡污水处理厂', '涌泉镇污水处理厂'],
            axisTick:{//坐标轴刻度相关设置。
                show: false
            },
            axisLine:{//坐标轴轴线相关设置
                show: false
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线。
                show: false,
            },
            axisLabel:{
                interval: 0,//标签设置为全部显示
                formatter:function(params){
                    //粘贴以下function内未注释的代码

                    var newParamsName = "";// 最终拼接成的字符串
                    var paramsNameNumber = params.length;// 实际标签的个数
                    var provideNumber = 3;// 每行能显示的字的个数
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                    /**
                     * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                     */
                    // 条件等同于rowNumber>1
                    if (paramsNameNumber > provideNumber) {
                        /** 循环每一行,p表示行 */
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";// 表示每一次截取的字符串
                            var start = p * provideNumber;// 开始截取的位置
                            var end = start + provideNumber;// 结束截取的位置
                            // 此处特殊处理最后一行的索引值
                            if (p == rowNumber - 1) {
                                // 最后一次不换行
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                // 每一次拼接字符串并换行
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;// 最终拼成的字符串
                        }

                    } else {
                        // 将旧标签的值赋给新标签
                        newParamsName = params;
                    }
                    //将最终的字符串返回
                    return newParamsName;
                }
            }
        }
    ],
    grid: {
        top: '35px',
        left: '55px',
        bottom: '50px'
    },
    yAxis: [
        {
            type: 'value',
            splitNumber: 5,
            axisLine:{
                show: false
            },
            axisTick:{
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#262836']
                }
            }

        }
    ],
    series : [
        {
            name:'三月',
            type:'bar',
            data:[2000, 2500, 2300, 2100, 1900],
            barWidth: 8,
            barGap:0,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(93, 156, 256, 0.2)'
                    },{
                        offset: 0.9, color: 'rgba(93, 156, 256, 0.4)'
                    },{
                        offset: 0.31, color: 'rgba(93, 156, 256, 0.6)'
                    },{
                        offset: 0.15, color: 'rgba(93, 156, 256, 1)'
                    }, {
                        offset: 0, color: 'rgba(93, 156, 256, 1)'
                    }], false),
                },
            },
        },
        {
            name:'五月',
            type:'bar',
            data:[3200, 3100, 2900, 2500, 3000],
            barWidth: 8,
            barGap:0.2,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(72, 207, 174, 0.2)'
                    },{
                        offset: 0.9, color: 'rgba(72, 207, 174, 0.4)'
                    },{
                        offset: 0.25, color: 'rgba(72, 207, 174, 1)'
                    }, {
                        offset: 0, color: 'rgba(72, 207, 174, 1)'
                    }], false),
                },
            },
        },
        {
            name:'九月',
            type:'bar',
            data:[4100, 4200, 3800, 3900, 4400],
            barWidth: 8,
            barGap:0.2,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(255, 206, 85, 0.2)'
                    },{
                        offset: 0.9, color: 'rgba(255, 206, 85, 0.4)'
                    },{
                        offset: 0.25, color: 'rgba(255, 206, 85, 1)'
                    }, {
                        offset: 0, color: 'rgba(255, 206, 85, 1)'
                    }], false)
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart2.setOption(option2);
var option3 = {
    backgroundColor: '#071f45',
    title: {
        text: 'm³',
        top: 0,
        left: 25,
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    legend: {//图例组件，颜色和名字
        right:10,
        top:0,
        itemWidth: 20,
        itemHeight: 4,
        data:['2015', '2016', '2017'],
        textStyle: {
            color: '#fff',
            fontSize: 12,
        }
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,//坐标轴两边留白
            data: ['三星镇污水处理厂', '平窝乡污水处理厂', '踏水镇污水处理厂', '新星乡污水处理厂', '涌泉镇污水处理厂'],
            axisTick:{//坐标轴刻度相关设置。
                show: false
            },
            axisLine:{//坐标轴轴线相关设置
                show: false
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线。
                show: false,
            },
            axisLabel:{
                interval: 0,//标签设置为全部显示
                formatter:function(params){
                    //粘贴以下function内未注释的代码

                    var newParamsName = "";// 最终拼接成的字符串
                    var paramsNameNumber = params.length;// 实际标签的个数
                    var provideNumber = 3;// 每行能显示的字的个数
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                    /**
                     * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                     */
                    // 条件等同于rowNumber>1
                    if (paramsNameNumber > provideNumber) {
                        /** 循环每一行,p表示行 */
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";// 表示每一次截取的字符串
                            var start = p * provideNumber;// 开始截取的位置
                            var end = start + provideNumber;// 结束截取的位置
                            // 此处特殊处理最后一行的索引值
                            if (p == rowNumber - 1) {
                                // 最后一次不换行
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                // 每一次拼接字符串并换行
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;// 最终拼成的字符串
                        }

                    } else {
                        // 将旧标签的值赋给新标签
                        newParamsName = params;
                    }
                    //将最终的字符串返回
                    return newParamsName;
                }
            }
        }
    ],
    grid: {
        top: '35px',
        left: '55px',
        bottom: '50px'
    },
    yAxis: [
        {
            type: 'value',
            splitNumber: 5,
            axisLine:{
                show: false
            },
            axisTick:{
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#262836']
                }
            }

        }
    ],
    series : [
        {
            name:'2015',
            type:'bar',
            data:[2000, 2500, 2300, 2100, 1900],
            barWidth: 8,
            barGap:0,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(93, 156, 256, 0.2)'
                    },{
                        offset: 0.9, color: 'rgba(93, 156, 256, 0.4)'
                    },{
                        offset: 0.31, color: 'rgba(93, 156, 256, 0.6)'
                    },{
                        offset: 0.15, color: 'rgba(93, 156, 256, 1)'
                    }, {
                        offset: 0, color: 'rgba(93, 156, 256, 1)'
                    }], false),
                },
            },
        },
        {
            name:'2016',
            type:'bar',
            data:[3200, 3100, 2900, 2500, 3000],
            barWidth: 8,
            barGap:0.2,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(72, 207, 174, 0.2)'
                    },{
                        offset: 0.9, color: 'rgba(72, 207, 174, 0.4)'
                    },{
                        offset: 0.25, color: 'rgba(72, 207, 174, 1)'
                    }, {
                        offset: 0, color: 'rgba(72, 207, 174, 1)'
                    }], false),
                },
            },
        },
        {
            name:'2017',
            type:'bar',
            data:[4100, 4200, 3800, 3900, 4400],
            barWidth: 8,
            barGap:0.2,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(255, 206, 85, 0.2)'
                    },{
                        offset: 0.9, color: 'rgba(255, 206, 85, 0.4)'
                    },{
                        offset: 0.25, color: 'rgba(255, 206, 85, 1)'
                    }, {
                        offset: 0, color: 'rgba(255, 206, 85, 1)'
                    }], false)
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart3.setOption(option3);
var option4 = {
    backgroundColor: '#071f45',
    title: {
        text: 'm³',
        top: 0,
        left: 25,
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    legend: {//图例组件，颜色和名字
        right:10,
        top:0,
        itemWidth: 20,
        itemHeight: 4,
        data:['2015', '2016', '2017'],
        textStyle: {
            color: '#fff',
            fontSize: 12,
        }
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,//坐标轴两边留白
            data: ['三星镇污水处理厂', '平窝乡污水处理厂', '踏水镇污水处理厂', '新星乡污水处理厂', '涌泉镇污水处理厂'],
            axisTick:{//坐标轴刻度相关设置。
                show: false
            },
            axisLine:{//坐标轴轴线相关设置
                show: false
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线。
                show: false,
            },
            axisLabel:{
                interval: 0,//标签设置为全部显示
                formatter:function(params){
                    //粘贴以下function内未注释的代码

                    var newParamsName = "";// 最终拼接成的字符串
                    var paramsNameNumber = params.length;// 实际标签的个数
                    var provideNumber = 3;// 每行能显示的字的个数
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                    /**
                     * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                     */
                    // 条件等同于rowNumber>1
                    if (paramsNameNumber > provideNumber) {
                        /** 循环每一行,p表示行 */
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";// 表示每一次截取的字符串
                            var start = p * provideNumber;// 开始截取的位置
                            var end = start + provideNumber;// 结束截取的位置
                            // 此处特殊处理最后一行的索引值
                            if (p == rowNumber - 1) {
                                // 最后一次不换行
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                // 每一次拼接字符串并换行
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;// 最终拼成的字符串
                        }

                    } else {
                        // 将旧标签的值赋给新标签
                        newParamsName = params;
                    }
                    //将最终的字符串返回
                    return newParamsName;
                }
            }
        }
    ],
    grid: {
        top: '35px',
        left: '55px',
        bottom: '50px'
    },
    yAxis: [
        {
            type: 'value',
            splitNumber: 5,
            axisLine:{
                show: false
            },
            axisTick:{
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#262836']
                }
            }

        }
    ],
    series : [
        {
            name:'2015',
            type:'bar',
            data:[2000, 2500, 2300, 2100, 1900],
            barWidth: 8,
            barGap:0,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(93, 156, 256, 0.2)'
                    },{
                        offset: 0.9, color: 'rgba(93, 156, 256, 0.4)'
                    },{
                        offset: 0.31, color: 'rgba(93, 156, 256, 0.6)'
                    },{
                        offset: 0.15, color: 'rgba(93, 156, 256, 1)'
                    }, {
                        offset: 0, color: 'rgba(93, 156, 256, 1)'
                    }], false),
                },
            },
        },
        {
            name:'2016',
            type:'bar',
            data:[3200, 3100, 2900, 2500, 3000],
            barWidth: 8,
            barGap:0.2,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(72, 207, 174, 0.2)'
                    },{
                        offset: 0.9, color: 'rgba(72, 207, 174, 0.4)'
                    },{
                        offset: 0.25, color: 'rgba(72, 207, 174, 1)'
                    }, {
                        offset: 0, color: 'rgba(72, 207, 174, 1)'
                    }], false),
                },
            },
        },
        {
            name:'2017',
            type:'bar',
            data:[4100, 4200, 3800, 3900, 4400],
            barWidth: 8,
            barGap:0.2,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(255, 206, 85, 0.2)'
                    },{
                        offset: 0.9, color: 'rgba(255, 206, 85, 0.4)'
                    },{
                        offset: 0.25, color: 'rgba(255, 206, 85, 1)'
                    }, {
                        offset: 0, color: 'rgba(255, 206, 85, 1)'
                    }], false)
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart4.setOption(option4);
