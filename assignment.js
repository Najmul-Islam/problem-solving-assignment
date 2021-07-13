//

// Kilomiter to Meter
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "input valid kilometer";
  }
  return kilometer * 1000;
}
kilometerToMeter();

// Budget Calculator
function budgetCalculator(watch, phone, laptop) {
  if (watch && phone && laptop < 0) {
    return "input valid budget";
  }
  return watch * 50 + phone * 100 + laptop * 500;
}
budgetCalculator();

// Hotel Cost
function hotelCost(day) {
  if (day < 11) {
    return day * 100;
  } else if (day > 10 && day < 20) {
    let discount = day - 10;
    return discount * 80 + 10 * 1000;
  } else if (day > 20) {
    let doubleDiscount = day - 20;
    return doubleDiscount * 50 + 10 * 100 + 10 * 80;
  } else {
    return "Input valid day";
  }
}
hotelCost();

// mega Friend
function megaFriend(name) {
  let largeName = "";
  for (let i = 0; i < name.length; i++) {
    if (name[i].length > largeName.length) {
      largeName = name[i];
    }
  }
  return largeName;
}
megaFriend();
