"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
if (!Array) {
  const _component_transition_group = common_vendor.resolveComponent("transition-group");
  _component_transition_group();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($options.showToShow, (item, k0, i0) => {
      return {
        a: item.imageUrl1,
        b: common_vendor.t(item.title1),
        c: common_vendor.t(item.price1),
        d: item.imageUrl2,
        e: common_vendor.t(item.title2),
        f: common_vendor.t(item.price2),
        g: item.id
      };
    }),
    b: common_vendor.p({
      name: "fade"
    }),
    c: $data.loading
  }, $data.loading ? {} : {}, {
    d: common_vendor.o((...args) => $options.showMoreItems && $options.showMoreItems(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
