"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.categoryList, (item, index, i0) => {
      return {
        a: item.imageUrl,
        b: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
