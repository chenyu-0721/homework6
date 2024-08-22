<template>
  <section class="subLine border-bottom pb-5">
    <div class="container">
      <h6>首頁/<span>訂閱方案</span></h6>
      <h2>訂閱方案</h2>
      <div class="text-center mt-60 mb-40">
        <button class="btn btnGreen text-center">年繳</button>
        <button class="btn btnWhite text-center">月繳</button>
      </div>

      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="mt-5">
              <h4 class="my-0 fw-normal">輕量型</h4>
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <h1 class="card-title pricing-card-title">
                NT 99<small class="text-muted fw-light"> / 月</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li class="custom-checkbox">
                  <input type="checkbox" id="item1" checked />
                  <label for="item1">每月最新文章無限閱讀</label>
                </li>
                <li class="custom-checkbox">
                  <input type="checkbox" id="item2" checked />
                  <label for="item2">專屬會員限定內容</label>
                </li>
                <li class="custom-checkbox">
                  <input type="checkbox" id="item4" checked />
                  <label for="item4">定期電子報</label>
                </li>
              </ul>

              <button
                type="button"
                class="w-100 btn btn-lg btnGray d-flex align-items-center justify-content-center"
              >
                我要訂閱<span class="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="mt-5">
              <h4 class="my-0 fw-normal">玩咖型</h4>
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <h1 class="card-title pricing-card-title">
                NT 159<small class="text-muted fw-light"> / 月</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li class="custom-checkbox">
                  <input type="checkbox" id="item1" checked />
                  <label for="item1">每月最新文章無限閱讀</label>
                </li>
                <li class="custom-checkbox">
                  <input type="checkbox" id="item2" checked />
                  <label for="item2">專屬會員限定內容</label>
                </li>
                <li class="custom-checkbox">
                  <input type="checkbox" id="item3" checked />
                  <label for="item3">定期電子報</label>
                </li>
                <li class="custom-checkbox">
                  <input type="checkbox" id="item4" checked />
                  <label for="item4">年度精選禮物 </label>
                </li>
              </ul>

              <button
                type="button"
                class="w-100 btn btn-lg btnGray d-flex align-items-center justify-content-center"
              >
                我要訂閱<span class="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="mt-5">
              <h4 class="my-0 fw-normal">輕量型</h4>
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <h1 class="card-title pricing-card-title text-success">
                NT 599<small class="text-muted fw-light"> / 月</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li class="custom-checkbox">
                  <input type="checkbox" id="item1" checked />
                  <label for="item1" class="text-dark"
                    >每月最新文章無限閱讀</label
                  >
                </li>
                <li class="custom-checkbox">
                  <input type="checkbox" id="item2" checked />
                  <label for="item2" class="text-dark">專屬會員限定內容</label>
                </li>
                <li class="custom-checkbox">
                  <input type="checkbox" id="item3" checked />
                  <label for="item3" class="text-dark">定期電子報</label>
                </li>
                <li class="custom-checkbox">
                  <input type="checkbox" id="item4" checked />
                  <label for="item4" class="text-dark">年度精選禮物</label>
                </li>
                <li class="custom-checkbox">
                  <input type="checkbox" id="item4" checked />
                  <label for="item4" class="text-dark">24/7 優先客戶服務</label>
                </li>
                <li class="custom-checkbox">
                  <input type="checkbox" id="item4" checked />
                  <label for="item4" class="text-dark"
                    >為每個成員量身打造專屬行程</label
                  >
                </li>
                <li class="custom-checkbox">
                  <input type="checkbox" id="item4" checked />
                  <label for="item4" class="text-dark"
                    >最多 5 個家庭成員共享</label
                  >
                </li>
              </ul>

              <button
                type="button"
                class="w-100 btn btn-lg subBtnGreen d-flex align-items-center justify-content-center"
              >
                我要訂閱<span class="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.subLine {
  margin-top: 100px;
}

.subLine h6 {
  font-family: Noto Serif TC;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #6c757d;
}

.subLine h2 {
  font-family: Noto Serif TC;
  font-size: 40px;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: 0.1em;
  text-align: left;
  color: #343a40;
  margin-top: 20px;
}

.subLine .btnGreen {
  width: 196px;
  height: 44px;
  padding: 12px 20px 12px 20px;
  background: #569573;
  font-family: Noto Serif TC;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  letter-spacing: 0.1em;
  color: #ffffff;
}

.subLine .btnWhite {
  font-family: Noto Serif TC;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  letter-spacing: 0.1em;
  color: #6c757d;
  width: 196px;
  height: 44px;
  padding: 12px 20px 12px 20px;
  gap: 10px;
  opacity: 0px;
}

.mt-60 {
  margin-top: 60px;
}

.mb-40 {
  margin-bottom: 40px;
}

.subLine .textDark {
  color: #343a40;
}

.subLine h4 {
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0.1em;
  color: #6c757d;
}

.subLine h1 {
  font-family: Gurmukhi MN;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0.1em;
  color: #6c757d;
}

.subLine small {
  font-family: Noto Serif TC;
  font-size: 24px;
  font-weight: 900;
  line-height: 28.8px;
  letter-spacing: 0.1em;
  text-align: left;
  color: #6c757d;
}

.subLine input {
  color: #6c757d !important;
}

.subLine ul {
}

.subLine li {
  color: #6c757d;
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-align: left;
  margin-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
}

.subLine .card {
  height: 696px;
  padding: 10px 0px 0px 0px;
  border-radius: 12px 0px 0px 0px;
  border: 1px 0px 0px 0px;
}

.custom-checkbox {
  display: flex;
  align-items: center;
}

.custom-checkbox input[type='checkbox'] {
  opacity: 0;
  position: absolute;
}

.custom-checkbox label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.custom-checkbox label::before {
  content: '';
  position: absolute;
  left: 0;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition:
    background-color 0.3s,
    border-color 0.3s;
}

.custom-checkbox input[type='checkbox']:checked + label::before {
  background-color: #6c757d;
  border-color: #6c757d;
}

.custom-checkbox input[type='checkbox']:checked + label::after {
  content: '';
  position: absolute;
  left: 8px;
  top: 5px;
  width: 6px;
  height: 12px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.subLine .btnGray {
  width: 336px;
  height: 56px;
  padding: 16px 24px 16px 24px;
  gap: 12px;
  border-radius: 100;
  background: #f8f9fa;

  color: #6c757d;
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-align: left;
}

.subLine .subBtnGreen {
  background: #569573;
  width: 336px;
  height: 56px;
  padding: 16px 24px 16px 24px;
  gap: 12px;
  border-radius: 100px;
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0.1em;
  color: #ffffff;
}
</style>
