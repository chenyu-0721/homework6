<template>
  <section class="firstImg">
    <div class="container bgImg">
      <h4>獻給新世代的生活風格誌</h4>
      <h1>一起探索生活的無限可能</h1>
      <button class="d-flex justify-content-center align-items-center subBtn">
        馬上訂閱<span class="material-symbols-outlined"> arrow_forward </span>
      </button>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.firstImg {
  padding: 80px 0px;
}

@media (max-width: 768px) {
  .firstImg {
    padding: 48px 0px;
  }
}

.firstImg .bgImg {
  background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/banner.png?raw=true');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 621px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 61px;
}

@media (max-width: 500px) {
  .firstImg .bgImg {
    background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/banner-sm.png?raw=true');
    justify-content: end;
    align-items: center;
    padding-bottom: 20px;
    padding-left: 0px;
  }
}

.firstImg h4 {
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0.1em;
  color: #ffffff;
}

@media (max-width: 768px) {
  .firstImg h4 {
    font-size: 20px;
  }
}

@media (max-width: 500px) {
  .firstImg h4 {
    font-size: 16px;
  }
}

.firstImg h1 {
  font-family: Noto Serif TC;
  font-size: 40px;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: 0.1em;
  color: #ffffff;
}

@media (max-width: 768px) {
  .firstImg h1 {
    font-size: 36px;
  }
}

@media (max-width: 500px) {
  .firstImg h1 {
    font-size: 32px;
  }
}

@media (max-width: 375px) {
  .firstImg h1 {
    font-size: 28px;
  }
}

.firstImg .subBtn {
  /* button */
  width: 170px;
  height: 56px;
  padding: 16px 24px;
  border-radius: 100px;
  border: 1px #569573 solid;
  background: #569573;
  /* font */
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0.1em;
  color: #ffffff;
}

@media (max-width: 768px) {
  .firstImg .subBtn {
    /* button */
    width: 160px;
    height: 52px;
    padding: 12px 20px;
    /* font */
    font-size: 17px;
  }
}

@media (max-width: 500px) {
  .firstImg .subBtn {
    /* button */
    width: 150px;
    height: 48px;
    padding: 12px 20px;
    /* font */
    font-size: 16px;
  }
}

@media (max-width: 375px) {
  .firstImg .subBtn {
    /* button */
    width: 141px;
    height: 44px;
    padding: 12px 20px;
    /* font */
    font-size: 16px;
  }
}
</style>
