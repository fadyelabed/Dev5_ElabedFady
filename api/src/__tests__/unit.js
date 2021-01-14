describe('lengthCheck test', () => {
  test('moet een string zijn', () => {
      expect(Helpers.lengthCheck(1201)).toBeFalsy()
      expect(Helpers.lengthCheck(-201)).toBeFalsy()
      expect(Helpers.lengthCheck(null)).toBeFalsy()
      expect(Helpers.lengthCheck([])).toBeFalsy()
      expect(Helpers.lengthCheck("string")).toBeDefined()
  })
  test('length of string kan niet meer dan 100 zijn', () =>{
      expect(Helpers.lengthCheck("Een ietwat langere string")).toBeTruthy()
      expect(Helpers.lengthCheck("Een ietwat langere string en ietwat langere string en ietwat langere")).toBeTruthy()
  })
  test('moet beginnen met hoofdletter', () =>{
      expect(Helpers.lengthCheck("Een ietwat langere string")).toBeTruthy()
      expect(Helpers.lengthCheck("Een ietwat langere string")).toBeTruthy()
  })
})