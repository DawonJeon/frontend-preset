
const sum = (a, b) => {
    return a+b;
};

test("5 + 10 = 15", () => {
    expect(sum(5, 10)).toBe(15);
  });
  