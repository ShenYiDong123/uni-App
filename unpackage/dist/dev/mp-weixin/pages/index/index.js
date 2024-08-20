"use strict";
const common_vendor = require("../../common/vendor.js");
const ydBanner = () => "../../components/banner/banner.js";
const ydCategory = () => "../../components/category/category.js";
const ydSearch = () => "../../components/search/search-input.js";
const ydList = () => "../../components/list/list.js";
const _sfc_main = {
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
if (!Array) {
  const _component_ydSearch = common_vendor.resolveComponent("ydSearch");
  const _component_ydBanner = common_vendor.resolveComponent("ydBanner");
  const _component_ydCategory = common_vendor.resolveComponent("ydCategory");
  const _component_yd_list = common_vendor.resolveComponent("yd-list");
  (_component_ydSearch + _component_ydBanner + _component_ydCategory + _component_yd_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
