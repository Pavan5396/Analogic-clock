const secondHand = document.querySelector(".second")
const minuteHand = document.querySelector(".min")
const hourHand = document.querySelector(".hour")

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds()
    const secondsDegree = ((seconds/60)*360)+270;
    secondHand.style.transform=`rotate(${secondsDegree}deg)`

    const minutes = now.getMinutes()
    const minutesDegree = ((minutes/60)*360)+270;
    minuteHand.style.transform=`rotate(${minutesDegree}deg)`

    const hours = now.getHours()
    const hoursDegree = ((hours/12)*360)+270;
    hourHand.style.transform=`rotate(${hoursDegree}deg)`
}

setInterval(setDate,1000)