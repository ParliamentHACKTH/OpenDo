<!-- Modal -->
<template>
    <div class="modal fade" id="ministryPortfolioModal" tabindex="-1" aria-labelledby="ministryPortfolioModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="m-auto">
                        <p class="modal-title">รายชื่อโครงการ</p>
                    </div>
                    <img class="modal-btn-closed" src="@/assets/images/icon_close.png" data-dismiss="modal" aria-label="Close" width="40" height="40" data-bs-dismiss="modal">
                </div>
                <div class="modal-body overflow-auto" style="max-height: calc(70vh);">
                    <div class="mx-2 mb-3">
                        <p class="fs-6">จำนวนทั้งหมด 14 โครงการ</p>
                        <p class="text-normal-grey">มูลค่า 96,605 ล้านบาท</p>
                    </div>
                    <div class="portfolio-item" v-for="i,index in item" :key="index" data-dismiss="modal" aria-label="Close" data-bs-dismiss="modal">
                        <div class="row">
                            <div class="col-12 ">
                                <div class="d-flex algin-items-center justify-content-between">
                                    <p>#{{ index+1 }}</p>
                                    <p class="bg-success rounded-pill px-2 text-white">{{ i.status }}</p>
                                </div>
                                    <p class="text-primary fs-6">{{ i.name }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 d-flex aling-items-center justify-content-between">
                                <p class="text-normal-grey">สัดส่วนของหน่วยงาน</p>
                                <p>{{ $filters.formatNumber(i.percent, 2) }} %</p>
                            </div>
                            <div class="col-12 d-flex aling-items-center justify-content-between">
                                <p class="text-normal-grey">มูลค่างบประมาณ</p>
                                <p>฿ {{ $filters.formatNumber(i.value, 2) }} M</p>
                            </div>
                            <div class="col-12 d-flex aling-items-center justify-content-between">
                                <p class="text-normal-grey">วันอนุมัติโครงการ</p>
                                <p>{{ i.date }}</p>
                            </div>
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
                { name: 'ผลผลิต : รายการค่าใช้จ่ายบุคลากรภาครัฐ เสริมสร้างศักยภาพการป้องกันประเทศ', value: 59453, percent: 61.54, date: '24 มิ.ย.2024', status: 'Active' },
                { name: 'โครงการ : โครงการพัฒนาขีดความสามารถของกองทัพ', value: 19163, percent: 19.83, date: '24 มิ.ย.2024', status: 'Active' },
                { name: 'ผลผลิต : การดำรงสภาพความพร้อมในการป้องกันประเทศ', value: 13333, percent: 13.80, date: '24 มิ.ย.2024', status: 'Active' },
                { name: 'โครงการ : โครงการสนับสนุนการป้องกันและแก้ไขปัญหาที่มีผลกระทบต่อความมั่นคง', value: 3304, percent: 3.42, date: '24 มิ.ย.2024', status: 'Active' },
                { name: 'โครงการ : โครงการรักษาความปลอดภัยในชีวิตและทรัพย์สินของประชาชน เป้ำหมายการให้บริการกระทรวง - หน่วยงาน - ผลผลิต/โครงการ', value: 326,  percent: 0.34, date: '24 มิ.ย.2024', status: 'Active' },
                { name: 'โครงการ : โครงการพิทักษ์รักษา การเทิดทูน และการสนับสนุนภารกิจ ของสถาบันพระมหากษัตริย์', value: 287,  percent: 0.30, date: '24 มิ.ย.2024', status: 'Active' },
                { name: 'ผลผลิต : การสนับสนุนการดำเนินงานด้านความมั่นคงในต่างประเทศ', value: 210, percent: 0.22, date: '24 มิ.ย.2024', status: 'Active' },
                { name: 'โครงการ : โครงการเพิ่มประสิทธิภาพงานข่าวกรอง', value: 197,  percent: 0.20, date: '24 มิ.ย.2024', status: 'Active' },
                { name: 'โครงการ : โครงการปราบปรามยาเสพติด', value: 168,  percent: 0.17, date: '24 มิ.ย.2024', status: 'Active' },
                { name: 'โครงการ : โครงการพัฒนาศักยภาพด้านการพัฒนาประเทศและการช่วยเหลือประชาชน', value: 134,  percent: 0.14, date: '24 มิ.ย.2024', status: 'Active' },
                { name: 'โครงการ : โครงการพัฒนาเสริมสร้างความสัมพันธ์และความร่วมมือทางทหาร', value: 17, percent: 0.02, date: '24 มิ.ย.2024', status: 'active' },
                { name: 'โครงการ : โครงการพัฒนาสังคมพหุวัฒนธรรมที่เข้มแข็งและเสริมสร้างการมีส่วนร่วม ของทุกภาคส่วน', value: 6, percent: 0.01, date: '24 มิ.ย.2024', status: 'Active' },
                { name: 'โครงการ : โครงการป้องกันยาเสพติด', value: 5, percent: 0.00, date: '24 มิ.ย.2024', status: 'Active' },
                { name: 'โครงการ : โครงการ บำบัด รักษา ผู้ติดยาเสพติด', value: 2, percent: 0.00, date: '24 มิ.ย.2024', status: 'Active' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 575px) {
    p {
        font-size: 12px;
    }
}
</style>