<template>
    <button
        :class="['button', inverted && 'inverted']"
        @click="$emit('button:clicked', symbol)"
    >
        {{ symbol }}
    </button>
</template>
  
<script setup lang="ts">
import type { Symbols } from '../types'

export interface ButtonProps {
    symbol: Symbols,
    inverted?: boolean,
}

defineProps<ButtonProps>()
</script>
  
<style scoped>
.button {
    color: var(--white);
    background: transparent;
    border: 0;
    border-radius: 40px;
    font-size: 36px;
    width: 80px;
    margin: 0 10px;
    cursor: pointer;
}

.button:hover {
    background: rgba(255, 255, 255, .12);
}

.inverted {
    color: #2B589A;
    background: var(--white);
}
</style>