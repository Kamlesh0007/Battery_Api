const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(".batteryDisChargingTime");
const batteryStatus = document.querySelector(".batteryStatus");

const battery = () => {
  if ('getBattery' in navigator) {
    // console.log(navigator.getBattery()) //return promise
    navigator.getBattery().then(battery => {
      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateLevelChange();
        updateChargingTimeChangeInfo();
        updateDischargingInfo();
        updateStatusChange();
      }
      updateAllBatteryDetails();
      console.log(battery);

      // Battery charging change from 10% to 20%
      battery.addEventListener('chargingchange', () => {
        updateChargingInfo();
      });
      function updateChargingInfo() {
        const ischarging = battery.charging ? "Yes" : "No";
        
         console.log(ischarging);
        batteryCharging.innerHTML = ischarging;
      }

      //battery charging time
      battery.addEventListener('chargingtimechange', () => {
        // console.log("charging time has changed")
        updateChargingTimeChangeInfo();
      });
      function updateChargingTimeChangeInfo() {
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds"
      }
      //battery dischargng time
      battery.addEventListener('dischargingtimechange', () => {
        // console.log("charging time has changed")
        updateDischargingInfo();
      });
      function updateDischargingInfo() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds"
      }
      //battery level change
      battery.addEventListener('levelchange', () => {
        updateLevelChange();
      });
      function updateLevelChange() {
        const level = battery.level * 100 + "%";
        // console.log(level)
        batteryLevel.innerHTML = level;

      }
      // battery status
      battery.addEventListener('levelchange', () => {
        updateStatusChange();
      });
      function updateStatusChange() {
        const Level = battery.level * 100;
        // console.log(Level);
        if (Level <= 50) {

          batteryStatus.innerHTML = "Low Battery "
        }
        else if(Level == 100){
          batteryStatus.innerHTML = "Fully Charged "
        }
        else{
          batteryStatus.innerHTML = "Better Battery "
        }
      }
 
  

    

    })
  } 
}
battery();