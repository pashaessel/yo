<template>
  <main>
    <CampaignsFormCreate></CampaignsFormCreate>
  </main>
</template>
<script setup>
import CampaignsFormCreate from "@/components/CampaignsFormCreate";
</script>
<style lang="scss">
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6rem);
  background-image: url("@/assets/images/campaings/bg.jpg");
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>