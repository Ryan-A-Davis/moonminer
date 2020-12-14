let cheese = 0
let autoMod = 0
let clickMod = 0


let theMoon = {
  img: "data:image/jpeg;base64,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"
}


let onclickBuffs = {
  drill: {
    multiplier: 1,
    cost: 20,
    quantity: 0
  },
  laser: {
    multiplier: 10,
    cost: 100,
    quantity: 0
  }
}

let autoUpgrades = {
  worker: {
    multiplier: 5,
    cost: 1000,
    quantity: 0
  },
  manager: {
    multiplier: 50,
    cost: 10000,
    quantity: 0
  }
}


function mine() {
  cheese += (1 + clickMod)
  draw()
}

function update() {
  cheese += autoMod
  draw()
}

function buyA(itemBought) {
  if (cheese < autoUpgrades[itemBought].cost) {
    alert('not enough resorces')
  } else {
    cheese -= autoUpgrades[itemBought].cost
    autoUpgrades[itemBought].quantity += 1
    autoUpgrades[itemBought].cost += Math.ceil(autoUpgrades[itemBought].cost * .4)
    autoMod += autoUpgrades[itemBought].multiplier
  }
  draw()
}
function buyC(itemBought) {
  if (cheese < onclickBuffs[itemBought].cost) {
    alert('not enough resources')
  } else {
    cheese -= onclickBuffs[itemBought].cost
    onclickBuffs[itemBought].quantity += 1
    onclickBuffs[itemBought].cost += Math.ceil(onclickBuffs[itemBought].cost * .4)
    clickMod += onclickBuffs[itemBought].multiplier
  }
  draw()

}

function draw() {
  document.getElementById('target').innerHTML = `<div href="" onclick="mine()">
    <img src="${theMoon.img}" alt=""></div>`
  document.getElementById('total-cheese').innerText = `${cheese}`
  document.getElementById('total-cheese').innerText = `${cheese}`
  document.getElementById('drill-count').innerText = `${onclickBuffs.drill.quantity}`
  document.getElementById('laser-count').innerText = `${onclickBuffs.laser.quantity}`
  document.getElementById('worker-count').innerText = `${autoUpgrades.worker.quantity}`
  document.getElementById('manager-count').innerText = `${autoUpgrades.manager.quantity}`
  document.getElementById('drill-cost').innerText = `${onclickBuffs.drill.cost}`
  document.getElementById('laser-cost').innerText = `${onclickBuffs.laser.cost}`
  document.getElementById('worker-cost').innerText = `${autoUpgrades.worker.cost}`
  document.getElementById('manager-cost').innerText = `${autoUpgrades.manager.cost}`
  document.getElementById('click-buffs').innerText = `${clickMod}`
  document.getElementById('auto-upgrades').innerText = `${autoMod}`

}
setInterval(update, 1000)

draw()


