const fileInput = document.getElementById('fileInput');
const downloadLink = document.getElementById('downloadLink');

fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        downloadLink.href = fileURL;
        downloadLink.download = file.name;
        downloadLink.style.display = 'inline-block';
        downloadLink.textContent = `Download ${file.name}`;

        // Animation for download link
        downloadLink.style.opacity = '0';
        setTimeout(() => {
            downloadLink.style.opacity = '1';
            downloadLink.style.transform = 'translateY(0)';
        }, 100);
    }
});
