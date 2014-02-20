import sys

#if len(sys.argv) == 1:
#  sys.exit('Usage: ./%s integer' % sys.argv[0])

def findDivisors(x):
  div = [1]
  for item in range(2, x/2 + 1):
    if x % item == 0:
      div.append(item)
  return div

#print sum(findDivisors(int(sys.argv[1])))
# deficient and abundant
# Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
# Integers above 28123

total = 0
neg = 0
head = 28123
#head = 100
count = 1
abundant = []
add = []

while head > count:
  if sum(findDivisors(count)) > count:
    abundant.append(count)
  count += 1

ab_copy = abundant

for num, item  in enumerate(abundant):
  for second in ab_copy:
    add.append(item + second)

#group = sorted(list(set(add)))

print sum(set(range(1,head+1)) - set(add))
