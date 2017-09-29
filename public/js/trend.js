/**
 * Created by ibm on 2017/9/29.
 */
$(function () {

    $('.chose-time').on('click', function () {
        $('.time').slideToggle();
    });
    $('.time p').on('click', function () {
        $(this).addClass('active')
            .siblings('p').removeClass('active');
        var text = $(this).text();
        var index = $('.time p').index($(this));
        switch (index) {
            case 0:
                myChart1.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['4:00', '8:00', '12:00', '16:00', '20:00', '24:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27],
                            markLine: {
                                data:[
                                    [
                                        {
                                            name: '警戒线',
                                            coord: [0, 30],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 30],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '安全线',
                                            coord: [0, 10],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 10],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart2.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['4:00', '8:00', '12:00', '16:00', '20:00', '24:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27],
                            markLine: {
                                data:[
                                    [
                                        {
                                            name: '警戒线',
                                            coord: [0, 30],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 30],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '安全线',
                                            coord: [0, 10],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 10],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart3.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['4:00', '8:00', '12:00', '16:00', '20:00', '24:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27],
                            markLine: {
                                data:[
                                    [
                                        {
                                            name: '警戒线',
                                            coord: [0, 30],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 30],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '安全线',
                                            coord: [0, 10],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 10],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart4.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['4:00', '8:00', '12:00', '16:00', '20:00', '24:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27],
                            markLine: {
                                data:[
                                    [
                                        {
                                            name: '警戒线',
                                            coord: [0, 30],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 30],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '安全线',
                                            coord: [0, 10],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 10],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart5.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['4:00', '8:00', '12:00', '16:00', '20:00', '24:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27],
                            markLine: {
                                data:[
                                    [
                                        {
                                            name: '警戒线',
                                            coord: [0, 30],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 30],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '安全线',
                                            coord: [0, 10],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 10],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart6.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['4:00', '8:00', '12:00', '16:00', '20:00', '24:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27],
                            markLine: {
                                data:[
                                    [
                                        {
                                            name: '警戒线',
                                            coord: [0, 30],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 30],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '安全线',
                                            coord: [0, 10],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 10],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart7.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['4:00', '8:00', '12:00', '16:00', '20:00', '24:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27],
                            markLine: {
                                data:[
                                    [
                                        {
                                            name: '警戒线',
                                            coord: [0, 30],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 30],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '安全线',
                                            coord: [0, 10],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 10],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart8.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['4:00', '8:00', '12:00', '16:00', '20:00', '24:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27],
                            markLine: {
                                data:[
                                    [
                                        {
                                            name: '警戒线',
                                            coord: [0, 30],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 30],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '安全线',
                                            coord: [0, 10],
                                            symbol: 'none'
                                        },
                                        {
                                            coord: [5, 10],
                                            symbol: 'none'
                                        }
                                    ],
                                    [
                                        {
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                break;
            case 1:
                myChart1.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 24, 23, 16, 28, 24, 23]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 19, 25, 28, 29, 29, 27],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart2.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 24, 23, 16, 28, 24, 23]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 19, 25, 28, 29, 29, 27],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart3.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 24, 23, 16, 28, 24, 23]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 19, 25, 28, 29, 29, 27],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart4.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 24, 23, 16, 28, 24, 23]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 19, 25, 28, 29, 29, 27],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart5.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 24, 23, 16, 28, 24, 23]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 19, 25, 28, 29, 29, 27],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart6.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 24, 23, 16, 28, 24, 23]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 19, 25, 28, 29, 29, 27],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart7.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 24, 23, 16, 28, 24, 23]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 19, 25, 28, 29, 29, 27],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart8.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
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
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 24, 23, 16, 28, 24, 23]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 19, 25, 28, 29, 29, 27],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                break;
            case 2:
                myChart1.setOption({
                    xAxis: {
                        type: 'category',
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
                        }
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart2.setOption({
                    xAxis: {
                        type: 'category',
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
                        }
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart3.setOption({
                    xAxis: {
                        type: 'category',
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
                        }
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart4.setOption({
                    xAxis: {
                        type: 'category',
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
                        }
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart5.setOption({
                    xAxis: {
                        type: 'category',
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
                        }
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart6.setOption({
                    xAxis: {
                        type: 'category',
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
                        }
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart7.setOption({
                    xAxis: {
                        type: 'category',
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
                        }
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                myChart8.setOption({
                    xAxis: {
                        type: 'category',
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
                        }
                    },
                    series: [
                        {
                            data: [18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21]
                        },
                        {
                            data: [7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
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
                                            name: '当前时间',
                                            x: '50%',
                                            y: '15%',
                                            symbol: 'none'
                                        },
                                        {
                                            x: '50%',
                                            y: '90%',
                                            symbol: 'none',
                                            label: {
                                                normal: {
                                                    color: '#2f3644',
                                                    position: 'end'
                                                }
                                            }
                                        }
                                    ]
                                ],
                                lineStyle: {
                                    normal: {
                                        color: '#8f4c43',
                                        type: 'dotted'
                                    }
                                }
                            }
                        }
                    ]
                });
                break;
            default:
                break;
        }
        $('.chose-time span').text(text);
        $('.time').slideToggle();
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
            myChart1.setOption({
                xAxis: {
                    type: 'category',
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
                    }
                },
                series: [
                    {
                        data: [10, 11, 12, 15, 18, 18, 28, 20, 23, 20, 10, 18]
                    },
                    {
                        data: [8, 14, 18, 18, 20, 23, 18, 23, 29, 28, 20 ,19],
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
                                        name: '当前时间',
                                        x: '50%',
                                        y: '15%',
                                        symbol: 'none'
                                    },
                                    {
                                        x: '50%',
                                        y: '90%',
                                        symbol: 'none',
                                        label: {
                                            normal: {
                                                color: '#2f3644',
                                                position: 'end'
                                            }
                                        }
                                    }
                                ]
                            ],
                            lineStyle: {
                                normal: {
                                    color: '#8f4c43',
                                    type: 'dotted'
                                }
                            }
                        }
                    }
                ]
            });
            myChart2.setOption({
                xAxis: {
                    type: 'category',
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
                    }
                },
                series: [
                    {
                        data: [10, 11, 12, 15, 18, 18, 28, 20, 23, 20, 10, 18]
                    },
                    {
                        data: [8, 14, 18, 18, 20, 23, 18, 23, 29, 28, 20 ,19],
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
                                        name: '当前时间',
                                        x: '50%',
                                        y: '15%',
                                        symbol: 'none'
                                    },
                                    {
                                        x: '50%',
                                        y: '90%',
                                        symbol: 'none',
                                        label: {
                                            normal: {
                                                color: '#2f3644',
                                                position: 'end'
                                            }
                                        }
                                    }
                                ]
                            ],
                            lineStyle: {
                                normal: {
                                    color: '#8f4c43',
                                    type: 'dotted'
                                }
                            }
                        }
                    }
                ]
            });
            myChart3.setOption({
                xAxis: {
                    type: 'category',
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
                    }
                },
                series: [
                    {
                        data: [10, 11, 12, 15, 18, 18, 28, 20, 23, 20, 10, 18]
                    },
                    {
                        data: [8, 14, 18, 18, 20, 23, 18, 23, 29, 28, 20 ,19],
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
                                        name: '当前时间',
                                        x: '50%',
                                        y: '15%',
                                        symbol: 'none'
                                    },
                                    {
                                        x: '50%',
                                        y: '90%',
                                        symbol: 'none',
                                        label: {
                                            normal: {
                                                color: '#2f3644',
                                                position: 'end'
                                            }
                                        }
                                    }
                                ]
                            ],
                            lineStyle: {
                                normal: {
                                    color: '#8f4c43',
                                    type: 'dotted'
                                }
                            }
                        }
                    }
                ]
            });
            myChart4.setOption({
                xAxis: {
                    type: 'category',
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
                    }
                },
                series: [
                    {
                        data: [10, 11, 12, 15, 18, 18, 28, 20, 23, 20, 10, 18]
                    },
                    {
                        data: [8, 14, 18, 18, 20, 23, 18, 23, 29, 28, 20 ,19],
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
                                        name: '当前时间',
                                        x: '50%',
                                        y: '15%',
                                        symbol: 'none'
                                    },
                                    {
                                        x: '50%',
                                        y: '90%',
                                        symbol: 'none',
                                        label: {
                                            normal: {
                                                color: '#2f3644',
                                                position: 'end'
                                            }
                                        }
                                    }
                                ]
                            ],
                            lineStyle: {
                                normal: {
                                    color: '#8f4c43',
                                    type: 'dotted'
                                }
                            }
                        }
                    }
                ]
            });
            myChart5.setOption({
                xAxis: {
                    type: 'category',
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
                    }
                },
                series: [
                    {
                        data: [10, 11, 12, 15, 18, 18, 28, 20, 23, 20, 10, 18]
                    },
                    {
                        data: [8, 14, 18, 18, 20, 23, 18, 23, 29, 28, 20 ,19],
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
                                        name: '当前时间',
                                        x: '50%',
                                        y: '15%',
                                        symbol: 'none'
                                    },
                                    {
                                        x: '50%',
                                        y: '90%',
                                        symbol: 'none',
                                        label: {
                                            normal: {
                                                color: '#2f3644',
                                                position: 'end'
                                            }
                                        }
                                    }
                                ]
                            ],
                            lineStyle: {
                                normal: {
                                    color: '#8f4c43',
                                    type: 'dotted'
                                }
                            }
                        }
                    }
                ]
            });
            myChart6.setOption({
                xAxis: {
                    type: 'category',
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
                    }
                },
                series: [
                    {
                        data: [10, 11, 12, 15, 18, 18, 28, 20, 23, 20, 10, 18]
                    },
                    {
                        data: [8, 14, 18, 18, 20, 23, 18, 23, 29, 28, 20 ,19],
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
                                        name: '当前时间',
                                        x: '50%',
                                        y: '15%',
                                        symbol: 'none'
                                    },
                                    {
                                        x: '50%',
                                        y: '90%',
                                        symbol: 'none',
                                        label: {
                                            normal: {
                                                color: '#2f3644',
                                                position: 'end'
                                            }
                                        }
                                    }
                                ]
                            ],
                            lineStyle: {
                                normal: {
                                    color: '#8f4c43',
                                    type: 'dotted'
                                }
                            }
                        }
                    }
                ]
            });
            myChart7.setOption({
                xAxis: {
                    type: 'category',
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
                    }
                },
                series: [
                    {
                        data: [10, 11, 12, 15, 18, 18, 28, 20, 23, 20, 10, 18]
                    },
                    {
                        data: [8, 14, 18, 18, 20, 23, 18, 23, 29, 28, 20 ,19],
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
                                        name: '当前时间',
                                        x: '50%',
                                        y: '15%',
                                        symbol: 'none'
                                    },
                                    {
                                        x: '50%',
                                        y: '90%',
                                        symbol: 'none',
                                        label: {
                                            normal: {
                                                color: '#2f3644',
                                                position: 'end'
                                            }
                                        }
                                    }
                                ]
                            ],
                            lineStyle: {
                                normal: {
                                    color: '#8f4c43',
                                    type: 'dotted'
                                }
                            }
                        }
                    }
                ]
            });
            myChart8.setOption({
                xAxis: {
                    type: 'category',
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
                    }
                },
                series: [
                    {
                        data: [10, 11, 12, 15, 18, 18, 28, 20, 23, 20, 10, 18]
                    },
                    {
                        data: [8, 14, 18, 18, 20, 23, 18, 23, 29, 28, 20 ,19],
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
                                        name: '当前时间',
                                        x: '50%',
                                        y: '15%',
                                        symbol: 'none'
                                    },
                                    {
                                        x: '50%',
                                        y: '90%',
                                        symbol: 'none',
                                        label: {
                                            normal: {
                                                color: '#2f3644',
                                                position: 'end'
                                            }
                                        }
                                    }
                                ]
                            ],
                            lineStyle: {
                                normal: {
                                    color: '#8f4c43',
                                    type: 'dotted'
                                }
                            }
                        }
                    }
                ]
            });


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

//        点击收回展开
    $('.main').on('click', '.site-title', function () {
        if($(this).find('.iconfont').hasClass('rotate')) {
            $(this).find('.iconfont').removeClass('rotate');
        } else {
            $(this).find('.iconfont').addClass('rotate');
        }
        $(this).next('.content').slideToggle();
    })
});
var myChart1 = echarts.init(document.getElementById('echart1'));
var myChart2 = echarts.init(document.getElementById('echart2'));
var myChart3 = echarts.init(document.getElementById('echart3'));
var myChart4 = echarts.init(document.getElementById('echart4'));
var myChart5 = echarts.init(document.getElementById('echart5'));
var myChart6 = echarts.init(document.getElementById('echart6'));
var myChart7 = echarts.init(document.getElementById('echart7'));
var myChart8 = echarts.init(document.getElementById('echart8'));
var option1 = {
    backgroundColor: '#071f45',
    title: {
        text: 'COD mg/l',
        left: '12px',
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    legend: {
        data: ['预测数据', '实际数据'],
        icon: 'react',
        right: '10px',
        itemWidth: 20,
        itemHeight: 4,
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    grid: {
        left: '30px',
        right: '36px'
    },
    xAxis: {
        type: 'category',
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
        }
    },
    yAxis: {
        type: 'value',
        splitLine : {
            lineStyle: {
                color: '#272d39'
            }
        },
    },
    series: [
        {
            name: '预测数据',
            type: 'bar',
            barWidth: '8px',
            data:[18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21],
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[50, 50, 0, 0],
                    //                    color: '#4acfae'
                    color: '#a0d468'
                }
            }
        },
        {
            name: '实际数据',
            type: 'line',
            data:[7, 19, 25, 28, 29, 27, 23],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'red'},
                            {offset: 0.5, color: '#57627c'}
//                                    {offset: 1, color: '#57627c'}
                        ]
                    )
                }
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
                            name: '当前时间',
                            x: '50%',
                            y: '15%',
                            symbol: 'none'
                        },
                        {
                            x: '50%',
                            y: '90%',
                            symbol: 'none',
                            label: {
                                normal: {
                                    color: '#2f3644',
                                    position: 'end'
                                }
                            }
                        }
                    ]
                ],
                lineStyle: {
                    normal: {
                        color: '#8f4c43',
                        type: 'dotted'
                    }
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
        text: 'SS mg/l',
        left: '12px',
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    legend: {
        data: ['预测数据', '实际数据'],
        icon: 'react',
        right: '10px',
        itemWidth: 20,
        itemHeight: 4,
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    grid: {
        left: '30px',
        right: '36px'
    },
    xAxis: {
        type: 'category',
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
        }
    },
    yAxis: {
        type: 'value',
        splitLine : {
            lineStyle: {
                color: '#272d39'
            }
        },

    },
    series: [
        {
            name: '预测数据',
            type: 'bar',
            barWidth: '8px',
            data:[18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21],
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[50, 50, 0, 0],
                    //                    color: '#4acfae'
                    color: '#4acfae'
                }
            }
        },
        {
            name: '实际数据',
            type: 'line',
            data:[7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'red'},
                            {offset: 0.5, color: '#57627c'}
//                                    {offset: 1, color: '#57627c'}
                        ]
                    )
                }
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
                            name: '当前时间',
                            x: '50%',
                            y: '15%',
                            symbol: 'none'
                        },
                        {
                            x: '50%',
                            y: '90%',
                            symbol: 'none',
                            label: {
                                normal: {
                                    color: '#2f3644',
                                    position: 'end'
                                }
                            }
                        }
                    ]
                ],
                lineStyle: {
                    normal: {
                        color: '#8f4c43',
                        type: 'dotted'
                    }
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
        text: 'TP mg/l',
        left: '12px',
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    legend: {
        data: ['预测数据', '实际数据'],
        icon: 'react',
        right: '10px',
        itemWidth: 20,
        itemHeight: 4,
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    grid: {
        left: '30px',
        right: '36px'
    },
    xAxis: {
        type: 'category',
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
        }
    },
    yAxis: {
        type: 'value',
        splitLine : {
            lineStyle: {
                color: '#272d39'
            }
        },

    },
    series: [
        {
            name: '预测数据',
            type: 'bar',
            barWidth: '8px',
            data:[18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21],
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[50, 50, 0, 0],
                    //                    color: '#4acfae'
                    color: '#5d9cec'
                }
            }
        },
        {
            name: '实际数据',
            type: 'line',
            data:[7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'red'},
                            {offset: 0.5, color: '#57627c'}
//                                    {offset: 1, color: '#57627c'}
                        ]
                    )
                }
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
                            name: '当前时间',
                            x: '50%',
                            y: '15%',
                            symbol: 'none'
                        },
                        {
                            x: '50%',
                            y: '90%',
                            symbol: 'none',
                            label: {
                                normal: {
                                    color: '#2f3644',
                                    position: 'end'
                                }
                            }
                        }
                    ]
                ],
                lineStyle: {
                    normal: {
                        color: '#8f4c43',
                        type: 'dotted'
                    }
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
        text: ' TN mg/l',
        left: '12px',
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    legend: {
        data: ['预测数据', '实际数据'],
        icon: 'react',
        right: '10px',
        itemWidth: 20,
        itemHeight: 4,
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    grid: {
        left: '30px',
        right: '36px'
    },
    xAxis: {
        type: 'category',
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
        }
    },
    yAxis: {
        type: 'value',
        splitLine : {
            lineStyle: {
                color: '#272d39'
            }
        },

    },
    series: [
        {
            name: '预测数据',
            type: 'bar',
            barWidth: '8px',
            data:[18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21],
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[50, 50, 0, 0],
                    //                    color: '#4acfae'
                    color: '#ac92ed'
                }
            }
        },
        {
            name: '实际数据',
            type: 'line',
            data:[7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'red'},
                            {offset: 0.5, color: '#57627c'}
//                                    {offset: 1, color: '#57627c'}
                        ]
                    )
                }
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
                            name: '当前时间',
                            x: '50%',
                            y: '15%',
                            symbol: 'none'
                        },
                        {
                            x: '50%',
                            y: '90%',
                            symbol: 'none',
                            label: {
                                normal: {
                                    color: '#2f3644',
                                    position: 'end'
                                }
                            }
                        }
                    ]
                ],
                lineStyle: {
                    normal: {
                        color: '#8f4c43',
                        type: 'dotted'
                    }
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart4.setOption(option4);

var option5 = {
    backgroundColor: '#071f45',
    title: {
        text: 'COD mg/l',
        left: '12px',
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    legend: {
        data: ['预测数据', '实际数据'],
        icon: 'react',
        right: '10px',
        itemWidth: 20,
        itemHeight: 4,
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    grid: {
        left: '30px',
        right: '36px'
    },
    xAxis: {
        type: 'category',
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
        }
    },
    yAxis: {
        type: 'value',
        splitLine : {
            lineStyle: {
                color: '#272d39'
            }
        },
    },
    series: [
        {
            name: '预测数据',
            type: 'bar',
            barWidth: '8px',
            data:[18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21],
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[50, 50, 0, 0],
                    //                    color: '#4acfae'
                    color: '#a0d468'
                }
            }
        },
        {
            name: '实际数据',
            type: 'line',
            data:[7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'red'},
                            {offset: 0.5, color: '#57627c'}
//                                    {offset: 1, color: '#57627c'}
                        ]
                    )
                }
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
                            name: '当前时间',
                            x: '50%',
                            y: '15%',
                            symbol: 'none'
                        },
                        {
                            x: '50%',
                            y: '90%',
                            symbol: 'none',
                            label: {
                                normal: {
                                    color: '#2f3644',
                                    position: 'end'
                                }
                            }
                        }
                    ]
                ],
                lineStyle: {
                    normal: {
                        color: '#8f4c43',
                        type: 'dotted'
                    }
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart5.setOption(option5);
var option6 = {
    backgroundColor: '#071f45',
    title: {
        text: 'SS mg/l',
        left: '12px',
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    legend: {
        data: ['预测数据', '实际数据'],
        icon: 'react',
        right: '10px',
        itemWidth: 20,
        itemHeight: 4,
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    grid: {
        left: '30px',
        right: '36px'
    },
    xAxis: {
        type: 'category',
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
        }
    },
    yAxis: {
        type: 'value',
        splitLine : {
            lineStyle: {
                color: '#272d39'
            }
        },

    },
    series: [
        {
            name: '预测数据',
            type: 'bar',
            barWidth: '8px',
            data:[18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21],
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[50, 50, 0, 0],
                    //                    color: '#4acfae'
                    color: '#4acfae'
                }
            }
        },
        {
            name: '实际数据',
            type: 'line',
            data:[7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'red'},
                            {offset: 0.5, color: '#57627c'}
//                                    {offset: 1, color: '#57627c'}
                        ]
                    )
                }
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
                            name: '当前时间',
                            x: '50%',
                            y: '15%',
                            symbol: 'none'
                        },
                        {
                            x: '50%',
                            y: '90%',
                            symbol: 'none',
                            label: {
                                normal: {
                                    color: '#2f3644',
                                    position: 'end'
                                }
                            }
                        }
                    ]
                ],
                lineStyle: {
                    normal: {
                        color: '#8f4c43',
                        type: 'dotted'
                    }
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart6.setOption(option6);
var option7 = {
    backgroundColor: '#071f45',
    title: {
        text: 'TP mg/l',
        left: '12px',
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    legend: {
        data: ['预测数据', '实际数据'],
        icon: 'react',
        right: '10px',
        itemWidth: 20,
        itemHeight: 4,
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    grid: {
        left: '30px',
        right: '36px'
    },
    xAxis: {
        type: 'category',
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
        }
    },
    yAxis: {
        type: 'value',
        splitLine : {
            lineStyle: {
                color: '#272d39'
            }
        },

    },
    series: [
        {
            name: '预测数据',
            type: 'bar',
            barWidth: '8px',
            data:[18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21],
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[50, 50, 0, 0],
                    //                    color: '#4acfae'
                    color: '#5d9cec'
                }
            }
        },
        {
            name: '实际数据',
            type: 'line',
            data:[7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'red'},
                            {offset: 0.5, color: '#57627c'}
//                                    {offset: 1, color: '#57627c'}
                        ]
                    )
                }
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
                            name: '当前时间',
                            x: '50%',
                            y: '15%',
                            symbol: 'none'
                        },
                        {
                            x: '50%',
                            y: '90%',
                            symbol: 'none',
                            label: {
                                normal: {
                                    color: '#2f3644',
                                    position: 'end'
                                }
                            }
                        }
                    ]
                ],
                lineStyle: {
                    normal: {
                        color: '#8f4c43',
                        type: 'dotted'
                    }
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart7.setOption(option7);
var option8 = {
    backgroundColor: '#071f45',
    title: {
        text: ' TN mg/l',
        left: '12px',
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    legend: {
        data: ['预测数据', '实际数据'],
        icon: 'react',
        right: '10px',
        itemWidth: 20,
        itemHeight: 4,
        textStyle: {
            fontSize: '20px',
            color: '#fff'
        }
    },
    grid: {
        left: '30px',
        right: '36px'
    },
    xAxis: {
        type: 'category',
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
        }
    },
    yAxis: {
        type: 'value',
        splitLine : {
            lineStyle: {
                color: '#272d39'
            }
        },

    },
    series: [
        {
            name: '预测数据',
            type: 'bar',
            barWidth: '8px',
            data:[18, 19, 24, 23, 16, 28, 26, 27, 18, 22, 15, 21],
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[50, 50, 0, 0],
                    //                    color: '#4acfae'
                    color: '#ac92ed'
                }
            }
        },
        {
            name: '实际数据',
            type: 'line',
            data:[7, 19, 25, 28, 29, 27, 24, 23, 20, 19, 18 ,17],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'red'},
                            {offset: 0.5, color: '#57627c'}
//                                    {offset: 1, color: '#57627c'}
                        ]
                    )
                }
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
                            name: '当前时间',
                            x: '50%',
                            y: '15%',
                            symbol: 'none'
                        },
                        {
                            x: '50%',
                            y: '90%',
                            symbol: 'none',
                            label: {
                                normal: {
                                    color: '#2f3644',
                                    position: 'end'
                                }
                            }
                        }
                    ]
                ],
                lineStyle: {
                    normal: {
                        color: '#8f4c43',
                        type: 'dotted'
                    }
                }
            }
        }
    ],
    textStyle: {
        color: '#999'
    }
};
myChart8.setOption(option8);
