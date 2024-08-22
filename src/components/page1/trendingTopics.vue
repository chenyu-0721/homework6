<template>
  <section class="trending">
    <div class="container">
      <h3>熱門主題</h3>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div class="col web" v-for="item in itemsWeb" :key="item.id">
          <div class="pb-2 pt-2">
            <div class="image-container">
              <div
                class="topicsImg"
                :style="{ backgroundImage: `url(${item.imgUrl})` }"
              >
                <p class="text">{{ item.name }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col app" v-for="item in itemsApp" :key="item.id">
          <div class="pb-2 pt-2">
            <div class="image-container">
              <div
                class="topicsImg"
                :style="{ backgroundImage: `url(${item.imgUrl})` }"
              >
                <p class="text">{{ item.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const itemsWeb = [
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-1.png?raw=true',
    name: '城市漫遊者',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-2.png?raw=true',
    name: '秘境尋蹤人',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-3.png?raw=true',
    name: '品味設計家',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-4.png?raw=true',
    name: '美食探險記',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-5.png?raw=true',
    name: '美學建築誌',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-6.png?raw=true',
    name: '慢活生活行',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-7.png?raw=true',
    name: '工藝匠心賞',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-8.png?raw=true',
    name: '時尚先鋒派',
  },
]

const itemsApp = [
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-1-sm.png?raw=true',
    name: '城市漫遊者',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-2-sm.png?raw=true',
    name: '秘境尋蹤人',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-3-sm.png?raw=true',
    name: '品味設計家',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-4-sm.png?raw=true',
    name: '美食探險記',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-5-sm.png?raw=true',
    name: '美學建築誌',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-6-sm.png?raw=true',
    name: '慢活生活行',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-7-sm.png?raw=true',
    name: '工藝匠心賞',
  },
  {
    imgUrl:
      'https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/theme-8-sm.png?raw=true',
    name: '時尚先鋒派',
  },
]
</script>

<style scoped>
.trending {
  padding: 80px;
}

@media (max-width: 768px) {
  .trending {
    padding: 48px 0px;
  }
}

.trending .web {
  display: block;
}

.trending .app {
  display: none;
}

.trending h3 {
  font-family: Noto Serif TC;
  font-size: 32px;
  font-weight: 900;
  line-height: 38.4px;
  color: #343a40;
}

.topicsImg {
  max-width: 306px;
  height: 200px;
  border-radius: 20px 0px 20px 0px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.topicsImg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.topicsImg:hover::after {
  opacity: 1;
}

.topicsImg .text {
  color: white;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .topicsImg {
    max-width: 100%;
    height: 84px;
  }
}
</style>
