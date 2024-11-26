function goToIndex() {
    window.location.href = 'index.html';
}

window.onload = function() {
    document.getElementById('mainmenu').addEventListener('click', goToIndex);
};