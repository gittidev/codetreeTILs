n=int(input())

k=''
if n>=90:
    k='A'
elif n>=80:
    k='B'
elif n>=70:
    k='C'
elif n>=60:
    k='D'
else:
    k='F'

print(k)