const accordionPanels = document.querySelectorAll('.panel')

accordionPanels.forEach(panel => {
    panel.addEventListener('click', e => {
        console.log(e)
        const panel = e.target.closest('.panel');
        const prevPanel = document.querySelector('.active-panel');
        if (prevPanel) {
            prevPanel.classList.remove('active-panel');
            prevPanel.classList.add('was-active');
            setTimeout(() => {
                prevPanel.classList.remove('was-active');
            }, 500);
        }
        panel.classList.add('active-panel');
    })
})

function expandAccordion (e) {
    console.log(e)
    const panel = e.target;
    const prevPanel = document.querySelector('.active-panel');
    prevPanel.classList.remove('active-panel');
    panel.classList.add('active-panel');
}