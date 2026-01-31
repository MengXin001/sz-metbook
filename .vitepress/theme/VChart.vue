<template>
    <div ref="chartRef" class="vchart-container" :style="{ width: '100%', height: height || '400px' }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useData } from 'vitepress'
import VChart from '@visactor/vchart'

const { isDark } = useData()

const props = defineProps({
    spec: {
        type: Object,
        required: true
    },
    height: {
        type: String,
        default: '400px'
    }
})

const chartRef = ref(null)
let chartInstance = null

const renderChart = () => {
    if (chartInstance) {
        chartInstance.release()
        chartInstance = null
    }

    if (chartRef.value && props.spec) {
        chartInstance = new VChart(props.spec, { dom: chartRef.value })
        chartInstance.renderAsync()
    }
}


watch(
    () => props.spec,
    () => renderChart(),
    { deep: true }
)

watch(isDark, () => {
    VChart.ThemeManager.setCurrentTheme(isDark.value ? 'dark' : 'light');
})

onMounted(() => {
    renderChart()
    VChart.ThemeManager.setCurrentTheme(isDark.value ? 'dark' : 'light');
})

onUnmounted(() => {
    if (chartInstance) {
        chartInstance.release()
    }
})
</script>

<style scoped>
.vchart-container {
    margin: 1rem 0;
    display: flex;
    justify-content: center
}
</style>