// Immediately invoked function expression
// to not pollute the global scope
document.addEventListener('DOMContentLoaded', () => {
    const arrCont = document.getElementById("array-container")

    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg = 0;

    startButton.addEventListener('click', () => {
        // Disable button during spin
        startButton.style.pointerEvents = 'none';
        // Calculate a new rotation between 5000 and 10 000
        deg = Math.floor(5000 + Math.random() * 5000);
        // Set the transition on the wheel
        wheel.style.transition = 'all 10s ease-out';
        // Rotate the wheel
        wheel.style.transform = `rotate(${deg}deg)`;
        // Apply the blur
        wheel.classList.add('blur');

        arrCont.innerHTML = ""
        arrCont.append("[" + `${generateArray().map(obj => JSON.stringify(obj))}` + "]")
    });

    wheel.addEventListener('transitionend', () => {
        // Remove blur
        wheel.classList.remove('blur');
        // Enable button when spin is over
        startButton.style.pointerEvents = 'auto';
        // Need to set transition to none as we want to rotate instantly
        wheel.style.transition = 'none';
        // Calculate degree on a 360 degree basis to get the "natural" real rotation
        // Important because we want to start the next spin from that one
        // Use modulus to get the rest value from 360
        const actualDeg = deg % 360;
        // Set the real rotation instantly without animation
        console.log(`actual degree: ${actualDeg}`)
        wheel.style.transform = `rotate(${actualDeg}deg)`;
    });

    function generateArray() {
        // I want to assign rand to be a number from 0 to 6

        let rand = 10
        while (rand >= arrays.length) {
            rand = Math.floor(Math.random() * 10)
        }
        console.log("made it out: ", rand)
        console.log(arrays)
        return arrays[rand]
    }
})



