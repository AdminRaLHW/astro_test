export function initApp() {
    const btn = document.getElementById('colorBtn');
    const colors = ['#f8d7da', '#d1ecf1', '#d4edda', '#fff3cd', '#ffffff'];
    let index = 0;

    btn.addEventListener('click', () => {
        index = (index + 1) % colors.length;
        document.body.style.backgroundColor = colors[index];
        console.log("Farbe geändert auf: " + colors[index]);
    });
}