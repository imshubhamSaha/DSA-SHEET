class Solution {
  /**
    * @param number date
    * @param number[] car
    * @param number[] fine

    * @returns string[]
    */
  totalFine(date, car, fine) {
    const n = car.length;
    let fineCollected = 0;

    const isOdd = date & (1 === 1);

    for (let i = 0; i < n; i++) {
      if (isOdd && !(car[i] & 1)) fineCollected += fine[i];
      else if (!isOdd && car[i] & 1) fineCollected += fine[i];
    }

    return fineCollected;
  }
}
