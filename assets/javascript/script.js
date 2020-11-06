/**
* @fileOverview svelte - the lightweight modern DOM manipulation and events library
* @author Matt Begent
* @version 1.4.3 
*/
! function (window, document) {
    "use strict";
    var svelteProto = {
        aos: function (){
            //Only Use the IntersectionObserver if it is supported
            if (IntersectionObserver) {
                //When the element is visible on the viewport, 
                //add the _a_completed class so it creates the _aos.
                let callback = function(entries) {
                    entries.forEach(entry => {
                        //if the element is visible, add the _a_completed class
                        if (entry.isIntersecting && !entry.target.classList.contains('_a_completed')) {
                            entry.target.classList.add('_a_completed');
                        }
                        else{
                          entry.target.classList.remove('_a_completed');
                        }
                    });
                }
                //Create the observer
                let observer = new IntersectionObserver(callback, {
                    root: null,
                    threshold: 0.2
                });
        
                //Get and observe all the items with the item class
                let items = document.querySelectorAll("[class*=_aos]");
                items.forEach((item) => {
                    observer.observe(item);
                });
            }
        },
        ready: function (callback) {
            if (document.readyState != 'loading'){
                callback();
              } else {
                document.addEventListener('DOMContentLoaded', callback);
              }
            return this
        },
        each: function (callback) {
            for (var i = 0, len = this.s.length; i < len; i++) callback(this.s[i]);
            return this
        },
        find: function (selector) {
            return new Svelte(selector, this.s[0])
        },
        css: function (property, value) {
            return value ? this.each((function (el) {
                el.style[property] = value
            })) : getComputedStyle(this.s[0])[property]
        },
        hide: function () {
            return this.each((function (el) {
                el.style.display = "none"
            }))
        },
        show: function (callback) {
            return this.each((function (el) {
                el.style.display = "block"
                if(callback)callback()
            }))
        },
        fade: function (status,callback) {
            return this.each((function (el) {
                if(status=="out"){
                    var opacity = 1;
                    var timer = setInterval(function(){
                        if(opacity < 0.1){
                            clearInterval(timer);
                            el.style.display = "none";
                            callback(); //this executes the callback function!
                        }
                        el.style.opacity = opacity;
                        opacity -=  0.1;
                    }, 50);
                }else{
                    var opacity = 0;
                    el.style.opacity = opacity;
                    el.style.display = "block";
                    var timer = setInterval(function(){
                        if(opacity > 1){
                            clearInterval(timer);
                            if(callback)callback();
                        }
                        el.style.opacity = opacity;
                        opacity +=  0.1;
                    }, 50);
                }
            }))
        },
        visible: function () {
            return this.s.length > 0 && (this.s[0].offsetWidth > 0 || this.s[0].offsetHeight > 0)
        },
        toggle: function () {
            return this.each((function (el) {
                "" === el.style.display || "block" === el.style.display ? el.style.display = "none" : el.style.display = "block"
            }))
        },
        addClass: function (className) {
            return this.each((function (el) {
                el.classList.add(className)
            }))
        },
        removeClass: function (className) {
            return this.each((function (el) {
                el.classList.remove(className)
            }))
        },
        toggleClass: function (className) {
            return this.each((function (el) {
                el.classList.toggle(className)
            }))
        },
        hasClass: function (className) {
            return this.s.length > 0 && this.s[0].classList.contains(className)
        },
        on: function (name, callback) {
            return this.each((function (el) {
                name.split(" ").forEach((function (ev) {
                    el.addEventListener(ev, callback)
                }))
            }))
        },
        one: function (name, callback) {
            return this.each((function (el) {
                name.split(" ").forEach((function (ev) {
                    var callbackWithRemove = function () {
                        callback(), el.removeEventListener(ev, callbackWithRemove)
                    };
                    el.addEventListener(ev, callbackWithRemove)
                }))
            }))
        },
        off: function (name, callback) {
            return this.each((function (el) {
                name.split(" ").forEach((function (ev) {
                    el.removeEventListener(ev, callback)
                }))
            }))
        },
        focus: function () {
            return this.s.length > 0 && this.s[0].focus(), this
        },
        blur: function () {
            return this.s.length > 0 && this.s[0].blur(), this
        },
        trigger: function (name, detail) {
            return this.each((function (el) {
                var triggerEvent = detail ? new CustomEvent(name, detail) : document.createEvent("HTMLEvents");
                detail || triggerEvent.initEvent(name, !0, !1), el.dispatchEvent(triggerEvent)
            }))
        },
        prev: function () {
            return this.s.length > 0 ? this.s = this.s[0].previousElementSibling : this.s = [], this
        },
        next: function () {
            return this.s.length > 0 ? this.s = this.s[0].nextElementSibling : this.s = [], this
        },
        first: function () {
            return this.s.length > 0 && (this.s = this.s[0]), this
        },
        last: function () {
            if (this.s.length > 0) {
                var arrayLength = this.s.length;
                this.s = this.s.slice(arrayLength - 1, arrayLength)
            }
            return this
        },
        parent: function () {
            return this.s.length > 0 && (this.s = this.s[0].parentNode), this
        },
        children: function () {
            return this.s.length > 0 ? this.s.slice.call(this.s[0].children) : this.s = [], this
        },
        append: function (position, html) {
            return this.each((function (el) {
                switch (position.toLowerCase()) {
                    case "before":
                        return el.insertAdjacentHTML("beforebegin", html);
                    case "after":
                        return el.insertAdjacentHTML("afterend", html);
                    case "atstart":
                        return el.insertAdjacentHTML("afterbegin", html);
                    case "atend":
                        return el.insertAdjacentHTML("beforeend", html)
                }
            }))
        },
        text: function (text) {
            return text ? this.each((function (el) {
                el.textContent = text
            })) : this.s[0].textContent.trim()
        },
        html: function (html) {
            return html ? this.each((function (el) {
                el.innerHTML = html
            })) : this.s[0].innerHTML
        },
        outerHTML: function (html) {
            return html ? this.each((function (el) {
                el.outerHTML = html
            })) : this.s[0].outerHTML
        },
        empty: function () {
            return this.each((function (el) {
                el.innerHTML = ""
            }))
        },
        clone: function () {
            return this.each((function (el) {
                el.clodeNode(!0)
            }))
        },
        remove: function () {
            return this.each((function (el) {
                el.parentNode.removeChild(el)
            }))
        },
        attr: function (name, value) {
            return value ? this.each((function (el) {
                el.setAttribute(name, value)
            })) : this.s[0].getAttribute(name)
        },
        removeAttr: function (name) {
            return this.each((function (el) {
                el.removeAttribute(name)
            }))
        },
        val: function (value) {
            return value ? this.each((function (el) {
                el.value = value
            })) : this.s.length > 0 ? this.s[0].value : void 0
        },
        length: function () {
            return this.s.length
        },
        height: function () {
            return this.s.length > 0 ? this.s[0].offsetHeight : null
        },
        width: function () {
            return this.s.length > 0 ? this.s[0].offsetWidth : null
        },
        position: function () {
            return this.s.length > 0 ? this.s[0].getBoundingClientRect() : null
        },
        matches: function (selector) {
            return this.s[0].matches(selector)
        },
        closest: function (selector) {
            return new Svelte(this.s[0].closest(selector))
        }
    };

    function Svelte(selector, context) {
        return Object.create(svelteProto, {
            s: {
                get: function () {
                    if ("string" == typeof selector) {
                        for (var startAt, nl = (("string" === context ? document.querySelectorAll(selector) : context) || document).querySelectorAll(selector), arr = [], i = 0, len = arr.length = nl.length; i < len; i++) arr[i] = nl[i];
                        return arr
                    }
                    return [selector]
                },
                set: function (value) {
                    selector = value
                }
            }
        })
    }
    "function" == typeof define && define.amd && define((function () {
        return Svelte
    })), window.$ = window.Svelte = Svelte, window.$.fn = svelteProto
}(window, document), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function closest(selector) {
    for (var node = this; node;) {
        if (node.matches(selector)) return node;
        node = node.parentElement
    }
    return null
});



const gt_btn = document.getElementById('gt-link');
// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
window.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (y > 0) {
    gt_btn.className = "gt-link show";
  } else {
    gt_btn.className = "gt-link hide";
  }
});

gt_btn.onclick = function (e) {
  e.preventDefault();
  if (document.documentElement.scrollTop || document.body.scrollTop > 0) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}