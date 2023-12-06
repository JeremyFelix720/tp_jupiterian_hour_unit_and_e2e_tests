/*
const moon_dial = 1
const earth_dial = 1
const sun_dial = 1
*/

export function getValueFromDials(moon_dial: number, earth_dial: number, sun_dial: number){
  let total = 0;

  total += moon_dial + sun_dial;
  if(sun_dial == 2) {
    total += earth_dial*2;
  }

  if(sun_dial == 2){
    if(earth_dial == 1){
      total += 2;
    } else if(earth_dial == 2 || earth_dial == 4) {
      return 6;
    }
  }

  if(moon_dial == 1){
    total -= 2;
  } else if(moon_dial == 2){
    total /= 2;
  }

  return total;
}

export function getHourFromValue(value: number) {
  if(value <= 1){
    return "mortin"
  }
  else if(value > 1 && value <= 2){
    return "aprenoon"
  }
  else if(value > 2 && value <= 4){
    return "soirning"
  }
  else {
    return "nuight"
  }
};