// Javascript file
// Not sure what Im adding here yet

let buttonFunction = () => {
    let hiddenButton = document.getElementById('hidden-neon-buttons')
    if (hiddenButton.style.visibility === 'hidden') {
        hiddenButton.style.visibility = 'visible';
    } else {
        hiddenButton.style.visibility = 'hidden';
    }
}