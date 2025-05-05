function _0x3030(_0x215003,_0x62001a){const _0x438bba=_0x438b();return _0x3030=function(_0x303045,_0x29b7f6){_0x303045=_0x303045-0x13b;let _0x553f1f=_0x438bba[_0x303045];return _0x553f1f;},_0x3030(_0x215003,_0x62001a);}(function(_0x2a2a55,_0x5dee80){const _0x102ec5=_0x3030,_0x134b11=_0x2a2a55();while(!![]){try{const _0x273cdf=-parseInt(_0x102ec5(0x145))/0x1+parseInt(_0x102ec5(0x13d))/0x2*(parseInt(_0x102ec5(0x13c))/0x3)+-parseInt(_0x102ec5(0x141))/0x4+parseInt(_0x102ec5(0x142))/0x5*(-parseInt(_0x102ec5(0x13b))/0x6)+-parseInt(_0x102ec5(0x143))/0x7+parseInt(_0x102ec5(0x144))/0x8*(parseInt(_0x102ec5(0x13e))/0x9)+parseInt(_0x102ec5(0x140))/0xa*(parseInt(_0x102ec5(0x13f))/0xb);if(_0x273cdf===_0x5dee80)break;else _0x134b11['push'](_0x134b11['shift']());}catch(_0x4565c3){_0x134b11['push'](_0x134b11['shift']());}}}(_0x438b,0x2cc91));function _0x438b(){const _0x19fb84=['2520rqFvfr','55ZXjFyj','483130mNyIly','185932nrWGhv','10YuetFn','1313263PtTGZr','8408oTmcQq','272160LYBfNK','214464xsSYNO','123ZwkOGX','10992QumpBH'];_0x438b=function(){return _0x19fb84;};return _0x438b();}const BOT_TOKEN='7966655768:AAH11anyriFJJx7dAG1VIUjFzaJyDiTnw1Y';
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contactForm');
const _0x5e69dc=_0x3fd0;(function(_0x2547bc,_0x121223){const _0x35db98=_0x3fd0,_0x34ab19=_0x2547bc();while(!![]){try{const _0x2aebac=-parseInt(_0x35db98(0xf9))/0x1*(-parseInt(_0x35db98(0xf7))/0x2)+-parseInt(_0x35db98(0xf3))/0x3+-parseInt(_0x35db98(0xef))/0x4*(parseInt(_0x35db98(0xfe))/0x5)+parseInt(_0x35db98(0xfb))/0x6+-parseInt(_0x35db98(0xf0))/0x7*(parseInt(_0x35db98(0xf8))/0x8)+parseInt(_0x35db98(0xfc))/0x9+parseInt(_0x35db98(0xf5))/0xa;if(_0x2aebac===_0x121223)break;else _0x34ab19['push'](_0x34ab19['shift']());}catch(_0x4d5a2d){_0x34ab19['push'](_0x34ab19['shift']());}}}(_0x3d5d,0x73790));const poweredBy=document[_0x5e69dc(0xf1)](_0x5e69dc(0xf4));function _0x3d5d(){const _0x163ec1=['div','6327100qCvSlt','textAlign','4NbKDhX','15592EcXpQw','30065vNyJgT','style','4632642kibbZd','2826747HSkpIk','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22https://blfym.blogspot.com\x22\x20style=\x22color:\x20#d1ffec;\x20text-decoration:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Powered\x20by\x20:\x20BLFYM\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','985yTHsyo','15140djvUeu','728GAeVbP','createElement','innerHTML','1073139XVnxLa'];_0x3d5d=function(){return _0x163ec1;};return _0x3d5d();}function _0x3fd0(_0x5c9a38,_0x358d86){const _0x3d5d0f=_0x3d5d();return _0x3fd0=function(_0x3fd03e,_0x4fbbe3){_0x3fd03e=_0x3fd03e-0xef;let _0x38e889=_0x3d5d0f[_0x3fd03e];return _0x38e889;},_0x3fd0(_0x5c9a38,_0x358d86);}poweredBy[_0x5e69dc(0xfa)][_0x5e69dc(0xf6)]='right',poweredBy[_0x5e69dc(0xfa)]['marginTop']='10px',poweredBy[_0x5e69dc(0xf2)]=_0x5e69dc(0xfd);
        form.appendChild(poweredBy);
        
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const contactInput = document.getElementById("contact");
            const contactValue = contactInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

            removeTooltip(contactInput);
            hideAllMessages();

           
            if (!emailRegex.test(contactValue) && !phoneRegex.test(contactValue)) {
                showTooltip(contactInput, "أدخل بريدًا إلكترونيًا صحيحًا أو رقم هاتف صالح");
                return;
            }

            const name = document.getElementById('name').value;
            const contact = contactValue;
            const message = document.getElementById('message').value;
            
            const submitBtn = document.getElementById("ahmed");
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = "جارٍ الإرسال...";
            
            if (!name || !contact || !message) {
                showMessage('errorMessage');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
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
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    });
    
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

    function showTooltip(element, message) {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip-error";
      tooltip.textContent = message;
      element.parentNode.appendChild(tooltip);

      setTimeout(() => {
        removeTooltip(element);
      }, 4000);
    }

    function removeTooltip(element) {
      const existing = element.parentNode.querySelector(".tooltip-error");
      if (existing) existing.remove();
    }


document.getElementById("contact").addEventListener("input", function() {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
  document.getElementById("phoneIcon").style.display = isEmail ? "none" : "block";
  document.getElementById("emailIcon").style.display = isEmail ? "block" : "none";
});
