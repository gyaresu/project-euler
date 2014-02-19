import shlex as sh

a = open("names.txt")
b = a.read()
c = sh.split(b)
d = c[0].split(",")
d.sort()


