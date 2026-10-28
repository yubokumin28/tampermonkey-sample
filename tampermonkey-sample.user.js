// ==UserScript==
// @name         Tampermonkey の見本(遊牧民)
// @namespace    https://github.com/yubokumin28/tampermonkey-sample
// @version      1.0.0
// @description  example.com の見出しを書き換えるだけの見本です。Tampermonkey の入れ方・止め方・外し方の練習用。
// @author       遊牧民
// @match        https://example.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/yubokumin28/tampermonkey-sample/main/tampermonkey-sample.user.js
// @downloadURL  https://raw.githubusercontent.com/yubokumin28/tampermonkey-sample/main/tampermonkey-sample.user.js
// ==/UserScript==

(function () {
  'use strict';
  // example.com の一番大きな見出しを書き換え、緑の札を付けるだけ。ほかのサイトでは動かない
  const h1 = document.querySelector('h1');
  if (!h1) return;
  h1.textContent = 'Tampermonkey で書き換えました🦭';
  const tag = document.createElement('p');
  tag.textContent = '✅ 見本のスクリプトが動いています(止めると元の「Example Domain」に戻ります)';
  tag.style.cssText = 'background:#16a34a;color:#fff;padding:8px 12px;border-radius:8px;font-weight:700;';
  h1.after(tag);
})();
