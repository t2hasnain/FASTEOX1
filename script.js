if (document.referrer && !document.referrer.includes(window.location.hostname)) {
    console.warn("You have been referred from an external domain: " + document.referrer);
}
if (window.location.protocol === 'https:') {
    const mixedContent = [...document.querySelectorAll('img[src^="http://"], script[src^="http://"], link[href^="http://"]')];
    if (mixedContent.length > 0) {
        console.warn("Warning: Mixed content detected. This may compromise privacy.");
    }
}
if (window.top !== window.self) {
    console.warn("This page is being loaded in an iframe. This might be a security risk (clickjacking).");
    // Optionally, break out of the iframe:
    window.top.location = window.location;
}
Object.defineProperty(document, 'cookie', {
    get: function() {
        console.warn("Warning: An attempt to access cookies was detected.");
        return '';
    },
    set: function(value) {
        console.warn("Warning: An attempt to set a cookie was detected.");
        return value;
    }
});
const suspiciousKeywords = ['login', 'secure', 'account', 'webmail'];
const url = window.location.href.toLowerCase();
const isSuspicious = suspiciousKeywords.some(keyword => url.includes(keyword));

if (isSuspicious) {
    console.warn("Warning: The URL contains suspicious keywords that might indicate a phishing attempt.");
}
