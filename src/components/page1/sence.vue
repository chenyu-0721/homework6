<template>
  <section class="sence container py-lg-10 py-8">
    <div class="d-flex justify-content-between">
      <h2 class="fs-lg-2 fs-4 mb-5">品味生活</h2>
      <div class="d-none d-lg-flex gap-2">
        <button class="btn btn-outline-gray-300">
          <i class="bi bi-arrow-left"></i>
        </button>
        <hr class="article-line" />
        <button class="btn btn-outline-gray-300">
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="row row-cols-lg-2 row-cols-xl-3 row-cols-">
      <div class="card article-card">
        <div class="card-body">
          <h5 class="card-title">食.</h5>
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/life-1.png?raw=true"
            alt="life-1-sm"
          />
          <p class="card-text mt-3">｜米其林三星主廚的那些絕活傳奇</p>
          <p class="card-text">｜探秘成都的地道川味秘技與魅力</p>
          <p class="card-text">｜義大利釀酒師對於酒的堅持執著</p>
          <a href="#" class="d-flex justify-content-center align-items-center"
            >View More<span class="material-symbols-outlined">
              arrow_forward
            </span></a
          >
        </div>
      </div>
      <div class="card article-card">
        <div class="card-body">
          <h5 class="card-title">藝.</h5>
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/life-2.png?raw=true"
            alt="life-1-sm"
          />
          <p class="card-text mt-3">｜解構教主級時裝設計大師的獨特美學</p>
          <p class="card-text">｜當代攝影師鏡頭中的光影離奇</p>
          <p class="card-text">｜帶你穿縮中世紀，夏季文藝復興展</p>
          <a href="#" class="d-flex justify-content-center align-items-center"
            >View More<span class="material-symbols-outlined">
              arrow_forward
            </span></a
          >
        </div>
      </div>
      <div class="card article-card">
        <div class="card-body">
          <h5 class="card-title">旅.</h5>
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/life-3.png?raw=true"
            alt="life-1-sm"
          />
          <p class="card-text mt-3">｜遠離喧囂,偶探巴塔哥尼亞終界</p>
          <p class="card-text">｜東京深度六區,帶你細品極簡魅力</p>
          <p class="card-text">｜專賣奇珍異寶的東歐地下夜市</p>
          <a href="#" class="d-flex justify-content-center align-items-center"
            >View More<span class="material-symbols-outlined">
              arrow_forward
            </span></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
.sence {
  margin: 80px 0px;
}

.sence h2 {
  color: #343a40;
  font-size: 32px;
  font-weight: 900;
  line-height: 38.4px;
  letter-spacing: 0.1em;
}

.sence h5 {
  font-size: 52px;
  font-weight: 900;
  line-height: 74.72px;
  letter-spacing: 0.1em;
  text-align: left;
  color: #6e6b67;
}

.sence p {
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-align: left;
  color: #343a40;
}

.sence a {
  color: #569573;
  font-family: Newsreader;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-align: left;
  text-decoration: none;
}

.sence .card {
  background: #fffdf5;
  border: none;
}

.sence .card-body {
  background-color: #fffdf5;
}

@media (max-width: 768px) {
  .sence img {
    width: 100%;
  }
}
</style>
