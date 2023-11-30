import { describe, expect, test } from 'vitest'
import { getValueFromDials, getHourFromValue } from '../modules/calculHour.ts';

describe("getValueFromDials", () => {

  test("All one", () => {
    expect(getValueFromDials(1, 1, 1)).toBe(0); // 1, 1, 1 = 0
  });

  test("All two", () => {
    expect(getValueFromDials(2, 2, 2)).toBe(6); // 2, 2, 2 = 6
  });

  describe("One param two", () => {
    test("In first position", () => {
      expect(getValueFromDials(2, 1, 1)).toBe(1.5); // 2, 1, 1 = 1.5
    });
    test("In second position", () => {
      expect(getValueFromDials(1, 2, 1)).toBe(0); // 1, 2, 1 = 0
    });
    test("In third position", () => {
      expect(getValueFromDials(1, 1, 2)).toBe(5); // 1, 1, 2 = 5
    });
  })

  describe("One param one", () => {
    test("In first position", () => {
      expect(getValueFromDials(1, 2, 2)).toBe(6); // 1, 2, 2 = 6
    });
    test("In second position", () => {
      expect(getValueFromDials(2, 1, 2)).toBe(4); // 2, 1, 2 = 4
    });
    test("In third position", () => {
      expect(getValueFromDials(2, 2, 1)).toBe(1.5); // 2, 2, 1 = 1.5
    });
  })
})

describe("getHourFromValue", () => {
  test("Less or equal to one", () => {
      expect(getHourFromValue(0)).toBe("mortin"); // <= 1 = "mortin"
  })
  test("Strictly more than one and less or equal to two", () => {
      expect(getHourFromValue(1.5)).toBe("aprenoon"); // > 1 AND <= 2 = "aprenoon"
  })
  test("Strictly more than two and less or equal to four", () => {
      expect(getHourFromValue(3)).toBe("soirning"); // > 2 AND <= 4 = "soirning"
  })
  test("Strictly more than four", () => {
    expect(getHourFromValue(6)).toBe("nuight"); // > 4 = "nuight" 
  })
})





// FONCTION getValueFromDials(moon_dial: number, earth_dial: number, sunDial: number)

// BAD TESTS

// Three params less than 1
// 0, 0, 0

// Three params more than 2
// 3, 3, 3


// One param less than 1

// First position
// 0, 1, 1
// 0, 2, 1
// 0, 1, 2
// 0, 2, 2

// Second position
// 1, 0, 1
// 2, 0, 1
// 1, 0, 2
// 2, 0, 2

// Third position
// 1, 1, 0
// 2, 1, 0
// 1, 2, 0
// 2, 2, 0


// Two params less than 1

// First two
// 0, 0, 1
// 0, 0, 2

// First and last
// 0, 1, 0
// 0, 2, 0

// First last
// 1, 0, 0
// 2, 0, 0


// One param more than 2

// First position
// 3, 1, 1
// 3, 2, 1
// 3, 1, 2
// 3, 2, 2

// Second position
// 1, 3, 1
// 2, 3, 1
// 1, 3, 2
// 2, 3, 2

// Third position
// 1, 1, 3
// 2, 1, 3
// 1, 2, 3
// 2, 2, 3


// Two params more than 2

// The first two
// 3, 3, 1
// 3, 3, 2

// The first and last
// 3, 1, 3
// 3, 2, 3

// The first last
// 1, 3, 3
// 2, 3, 3



// GOOD TESTS

// All one
// 1, 1, 1

// All two
// 2, 2, 2


// One param two

// First position
// 2, 1, 1

// Second position
// 1, 2, 1

// Third position
// 1, 1, 2


// One param one

// First position
// 1, 2, 2

// Second position
// 2, 1, 2

// Third position
// 2, 2, 1







// FONCTION getHourFromValue(getValueFromDials(1,1,1): number)




