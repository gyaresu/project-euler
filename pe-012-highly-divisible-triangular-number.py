def f(x):
  i = x/2+1
  y = [1]
  while i>0:
    if x % i == 0:
      y.append(i)
    i =- 1
  y.append(x)
  print "Length of factors array = %r" % len(y)
  return y

a = 3
count = 2
b = []
while True:
  result = f(a)
  if len(result) > 500:
    print "The result is: %r" % a
    break
  a =+ count
  count =+ 1
