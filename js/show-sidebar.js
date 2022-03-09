function showSidebar() {
    const hidden = document.getElementById('mobile_sidebar');

    if (hidden.style.display === "none") {
        hidden.style.display = "block";
    } else {
        hidden.style.display = "none";
    }
}