
const updateTime = ()=>{ 
  let d = new Date()
  usa.innerHTML = d.toLocaleString('en-US', {
  timeZone: 'America/Los_Angeles',
}).split(", ")[1]
  Bangladesh.innerHTML = d.toLocaleString('en-US', {
  timeZone: 'Asia/Dhaka',
}).split(", ")[1]
  china.innerHTML = d.toLocaleString('en-US', {
  timeZone: 'Asia/Shanghai',
}).split(", ")[1]

let alarmhour = alarm.value.split(":")[0]
let alarmmin = alarm.value.split(":")[1]

}
setInterval(updateTime, 1000);
