/**
 * Created by ibm on 2017/9/29.
 */
$(function () {
    $('.design-water').on('click', function () {
        var temp = 0;
        $('.time p').each(function () {
            temp += 500;
            $(this).text(temp);

        });
        $('.time1').slideUp();
        $('.time').slideToggle();
    });
    $('.chose-date').on('click', function () {
        $('.time').slideUp();
        $('.time1').slideToggle();
    });
    $('.time p').on('click', function () {
        $(this).addClass('active')
            .siblings('p').removeClass('active');
        var text = $(this).text();
        var index = $('.time p').index($(this));
        switch (index) {
            case 0:
                myChart1.setOption({
                    series: {
                        data:[
                            {
                                value: 38,
                                name: '水',
                                selected:true
                            },
                            {
                                value: 9,
                                name: '人工',
                                selected:true
                            },
                            {
                                value: 25,
                                name: '药剂',
                                selected:true
                            },
                            {
                                value: 25,
                                name: '电',
                                selected:true
                            }
                        ],
                    }
                });
                myChart2.setOption({
                    series: {
                        data:[
                            {
                                value: 48,
                                name: '水',
                                selected:true
                            },
                            {
                                value: 29,
                                name: '人工',
                                selected:true
                            },
                            {
                                value: 12,
                                name: '药剂',
                                selected:true
                            },
                            {
                                value: 88,
                                name: '电',
                                selected:true
                            }
                        ],
                    }
                });
                myChart4.setOption({
                    series: {
                        data:[
                            {
                                value: 77,
                                name: '水',
                                selected:true
                            },
                            {
                                value: 88,
                                name: '人工',
                                selected:true
                            },
                            {
                                value: 67,
                                name: '药剂',
                                selected:true
                            },
                            {
                                value: 120,
                                name: '电',
                                selected:true
                            }
                        ],
                    }
                });
                myChart5.setOption({
                    series: {
                        data:[
                            {
                                value: 120,
                                name: '水',
                                selected:true
                            },
                            {
                                value: 189,
                                name: '人工',
                                selected:true
                            },
                            {
                                value: 220,
                                name: '药剂',
                                selected:true
                            },
                            {
                                value: 300,
                                name: '电',
                                selected:true
                            }
                        ],
                    }
                });

                myChart11.setOption({
                    series: {
                        data: [0.78, 1.21, 1.75, 2.45, 2.54]
                    }
                });
                myChart22.setOption({
                    series: {
                        data: [1.78, 5.21, 3.75, 2.45, 4.54]
                    }
                });
                myChart44.setOption({
                    series: {
                        data: [0.23, 3.20, 2.45, 5.37, 1.25]
                    }
                });
                myChart55.setOption({
                    series: {
                        data: [0.18, 0.41, 1.75, 1.45, 1.54]
                    }
                });
                break;
            case 1:
                myChart1.setOption({
                    series: {
                        data:[
                            {
                                value: 120,
                                name: '水',
                                selected:true
                            },
                            {
                                value: 189,
                                name: '人工',
                                selected:true
                            },
                            {
                                value: 220,
                                name: '药剂',
                                selected:true
                            },
                            {
                                value: 300,
                                name: '电',
                                selected:true
                            }
                        ]
                    }
                });
                myChart2.setOption({
                    series: {
                        data:[
                            {
                                value: 43,
                                name: '水',
                                selected:true
                            },
                            {
                                value: 99,
                                name: '人工',
                                selected:true
                            },
                            {
                                value: 57,
                                name: '药剂',
                                selected:true
                            },
                            {
                                value: 100,
                                name: '电',
                                selected:true
                            }
                        ],
                    }
                });
                myChart4.setOption({
                    series: {
                        data:[
                            {
                                value: 48,
                                name: '水',
                                selected:true
                            },
                            {
                                value: 29,
                                name: '人工',
                                selected:true
                            },
                            {
                                value: 12,
                                name: '药剂',
                                selected:true
                            },
                            {
                                value: 88,
                                name: '电',
                                selected:true
                            }
                        ],
                    }
                });
                myChart5.setOption({
                    series: {
                        data:[
                            {
                                value: 38,
                                name: '水',
                                selected:true
                            },
                            {
                                value: 9,
                                name: '人工',
                                selected:true
                            },
                            {
                                value: 25,
                                name: '药剂',
                                selected:true
                            },
                            {
                                value: 25,
                                name: '电',
                                selected:true
                            }
                        ],

                    }
                });

                myChart11.setOption({
                    series: {
                        data: [1.78, 5.21, 3.75, 2.45, 4.54]
                    }
                });
                myChart22.setOption({
                    series: {
                        data: [0.78, 1.21, 1.75, 2.45, 2.54]
                    }
                });
                myChart44.setOption({
                    series: {
                        data: [0.18, 0.41, 1.75, 1.45, 1.54]
                    }
                });
                myChart55.setOption({
                    series: {
                        data: [0.23, 3.20, 2.45, 5.37, 1.25]
                    }
                });
                break;
            case 2:
                myChart1.setOption({
                    series: {
                        data:[
                            {
                                value: 43,
                                name: '水',
                                selected:true
                            },
                            {
                                value: 99,
                                name: '人工',
                                selected:true
                            },
                            {
                                value: 57,
                                name: '药剂',
                                selected:true
                            },
                            {
                                value: 100,
                                name: '电',
                                selected:true
                            }
                        ],
                    }
                });
                myChart2.setOption({
                    series: {
                        data:[
                            {
                                value: 120,
                                name: '水',
                                selected:true
                            },
                            {
                                value: 189,
                                name: '人工',
                                selected:true
                            },
                            {
                                value: 220,
                                name: '药剂',
                                selected:true
                            },
                            {
                                value: 300,
                                name: '电',
                                selected:true
                            }
                        ]
                    }

                });
                myChart5.setOption({
                    series: {
                        data:[
                            {
                                value: 48,
                                name: '水',
                                selected:true
                            },
                            {
                                value: 29,
                                name: '人工',
                                selected:true
                            },
                            {
                                value: 12,
                                name: '药剂',
                                selected:true
                            },
                            {
                                value: 88,
                                name: '电',
                                selected:true
                            }
                        ],
                    }
                });
                myChart4.setOption({
                    series: {
                        data:[
                            {
                                value: 38,
                                name: '水',
                                selected:true
                            },
                            {
                                value: 9,
                                name: '人工',
                                selected:true
                            },
                            {
                                value: 25,
                                name: '药剂',
                                selected:true
                            },
                            {
                                value: 25,
                                name: '电',
                                selected:true
                            }
                        ],

                    }
                });

                myChart11.setOption({
                    series: {
                        data: [0.18, 0.41, 1.75, 1.45, 1.54]
                    }
                });
                myChart22.setOption({
                    series: {
                        data: [0.23, 3.20, 2.45, 5.37, 1.25]
                    }
                });
                myChart44.setOption({
                    series: {
                        data: [1.78, 5.21, 3.75, 2.45, 4.54]

                    }
                });
                myChart55.setOption({
                    series: {
                        data: [0.78, 1.21, 1.75, 2.45, 2.54]
                    }
                });
                break;
            default:
                break;
        }
        $('.design-water span').text(text);
        $('.time').slideToggle();


    });
    $('.time1 p').on('click', function () {
        $(this).addClass('active')
            .siblings('p').removeClass('active');
        var text = $(this).text();
        var index = $('.time1 p').index($(this));
        $('.chose-date span').text(text);
        $('.time1').slideToggle();
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
})
var swiper1 = new Swiper('.sw1', {
    pagination: '.sw1 .swiper-pagination',
    paginationClickable: true,
    autoplay: 5000
});
var swiper2 = new Swiper('.sw2', {
    pagination: '.sw2 .swiper-pagination',
    paginationClickable: true,
    autoplay: 4000
});

var myChart1 = echarts.init(document.getElementById('o-echart1'));
var myChart2 = echarts.init(document.getElementById('o-echart2'));
var myChart3 = echarts.init(document.getElementById('o-echart3'));
var myChart4 = echarts.init(document.getElementById('o-echart4'));
var myChart5 = echarts.init(document.getElementById('o-echart5'));
var myChart11 = echarts.init(document.getElementById('o-echart11'));
var myChart22 = echarts.init(document.getElementById('o-echart22'));
var myChart33 = echarts.init(document.getElementById('o-echart33'));
var myChart44 = echarts.init(document.getElementById('o-echart44'));
var myChart55 = echarts.init(document.getElementById('o-echart55'));
var e1 = echarts.init(document.getElementById('e1'));
var e2 = echarts.init(document.getElementById('e2'));
var e3 = echarts.init(document.getElementById('e3'));
var e4 = echarts.init(document.getElementById('e4'));
var e5 = echarts.init(document.getElementById('e5'));

var option1 = {
    backgroundColor: '#071f45',
    title: {
        text: 'TOP1: 简阳市',
        top: '12px',
        right: '12px',
        textStyle: {
            fontSize: '16',
            color: '#fb6e52'
        }
    },
    grid: {
        top: '40px'
    },
    series: [
        {
            name: '预测数据',
            type: 'pie',
            selectedOffset: '3',
            data:[
                {
                    value: 38,
                    name: '水',
                    selected:true
                },
                {
                    value: 9,
                    name: '人工',
                    selected:true
                },
                {
                    value: 25,
                    name: '药剂',
                    selected:true
                },
                {
                    value: 25,
                    name: '电',
                    selected:true
                }
            ],
            center: ['50%', 125],
            radius: [0, '45'],
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    textStyle: {
                        fontWeight: 'bold',
                        color: '#999999'
                    },
                    formatter: "{b}: {d}%"
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    },
    color:['#a0d468', '#3bbd5f','#48cfae','#4fc0e8']
};
myChart1.setOption(option1);
var option2 = {
    backgroundColor: '#071f45',
    title: {
        text: 'TOP2: 成都市',
        top: '12px',
        right: '12px',
        textStyle: {
            fontSize: '16',
            color: '#fb6e52'
        }
    },
    grid: {
        top: '40px'
    },
    series: [
        {
            name: '预测数据',
            type: 'pie',
            selectedOffset: '3',
            data:[
                {
                    value: 48,
                    name: '水',
                    selected:true
                },
                {
                    value: 29,
                    name: '人工',
                    selected:true
                },
                {
                    value: 12,
                    name: '药剂',
                    selected:true
                },
                {
                    value: 88,
                    name: '电',
                    selected:true
                }
            ],
            center: ['50%', 125],
            radius: [0, '45'],
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    textStyle: {
                        fontWeight: 'bold',
                        color: '#999999'
                    },
                    formatter: "{b}: {d}%"
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    },
    color:['#a0d468', '#3bbd5f','#48cfae','#4fc0e8']
};
myChart2.setOption(option2);
var option3 = {
    backgroundColor: '#071f45',
    title: {
        text: 'TOP3: 绵阳市',
        top: '12px',
        right: '12px',
        textStyle: {
            fontSize: '16',
            color: '#fb6e52'
        }
    },
    grid: {
        top: '40px'
    },
    series: [
        {
            name: '预测数据',
            type: 'pie',
            selectedOffset: '3',
            data:[
                {
                    value: 77,
                    name: '水',
                    selected:true
                },
                {
                    value: 88,
                    name: '人工',
                    selected:true
                },
                {
                    value: 67,
                    name: '药剂',
                    selected:true
                },
                {
                    value: 120,
                    name: '电',
                    selected:true
                }
            ],
            center: ['50%', 125],
            radius: [0, '45'],
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    textStyle: {
                        fontWeight: 'bold',
                        color: '#999999'
                    },
                    formatter: "{b}: {d}%"
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    },
    color:['#a0d468', '#3bbd5f','#48cfae','#4fc0e8']
};
myChart3.setOption(option3);
var option4 = {
    backgroundColor: '#071f45',
    title: {
        text: 'TOP4: 达州市',
        top: '12px',
        right: '12px',
        textStyle: {
            fontSize: '16',
            color: '#fb6e52'
        }
    },
    grid: {
        top: '40px'
    },
    series: [
        {
            name: '预测数据',
            type: 'pie',
            selectedOffset: '3',
            data:[
                {
                    value: 43,
                    name: '水',
                    selected:true
                },
                {
                    value: 99,
                    name: '人工',
                    selected:true
                },
                {
                    value: 57,
                    name: '药剂',
                    selected:true
                },
                {
                    value: 100,
                    name: '电',
                    selected:true
                }
            ],
            center: ['50%', 125],
            radius: [0, '45'],
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    textStyle: {
                        fontWeight: 'bold',
                        color: '#999999'
                    },
                    formatter: "{b}: {d}%"
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    },
    color:['#a0d468', '#3bbd5f','#48cfae','#4fc0e8']
};
myChart4.setOption(option4);
var option5 = {
    backgroundColor: '#071f45',
    title: {
        text: 'TOP5: 南充市',
        top: '12px',
        right: '12px',
        textStyle: {
            fontSize: '16',
            color: '#fb6e52'
        }
    },
    grid: {
        top: '40px'
    },
    series: [
        {
            name: '预测数据',
            type: 'pie',
            selectedOffset: '3',
            data:[
                {
                    value: 120,
                    name: '水',
                    selected:true
                },
                {
                    value: 189,
                    name: '人工',
                    selected:true
                },
                {
                    value: 220,
                    name: '药剂',
                    selected:true
                },
                {
                    value: 300,
                    name: '电',
                    selected:true
                }
            ],
            center: ['50%', 125],
            radius: [0, '45'],
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    textStyle: {
                        fontWeight: 'bold',
                        color: '#999999'
                    },
                    formatter: "{b}: {d}%"
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    },
    color:['#a0d468', '#3bbd5f','#48cfae','#4fc0e8']
};
myChart5.setOption(option5);

var option11 = {
    backgroundColor: '#071f45',
    title: {
        text: '用水成本',
        right: '13px',
        top: '10px',
        textStyle: {
            color: '#ffce55',
            fontSize: '18'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '25px',
        containLabel: true
    },
    xAxis: {
        show: true,
        type: 'value',
        axisLabel : {
            formatter: function (value) {
                return value + '元'
            }
        },
        splitLine : {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['乐山市','绵阳市','泸州市','德阳市','简阳市'],
        axisTick: {
            show: false
        }
    },
    series: [
        {
            name: '元',
            type: 'bar',
            barWidth: '8',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance: 10,
                    offset: [0, -2],
                    textStyle: {
                        color: '#50cd62'
                    },
                    formatter:function(params){
                        if(params.value==0){
                            return '';
                        }else
                        {
                            return params.value;
                        }
                    }
                }

            },
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 10, 10, 0],
//                        设置渐变
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#7ac1fc'},
                            {offset: 1, color: '#818ff5'}

                        ]
                    )
                }
            },
            data: [0.78, 1.21, 1.75, 2.45, 2.54]
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart11.setOption(option11);
var option22 = {
    backgroundColor: '#071f45',
    title: {
        text: '人工成本',
        right: '13px',
        top: '10px',
        textStyle: {
            color: '#ffce55',
            fontSize: '18'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '25px',
        containLabel: true
    },
    xAxis: {
        show: true,
        type: 'value',
        axisLabel : {
            formatter: function (value) {
                return value + '元'
            }
        },
        splitLine : {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['乐山市','绵阳市','泸州市','德阳市','简阳市'],
        axisTick: {
            show: false
        }
    },
    series: [
        {
            name: '元',
            type: 'bar',
            barWidth: '8',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance: 10,
                    offset: [0, -2],
                    textStyle: {
                        color: '#50cd62'
                    },
                    formatter:function(params){
                        if(params.value==0){
                            return '';
                        }else
                        {
                            return params.value;
                        }
                    }
                }

            },
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 10, 10, 0],
//                        设置渐变
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#7ac1fc'},
                            {offset: 1, color: '#818ff5'}

                        ]
                    )
                }
            },
            data: [1.78, 5.21, 3.75, 2.45, 4.54]
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart22.setOption(option22);
var option33 = {
    backgroundColor: '#071f45',
    title: {
        text: '药剂成本',
        right: '13px',
        top: '10px',
        textStyle: {
            color: '#ffce55',
            fontSize: '18'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '25px',
        containLabel: true
    },
    xAxis: {
        show: true,
        type: 'value',
        axisLabel : {
            formatter: function (value) {
                return value + '元'
            }
        },
        splitLine : {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['乐山市','绵阳市','泸州市','德阳市','简阳市'],
        axisTick: {
            show: false
        }
    },
    series: [
        {
            name: '元',
            type: 'bar',
            barWidth: '8',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance: 10,
                    offset: [0, -2],
                    textStyle: {
                        color: '#50cd62'
                    },
                    formatter:function(params){
                        if(params.value==0){
                            return '';
                        }else
                        {
                            return params.value;
                        }
                    }
                }

            },
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 10, 10, 0],
//                        设置渐变
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#7ac1fc'},
                            {offset: 1, color: '#818ff5'}

                        ]
                    )
                }
            },
            data: [1.28, 0.85, 3.24, 1.11, 0.75]
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart33.setOption(option33);
var option44 = {
    backgroundColor: '#071f45',
    title: {
        text: '用电成本',
        right: '13px',
        top: '10px',
        textStyle: {
            color: '#ffce55',
            fontSize: '18'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '25px',
        containLabel: true
    },
    xAxis: {
        show: true,
        type: 'value',
        axisLabel : {
            formatter: function (value) {
                return value + '元'
            }
        },
        splitLine : {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['乐山市','绵阳市','泸州市','德阳市','简阳市'],
        axisTick: {
            show: false
        }
    },
    series: [
        {
            name: '元',
            type: 'bar',
            barWidth: '8',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance: 10,
                    offset: [0, -2],
                    textStyle: {
                        color: '#50cd62'
                    },
                    formatter:function(params){
                        if(params.value==0){
                            return '';
                        }else
                        {
                            return params.value;
                        }
                    }
                }

            },
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 10, 10, 0],
//                        设置渐变
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#7ac1fc'},
                            {offset: 1, color: '#818ff5'}

                        ]
                    )
                }
            },
            data: [0.23, 3.20, 2.45, 5.37, 1.25]
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart44.setOption(option44);
var option55 = {
    backgroundColor: '#071f45',
    title: {
        text: '其他',
        right: '13px',
        top: '10px',
        textStyle: {
            color: '#ffce55',
            fontSize: '18'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '25px',
        containLabel: true
    },
    xAxis: {
        show: true,
        type: 'value',
        axisLabel : {
            formatter: function (value) {
                return value + '元'
            }
        },
        splitLine : {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['乐山市','绵阳市','泸州市','德阳市','简阳市'],
        axisTick: {
            show: false
        }
    },
    series: [
        {
            name: '元',
            type: 'bar',
            barWidth: '8',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance: 10,
                    offset: [0, -2],
                    textStyle: {
                        color: '#50cd62'
                    },
                    formatter:function(params){
                        if(params.value==0){
                            return '';
                        }else
                        {
                            return params.value;
                        }
                    }
                }

            },
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 10, 10, 0],
//                        设置渐变
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#7ac1fc'},
                            {offset: 1, color: '#818ff5'}

                        ]
                    )
                }
            },
            data: [0.18, 0.41, 1.75, 1.45, 1.54]
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart55.setOption(option55);
var eop1 = {
    backgroundColor: '#071f45',
    title: {
        text: 'TOP1: 简阳市',
        subtext: '元',
        left: '5%',
        subtextStyle: {
            align: 'center'
        },
        itemGap: 10,
        textStyle: {
            color: '#fb6e52',
            fontSize: '18',
            align: 'center'
        }
    },
    tooltip: {
        show: 'true',
        trigger: 'axis',
    },
    gird: {
        bottom: '10px'
    },
    legend: {
        itemWidth: 20,
        itemHeight: 4,
        data:[
            {
                name: '电',
                icon: 'rect'
            },
            {
                name: '水',
                icon: 'rect'
            },
            {
                name: '药剂',
                icon: 'rect'
            },
            {
                name:'人工',
                icon: 'rect'
            }],
        right: '15px',
        top: '30px',
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        splitLine : {
//                show: true
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',

        axisTick: {
            show: false
        },
        splitLine : {
            show: true,
            lineStyle: {
                color: '#262b36'
            }
        }
    },
    series: [
        {
            name: '电',
            type: 'line',
            data: [1.1, 2.2, 3.3, 1.3, 2.4, 5]
        },
        {
            name: '水',
            type: 'line',
            data: [2.3, 2.4, 1.2, 1.4, 3.4, 3.6]
        },
        {
            name: '药剂',
            type: 'line',
            data: [0.7, 1.2, 1.7, 1.1, 2.2, 3]
        },
        {
            name: '人工',
            type: 'line',
            data: [1.3, 1.5, 1.1, 2.3, 2.2, 1.2]
        }
    ],
    textStyle: {
        color: '#999'
    },
    color: ['#48cfae', '#a0d465', '#5d9cec', '#4fc0e8'],
};
e1.setOption(eop1);
var eop2 = {
    backgroundColor: '#071f45',
    title: {
        text: 'TOP2: 德阳市',
        subtext: '元',
        left: '5%',
        subtextStyle: {
            align: 'center'
        },
        itemGap: 10,
        textStyle: {
            color: '#fb6e52',
            fontSize: '18',
            align: 'center'
        }
    },
    tooltip: {
        show: 'true',
        trigger: 'axis',
    },
    legend: {
        itemWidth: 20,
        itemHeight: 4,
        data:[
            {
                name: '电',
                icon: 'rect'
            },
            {
                name: '水',
                icon: 'rect'
            },
            {
                name: '药剂',
                icon: 'rect'
            },
            {
                name:'人工',
                icon: 'rect'
            }],
        right: '15px',
        top: '30px',
        textStyle: {
            color: '#fff'
        }
    },
    gird: {
        bottom: '10px'
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        splitLine : {
//                show: true
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',

        axisTick: {
            show: false
        },
        splitLine : {
            show: true,
            lineStyle: {
                color: '#262b36'
            }
        }
    },
    series: [
        {
            name: '电',
            type: 'line',
            data: [1.1, 2.2, 3.3, 1.3, 2.4, 5]
        },
        {
            name: '水',
            type: 'line',
            data: [2.3, 2.4, 1.2, 1.4, 3.4, 3.6]
        },
        {
            name: '药剂',
            type: 'line',
            data: [0.7, 1.2, 1.7, 1.1, 2.2, 3]
        },
        {
            name: '人工',
            type: 'line',
            data: [1.3, 1.5, 1.1, 2.3, 2.2, 1.2]
        }
    ],
    textStyle: {
        color: '#999'
    },
    color: ['#48cfae', '#a0d465', '#5d9cec', '#4fc0e8'],
};
e2.setOption(eop2);
var eop3 = {
    title: {
        text: 'TOP3: 绵阳市',
        subtext: '元',
        left: '5%',
        subtextStyle: {
            align: 'center'
        },
        itemGap: 10,
        textStyle: {
            color: '#fb6e52',
            fontSize: '18',
            align: 'center'
        }
    },
    tooltip: {
        show: 'true',
        trigger: 'axis',
    },
    legend: {
        itemWidth: 20,
        itemHeight: 4,
        data:[
            {
                name: '电',
                icon: 'rect'
            },
            {
                name: '水',
                icon: 'rect'
            },
            {
                name: '药剂',
                icon: 'rect'
            },
            {
                name:'人工',
                icon: 'rect'
            }],
        right: '15px',
        top: '30px',
        textStyle: {
            color: '#fff'
        }
    },
    gird: {
        bottom: '10px'
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        splitLine : {
//                show: true
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',

        axisTick: {
            show: false
        },
        splitLine : {
            show: true,
            lineStyle: {
                color: '#262b36'
            }
        }
    },
    series: [
        {
            name: '电',
            type: 'line',
            data: [1.1, 2.2, 3.3, 1.3, 2.4, 5]
        },
        {
            name: '水',
            type: 'line',
            data: [2.3, 2.4, 1.2, 1.4, 3.4, 3.6]
        },
        {
            name: '药剂',
            type: 'line',
            data: [0.7, 1.2, 1.7, 1.1, 2.2, 3]
        },
        {
            name: '人工',
            type: 'line',
            data: [1.3, 1.5, 1.1, 2.3, 2.2, 1.2]
        }
    ],
    textStyle: {
        color: '#999'
    },
    color: ['#48cfae', '#a0d465', '#5d9cec', '#4fc0e8'],
    backgroundColor: '#071f45',

};
e3.setOption(eop3);
var eop4 = {
    title: {
        text: 'TOP4: 泸州市',
        subtext: '元',
        left: '5%',
        subtextStyle: {
            align: 'center'
        },
        itemGap: 10,
        textStyle: {
            color: '#fb6e52',
            fontSize: '18',
            align: 'center'
        }
    },
    tooltip: {
        show: 'true',
        trigger: 'axis',
    },
    legend: {
        itemWidth: 20,
        itemHeight: 4,
        data:[
            {
                name: '电',
                icon: 'rect'
            },
            {
                name: '水',
                icon: 'rect'
            },
            {
                name: '药剂',
                icon: 'rect'
            },
            {
                name:'人工',
                icon: 'rect'
            }],
        right: '15px',
        top: '30px',
        textStyle: {
            color: '#fff'
        }
    },
    gird: {
        bottom: '10px'
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        splitLine : {
//                show: true
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',

        axisTick: {
            show: false
        },
        splitLine : {
            show: true,
            lineStyle: {
                color: '#262b36'
            }
        }
    },
    series: [
        {
            name: '电',
            type: 'line',
            data: [1.1, 2.2, 3.3, 1.3, 2.4, 5]
        },
        {
            name: '水',
            type: 'line',
            data: [2.3, 2.4, 1.2, 1.4, 3.4, 3.6]
        },
        {
            name: '药剂',
            type: 'line',
            data: [0.7, 1.2, 1.7, 1.1, 2.2, 3]
        },
        {
            name: '人工',
            type: 'line',
            data: [1.3, 1.5, 1.1, 2.3, 2.2, 1.2]
        }
    ],
    textStyle: {
        color: '#999'
    },
    color: ['#48cfae', '#a0d465', '#5d9cec', '#4fc0e8'],
    backgroundColor: '#071f45',

};
e4.setOption(eop4);
var eop5 = {
    title: {
        text: 'TOP5: 乐山市',
        subtext: '元',
        left: '5%',
        subtextStyle: {
            align: 'center'
        },
        itemGap: 10,
        textStyle: {
            color: '#fb6e52',
            fontSize: '18',
            align: 'center'
        }
    },
    tooltip: {
        show: 'true',
        trigger: 'axis',
    },
    legend: {
        itemWidth: 20,
        itemHeight: 4,
        data:[
            {
                name: '电',
                icon: 'rect'
            },
            {
                name: '水',
                icon: 'rect'
            },
            {
                name: '药剂',
                icon: 'rect'
            },
            {
                name:'人工',
                icon: 'rect'
            }],
        right: '15px',
        top: '30px',
        textStyle: {
            color: '#fff'
        }
    },
    gird: {
        bottom: '10px'
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        splitLine : {
//                show: true
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',

        axisTick: {
            show: false
        },
        splitLine : {
            show: true,
            lineStyle: {
                color: '#262b36'
            }
        }
    },
    series: [
        {
            name: '电',
            type: 'line',
            data: [1.1, 2.2, 3.3, 1.3, 2.4, 5]
        },
        {
            name: '水',
            type: 'line',
            data: [2.3, 2.4, 1.2, 1.4, 3.4, 3.6]
        },
        {
            name: '药剂',
            type: 'line',
            data: [0.7, 1.2, 1.7, 1.1, 2.2, 3]
        },
        {
            name: '人工',
            type: 'line',
            data: [1.3, 1.5, 1.1, 2.3, 2.2, 1.2]
        }
    ],
    textStyle: {
        color: '#999'
    },
    color: ['#48cfae', '#a0d465', '#5d9cec', '#4fc0e8'],
    backgroundColor: '#071f45',

};
e5.setOption(eop5);
