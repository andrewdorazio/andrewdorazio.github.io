// Javascript

let buttonFunction = () => {
    let hiddenButton = document.getElementById('hidden-neon-buttons')
    console.log(hiddenButton.style.visibility)
    if (hiddenButton.style.visibility === 'hidden') {
        hiddenButton.style.visibility = 'visible';
    } else {
        hiddenButton.style.visibility = 'hidden';
    }
}

