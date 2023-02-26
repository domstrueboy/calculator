<template>
    <div class="display-area">
        <div class="expression text-area-mixin">{{ expression }}</div>
        <div class="result text-area-mixin">{{ result }}</div>
    </div>
</template>
  
<script setup lang="ts">
export interface DisplayProps {
    expression?: string,
    result?: string,
}

withDefaults(defineProps<DisplayProps>(), {
    expression: '',
    result: '',
})
</script>
  
<style scoped>
.display-area {
    display: flex;
    flex-direction: column;
    width: var(--common-inner-width);
    gap: 28px;
}

.text-area-mixin {
    display: flex;
    justify-content: end;
    align-content: end;
    flex-wrap: wrap;
    word-break: break-all;
    text-align: end;
}
.expression {
    font-size: 24px;
    line-height: 32px;
    min-height: 118px;
}

.result {
    font-weight: 700;
    font-size: 56px;
    line-height: 80px;
    min-height: 80px;
}

.result::after {
    content: '';
    width: 100%;
    margin-top: 18px;
    border-bottom: 2px solid var(--white);
    opacity: .35;
}
</style>