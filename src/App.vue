<script setup lang="ts">

</script>

<template>
  <div class="overlay">
    <main class="calculator">
      lkasjdlfk
      <DisplayArea />
      <KeyboardArea />
    </main>
  </div>
</template>

<style scoped>
.overlay {
  background: var(--white);
  opacity: 0.2;
  backdrop-filter: blur(2px);
  border-radius: 18px;
  padding: 38px 31px;
}

.calculator {
  background: var(--main-background);
  padding: 45px;
  border-radius: 18px;
  box-shadow: 0px 82px 158px rgba(0, 0, 0, 0.35), 0px 24.7206px 47.6324px rgba(0, 0, 0, 0.228056), 0px 10.2677px 19.7841px rgba(0, 0, 0, 0.175), 0px 3.71362px 7.1555px rgba(0, 0, 0, 0.121944);
  z-index: 1000;
}

@media (min-width: 1024px) {

}
</style>
