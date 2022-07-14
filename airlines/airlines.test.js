import userName from "./airlines";

describe("Given a userName function", () => {
  describe("When it's called and it receives Julio", () => {
    test("Then it should return Julio", () => {
      const name = "Julio";
      const expectedresult = "Julio";

      const result = userName(name);

      expect(result).toBe(expectedresult);
    });
  });
});
