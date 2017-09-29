/**
 * Created by ibm on 2017/9/29.
 */
$(function () {
    $('.chose-date').on('click', function () {
        $('.time').slideToggle();
    });


    $('.time p').on('click', function () {
        $(this).addClass('active')
            .siblings('p').removeClass('active');
        var text = $(this).text();
        var index = $('.time p').index($(this));
        $('.show-date span, .show-date p, .show-date select').hide();
        switch (index) {
            case 0:
                $('.show-date select').show();
                myChart1.setOption({
                    xAxis: {
                        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                    },
                    series: {
                        data: [13, 12, 16, 13, 18, 17, 26, 27, 28, 25, 23, 23]
                    }
                })
                myChart2.setOption({
                    xAxis: {
                        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                    },
                    series: {
                        data: [13, 12, 16, 13, 18, 17, 26, 27, 28, 25, 23, 23]
                    }
                })
                myChart3.setOption({
                    xAxis: {
                        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                    },
                    series: {
                        data: [13, 12, 16, 13, 18, 17, 26, 27, 28, 25, 23, 23]
                    }
                })
                myChart4.setOption({
                    xAxis: {
                        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                    },
                    series: {
                        data: [13, 12, 16, 13, 18, 17, 26, 27, 28, 25, 23, 23]
                    }
                })
                myChart5.setOption({
                    xAxis: {
                        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                    },
                    series: {
                        data: [13, 12, 16, 13, 18, 17, 26, 27, 28, 25, 23, 23]
                    }
                })
                break;
            case 1:
                $('.show-date .yf').show();
                myChart1.setOption({
                    xAxis: {
                        data: ['1', '4', '7', '10', '13', '15', '16', '19', '23', '26', '29', '31'],
                    },
                    series: {
                        data: [18, 19, 23, 22, 21, 25, 26, 27, 28, 28, 25, 28]
                    },
                    tooltip: {
                        show: 'true',
                        trigger: 'axis',
                        formatter: '{b}号</br>{a}: {c}mg/l'
                    },
                });
                myChart2.setOption({
                    xAxis: {
                        data: ['1', '4', '7', '10', '13', '15', '16', '19', '23', '26', '29', '31'],
                    },
                    series: {
                        data: [18, 19, 23, 22, 21, 25, 26, 27, 28, 28, 25, 28]
                    },
                    tooltip: {
                        show: 'true',
                        trigger: 'axis',
                        formatter: '{b}号</br>{a}: {c}mg/l'
                    },
                });
                myChart3.setOption({
                    xAxis: {
                        data: ['1', '4', '7', '10', '13', '15', '16', '19', '23', '26', '29', '31'],
                    },
                    series: {
                        data: [18, 19, 23, 22, 21, 25, 26, 27, 28, 28, 25, 28]
                    },
                    tooltip: {
                        show: 'true',
                        trigger: 'axis',
                        formatter: '{b}号</br>{a}: {c}mg/l'
                    },
                });
                myChart4.setOption({
                    xAxis: {
                        data: ['1', '4', '7', '10', '13', '15', '16', '19', '23', '26', '29', '31'],
                    },
                    series: {
                        data: [18, 19, 23, 22, 21, 25, 26, 27, 28, 28, 25, 28]
                    },
                    tooltip: {
                        show: 'true',
                        trigger: 'axis',
                        formatter: '{b}号</br>{a}: {c}mg/l'
                    },
                });
                myChart5.setOption({
                    xAxis: {
                        data: ['1', '4', '7', '10', '13', '15', '16', '19', '23', '26', '29', '31'],
                    },
                    series: {
                        data: [18, 19, 23, 22, 21, 25, 26, 27, 28, 28, 25, 28]
                    },
                    tooltip: {
                        show: 'true',
                        trigger: 'axis',
                        formatter: '{b}号</br>{a}: {c}mg/l'
                    },
                });
                break;
            case 2:
                $('.show-date .rq').show();
                myChart1.setOption({
                xAxis: {
                    data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
                },
                series: {
                    data: [16, 17, 18, 23, 25, 28, 11, 13, 16, 15, 18, 27]
                },
                tooltip: {
                    show: 'true',
                    trigger: 'axis',
                    formatter: '{b}</br>{a}: {c}mg/l'
                },
            });
                myChart2.setOption({
                    xAxis: {
                        data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
                    },
                    series: {
                        data: [16, 17, 18, 23, 25, 28, 11, 13, 16, 15, 18, 27]
                    },
                    tooltip: {
                        show: 'true',
                        trigger: 'axis',
                        formatter: '{b}</br>{a}: {c}mg/l'
                    },
                });
                myChart3.setOption({
                    xAxis: {
                        data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
                    },
                    series: {
                        data: [16, 17, 18, 23, 25, 28, 11, 13, 16, 15, 18, 27]
                    },
                    tooltip: {
                        show: 'true',
                        trigger: 'axis',
                        formatter: '{b}</br>{a}: {c}mg/l'
                    },
                });
                myChart4.setOption({
                    xAxis: {
                        data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
                    },
                    series: {
                        data: [16, 17, 18, 23, 25, 28, 11, 13, 16, 15, 18, 27]
                    },
                    tooltip: {
                        show: 'true',
                        trigger: 'axis',
                        formatter: '{b}</br>{a}: {c}mg/l'
                    },
                });
                myChart5.setOption({
                    xAxis: {
                        data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
                    },
                    series: {
                        data: [16, 17, 18, 23, 25, 28, 11, 13, 16, 15, 18, 27]
                    },
                    tooltip: {
                        show: 'true',
                        trigger: 'axis',
                        formatter: '{b}</br>{a}: {c}mg/l'
                    },
                });
                break;
        }
        $('.chose-date span').text(text);
        $('.time').slideToggle()
    })
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

//        按年份
    $('.chose-year').on('change', function () {
        if ($(this).val() == 2016) {
            myChart1.setOption({
                xAxis: {
                    data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                },
                series: {
                    data: [9, 18, 7, 17, 20, 17, 16, 21, 20, 28, 24, 25]
                }
            })
            myChart2.setOption({
                xAxis: {
                    data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                },
                series: {
                    data: [9, 18, 7, 17, 20, 17, 16, 21, 20, 28, 24, 25]
                }
            })
            myChart3.setOption({
                xAxis: {
                    data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                },
                series: {
                    data: [9, 18, 7, 17, 20, 17, 16, 21, 20, 28, 24, 25]
                }
            })
            myChart4.setOption({
                xAxis: {
                    data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                },
                series: {
                    data: [9, 18, 7, 17, 20, 17, 16, 21, 20, 28, 24, 25]
                }
            })
            myChart5.setOption({
                xAxis: {
                    data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                },
                series: {
                    data: [9, 18, 7, 17, 20, 17, 16, 21, 20, 28, 24, 25]
                }
            })
        } else if($(this).val() == 2017) {
            myChart1.setOption({
                xAxis: {
                    data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                },
                series: {
                    data: [11, 13, 14, 15, 20, 17, 28, 19, 21, 20, 19, 18]
                }
            })
            myChart2.setOption({
                xAxis: {
                    data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                },
                series: {
                    data: [11, 13, 14, 15, 20, 17, 28, 19, 21, 20, 19, 18]
                }
            })
            myChart3.setOption({
                xAxis: {
                    data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                },
                series: {
                    data: [11, 13, 14, 15, 20, 17, 28, 19, 21, 20, 19, 18]
                }
            })
            myChart4.setOption({
                xAxis: {
                    data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                },
                series: {
                    data: [11, 13, 14, 15, 20, 17, 28, 19, 21, 20, 19, 18]
                }
            })
            myChart5.setOption({
                xAxis: {
                    data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                },
                series: {
                    data: [11, 13, 14, 15, 20, 17, 28, 19, 21, 20, 19, 18]
                }
            })
        }
        $('.time').slideUp();
    });

//        按月份
    $('.chose-month').on('change', function () {
        var date = $(this).val();
//            date = date.replace("-","年") + '月';
        myChart1.setOption({
            xAxis: {
                data: ['1', '4', '7', '10', '13', '15', '16', '19', '23', '26', '29', '31'],
            },
            series: {
                data: [15, 9, 13, 12, 22, 28, 27, 13, 15, 18, 20, 16]
            },
            tooltip: {
                show: 'true',
                trigger: 'axis',
                formatter: '{b}号</br>{a}: {c}mg/l'
            },
        });
        myChart2.setOption({
            xAxis: {
                data: ['1', '4', '7', '10', '13', '15', '16', '19', '23', '26', '29', '31'],
            },
            series: {
                data: [15, 9, 13, 12, 22, 28, 27, 13, 15, 18, 20, 16]
            },
            tooltip: {
                show: 'true',
                trigger: 'axis',
                formatter: '{b}号</br>{a}: {c}mg/l'
            },
        });
        myChart3.setOption({
            xAxis: {
                data: ['1', '4', '7', '10', '13', '15', '16', '19', '23', '26', '29', '31'],
            },
            series: {
                data: [15, 9, 13, 12, 22, 28, 27, 13, 15, 18, 20, 16]
            },
            tooltip: {
                show: 'true',
                trigger: 'axis',
                formatter: '{b}号</br>{a}: {c}mg/l'
            },
        });
        myChart4.setOption({
            xAxis: {
                data: ['1', '4', '7', '10', '13', '15', '16', '19', '23', '26', '29', '31'],
            },
            series: {
                data: [15, 9, 13, 12, 22, 28, 27, 13, 15, 18, 20, 16]
            },
            tooltip: {
                show: 'true',
                trigger: 'axis',
                formatter: '{b}号</br>{a}: {c}mg/l'
            },
        });
        myChart5.setOption({
            xAxis: {
                data: ['1', '4', '7', '10', '13', '15', '16', '19', '23', '26', '29', '31'],
            },
            series: {
                data: [15, 9, 13, 12, 22, 28, 27, 13, 15, 18, 20, 16]
            },
            tooltip: {
                show: 'true',
                trigger: 'axis',
                formatter: '{b}号</br>{a}: {c}mg/l'
            },
        });
        $('.yf b').text(date);
        $('.time').slideUp();
    });

    //        选择日期
    $('#date').on('change', function () {
        var date = $(this).val();
//            date = date.replace("-","年").replace("-","月")+"日";
        myChart1.setOption({
            xAxis: {
                data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
            },
            series: {
                data: [6, 7, 8, 13, 15, 18, 21, 23, 26, 25, 28, 17]
            },
            tooltip: {
                show: 'true',
                trigger: 'axis',
                formatter: '{b}</br>{a}: {c}mg/l'
            },
        });
        myChart2.setOption({
            xAxis: {
                data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
            },
            series: {
                data: [6, 7, 8, 13, 15, 18, 21, 23, 26, 25, 28, 17]
            },
            tooltip: {
                show: 'true',
                trigger: 'axis',
                formatter: '{b}</br>{a}: {c}mg/l'
            },
        });
        myChart3.setOption({
            xAxis: {
                data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
            },
            series: {
                data: [6, 7, 8, 13, 15, 18, 21, 23, 26, 25, 28, 17]
            },
            tooltip: {
                show: 'true',
                trigger: 'axis',
                formatter: '{b}</br>{a}: {c}mg/l'
            },
        });
        myChart4.setOption({
            xAxis: {
                data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
            },
            series: {
                data: [6, 7, 8, 13, 15, 18, 21, 23, 26, 25, 28, 17]
            },
            tooltip: {
                show: 'true',
                trigger: 'axis',
                formatter: '{b}</br>{a}: {c}mg/l'
            },
        });
        myChart5.setOption({
            xAxis: {
                data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
            },
            series: {
                data: [6, 7, 8, 13, 15, 18, 21, 23, 26, 25, 28, 17]
            },
            tooltip: {
                show: 'true',
                trigger: 'axis',
                formatter: '{b}</br>{a}: {c}mg/l'
            },
        });
        $('.show-date b').text(date);
        $('.time').slideUp();
    });
});
var myChart1 = echarts.init(document.getElementById('echart1'));
var myChart2 = echarts.init(document.getElementById('echart2'));
var myChart3 = echarts.init(document.getElementById('echart3'));
var myChart4 = echarts.init(document.getElementById('echart4'));
var myChart5 = echarts.init(document.getElementById('echart5'));
var option1 = {
    backgroundColor: '#071f45',
    title: {
        text: 'mg/l',
        top: '2px',
        left: '12px',
        textStyle: {
            fontSize: '12',
            color: '#fff'
        }
    },
    tooltip: {
        show: 'true',
        trigger: 'axis',
        formatter: '{b}</br>{a}: {c}mg/l'
    },
    grid: {
        top: '30px',
        left: '30px',
        right: '45px',
        bottom: '35px'
    },
    textStyle: {
//            fontSize: '12',
        color: '#999'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
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
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#262b36'
            }
        },
        axisLabel: {
            formatter: function(params) {
                if (params === 0) {
                    return ''
                } else {
                    return params
                }
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        name: '出水COD',
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#a0d468'
                }
            }
        },
        areaStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(160, 212, 104, 0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(160, 212, 104, 0)'
                    }],
                    globalCoord: false
                },
            }
        },
        markPoint: {

            data: [
                {
                    type: 'max',
                    label: {
                        show: true,
                        normal: {
                            show: true,
                            formatter: '{c}',
                            position: 'top',
                            color: '#5ed66f',
                            fontSize: '12'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ffc94c',
                            borderColor: 'rgba(160, 212, 104, 0.3)',
                            borderWidth: '12', // 标注边线线宽，单位px，默认为1
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 12,

                },
                {
                    type: 'min',
                    label: {
                        normal: {
                            show: true,
                            formatter: '{c}',
                            position: 'top',
                            color: '#5ed66f',
                            fontSize: '12'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ffc94c',
                            borderColor: 'rgba(160, 212, 104, 0.3)',
                            borderWidth: 12, // 标注边线线宽，单位px，默认为1
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 12,
                }
            ],

        },
        markLine: {
            data:[
                [
                    {
                        name: '警戒线',
                        coord: [0, 30],
                        symbol: 'none'
                    },
                    {
                        coord: [11, 30],
                        symbol: 'none'
                    }
                ],
                [
                    {
                        name: '安全线',
                        coord: [0, 15],
                        symbol: 'none'
                    },
                    {
                        coord: [11, 15],
                        symbol: 'none'
                    }
                ]
            ],
            lineStyle: {
                normal: {
                    color: '#8f4c43',
                    type: 'dotted'
                }
            }
        },
        data: [11, 13, 16, 29, 26, 10, 18, 12, 16, 20, 21, 28]
    }]
};
myChart1.setOption(option1);
var option2 = {
    backgroundColor: '#071f45',
    title: {
        text: 'mg/l',
        top: '2px',
        left: '12px',
        textStyle: {
            fontSize: '12',
            color: '#fff'
        }
    },
    tooltip: {
        show: 'true',
        trigger: 'axis',
        formatter: '{b}</br>{a}: {c}mg/l'
    },
    grid: {
        top: '30px',
        left: '30px',
        right: '45px',
        bottom: '35px'
    },
    textStyle: {
        fontSize: '12',
        color: '#999'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
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
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#262b36'
            }
        },
        axisLabel: {
            formatter: function(params) {
                if (params === 0) {
                    return ''
                } else {
                    return params
                }
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        name: '出水SS',
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#48cfae'
                }
            }
        },
        areaStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(72, 207, 174, 0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(72, 207, 174, 0)'
                    }],
                    globalCoord: false
                },
            }
        },
        markPoint: {
            data: [
                {
                    type: 'max',
                    label: {
                        normal: {
                            show: true,
                            formatter: '{c}',
                            position: 'top',
                            color: '#48cfae'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#48cfae',
                            borderColor: 'rgba(72, 207, 174, 0.3)',
                            borderWidth: 12, // 标注边线线宽，单位px，默认为1
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 12,
                },
                {
                    type: 'min',
                    label: {
                        normal: {
                            show: true,
                            formatter: '{c}',
                            position: 'top',
                            color: '#48cfae',
                            fontSize: '12'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#48cfae',
                            borderColor: 'rgba(72, 207, 174, 0.3)',
                            borderWidth: 12, // 标注边线线宽，单位px，默认为1
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 12,
                }
            ],

        },
        markLine: {
            data:[
                [
                    {
                        name: '警戒线',
                        coord: [0, 30],
                        symbol: 'none'
                    },
                    {
                        coord: [11, 30],
                        symbol: 'none'
                    }
                ],
                [
                    {
                        name: '安全线',
                        coord: [0, 15],
                        symbol: 'none'
                    },
                    {
                        coord: [11, 15],
                        symbol: 'none'
                    }
                ]
            ],
            lineStyle: {
                normal: {
                    color: '#8f4c43',
                    type: 'dotted'
                }
            }
        },
        data: [11, 13, 16, 29, 26, 10, 18, 12, 16, 20, 21, 28]
    }]
};
myChart2.setOption(option2);
var option3 = {
    backgroundColor: '#071f45',
    title: {
        text: 'mg/l',
        top: '2px',
        left: '12px',
        textStyle: {
            fontSize: '12',
            color: '#fff'
        }
    },
    tooltip: {
        show: 'true',
        trigger: 'axis',
        formatter: '{b}</br>{a}: {c}mg/l'
    },
    grid: {
        top: '30px',
        left: '35px',
        right: '45px',
        bottom: '35px'
    },
    textStyle: {
        fontSize: '12',
        color: '#999'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
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
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#262b36'
            }
        },
        axisLabel: {
            formatter: function(params) {
                if (params === 0) {
                    return ''
                } else {
                    return params
                }
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        name: '出水TP',
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#5d9cec'
                }
            }
        },
        areaStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(93, 156, 236, 0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(93, 156, 236, 0)'
                    }],
                    globalCoord: false
                },
            }
        },
        markPoint: {
            data: [
                {
                    type: 'max',
                    label: {
                        normal: {
                            show: true,
                            formatter: '{c}',
                            position: 'top',
                            color: '#5d9cec',
                            fontSize: '12'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#5d9cec',
                            borderColor: 'rgba(93, 156, 236, 0.3)',
                            borderWidth: 12, // 标注边线线宽，单位px，默认为1
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 12,
                },
                {
                    type: 'min',
                    label: {
                        normal: {
                            show: true,
                            formatter: '{c}',
                            position: 'top',
                            color: '#5d9cec',
                            fontSize: '12'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#5d9cec',
                            borderColor: 'rgba(93, 156, 236, 0.3)',
                            borderWidth: 12, // 标注边线线宽，单位px，默认为1
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 12,
                }
            ],

        },
        markLine: {
            data:[
                [
                    {
                        name: '警戒线',
                        coord: [0, 0.3],
                        symbol: 'none'
                    },
                    {
                        coord: [11, 0.3],
                        symbol: 'none'
                    }
                ],
                [
                    {
                        name: '安全线',
                        coord: [0, 0.1],
                        symbol: 'none'
                    },
                    {
                        coord: [11, 0.1],
                        symbol: 'none'
                    }
                ]
            ],
            lineStyle: {
                normal: {
                    color: '#8f4c43',
                    type: 'dotted'
                }
            }
        },
        data: [0.20, 0.22, 0.25, 0.31, 0.27, 0.28, 0.23, 0.26, 0.27, 0.25, 0.22, 0.23]
    }]
};
myChart3.setOption(option3);
var option4 = {
    backgroundColor: '#071f45',
    title: {
        text: 'mg/l',
        top: '2px',
        left: '12px',
        textStyle: {
            fontSize: '12',
            color: '#fff'
        }
    },
    tooltip: {
        show: 'true',
        trigger: 'axis',
        formatter: '{b}</br>{a}: {c}mg/l'
    },
    grid: {
        top: '30px',
        left: '35px',
        right: '45px',
        bottom: '35px'
    },
    textStyle: {
        fontSize: '12',
        color: '#999'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
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
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#262b36'
            }
        },
        axisLabel: {
            formatter: function(params) {
                if (params === 0) {
                    return ''
                } else {
                    return params
                }
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        name: '出水SS',
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#ac92ed'
                }
            }
        },
        areaStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(172, 146, 237, 0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(172, 146, 237, 0)'
                    }],
                    globalCoord: false
                },
            }
        },
        markPoint: {
            data: [
                {
                    type: 'max',
                    label: {
                        normal: {
                            show: true,
                            formatter: '{c}',
                            position: 'top',
                            color: '#ac92ed',
                            fontSize: '12'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ac92ed',
                            borderColor: 'rgba(172, 146, 237, 0.3)',
                            borderWidth: 12, // 标注边线线宽，单位px，默认为1
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 12,
                },
                {
                    type: 'min',
                    label: {
                        normal: {
                            show: true,
                            formatter: '{c}',
                            position: 'top',
                            color: '#ac92ed',
                            fontSize: '12'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ac92ed',
                            borderColor: 'rgba(172, 146, 237, 0.3)',
                            borderWidth: 12, // 标注边线线宽，单位px，默认为1
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 12,
                }
            ],

        },
        markLine: {
            data:[
                [
                    {
                        name: '警戒线',
                        coord: [0, 10],
                        symbol: 'none'
                    },
                    {
                        coord: [11, 10],
                        symbol: 'none'
                    }
                ],
                [
                    {
                        name: '安全线',
                        coord: [0, 3],
                        symbol: 'none'
                    },
                    {
                        coord: [11, 3],
                        symbol: 'none'
                    }
                ]
            ],
            lineStyle: {
                normal: {
                    color: '#8f4c43',
                    type: 'dotted'
                }
            }
        },
        data: [7.9, 7.1, 7.3, 8.1, 8.2, 8.3, 8.7, 7.6, 7.5, 7.3, 7.8, 7.1]
    }]
};
myChart4.setOption(option4);
var option5 = {
    backgroundColor: '#071f45',
    title: {
        text: 'mg/l',
        top: '2px',
        left: '12px',
        textStyle: {
            fontSize: '12',
            color: '#fff'
        }
    },
    tooltip: {
        show: 'true',
        trigger: 'axis',
        formatter: '{b}</br>{a}: {c}mg/l'
    },
    grid: {
        top: '30px',
        left: '35px',
        right: '45px',
        bottom: '35px'
    },
    textStyle: {
        fontSize: '12',
        color: '#999'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
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
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#262b36'
            }
        },
        axisLabel: {
            formatter: function(params) {
                if (params === 0) {
                    return ''
                } else {
                    return params
                }
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        name: '出水流量',
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#5d9cec'
                }
            }
        },
        areaStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(93, 156, 236, 0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(93, 156, 236, 0)'
                    }],
                    globalCoord: false
                },
            }
        },
        markPoint: {
            data: [
                {
                    type: 'max',
                    label: {
                        normal: {
                            show: true,
                            formatter: '{c}',
                            position: 'top',
                            color: '#5d9cec',
                            fontSize: '12'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#5d9cec',
                            borderColor: 'rgba(93, 156, 236, 0.3)',
                            borderWidth: 12, // 标注边线线宽，单位px，默认为1
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 12,
                },
                {
                    type: 'min',
                    label: {
                        normal: {
                            show: true,
                            formatter: '{c}',
                            position: 'top',
                            color: '#5d9cec',
                            fontSize: '12'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#5d9cec',
                            borderColor: 'rgba(93, 156, 236, 0.3)',
                            borderWidth: 12, // 标注边线线宽，单位px，默认为1
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 12,
                }
            ],

        },
        markLine: {
            data:[
                [
                    {
                        name: '警戒线',
                        coord: [0, 1500],
                        symbol: 'none'
                    },
                    {
                        coord: [11, 1500],
                        symbol: 'none'
                    }
                ],
                [
                    {
                        name: '安全线',
                        coord: [0, 600],
                        symbol: 'none'
                    },
                    {
                        coord: [11, 600],
                        symbol: 'none'
                    }
                ]
            ],
            lineStyle: {
                normal: {
                    color: '#8f4c43',
                    type: 'dotted'
                }
            }
        },
        data: [1010, 1003, 1220, 1338, 1459, 1300, 1397, 1388, 1420, 1200, 1005, 1103, 1167, 1205]
    }]
};
myChart5.setOption(option5);
