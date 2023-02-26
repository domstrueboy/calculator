<template>
    <div class="keyboard-area">
        <slot />
    </div>
</template>
  
<style scoped>
.keyboard-area {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(5, 80px);
    column-gap: 20px;
    row-gap: 16px;
    width: var(--common-inner-width);
    margin-top: 36px;
}
</style>