function darklight() {
    document.body.classList.toggle("dark-mode");
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darklight()
};

