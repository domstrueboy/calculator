<script setup lang="ts">
import type { Symbols } from './types'
import DisplayArea from './components/DisplayArea.vue'
import KeyboardArea from './components/KeyboardArea.vue'
import CalcButton from './components/CalcButton.vue'

const symbols: Symbols[] = ['√', '%', '/', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', ','];
</script>

<template>
  <main class="calculator">

    <DisplayArea
      :expression="'20x80x0,5'"
      :result="'800'"
    />

    <KeyboardArea>
      <CalcButton symbol="C" />

      <CalcButton
        v-for="symbol in symbols"
        :key="symbol"
        :symbol="symbol"
      />

      <CalcButton symbol="=" inverted />
    </KeyboardArea>

  </main>
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
  padding: 46px;
  padding-top: 16px;
  border-radius: 18px;
  box-shadow: 0px 82px 158px rgba(0, 0, 0, 0.35), 0px 24.7206px 47.6324px rgba(0, 0, 0, 0.228056), 0px 10.2677px 19.7841px rgba(0, 0, 0, 0.175), 0px 3.71362px 7.1555px rgba(0, 0, 0, 0.121944);
}

.calculator::before {
  content: '';
  position: absolute;
  top: -38px;
  bottom: -38px;
  left: -31px;
  right: -31px;
  background: var(--white);
  opacity: 0.2;
  backdrop-filter: blur(2px);
  border-radius: 18px;
  z-index: -1;
}

@media (min-width: 1024px) {

}
</style>
