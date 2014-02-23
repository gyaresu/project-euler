def fib():
  count = 2
  a = 1
  b = 1
  test = 1
  while True:
    count += 1
    test = a + b
    if len(str(test)) == 1000:
        return count
    a = b
    b = test

result = fib()
print "The first term in the Fibonacci sequence to contain 1000 digits is: %r" % result
