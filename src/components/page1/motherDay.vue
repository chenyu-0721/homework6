<template>
  <section class="motherDay">
    <div class="container d-flex flex-column bg">
      <div class="d-flex justify-content-between align-items-end">
        <img
          class="yellowImg web"
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/bg-1.png?raw=true"
        />
        <img
          class="greenImg web"
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/bg-2.png?raw=true"
        />
        <img
          class="greenImg app"
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/bg-2-sm.png?raw=true"
        />
      </div>
      <div>
        <div class="d-flex flex-column align-items-center pb-5 mb-3">
          <h4>\ 母親節特別企劃 /</h4>
          <h3>家庭訂閱方案限時 7 折</h3>
          <ul>
            <li v-for="item in items" :key="item" class="d-flex">
              <span class="material-symbols-outlined me-3"> check </span>
              {{ item.name }}
            </li>
          </ul>
          <button class="greenBtn">我想了解</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    name: '每月最新文章無限閱讀',
  },
  {
    name: '專屬會員限定內容',
  },
  {
    name: '定期電子報',
  },
  {
    name: '年度精選禮物',
  },
  {
    name: '24 /7 優先客戶服務',
  },
  {
    name: '為每個成員量身打造專屬行程',
  },
]
</script>

<style>
.motherDay {
  background: #fffbe5;
  padding: 80px;
}

.motherDay .bg {
  position: relative;
}

.motherDay .yellowImg {
  position: absolute;
  bottom: 0;
  left: 0%;
  width: 217px;
  height: 81px;
  object-fit: cover;
}

.motherDay .greenImg {
  position: absolute;
  bottom: 0;
  right: 0%;
  width: 300px;
  height: 196px;
  object-fit: cover;
}

.motherDay .web {
  display: block;
}
.motherDay .app {
  display: none;
}

@media (max-width: 768px) {
  .motherDay .web {
    display: none;
  }
  .motherDay .app {
    display: block;
  }

  .motherDay .greenImg {
    width: 208px;
    height: 136px;
    right: 0%;
  }
}

@media (max-width: 375px) {
  .motherDay .greenImg {
    width: 160px;
    height: 104px;
  }
}

@media (max-width: 768px) {
  .motherDay {
    padding: 48px 0px;
  }
}

.motherDay li {
  list-style: none;
  font-family: Noto Serif TC;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #6c757d;
  margin-bottom: 10px;
}

.motherDay .greenBtn {
  /* button */
  background: #569573;
  width: 134px;
  height: 56px;
  padding: 16px 24px 16px 24px;
  border-radius: 100px;
  border: 1px solid #569573;
  /* font */
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  color: white;
}

@media (max-width: 768px) {
  .motherDay .greenBtn {
    /* button */
    width: 125px;
    height: 52px;
    padding: 12px 20px 12px 20px;
    /* font */
    font-size: 16px;
  }
}

@media (max-width: 500px) {
  .motherDay .greenBtn {
    /* button */
    width: 117px;
    height: 48px;
  }
}

@media (max-width: 375px) {
  .motherDay .greenBtn {
    /* button */
    width: 109px;
    height: 44px;
  }
}

.motherDay h4 {
  color: #6e6b67;
  font-family: Noto Serif TC;
  font-size: 24px;
  font-weight: 900;
  line-height: 28.8px;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .motherDay h4 {
    font-size: 20px;
    line-height: 25.6px;
    color: #569573;
    margin-bottom: 24px;
  }
}

@media (max-width: 500px) {
  .motherDay h4 {
    font-size: 18px;
    line-height: 22.4px;
    margin-bottom: 22px;
  }
}

@media (max-width: 375px) {
  .motherDay h4 {
    font-size: 16px;
    line-height: 19.2px;
    margin-bottom: 20px;
  }
}

.motherDay h3 {
  font-family: Noto Serif TC;
  font-size: 32px;
  font-weight: 900;
  line-height: 38.4px;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
  color: #343a40;
}

@media (max-width: 768px) {
  .motherDay h3 {
    font-size: 20px;
    line-height: 35.2px;
  }
}

@media (max-width: 500px) {
  .motherDay h3 {
    font-size: 18px;
    line-height: 32px;
  }
}

@media (max-width: 375px) {
  .motherDay h3 {
    font-size: 16px;
    line-height: 28.8px;
  }
}
</style>
