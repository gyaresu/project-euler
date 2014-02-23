import sys
import itertools

x = list(itertools.permutations(range(10), 10))
y = x[999999]
total = ''

for i in y:
  total += str(i)

print "The millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 is: %s" % total


