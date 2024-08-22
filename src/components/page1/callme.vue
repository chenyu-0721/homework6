<template>
  <section class="callme">
    <div class="container flex border-bottom pb-5">
      <h5>想看什麼主題由你決定！</h5>
      <div class="d-flex flex-column">
        <h6>歡迎投稿與我們分享</h6>
        <button class="btn btnGreen">聯絡我們</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.callme {
  margin: 120px 0px 40px 0px;
}

.callme h5 {
  color: #343a40;
  font-family: Noto Serif TC;
  font-size: 32px;
  font-weight: 900;
  line-height: 38.4px;
  letter-spacing: 0.1em;
  text-align: left;
}

.callme h6 {
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 700;
  line-height: 28.8px;
  letter-spacing: 0.1em;
  text-align: right;
  color: #343a40;
}

.callme .btnGreen {
  background: #569573;
  width: 150px;
  height: 56px;
  padding: 16px 24px 16px 24px;
  border-radius: 100px;
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0.1em;
  color: #ffffff;
}

.callme .flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .callme .flex {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
