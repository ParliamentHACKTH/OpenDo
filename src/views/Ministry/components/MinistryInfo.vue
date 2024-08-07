<template>
    <div class="box bg-black text-white">
        <div class="headbar">
            <p>หน่วยงานในสังกัด</p>
        </div>
        <div class="box-content">
            <div class="row">
                <div class="col-auto">
                    <img class="rounded-circle" src="/src/assets/images.png" height="80">
                </div>
                <div class="col align-content-center">
                    <div class="fs-3">
                        <p>กองทัพบก</p>
                    </div>
                </div>
                <div class="col-12" v-if="chartOptions">
                    <charts ref="chart" :options="chartOptions" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
    data() {
        return {
            chartOptions: null
        }
    },
    mounted () {
        this.drawChart();
    },
    methods: {
        drawChart() {
            let date = [
                'Q1/2022', 'Q2/2022', 'Q3/2022', 'Q4/2022',
                'Q1/2023', 'Q2/2023', 'Q3/2023', 'Q4/2023',
                'Q1/2024', 'Q2/2024', 'Q3/2024', 'Q4/2024',
                'Q1/2025', 'Q2/2025', 'Q3/2025', 'Q4/2025'
            ];
            let mktVal = [
                28364231375, 28364231375, 28364231375, 28364231375,
                29994644175, 29994644175, 29994644175, 29994644175,
                26871163575, 26871163575, 26871163575, 26871163575,
                32201666666.67, 32201666666.67, 32201666666.67, 32201666666.67
            ];

            let maxIndex = mktVal.indexOf(Math.max(...mktVal));
            let minIndex = mktVal.indexOf(Math.min(...mktVal));

            this.chartOptions = {
                chart: {
                    height: 300
                },
                title: {
                    enabled: false
                },
                legend: {
                    enabled: false,
                },
                xAxis: {
                    visible: false,
                    crosshair: {
                        width: 1,
                        color: '#FFFFFF',
                        dashStyle: 'dash'
                    },
                    categories: date
                },
                yAxis: [{
                    title: {
                        enabled: false
                    },
                    labels: {
                        enabled: false
                    },
                    gridLineWidth: 0
                }],
                tooltip: {
                    style: {
                        color: '#FFFFFF',
                        fontSize: '12px',

                    },
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    shadow: false,
                    formatter: function () {
                        let formatY = this.y.toFixed(2);
                        formatY = Highcharts.numberFormat(formatY);
                        return " " + this.x + "<br>" + formatY;
                    }
                },
                plotOptions: {
                    spline: {
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    name: 'Market Value',
                    color: '#FFFFFF',
                    type: 'spline',
                    data: mktVal.map((value, index) => {
                        return {
                            y: value,
                            marker: {
                                enabled: index === maxIndex || index === minIndex,
                                radius: 3,
                                fillColor: 'white'
                            },
                            dataLabels: {
                                enabled: index === maxIndex || index === minIndex,
                                formatter: function() {
                                    let formatY = this.y.toFixed(2);
                                    formatY = Highcharts.numberFormat(formatY);
                                    return formatY;
                                },
                                verticalAlign: index === minIndex ? 'top' : index === maxIndex ? 'bottom' : null,
                                style: {
                                    fontSize: '14px',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }
                            }
                        };
                    })
                }]
            }
        }
    }
}
</script>