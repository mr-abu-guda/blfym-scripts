function _0x17ad(_0x4a0248,_0x1929ca){const _0x169c69=_0x169c();return _0x17ad=function(_0x17ad47,_0x2bc582){_0x17ad47=_0x17ad47-0x148;let _0x2db784=_0x169c69[_0x17ad47];return _0x2db784;},_0x17ad(_0x4a0248,_0x1929ca);}const _0x1614eb=_0x17ad;function _0x169c(){const _0xa478c3=['7966655768:AAH11anyriFJJx7dAG1VIUjFzaJyDiTnw1Y','1795363DszELH','4Fqpofx','6960oALZMK','5658mRFDtJ','342LRvbhT','3384220bnElsK','6456LkdABQ','29695020RgXzbs','1269784FAHAKg','1897827PCeyVs'];_0x169c=function(){return _0xa478c3;};return _0x169c();}(function(_0x55fbd7,_0x474ac5){const _0x5ef284=_0x17ad,_0x3e6159=_0x55fbd7();while(!![]){try{const _0x57f632=-parseInt(_0x5ef284(0x14d))/0x1+parseInt(_0x5ef284(0x14e))/0x2*(parseInt(_0x5ef284(0x14b))/0x3)+parseInt(_0x5ef284(0x14a))/0x4+-parseInt(_0x5ef284(0x14f))/0x5*(parseInt(_0x5ef284(0x150))/0x6)+-parseInt(_0x5ef284(0x152))/0x7+-parseInt(_0x5ef284(0x148))/0x8*(parseInt(_0x5ef284(0x151))/0x9)+parseInt(_0x5ef284(0x149))/0xa;if(_0x57f632===_0x474ac5)break;else _0x3e6159['push'](_0x3e6159['shift']());}catch(_0x4b5648){_0x3e6159['push'](_0x3e6159['shift']());}}}(_0x169c,0xe30e5));const BOT_TOKEN=_0x1614eb(0x14c);

        
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contactForm');
  const _0x556bf0=_0x3207;function _0x3207(_0x435ecc,_0x29501d){const _0x49514d=_0x4951();return _0x3207=function(_0x32079b,_0x3c5ce4){_0x32079b=_0x32079b-0x1a9;let _0x41c7b3=_0x49514d[_0x32079b];return _0x41c7b3;},_0x3207(_0x435ecc,_0x29501d);}(function(_0x308e4d,_0x42ab06){const _0x406feb=_0x3207,_0x20a5ef=_0x308e4d();while(!![]){try{const _0x52168c=-parseInt(_0x406feb(0x1af))/0x1+-parseInt(_0x406feb(0x1b6))/0x2+parseInt(_0x406feb(0x1ac))/0x3*(-parseInt(_0x406feb(0x1ae))/0x4)+-parseInt(_0x406feb(0x1b4))/0x5+parseInt(_0x406feb(0x1aa))/0x6*(parseInt(_0x406feb(0x1b2))/0x7)+parseInt(_0x406feb(0x1b0))/0x8+parseInt(_0x406feb(0x1ab))/0x9*(parseInt(_0x406feb(0x1b5))/0xa);if(_0x52168c===_0x42ab06)break;else _0x20a5ef['push'](_0x20a5ef['shift']());}catch(_0xdf2514){_0x20a5ef['push'](_0x20a5ef['shift']());}}}(_0x4951,0x348b7));function _0x4951(){const _0x221937=['textAlign','innerHTML','10px','30nvtfSB','441IzYVAJ','9gdaYiN','marginTop','448852xUZSuV','286604Vyvlmn','3073744hzIzww','right','414043cbeYpW','style','1833000AZgamb','180920GVqxTp','722810iCthfy','createElement'];_0x4951=function(){return _0x221937;};return _0x4951();}const poweredBy=document[_0x556bf0(0x1b7)]('div');poweredBy[_0x556bf0(0x1b3)][_0x556bf0(0x1b8)]=_0x556bf0(0x1b1),poweredBy[_0x556bf0(0x1b3)][_0x556bf0(0x1ad)]=_0x556bf0(0x1a9),poweredBy[_0x556bf0(0x1b9)]='\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22https://blfym.blogspot.com/2025/05/contact.html\x22\x20style=\x22color:\x20#d1ffec;\x20text-decoration:\x20none;\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Powered\x20by\x20:\x20BLFYM\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            form.appendChild(poweredBy);
    form.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const contact = document.getElementById('contact').value;
                const message = document.getElementById('message').value;
                
                hideAllMessages();
                
                if (!name || !contact || !message) {
                    showMessage('errorMessage');
                    return;
                }
                
                document.getElementById('msgName').textContent = name;
                document.getElementById('msgContact').textContent = contact;
                document.getElementById('msgText').textContent = message;
                
                const telegramMessage = document.getElementById('telegramMessageTemplate').textContent;
                const chatId1 = document.getElementById('firstChatId').textContent;
                
                try {
                    const result1 = await sendToTelegram(BOT_TOKEN, chatId1, telegramMessage);
                    
                    if (result1) {
                        showMessage('successMessage');
                        form.reset();
                    } else {
                        showMessage('errorMessage');
                    }
                } catch (error) {
                    console.error('حدث خطأ غير متوقع:', error);
                    showMessage('errorMessage');
                }
            });
        });
        
        // Rest of your functions remain the same
        function showMessage(elementId) {
            const element = document.getElementById(elementId);
            element.style.visibility = 'visible';
            element.style.opacity = '1';
            setTimeout(() => {
                element.style.visibility = 'hidden';
                element.style.opacity = '0';
            }, 5000);
        }
        
        function hideAllMessages() {
            document.getElementById('successMessage').style.visibility = 'hidden';
            document.getElementById('successMessage').style.opacity = '0';
            document.getElementById('errorMessage').style.visibility = 'hidden';
            document.getElementById('errorMessage').style.opacity = '0';
        }
        
        async function sendToTelegram(botToken, chatId, message) {
            try {
                const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message
                    })
                });
                
                const data = await response.json();
                return data.ok;
                
            } catch (error) {
                console.error(`خطأ في الإرسال إلى ${chatId}:`, error);
                return false;
            }
  }
