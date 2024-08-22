<template>
  <section class="promo-section">
    <div class="container">
      <div class="row featurette" style="padding-top: 120px">
        <div
          class="col-md-6 order-md-1 d-flex flex-column justify-content-center aic"
        >
          <p class="lead text-muted">今天又不知道怎麼樣了嗎？</p>
          <h2 class="fw-bold">Vivre 給你意想不到的生活風格提案</h2>
          <button class="btn greenBtn mt-3">馬上了解 ➔</button>
        </div>

        <div
          class="col-md-6 order-md-2 d-flex flex-wrap justify-content-end web"
        >
          <div class="promo-item">
            <div
              class="promo-card project1 m-2 d-flex flex-row align-items-end justify-content-between"
            >
              <button
                style="position: absolute; top: 0px"
                class="d-flex align-items-center"
              >
                <span class="material-symbols-outlined"> arrow_right </span>
                人氣行程
              </button>
              <p class="mt-2 text-white">親子露營要帶什麼？</p>
              <span class="material-symbols-outlined white">
                arrow_forward
              </span>
            </div>
          </div>
          <div class="promo-item">
            <div
              class="promo-card project2 d-flex flex-row align-items-end justify-content-between"
            >
              <button
                style="position: absolute; top: 0px"
                class="d-flex align-items-center"
              >
                <span class="material-symbols-outlined"> arrow_right </span>
                編輯推薦
              </button>
              <p class="mt-2 text-white">山女孩的健行筆記</p>
              <span class="material-symbols-outlined white">
                arrow_forward
              </span>
            </div>
          </div>

          <div class="promo-item">
            <div
              class="promo-card project4 m-2 d-flex flex-row align-items-end justify-content-between"
            >
              <button
                style="position: absolute; top: 0px"
                class="d-flex align-items-center"
              >
                <span class="material-symbols-outlined"> arrow_right </span>
                編輯推薦
              </button>
              <p class="mt-2 text-white">質感房間改造攻略！</p>
              <span class="material-symbols-outlined white">
                arrow_forward
              </span>
            </div>
          </div>
          <div class="promo-item">
            <div
              class="promo-card project3 d-flex flex-row align-items-end justify-content-between"
            >
              <button
                style="position: absolute; top: 0px"
                class="d-flex align-items-center"
              >
                <span class="material-symbols-outlined"> arrow_right </span>
                熱門文章
              </button>
              <p class="mt-2 text-white">適合溜小孩的海邊景點推薦</p>
              <span class="material-symbols-outlined white">
                arrow_forward
              </span>
            </div>
          </div>
        </div>

        <div class="col-12 app mt-5">
          <div class="swiper mySwiper mb-3">
            <div class="swiper-wrapper">
              <div class="swiper-slide pb-4 d-flex justify-content-center">
                <div
                  class="promo-card project1 m-2 d-flex flex-row align-items-end justify-content-between"
                >
                  <button
                    style="position: absolute; top: 0px; left: 120px"
                    class="d-flex align-items-center"
                  >
                    <span class="material-symbols-outlined"> arrow_right </span>
                    人氣行程
                  </button>
                  <p class="mt-2 text-white">親子露營要帶什麼？</p>
                  <span class="material-symbols-outlined white">
                    arrow_forward
                  </span>
                </div>
              </div>
              <div class="swiper-slide pb-4 d-flex justify-content-center">
                <div
                  class="promo-card project2 m-2 d-flex flex-row align-items-end justify-content-between"
                >
                  <button
                    style="position: absolute; top: 0px; left: 120px"
                    class="d-flex align-items-center"
                  >
                    <span class="material-symbols-outlined"> arrow_right </span>
                    編輯推薦
                  </button>
                  <p class="mt-2 text-white">質感房間改造攻略！</p>
                  <span class="material-symbols-outlined white">
                    arrow_forward
                  </span>
                </div>
              </div>
              <div class="swiper-slide pb-4 d-flex justify-content-center">
                <div
                  class="promo-card project3 m-2 d-flex flex-row align-items-end justify-content-between"
                >
                  <button
                    style="position: absolute; top: 0px; left: 120px"
                    class="d-flex align-items-center"
                  >
                    <span class="material-symbols-outlined"> arrow_right </span>
                    編輯推薦
                  </button>
                  <p class="mt-2 text-white">山女孩的健行筆記</p>
                  <span class="material-symbols-outlined white">
                    arrow_forward
                  </span>
                </div>
              </div>
              <div class="swiper-slide pb-4 d-flex justify-content-center">
                <div
                  class="promo-card project4 m-2 d-flex flex-row align-items-end justify-content-between"
                >
                  <button
                    style="position: absolute; top: 0px; left: 120px"
                    class="d-flex align-items-center"
                  >
                    <span class="material-symbols-outlined"> arrow_right </span>
                    熱門文章
                  </button>
                  <p class="mt-2 text-white">適合溜小孩的海邊景點推薦</p>
                  <span class="material-symbols-outlined white">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  new Swiper('.mySwiper', {
    slidesPerView: 1,
    slidesPerGroup: 2,
    spaceBetween: 48,

    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },

    pagination: {
      el: '.swiper-pagination-custom',
      type: 'fraction',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      375: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
  })
})
</script>

<style scoped>
.promo-section {
  background-color: #fffbe5;
  padding-bottom: 120px;
}

.promo-section .swiper-slide {
  border-bottom: 0px;
}

.promo-section .app {
  display: none;
}
.promo-section .web {
  display: block;
}

.promo-section button {
  width: Hug (117px) px;
  height: Hug (36px) px;
  top: -16px;
  left: 16px;
  padding: 8px 12px 8px 12px;
  gap: 8px;
  border-radius: 4px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  border: 1px solid #e0efde;
  background-color: #fff;

  color: #406c55;
  font-family: Noto Serif TC;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  letter-spacing: 0.1em;
  text-align: left;
}

@media (max-width: 768px) {
  .promo-section .web {
    display: none !important;
  }
  .promo-section .app {
    display: block;
  }

  .aic {
    align-items: center;
  }

  .promo-section p {
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    letter-spacing: 0.1em;
    text-align: center;
  }

  .promo-section h5 {
    font-family: Gurmukhi MN;
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
    letter-spacing: 0.1em;
    text-align: center;
    margin-top: 5px;
  }

  .promo-section h2 {
    font-family: Gurmukhi MN;
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
    letter-spacing: 0.1em;
    text-align: center;
  }

  .project1 {
    position: static !important;
  }

  .project2 {
    position: static !important;
  }

  .project3 {
    position: static !important;
  }

  .project4 {
    position: static !important;
  }
}

.mt64 {
  margin-top: 64px;
}

.promo-section img {
  width: 306px;
  height: 236px;
}

.promo-section p {
  margin: 0px;
}

.promo-section .white {
  color: white;
}

.promo-card {
  border: 1px solid #e5e5e5;
  padding: 10px;
  background-color: #fff;
  text-align: center;
}

.promo-section .greenBtn {
  width: 170px;
  height: 56px;
  padding: 16px 24px 16px 24px;
  border-radius: 100px;
  background: #569573;
  color: white;
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0.1em;
}

.project1 {
  position: relative;
  background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/projects-2.png?raw=true');
  background-repeat: no-repeat;
  background-size: cover;
  width: 306px;
  height: 236px;
  top: 80px;
  right: 24px;
  border-radius: 4px;
}

.project2 {
  position: relative;
  background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/projects-1.png?raw=true');
  background-repeat: no-repeat;
  background-size: cover;
  width: 306px;
  height: 236px;
  border-radius: 4px;
}

.project3 {
  position: relative;
  background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/projects-3.png?raw=true');
  background-repeat: no-repeat;
  background-size: cover;
  width: 306px;
  height: 236px;
  border-radius: 4px;
  margin-top: 30px;
}

.project4 {
  position: relative;
  background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/projects-4.png?raw=true');
  background-repeat: no-repeat;
  background-size: cover;
  width: 306px;
  height: 236px;
  right: 24px;
  top: 100px;
  border-radius: 4px;
}

@media (max-width: 576px) {
  .promo-item {
    max-width: 100%;
  }
}
</style>
