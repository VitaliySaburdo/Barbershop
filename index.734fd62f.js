window.onscroll=()=>function(){const e=document.getElementById("header"),t=e.offsetTop;window.pageYOffset>t?e.classList.add("js-no-transparency"):e.classList.remove("js-no-transparency")}(),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");e.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")}))})(),(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.remove("is-hidden"),window.addEventListener("keydown",n);const t=document.body;t.style.height="100vh",t.style.overflowY="hidden"}function o(){e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",n);const t=document.body;t.style.position="",t.style.top="",t.style.height="",t.style.overflowY=""}function n(e){"Escape"===e.code&&o()}e.openModalBtn.forEach((e=>{e.addEventListener("click",t)})),e.closeModalBtn.addEventListener("click",o),e.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&o()}))})();const e=document.querySelectorAll('.nav__list a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}));
//# sourceMappingURL=index.734fd62f.js.map