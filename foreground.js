// Check subdomain and run  psp function
const host = window.location.host;
const subdomain = host.split('.')[0];
switch (subdomain) {
    case 'sep':
        sepHandler();
    case 'sadad':
        sadadHandler();
        break;
    case 'pep':
        pepHandler();
        break;
    case 'asan':
        asanHandler();
        break;
    // case 'ikc':
    //     ikcHandler();
        break;
    case 'bpm':
        bpmHandler();
        break;
    case 'sepehr':
        sepehrHandler();
        break;
    case 'pec':
        pecHandler();
        break;
    case 'pna':
        pnaHandler();
        break;
    default:
        break;
}


function sepHandler() {
    if (window.document.querySelector('.captcha-img')) {
        // Observe to inform from captcha image change
        observeImageChange('.captcha-img', async (image) => {
            window.document.querySelector('#CaptchaInputText').value = 'Loading...'
            const captcha = window.document.querySelector('.captcha-img').src;
            const res = await collectCaptcha(captcha);
            if (res.length == 5) {
                // Result is ok and set to input
                window.document.querySelector('#CaptchaInputText').value = res;
            } else {
                // Refresh and try again
                window.document.querySelector('.input-group .action').click();
            }
        })
    } else if (window.document.querySelector('#CaptchaImage')) {
        // It is a another UI of Sep
        observeImageChange('#CaptchaImage', async (image) => {
            window.document.querySelector('#txtSecurityCode').value = 'Loading...'
            const captcha = window.document.querySelector('#CaptchaImage').src;
            const res = await collectCaptcha(captcha);
            if (res.length == 5) {
                window.document.querySelector('#txtSecurityCode').value = res;
            } else {
                window.document.querySelector('.refreshimage').click();
            }
        })
    }
}
function sadadHandler() {
    if (window.document.querySelector('img.payment-captcha')) {
        observeImageChange('img.payment-captcha', async (image) => {
            window.document.querySelector('input.captcha-stop').value = null;
            const captcha = window.document.querySelector('img.payment-captcha').src;
            const res = await collectCaptcha(captcha);
            if (res.length == 5) {
                window.document.querySelector('input.captcha-stop').value = res;
            } else {
                window.document.querySelector('.refresh-button').click();
            }
        })
    }
}
function pepHandler() {
    console.log(window.document.querySelector('img.captcha-image'));
    
    if (window.document.querySelector('img.captcha-image')) {
        window.document.querySelectorAll('.input-center')[1].setAttribute('data-next-input', 'pin2');
        observeImageChange('img.captcha-image', async (image) => {
            window.document.querySelector('#field-3').value = 'Loading...';
            const captcha = window.document.querySelector('img.captcha-image').src;
            const res = await collectCaptcha(captcha);
            if (res.length == 5) {
                window.document.querySelector('#field-3').focus();
                setTimeout(() => {
                    // window.document.querySelector('#field-3').value = res;
                    pepKeypad(res);
                    setTimeout(() => {
                        window.document.querySelector('#field-3').blur();
                        
                    }, 500);
                }, 299);
            } else {
                window.document.querySelectorAll('.btn')[12].click();
            }
        })
        window.document.querySelectorAll('.btn')[12].click();
    } else {
        setTimeout(() => {
            pepHandler();
        }, 200);
    }
}
function pepKeypad(text) {
    for (let i = 0; i < text.length; i++) {
        const digit = text[i];
        Array.from(window.document.querySelectorAll('.keypad-table .keypad-btn')).find(kp => kp.innerText == digit).click();
    }
}
function asanHandler() {
    if (window.document.querySelector('.captcha-image')) {
        observeImageChange('.captcha-image', async (image) => {
            window.document.querySelector('.captcha-input').value = 'Loading...';
            const captcha = window.document.querySelector('.captcha-image').src;
            const res = await collectCaptcha(captcha);
            if (res.length == 5) {
                window.document.querySelector('.captcha-input').value = res;
            } else {
                window.document.querySelector('#captcha-image-refresh').click();
            }
        })
        window.document.querySelector('#captcha-image-refresh').click();
    }
}
function ikcHandler() {
    console.log(window.document.querySelector('.captcha-pass-height img'));
    
    // window.alert('IKC')

    if (window.document.querySelector('.captcha-pass-height img')) {
        window.alert('IKC2')
        
        observeImageAdd('.captcha-pass-height img', async (image) => {
            window.alert('CH')
            window.document.querySelectorAll('input')[4].value = 'Loading...'
            const captcha = window.document.querySelector('.captcha-pass-height  img').src;
            const res = await collectCaptcha(captcha);
            if (res.length == 5) {
                window.document.querySelectorAll('input')[4].value = res;
            } else {
                window.document.querySelectorAll('a.button-font-size')[3].click()
            }
        })
    } else {
        setTimeout(() => {
            
            ikcHandler();
        }, 200);
    }
}
async function bpmHandler(processCaptcha=false) {
    if (processCaptcha) {
        const img = window.document.querySelector('#captcha-img');
        const canvas = window.document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const captcha = canvas.toDataURL('image/png');
        const res = await collectCaptcha(captcha);
        if (res.length == 5) {
            window.document.querySelector('#inputcaptcha').value = res;
        } else {
            window.document.querySelector('#captcha-button').click();
        }
        return true;
    }
    if (window.document.querySelector('#captcha-img')) {
        observeImageChange('#captcha-img', async (image) => {
            window.document.querySelector('#inputcaptcha').value = 'Loading...';
            setTimeout(() => {
                bpmHandler(true);
            }, 1000);
        });
        window.document.querySelector('#inputcaptcha').value = 'Loading...';
        setTimeout(() => {
            bpmHandler(true);
        }, 1000);
    }
}
async function sepehrHandler(processCaptcha=false) {
    if (processCaptcha) {
        const img = window.document.querySelector('#captchaImg');
        const canvas = window.document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const captcha = canvas.toDataURL('image/png');
        const res = await collectCaptcha(captcha);
        if (res.length == 5) {
            window.document.querySelector('#captchaInput').value = res;
        } else {
            window.document.querySelectorAll('.pay-btn')[4].click();
        }
        return true;
    }
    if (window.document.querySelector('#captchaImg')) {
        observeImageChange('#captchaImg', async (image) => {
            window.document.querySelector('#captchaInput').value = 'Loading...';
            setTimeout(() => {
                sepehrHandler(true);
            }, 1000);
        });
        window.document.querySelector('#captchaInput').value = 'Loading...';
        setTimeout(() => {
            sepehrHandler(true);
        }, 1000);
    }
}
async function pecHandler(processCaptcha=false) {
    if (processCaptcha) {
        const img = window.document.querySelector('#imgc1');
        const canvas = window.document.createElement('canvas');
        canvas.width = img.width * 1.4;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const captcha = canvas.toDataURL('image/png');
        const res = await collectCaptcha(captcha);
        if (res.length == 5) {
            window.document.querySelector('#Captcha').value = res;
        } else {
            window.document.querySelectorAll('.captcha-holder a')[1].click();
        }
        return true;
    }
    if (window.document.querySelector('#imgc1')) {
        observeImageChange('#imgc1', async (image) => {
            window.document.querySelector('#Captcha').value = 'Loading...';
            setTimeout(() => {
                pecHandler(true);
            }, 1000);
        });
        window.document.querySelector('#Captcha').value = 'Loading...';
        setTimeout(() => {
            pecHandler(true);
        }, 1000);
    }
}
async function pnaHandler(processCaptcha=false) {
    if (processCaptcha) {
        const img = window.document.querySelector('#img-captcha');
        const canvas = window.document.createElement('canvas');
        canvas.width = img.width * 2.5;
        canvas.height = img.height * 2.5;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const captcha = canvas.toDataURL('image/png');
        const res = await collectCaptcha(captcha);
        if (res.length == 5) {
            window.document.querySelector('#Captcha').value = res;
        } else {
            window.document.querySelector('#captcha-button-refresh').click();
        }
        return true;
    }
    if (window.document.querySelector('#img-captcha')) {
        observeImageChange('#img-captcha', async (image) => {
            window.document.querySelector('#Captcha').value = 'Loading...';
            setTimeout(() => {
                pnaHandler(true);
            }, 1000);
        });
        window.document.querySelector('#Captcha').value = 'Loading...';
        setTimeout(() => {
            pnaHandler(true);
        }, 1000);
    }
}
function observeImageChange(selector, onChangeCallback) {
    // Select the target element (image) by its CSS selector
    const imageElement = document.querySelector(selector);

    // If the image element is not found, return early
    if (!imageElement) {
        console.error(`No image found for selector: ${selector}`);
        return;
    }

    // Create a MutationObserver instance and pass it a callback function
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                onChangeCallback(imageElement);
            }
        }
    });

    // Set up the observer to watch for changes to the 'src' attribute of the image
    observer.observe(imageElement, {
        attributes: true, // Watch for changes in attributes
        attributeFilter: ['src'], // Only watch the 'src' attribute
    });

    // Return a function to stop observing if needed
    return () => observer.disconnect();
}
function observeImageAdd(selector, onChangeCallback) {
    // Create a MutationObserver to watch the entire DOM for changes
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            // Check if any nodes were added
            mutation.addedNodes.forEach((node) => {
                // If an element matching the selector is added, trigger the callback
                if (node instanceof Element && node.matches(selector)) {
                    onChangeCallback(node);
                }
            });
        }
    });

    // Start observing the document's body for added/removed child elements
    observer.observe(document.body, {
        childList: true,  // Watch for direct children changes
        subtree: true,    // Watch across all levels of the DOM
    });

    // Return a function to stop observing if needed
    return () => observer.disconnect();
}

// Usage example
function filterNumbers(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        if (isNumeric(inputString[i])) {
            result = result + String(inputString[i])
        }
        
    }
    return result;
}
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
async function collectCaptcha(captcha) {
    const worker = await Tesseract.createWorker('eng');
    await worker.setParameters({
        tessedit_char_whitelist: '0123456789',
    });
    const ret = await worker.recognize(captcha);
    await worker.terminate();
    return filterNumbers(ret.data.text);
}