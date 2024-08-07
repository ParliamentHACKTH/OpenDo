<template>
    <div class="box">
        <div class="headbar d-flex align-items-center justify-content-between">
            <div>
                <p>รายชื่อโครงการ</p>
            </div>
            <p v-if="item" class="pointer" data-bs-toggle="modal" data-bs-target="#ministryPortfolioModal">เพิ่มเติม</p>
        </div>
        <div class="box-content">
            <div class="row">
                <!-- Chart -->
                <div class="col-12 col-md-6">
                    <div class="position-relative" v-if="chartOptions">
                        <charts class="align-self-center" :options="chartOptions" ref="chart" />
                    </div>
                </div>
                <div class="col-12 col-md-6 align-self-center">
                    <div class="row" v-for="i,index in chartData" :key="index">
                        <div class="col-2 col-sm-1 box-color" :style="{ backgroundColor: i.color }"></div>
                        <div class="col-10 col-sm-11">
                            <p>{{ i.name }}</p>
                            <p>{{ $filters.formatNumber(i.y, 2) }} %</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: [
                    { color: "#CD5C5C", name: "ผลผลิต : รายการค่าใช้จ่ายบุคลากรภาครัฐ เสริมสร้างศักยภาพการป้องกันประเทศ", y: 61.5424 },
                    { color: "#F08080", name: "โครงการ : โครงการพัฒนาขีดความสามารถของกองทัพ", y: 19.8364 },
                    { color: "#FA8072", name: "ผลผลิต : การดำรงสภาพความพร้อมในการป้องกันประเทศ", y: 13.8016 },
                    { color: "#FFA07A", name: "โครงการ : โครงการสนับสนุนการป้องกันและแก้ไขปัญหาที่มีผลกระทบต่อความมั่นคง", y: 3.4201 },
                    { color: "#F2F2F2", name: "อื่นๆ", y: 1.3995 }
                ],
            chartData: []
        }
    },
    created () {
        this.drawChart();
    },
    methods: {
        drawChart() {
            this.chartData = this.item;

            this.chartOptions = {
                chart: {
                    height: 280,
                    type: 'pie'
                },
                title: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: false,
                        cursor: false,
                        enableMouseTracking: false,
                        borderWidth: 0,
                        borderRadius: 0,
                        size: 150,
                        innerSize: '60%',
                        dataLabels: {
                            enabled: false
                        },
                    }
                },
                series: [{
                    name: null,
                    data: this.chartData
                }],
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.box-color {
    height: 10px;
    width: auto;
    border-radius: 2px;
    margin-top: 5px;
}
</style>