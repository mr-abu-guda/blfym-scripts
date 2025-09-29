// cookiebox.js
(function () {
    // --- إنشاء صندوق الكوكيز عبر innerHTML ---
    const style = `
    <style>
    .blfym-CookieBox {
        position: fixed;
        bottom: 20px;
        right: 20px;
        max-width: 350px;
        background: #fff;
        padding: 20px;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 9999;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .blfym-CookieBox.hide {
        opacity: 0;
        pointer-events: none;
        transform: scale(0.95);
    }
    .blfym-CookieBox img {
        max-width: 60px;
        margin-bottom: 10px;
    }
    .blfym-CookieContent p {
        padding: 0 10px;
        line-height: 1.6;
        color: #333;
        font-size: 15px;
    }
    .blfym-CookieButtons {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
    }
    .blfym-CookieButtons button, .blfym-CookieButtons a {
        padding: 8px 20px;
        border: none;
        outline: none;
        font-size: 15px;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.3s ease;
        text-decoration: none;
        margin: 5px;
    }
    .blfym-CookieButtons button {
        color: #fff;
        background: #007BFF;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .blfym-CookieButtons button:hover {
        background: #0056b3;
        transform: scale(1.02);
    }
    .blfym-CookieButtons a {
        color: #007BFF;
        background: #f9f9f9;
    }
    .blfym-CookieButtons a:hover {
        background: #f0f0f0;
    }
    @media only screen and (max-width: 680px) {
        .blfym-CookieBox { width: 90%; border-radius: 8px; }
        .blfym-CookieBox img { display: none; }
        .blfym-CookieButtons { flex-direction: column; }
        .blfym-CookieButtons button, .blfym-CookieButtons a { width: 80%; }
    }
    </style>
    `;

    const html = `
    <div class="blfym-CookieBox">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhuzSHlv7Bn88mupD8lar42B4OajXfIvR_PNEFGT90L5U5BjVJ6UqZ-VvzS96nBXDYungiIAKeWmhSLRPqhzHwM-MH9jayDe72DW6Mo37EtEQ7E0FvNECDrx1Qjq4aNuFm5p-vEjqujYbf/s512/BergStockCookie.png" alt="تعريف الارتباط" />
        <div class="blfym-CookieContent">
            <p>نستخدم ملفات تعريف الارتباط لضمان حصولك على أفضل تجربة.</p>
            <div class="blfym-CookieButtons">
                <button class="blfym-Items">قبول</button>
                <a href="https://policies.google.com/technologies/partner-sites" class="blfym-Items" target="_blank">معرفة المزيد</a>
            </div>
        </div>
    </div>
    `;

    // --- إدخال الـ style + html داخل الصفحة ---
    document.body.insertAdjacentHTML("beforeend", style + html);

    const CookieBox = document.querySelector(".blfym-CookieBox");
    const AcceptBergCookie = CookieBox.querySelector("button.blfym-Items");

    // عند الضغط على "قبول"
    AcceptBergCookie.onclick = () => {
        document.cookie = "Cookie=BergStock; max-age=" + 60 * 60 * 24 * 3;
        if (document.cookie.indexOf("Cookie=BergStock") !== -1) {
            CookieBox.classList.add("hide");
        } else {
            alert("يرجى تعطيل الحظر على ملفات تعريف الارتباط");
        }
    };

    // تحقق إذا الكوكيز موجود
    if (document.cookie.indexOf("Cookie=BergStock") !== -1) {
        CookieBox.classList.add("hide");
    }
})();
