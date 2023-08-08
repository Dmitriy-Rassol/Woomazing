<script setup>
import AppTitlePage from '@/components/AppTitlePage.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import IconCheck from '@/components/icons/IconCheck.vue';
import AppButton from '@/components/AppButton.vue';

</script>

<template>
  <div class="received">
    <div class="received-wrapper">
      <AppTitlePage :title="'Заказ получен'" />
      <Breadcrumbs :section="'Оформление заказа'" :path="'order'" :title="'Заказ получен'" />
      <div class="received-content">
        <div class="received-check">
          <IconCheck />
          <div class="received-text">
            <h4>Заказ успешно оформлен</h4>
            <p>Мы свяжемся с вами в ближайшее время!</p>
          </div>
        </div>
        <AppButton :title="'Перейти на главную'" @path="$router.push('/')" />
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.received {
  &-wrapper {
    padding: 130px 0;
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-check {
    display: flex;
    align-items: center;
    gap: 32px;

  }

  &-text {
    & h4 {
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0.5px;
      padding-bottom: 17px;
    }

    & p {
      font-size: 17px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0.34px;
    }
  }
}
</style>