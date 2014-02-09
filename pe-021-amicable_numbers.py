# coding=UTF8
# Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
# If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
#
# For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
#
# Evaluate the sum of all the amicable numbers under 10000.

import time, sys

arg = int(sys.argv[1])
total = 0
group = []


# If halved then halve again etc. until False and then thirds. Then halves etc.

def proper(n):
  x = [1.0]
  i = 2.0
  while i < n:
    if n % i == 0:
      x.append(i)
      i += 1.0
      #return proper(n/i)
    else:
      i += 1.0
  return sum(x)

result = proper(arg)

for x in range(0, arg+1):
  result = proper(x)
  if proper(result) == x and result != x:
    group.append(result)
    group.append(x)

for each in set(group):
  total += each

print total
#print "\n\nStarted: %s \n\nCompleted: %s\n" % (start, finish)

