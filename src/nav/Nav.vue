<template>
  <nav>
    <div class="container-lg">
      <nav class="navbar navbar-expand-lg py-3 border-bottom">
        <div class="container-fluid">
          <img
            src="../assets/Frame.png"
            alt="header-logo"
            width="96"
            height="28"
            class="me-5"
          />

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse mt-3"
            id="navbarSupportedContent"
          >
            <form
              class=""
              role="search"
              action="/Search/SearchList"
              method="get"
              target="_blank"
            >
              <div class="input-group">
                <input
                  type="text"
                  class="form-control inputSearch"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="搜尋文章"
                />
                <span class="material-symbols-outlined input-group-text">
                  search
                </span>
              </div>
            </form>
            <ul class="navbar-nav ms-auto aic">
              <li class="nav-item fontBlack me-3 mt-4 mb-4">
                <a class="nav-link" href="#">所有文章</a>
              </li>
              <li class="nav-item fontBlack me-3 mt-4 mb-4">
                <a class="nav-link" href="#">訂閱方案</a>
              </li>
              <li class="nav-item fontBlack me-3 mt-4 mb-4">
                <a class="nav-link" href="#">關於我們</a>
              </li>
              <li class="nav-item">
                <router-link to="/subView" class="nav-link fontWhite mt-4 mb-4"
                  >登入 / 註冊</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </nav>
</template>

<script></script>

<style>
nav img {
  width: 96px;
  height: 28px;
}

nav .inputSearch {
  width: Fixed (276px) px;
  height: Hug (48px) px;
  padding: 12px 20px 12px 20px;
  border-radius: 100px;
  border: 1px 0px 0px 0px;
  border-right: none;
}

nav .input-group-text {
  background-color: #ffffff;
  border-left: none;
  border-radius: 100px;
  font-size: 25px;
  color: #569573;
}

nav .fontBlack {
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  color: #343a40;
}

nav .fontWhite {
  /* button */
  width: 137px;
  height: 52px;
  padding: 16px 24px;
  border-radius: 100px;
  /* font */
  font-family: Noto Serif TC;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  letter-spacing: 0.1em;
  background: #569573;
  color: #ffffff;

  text-align: center;
}

nav .aic {
  display: flex;
  align-items: center;
}

nav .nav-item {
  width: 100%;
}

@media (max-width: 768px) {
  nav .aic {
    display: flex;
    align-items: start;
  }

  nav .fontWhite {
    width: auto;
  }
}
</style>
