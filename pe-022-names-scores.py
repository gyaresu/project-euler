import shlex as sh

a = open("names.txt")
b = a.read()
print "Your file %r loaded." % "names.txt"
a.close()

c = sh.split(b)
d = c[0].split(",")
d.sort()
e = []
alpha = "abcdefghijklmnopqrstuvwxyz"
count = 1
total = 0

for item in d:
  e.append(item.lower())

for item in e:
  temp = 0
  for each in item:
    #print each
    #print alpha.index(each) + 1
    temp += alpha.index(each) + 1

  total += count * temp
  count += 1
  #print temp
  #print total
print total
