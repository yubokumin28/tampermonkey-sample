// ==UserScript==
// @name         Tampermonkey の見本(遊牧民)
// @namespace    https://github.com/yubokumin28/tampermonkey-sample
// @version      1.0.0
// @description  example.com の一番上に緑の札を出すだけの見本です。Tampermonkey の入れ方・止め方・外し方の練習用。
// @author       遊牧民
// @match        https://example.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/yubokumin28/tampermonkey-sample/main/tampermonkey-sample.user.js
// @downloadURL  https://raw.githubusercontent.com/yubokumin28/tampermonkey-sample/main/tampermonkey-sample.user.js
// ==/UserScript==

(function () {
  'use strict';
  // example.com の一番上に緑の札を出すだけ。ほかのサイトでは動かない
  const tag = document.createElement('div');
  tag.textContent = '🦭 Tampermonkey で書き換えました(見本のスクリプトが動いています)';
  tag.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#16a34a;color:#fff;padding:18px 20px;font-size:22px;font-weight:700;text-align:center;font-family:sans-serif;';
  document.body.prepend(tag);
})();
