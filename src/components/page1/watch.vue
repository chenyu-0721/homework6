<template>
  <section class="popular">
    <div class="container">
      <h3>大家都在看</h3>
      <div class="d-flex flex-row web">
        <ul>
          <li>酒精路跑地圖</li>
          <li>台北拉麵圖鑑</li>
          <li>海島自由行</li>
          <li>短天數出國推薦</li>
          <li>週末露營趣</li>
        </ul>
        <div class="d-flex flex-column mt-24">
          <div class="ml-64 mb-30">
            <h5 class="mt-40">酒精路跑地圖</h5>
            <ol>
              <li>｜城市酒吧人氣榜,盤點當紅熱門酒吧</li>
              <li>｜你要的調酒師在這裡！五月全台酒吧客座活動整理</li>
              <li>｜台南老宅手工酒藏,尋味百年人文釀意</li>
            </ol>
          </div>
          <div class="ml-64">
            <img
              class="img-fluid imgRadius"
              :src="popularItems[0].imgLarge[0]"
              alt=""
            />
            <img
              class="img-fluid noImgRadius"
              :src="popularItems[0].imgLarge[1]"
              alt=""
            />
            <img
              class="img-fluid noImgRadius"
              :src="popularItems[0].imgLarge[2]"
              alt=""
            />
            <img
              class="img-fluid rightImgRadius"
              :src="popularItems[0].imgLarge[3]"
              alt=""
            />
          </div>
          <div class="mt-40 ml-64 mb-60 mr-64 d-flex justify-content-between">
            <div class="">
              <span class="tag">{{ popularItems[0].tags[0] }}</span>
              <span class="tag">{{ popularItems[0].tags[1] }}</span>
              <span class="tag">{{ popularItems[0].tags[2] }}</span>
            </div>
            <button class="d-flex btn btnGreenFont">
              View More<span class="material-symbols-outlined">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 app">
        <div class="swiper mySwiper mb-3 bgcwhite">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide pb-4"
              v-for="item in popularItems"
              :key="item"
            >
              <div class="mb-30">
                <h5 class="mt-40 text ms-5">{{ item.title }}</h5>
                <ol>
                  <li class="list-unstyled">｜{{ item.descriptions[0] }}</li>
                  <li class="list-unstyled">｜{{ item.descriptions[1] }}</li>
                  <li class="list-unstyled">｜{{ item.descriptions[2] }}</li>
                </ol>
                <img
                  class="img-fluid ps-5 pe-5"
                  :src="item.imgSmall"
                  style="width: 100%; height: 157px"
                />
                <div
                  class="mt-40 ml-64 mb-60 mr-64 d-flex flex-column justify-content-center align-items-center"
                >
                  <div class="">
                    <span class="tag">{{ item.tags[0] }}</span>
                    <span class="tag">{{ item.tags[1] }}</span>
                    <span class="tag">{{ item.tags[2] }}</span>
                  </div>
                  <button class="d-flex btn btnGreenFont mt-5">
                    View More<span class="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
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

const popularItems = [
  {
    title: '酒精路跑地圖',
    descriptions: [
      '城市酒吧人氣榜,盤點當紅熱門酒吧',
      '你要的調酒師在這裡！五月全台酒吧客座活動整理',
      '台南老宅手工酒藏,尋味百年人文釀意',
    ],
    imgSmall:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-1-sm.png?raw=true',
    imgLarge: [
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-1.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-2.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-3.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-4.png?raw=true',
    ],
    tags: ['#夜貓行程', '#barhopping', '#全台酒吧'],
  },
  {
    title: '台北拉麵圖鑑',
    descriptions: [
      '城市酒吧人氣榜,盤點當紅熱門酒吧',
      '你要的調酒師在這裡！五月全台酒...',
      '台南老宅手工酒藏,尋味百年人文釀意',
    ],
    imgSmall:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-3-sm.png?raw=true',
    imgLarge: [
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-1.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-2.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-3.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-4.png?raw=true',
    ],
    tags: ['#雞白湯', '#拉麵', '#台北美食'],
  },
  {
    title: '海島自由行',
    descriptions: [
      '私島慢活島嶼生活 - 在熱帶天堂品...',
      '海島漂流記 - 在陽光、沙灘和比基...',
      '島嶼蹤跡 - 揭開加勒比海上世外桃...',
    ],
    imgSmall:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-4-sm.png?raw=true',
    imgLarge: [
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-1.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-2.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-3.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-4.png?raw=true',
    ],
    tags: ['#熱帶國家', '#海邊', '#無敵海景'],
  },
  {
    title: '短天數出國推薦',
    descriptions: [
      '72小時東京遊走 - 當個時尚東京通',
      '48小時曼谷遊玩全攻略',
      '三天兩夜賞櫻微醺東京',
    ],
    imgSmall:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-5-sm.png?raw=true',
    imgLarge: [
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-1.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-2.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-3.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-4.png?raw=true',
    ],
    tags: ['#說走就走', '#出國玩', '#東亞'],
  },
  {
    title: '週末露營趣',
    descriptions: [
      '週末說走就走露營記',
      '城市野營日記',
      '和寵物去露營 - 大自然之旅的雙倍...',
    ],
    imgSmall:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-2-sm.png?raw=true',
    imgLarge: [
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-1.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-2.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-3.png?raw=true',
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/hots-4.png?raw=true',
    ],
    tags: ['#說走就走', '#出國玩', '#東亞'],
  },
]

onMounted(() => {
  new Swiper('.mySwiper', {
    slidesPerView: 2,
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

<style>
.popular {
  margin: 80px 0;
}

.popular .swiper-slide {
  border-bottom: 0px;
}

.popular ul {
  background-color: white;
  margin: 24px;
}

.popular ul li {
  padding: 16px;
  margin: 24px 24px;
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0.1em;
}

.popular .imgRadius {
  width: 210.75px;
  height: 232px;
  border-radius: 20px 0px 4px 20px;
  margin-right: 4px;
}

.popular .noImgRadius {
  width: 210.75px;
  height: 232px;
  border-radius: 4px;
  margin-right: 4px;
}

.popular .rightImgRadius {
  width: 210.75px;
  height: 232px;
  border-radius: 0px 20px 20px 0px;
  margin-right: 56px;
}

.popular .tag {
  width: 97px;
  height: 44px;
  padding: 8px 0px 8px 0px;
  background: #e8e3da;
  font-family: Noto Serif TC;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  letter-spacing: 0.1em;
  text-align: center;
  color: #6e6b67;
  padding: 4px 8px;
  margin-right: 16px;
}

.mr-64 {
  margin-right: 64px;
}

.mb-60 {
  margin-bottom: 60px;
}

.mt-40 {
  margin-top: 40px;
}

.ml-64 {
  margin-left: 64px;
}

.popular ol li {
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  letter-spacing: 0.1em;
  color: #343a40;
  margin: 10px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mt-24 {
  margin-top: 24px;
  background-color: #fff;
}

.popular h5 {
  font-size: 24px;
  font-weight: 900;
  line-height: 28.8px;
  letter-spacing: 0.1em;
  text-align: left;
  color: #569573;
  margin-bottom: 24px;
}

.popular .btnGreenFont {
  font-family: Newsreader;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.1em;
  color: #569573;
}

.popular h3 {
  color: #343a40;
  font-family: Noto Serif TC;
  font-size: 24px;
  font-weight: 900;
  line-height: 28.8px;
  letter-spacing: 0.1em;
}

.popular .app {
  display: none;
}

.popular .web {
  display: block;
}

.bgcwhite {
  background-color: #ffffff;
}

@media (max-width: 768px) {
  .popular .app {
    display: block;
  }
  .popular .web {
    display: none !important;
  }
}
</style>
