"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
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
      common_vendor.index.switchTab({
        url: advertUrl
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.bannerList, (item, index, i0) => {
      return {
        a: item.imageUrl,
        b: index,
        c: common_vendor.o(($event) => $options.handleAdvertClick(item.advertUrl), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
exports.MiniProgramPage = MiniProgramPage;
