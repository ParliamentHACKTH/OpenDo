<template>
    <main class="container my-3" data-aos="fade-up">

        <MinistryInfo />

        <TimeframeBoxes />

        <MinistryStats />

        <MinistryPortfolio />
        
    </main>

    <!-- Modal -->
    <MinistryPortfolioModal />

</template>

<script>
// Components
import MinistryInfo from "./components/MinistryInfo.vue";
import TimeframeBoxes from "@/components/TimeframeBoxes.vue";
import MinistryStats from "./components/MinistryStats.vue";
import MinistryPortfolio from "./components/MinistryPortfolio.vue";

// Modal
import MinistryPortfolioModal from "./modal/MinistryPortfolioModal.vue";

export default {
  components: {
    // Components
    MinistryInfo,
    TimeframeBoxes,
    MinistryStats,
    MinistryPortfolio,
    // Modal
    MinistryPortfolioModal
  }
}
</script>