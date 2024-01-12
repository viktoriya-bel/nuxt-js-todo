<template>
   <div class="bottom-block">
      <BaseButtonComponent text="Загрузить ещё" :isBlock="true" classString="ma-2" colorString="deep-purple-accent-4" @clickBtn="$emit('clickMore')">
      </BaseButtonComponent>
   </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
   .bottom-block{
      max-width: 300px;
      margin: auto;
      padding-bottom: 100px;
   }
</style>
