<template>
    <div v-if="item" class="row row-cols-5 g-3 mb-3">
        <div v-for="i,index in item" :key="index" class="col">
            <div class="timeframe-box text-white bg-primary">
                <p>
                    <span v-if="i.percent_change">{{ $filters.formatNumberWithMark(i.percent_change, 0) }}</span>
                    <span v-else>N/A</span>
                </p>
                <p>{{ i.period }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            // item: null
            item: [
                { period: 'ปี 2564', percent_change: null },
                { period: 'ปี 2565', percent_change: null },
                { period: 'ปี 2566', percent_change: 96605260400.00 },
                { period: 'ปี 2567', percent_change: 95924624700.00 },
                { period: 'ปี 2568', percent_change: 96573434700.00 }
            ]
        }
    },
    // watch: {
    //     data: {
    //         deep: true,
    //         handler(newValue, oldValue) {
    //             if (newValue !== oldValue) {
    //                 this.item = newValue;
    //             }
    //         }
    //     }
    // }
}
</script>