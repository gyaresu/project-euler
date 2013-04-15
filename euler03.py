# https://projecteuler.net/problem=3

def isLargest(x):
  i = 2
  while i<=x:
    if x%i == 0:
      print i
      x=x/i
    i+=1

isLargest(600851475143)
