import { useSSRContext, defineComponent, unref, ref, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-2X8I7ISh.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

function useChangeStatusMobileSidebar() {
  const isOpen = ref(false);
  const OpenOrCloseSidebar = () => {
    isOpen.value = !isOpen.value;
  };
  return { isOpen, OpenOrCloseSidebar };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    useChangeStatusMobileSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))}><div class="flex-1"><h1 class="text-xl text-[#00cb7a] font-bold">TehranMusic</h1></div><div class="flex-none gap-1 md:gap-2"><div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost btn-circle"><div class="indicator"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span class="badge badge-sm indicator-item">8</span></div></div><div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"><div class="card-body"><span class="text-lg font-bold">8 Items</span><span class="text-info">Subtotal: $999</span><div class="card-actions"><button class="btn btn-primary btn-block">View cart</button></div></div></div></div><div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar"><div class="w-10 rounded-full"><img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"></div></div><ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"><li><a class="justify-between"> Profile <span class="badge">New</span></a></li><li><a>Settings</a></li><li><a>Logout</a></li></ul></div><div class="open-nav md:hidden"><button class="btn btn-primary">open</button></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed z-50 bg-[#020420] w-screen h-screen" }, _attrs))}><div class="h-4/5 overflow-y-scroll"><ul class="menu rounded-box grid grid-cols-1 w-full text-[1rem] font-bold"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: { path: "dashboard" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Dashboard`);
      } else {
        return [
          createTextVNode("Dashboard")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: { path: "profile" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Profile`);
      } else {
        return [
          createTextVNode("Profile")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><a href="#">Messages</a></li><li><a href="#">Settings</a></li><hr class="my-8 flex dark:border-gray-800 w-full border-t border-dashed"><li><details><summary>Products</summary><ul><li><a href="#">Electronics</a></li><li><a href="#">Clothing</a></li><li><details><summary>Home &amp; Garden</summary><ul><li><a href="#">Furniture</a></li><li><a href="#">Decor</a></li></ul></details></li></ul></details></li><li><details><summary>Orders</summary><ul><li><a href="#">Pending Orders</a></li><li><a href="#">Completed Orders</a></li><li><details><summary>Returns</summary><ul><li><a href="#">Return Requests</a></li><li><a href="#">Return History</a></li></ul></details></li></ul></details></li><li><details><summary>Support</summary><ul><li><a href="#">FAQ</a></li><li><a href="#">Contact Us</a></li><li><details><summary>Resources</summary><ul><li><a href="#">Documentation</a></li><li><a href="#">Tutorials</a></li></ul></details></li></ul></details></li><li><details><summary>Account</summary><ul><li><a href="#">Personal Information</a></li><li><a href="#">Security Settings</a></li><li><details><summary>Notifications</summary><ul><li><a href="#">Email Alerts</a></li><li><a href="#">SMS Alerts</a></li></ul></details></li></ul></details></li></ul></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppMobileSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed-scrollable overflow-y-scroll" }, _attrs))} data-v-ded2c629><div class="h-4/5 overflow-y-scroll" data-v-ded2c629><ul class="menu rounded-box grid grid-cols-1 w-56 text-[1rem] font-bold" data-v-ded2c629><li data-v-ded2c629>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: { path: "dashboard" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Dashboard`);
      } else {
        return [
          createTextVNode("Dashboard")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ded2c629>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: { path: "profile" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Profile`);
      } else {
        return [
          createTextVNode("Profile")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ded2c629><a href="#" data-v-ded2c629>Messages</a></li><li data-v-ded2c629><a href="#" data-v-ded2c629>Settings</a></li><hr class="my-8 flex dark:border-gray-800 w-full border-t border-dashed" data-v-ded2c629><li data-v-ded2c629><details data-v-ded2c629><summary data-v-ded2c629>Products</summary><ul data-v-ded2c629><li data-v-ded2c629><a href="#" data-v-ded2c629>Electronics</a></li><li data-v-ded2c629><a href="#" data-v-ded2c629>Clothing</a></li><li data-v-ded2c629><details data-v-ded2c629><summary data-v-ded2c629>Home &amp; Garden</summary><ul data-v-ded2c629><li data-v-ded2c629><a href="#" data-v-ded2c629>Furniture</a></li><li data-v-ded2c629><a href="#" data-v-ded2c629>Decor</a></li></ul></details></li></ul></details></li><li data-v-ded2c629><details data-v-ded2c629><summary data-v-ded2c629>Orders</summary><ul data-v-ded2c629><li data-v-ded2c629><a href="#" data-v-ded2c629>Pending Orders</a></li><li data-v-ded2c629><a href="#" data-v-ded2c629>Completed Orders</a></li><li data-v-ded2c629><details data-v-ded2c629><summary data-v-ded2c629>Returns</summary><ul data-v-ded2c629><li data-v-ded2c629><a href="#" data-v-ded2c629>Return Requests</a></li><li data-v-ded2c629><a href="#" data-v-ded2c629>Return History</a></li></ul></details></li></ul></details></li><li data-v-ded2c629><details data-v-ded2c629><summary data-v-ded2c629>Support</summary><ul data-v-ded2c629><li data-v-ded2c629><a href="#" data-v-ded2c629>FAQ</a></li><li data-v-ded2c629><a href="#" data-v-ded2c629>Contact Us</a></li><li data-v-ded2c629><details data-v-ded2c629><summary data-v-ded2c629>Resources</summary><ul data-v-ded2c629><li data-v-ded2c629><a href="#" data-v-ded2c629>Documentation</a></li><li data-v-ded2c629><a href="#" data-v-ded2c629>Tutorials</a></li></ul></details></li></ul></details></li><li data-v-ded2c629><details data-v-ded2c629><summary data-v-ded2c629>Account</summary><ul data-v-ded2c629><li data-v-ded2c629><a href="#" data-v-ded2c629>Personal Information</a></li><li data-v-ded2c629><a href="#" data-v-ded2c629>Security Settings</a></li><li data-v-ded2c629><details data-v-ded2c629><summary data-v-ded2c629>Notifications</summary><ul data-v-ded2c629><li data-v-ded2c629><a href="#" data-v-ded2c629>Email Alerts</a></li><li data-v-ded2c629><a href="#" data-v-ded2c629>SMS Alerts</a></li></ul></details></li></ul></details></li></ul></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ded2c629"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen } = useChangeStatusMobileSidebar();
    console.log(isOpen);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$3;
      const _component_AppMobileSidebar = __nuxt_component_1;
      const _component_AppSidebar = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHeader, { class: "border-b border-gray-800 md:hidden p-4" }, null, _parent));
      _push(ssrRenderComponent(_component_AppMobileSidebar, {
        style: unref(isOpen) ? null : { display: "none" }
      }, null, _parent));
      _push(`<div class="container md:w-[80%] w-[95%] mx-auto">`);
      _push(ssrRenderComponent(_component_AppHeader, { class: "hidden md:flex" }, null, _parent));
      _push(`<div class="flex gap-8 pt-7">`);
      _push(ssrRenderComponent(_component_AppSidebar, { class: "hidden md:block" }, null, _parent));
      _push(`<div class="mt-[0.2rem] md:w-[60%] w-[95%] mx-auto"><div class="breadcrumbs max-w-4xl text-lg text-[#909fb4] font-bold"><ul><li>Docs</li><li>Api</li><li>Components</li></ul></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-D7olJSsm.mjs.map
