
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 90,
    years: 7,
    rate: 9.9
  };

  expect(calculateMonthlyPayment(values)).toEqual('1.49');

});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 1000000,
    years: 20,
    rate: 3.4
  };
  expect(calculateMonthlyPayment(values)).toEqual('5748.34');
});

/// etc
