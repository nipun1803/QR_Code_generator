window.onload = function () {
    let imagebox = document.getElementById('imagebox');
    let QR_Image = document.getElementById('QR-Image');
    let QR_text = document.getElementById('QR_text');

    function generateqr() {
        let text = QR_text.value.trim();  
        if (text.length > 0) {
            let qr_url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(text);
            QR_Image.src = qr_url;  
            imagebox.classList.add('show-img'); 
            QR_text.classList.remove('error'); 
        } else {
            QR_text.classList.add('error');
            setTimeout(() => {
                QR_text.classList.remove('error');
            }, 1000);
        }
    }
    document.querySelector("button").addEventListener("click", generateqr);
};