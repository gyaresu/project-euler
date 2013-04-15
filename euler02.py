def sum(x, y):
  return x+y

n = 1
l = 0
total = 0

while n < 4e6:
  print "This is n: %d and l: %d" % (n,l)
  temp = sum(n, l)
  if  n % 2 == 0:
    total += n
    print 'while loop total is %d' % total
  l = n
  n = temp

print total
