if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$8 = {
    props: {
      bannerList: {
        type: Array,
        default: () => [
          {
            id: 1,
            imageUrl: "/static/banner/2.png",
            background: "#009B8C",
            advertUrl: "/pages/my/my"
          },
          {
            id: 2,
            imageUrl: "/static/banner/2.png",
            background: "#009B8C",
            advertUrl: "/pages/my/my"
          },
          {
            id: 3,
            imageUrl: "/static/banner/2.png",
            background: "#009B8C",
            advertUrl: "/pages/my/my"
          }
        ]
      }
    },
    data() {
      return {
        // 
      };
    },
    methods: {
      // 点击事件
      handleAdvertClick(advertUrl) {
        uni.switchTab({
          url: advertUrl
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "banner-box" }, [
      vue.createElementVNode("swiper", {
        class: "swiper",
        "indicator-dots": "true",
        "indicator-color": "rgba(255, 255, 255, 0.3)",
        "indicator-active-color": "#ffffff",
        autoplay: "true",
        circular: "true",
        duration: "500",
        interval: "3000"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.bannerList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", {
              key: index,
              onClick: ($event) => $options.handleAdvertClick(item.advertUrl)
            }, [
              vue.createElementVNode("image", {
                class: "banner-image",
                src: item.imageUrl
              }, null, 8, ["src"])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const ydBanner = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-8b3f5c74"], ["__file", "D:/uniAppCode/HBuilderProjects/components/banner/banner.vue"]]);
  const _sfc_main$7 = {
    props: {
      type: Array,
      categoryList: {
        default: () => [
          {
            id: 1,
            name: "外卖",
            imageUrl: "/static/category/外卖.png"
          },
          {
            id: 2,
            name: "超市",
            imageUrl: "/static/category/超市.png"
          },
          {
            id: 3,
            name: "酒店",
            imageUrl: "/static/category/酒店.png"
          },
          {
            id: 4,
            name: "娱乐",
            imageUrl: "/static/category/娱乐.png"
          },
          {
            id: 5,
            name: "团购",
            imageUrl: "/static/category/团购.png"
          },
          {
            id: 6,
            name: " 美食",
            imageUrl: "/static/category/美食.png"
          },
          {
            id: 7,
            name: "电影",
            imageUrl: "/static/category/电影.png"
          },
          {
            id: 8,
            name: "水果",
            imageUrl: "/static/category/水果.png"
          }
        ]
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "category-top" }, [
      vue.createElementVNode("view", { class: "category-box" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.categoryList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
              vue.createElementVNode("image", {
                class: "category-image",
                src: item.imageUrl
              }, null, 8, ["src"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const ydCategory = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-01e710e2"], ["__file", "D:/uniAppCode/HBuilderProjects/components/category/category.vue"]]);
  const _sfc_main$6 = {
    name: "SearchBox"
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "search-box" }, [
      vue.createElementVNode("input", {
        class: "search-input",
        type: "text",
        placeholder: "搜索"
      })
    ]);
  }
  const ydSearch = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-78c39902"], ["__file", "D:/uniAppCode/HBuilderProjects/components/search/search-input.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        items: [
          {
            id: 1,
            title1: "蜜雪冰城 冰鲜柠檬水",
            price1: 2.8,
            price2: 14.44,
            title2: "水果捞 500g",
            imageUrl1: "/static/list/1.jpg",
            imageUrl2: "/static/list/2.png"
          },
          {
            id: 2,
            title1: "Item 3",
            title2: "Item 4",
            price1: 4.4,
            price2: 33.33,
            imageUrl1: "/static/list/3.png",
            imageUrl2: "/static/list/4.png"
          },
          {
            id: 3,
            title1: "Item 5",
            title2: "Item 6",
            price1: 109,
            price2: 33.33,
            imageUrl1: "/static/list/5.png",
            imageUrl2: "/static/list/6.png"
          },
          {
            id: 4,
            title1: "Item 7",
            title2: "Item 8",
            price1: 200,
            price2: 33.33,
            imageUrl1: "/static/list/5.png",
            imageUrl2: "/static/list/6.png"
          }
          // Add more items as needed
        ],
        currentItemCount: 2,
        loading: false
      };
    },
    computed: {
      // 初始化
      showToShow() {
        return this.items.slice(0, this.currentItemCount);
      }
    },
    methods: {
      // 查看更多
      showMoreItems() {
        this.loading = true;
        setTimeout(() => {
          this.currentItemCount += 4;
          this.$forceUpdate();
          this.loading = false;
        }, 2e3);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("scroll-view", {
        "scroll-y": "true",
        class: "scroll-view"
      }, [
        vue.createVNode(vue.TransitionGroup, { name: "fade" }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.showToShow, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.id,
                  class: "item"
                }, [
                  vue.createElementVNode("view", { class: "item-row" }, [
                    vue.createElementVNode("view", { class: "item-image-container" }, [
                      vue.createElementVNode("image", {
                        class: "item-image",
                        src: item.imageUrl1
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "text",
                        { class: "item-title" },
                        vue.toDisplayString(item.title1),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "price-container" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "price" },
                          "￥" + vue.toDisplayString(item.price1),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "item-image-container" }, [
                      vue.createElementVNode("image", {
                        class: "item-image",
                        src: item.imageUrl2
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "text",
                        { class: "item-title" },
                        vue.toDisplayString(item.title2),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "price-container" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "price" },
                          "￥" + vue.toDisplayString(item.price2),
                          1
                          /* TEXT */
                        )
                      ])
                    ])
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      vue.createElementVNode("view", {
        class: "load-more",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.showMoreItems && $options.showMoreItems(...args))
      }, [
        $data.loading ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "加载中")) : (vue.openBlock(), vue.createElementBlock("text", { key: 1 }, "查看更多"))
      ])
    ]);
  }
  const ydList = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-18578b00"], ["__file", "D:/uniAppCode/HBuilderProjects/components/list/list.vue"]]);
  const _sfc_main$4 = {
    components: {
      // 注册组件
      ydBanner,
      ydCategory,
      ydSearch,
      ydList
    },
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ydSearch = vue.resolveComponent("ydSearch");
    const _component_ydBanner = vue.resolveComponent("ydBanner");
    const _component_ydCategory = vue.resolveComponent("ydCategory");
    const _component_yd_list = vue.resolveComponent("yd-list");
    return vue.openBlock(), vue.createElementBlock("view", { class: "index-box" }, [
      vue.createCommentVNode(" 搜索框 "),
      vue.createVNode(_component_ydSearch),
      vue.createCommentVNode(" 轮播图组件 "),
      vue.createVNode(_component_ydBanner),
      vue.createCommentVNode(" 分类组件 "),
      vue.createVNode(_component_ydCategory),
      vue.createCommentVNode(" 热门推荐 "),
      vue.createVNode(_component_yd_list)
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/uniAppCode/HBuilderProjects/pages/index/index.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, "购物车");
  }
  const PagesShoppingShopping = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/uniAppCode/HBuilderProjects/pages/shopping/shopping.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, "消息");
  }
  const PagesMsgMsg = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/uniAppCode/HBuilderProjects/pages/msg/msg.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, "我的");
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/uniAppCode/HBuilderProjects/pages/my/my.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/shopping/shopping", PagesShoppingShopping);
  __definePage("pages/msg/msg", PagesMsgMsg);
  __definePage("pages/my/my", PagesMyMy);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/uniAppCode/HBuilderProjects/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
