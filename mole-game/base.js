const deadCount = document.getElementById('dead')
const lostCount = document.getElementById('lost')
const allHoles = document.getElementsByClassName('hole')
for (let hole of allHoles) {
    hole.onclick = () => {
        if(hole.classList.contains( 'hole_has-mole' )) {
            deadCount.textContent = Number(deadCount.textContent) + 1
            
        }else {
            lostCount.textContent = Number(lostCount.textContent) + 1    
        }
        
        if (deadCount.textContent == 10) {
            alert('Победа!')
            resetScore(alert)
            // deadCount.textContent = 0
            // lostCount.textContent = 0
        }else if(lostCount.textContent == 5) {
            alert('Вы проиграли!')
            resetScore(alert)
        //     deadCount.textContent = 0
        //     lostCount.textContent = 0
        }

    }
}

//  C помощью функции

function resetScore (alert) {
    if (alert) {
        deadCount.textContent = 0
        lostCount.textContent = 0
    }
}
