<template>
  <div class="wrapper">

    <nav id="sidebar" class="sidebar">
      <div class="sidebar-header mb-3">
        <img src="/src/assets/logo.png" height="35" class="m-2">
        <p>Open Do</p>
      </div>

      <div class="sidebar-content justify-content-between ">
        <ul class="sidebar-nav">
          <li class="sidebar-item" v-for="i in menuContent" :key="i.name">
            <router-link :class="$route.path.includes(i.path) && 'active'" class="sidebar-link "
                         @click="currMenu = i.name" :to="i.path">
              <div class="col text-start m-3 ">
                <span>{{ i.name }}</span>
              </div>
            </router-link>
          </li>
        </ul>
        <ul class="sidebar-nav">
          <li class="sidebar-item" v-for="i in menuFooter" :key="i.name">
            <router-link :class="$route.path === i.path && 'active'" class="sidebar-link ps-4 px-2 py-1"
                         @click="currMenu = i.name" :to="i.path">
              <div class="col text-start m-3">
                <span>{{ i.name }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>

    </nav>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="navbarOffcanvasLg"
         aria-labelledby="navbarOffcanvasLgLabel">
      <div class="offcanvas-header">
        <img src="/src/assets/logo.png" height="35" class="m-2">
      </div>

      <div class="offcanvas-body p-0 list-menu">
        <div class="position-relative" style="height: calc(100vh - 180px);">
          <ul class="sidebar-nav">
            <li class="sidebar-item" v-for="i in menuContent" :key="i.name" data-bs-dismiss="offcanvas">
              <router-link :class="$route.path === i.path && 'active'" class="sidebar-link ps-4 px-2 py-1"
                           @click="currMenu = i.name" :to="i.path">
                <div class="col text-start m-3">
                <span>{{ i.name }}</span>
              </div>
              </router-link>
            </li>
          </ul>
          <ul class="sidebar-nav position-absolute w-100 bottom-0">
            <li class="sidebar-item" v-for="i in menuFooter" :key="i.name" data-bs-dismiss="offcanvas">
              <router-link :class="$route.path === i.path && 'active'" class="sidebar-link ps-4 px-2 py-1"
                           @click="currMenu = i.name" :to="i.path">
                <div class="col text-start m-3">
                <span>{{ i.name }}</span>
              </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="main">
      <nav class="navbar navbar-expand px-2">
        <div class="d-flex justify-content-between w-100">
          <button class="navbar-toggler border-0 d-flex align-items-center" type="button" data-bs-toggle="offcanvas"
                  data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
            <img src="/src/assets/logo.png" height="35">
          </button>
          <div class="w-100 mx-2 position-relative align-self-center">
            <vue3-simple-typeahead
                @keyup.enter="selected(search)"
                v-model="search"
                ref="search"
                class="form-control text-uppercase"
                placeholder="ค้นหา"
                :items="searchList"
                :minInputLength="0"
                @onFocus="delaySearchData()"
                @onInput="delaySearchData()"
                @selectItem="(e) => selected(e)"
                :itemProjection="(item) => item._source.N_name"
                clearInput
            >
              <template #list-item-text="searchList">
                <div v-if="searchList.item._index == 'fmp_stock_dev'">
                  <img class="rounded-circle"
                       :src="getImageIcon(searchList.item._source.N_name)"
                       @error="$filters.getImgDefault" width="40" height="40"/>
                  <span class="ms-2">{{ searchList.item._source.N_name }}</span>
                </div>
              </template>
            </vue3-simple-typeahead>
          </div>
        </div>
      </nav>
      <div class="main-page overflow-auto">
        <div id="top"></div>
        <RouterView/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currMenu: 'Shareholder',
      menuContent: [
        { name: 'หน่วยงาน', path: '/ministry' },
      ],
      delaysearch: null,
      search: "",
      searchList: []
    }
  }
}
</script>
