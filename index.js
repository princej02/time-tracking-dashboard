import { timeData } from './data/data.js'

const activitiesCard = document.querySelectorAll('.activities__card')

const workPrevious = document.querySelectorAll('.content-footer p')
const workCurrent = document.querySelectorAll('.content-body h1')


const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')


function displayDailyTime() {
  for(let i = 0; i < activitiesCard.length; i++) {
    let prevNum = timeData[i].timeframes.daily.previous
    let currNum = timeData[i].timeframes.daily.current
    workPrevious[i].textContent = `Last Week - ${prevNum}hrs`
    workCurrent[i].textContent = `${currNum}hrs`
  }
}


function displayWeeklyTime() {
  for(let i = 0; i < activitiesCard.length; i++) {
    let prevNum = timeData[i].timeframes.weekly.previous
    let currNum = timeData[i].timeframes.weekly.current
    workPrevious[i].textContent = `Last Week - ${prevNum}hrs`
    workCurrent[i].textContent = `${currNum}hrs`
  }
}

function displayMonthlyTime() {
  for(let i = 0; i < activitiesCard.length; i++) {
    let prevNum = timeData[i].timeframes.monthly.previous
    let currNum = timeData[i].timeframes.monthly.current
    workPrevious[i].textContent = `Last Week - ${prevNum}hrs`
    workCurrent[i].textContent = `${currNum}hrs`
  }
}

daily.addEventListener('click', displayDailyTime)

weekly.addEventListener('click', displayWeeklyTime)

monthly.addEventListener('click', displayMonthlyTime)


