t = 10

S=0
C=0
for i in range(t):
    n=int(input())
    if 200>=n>=0:
        C+=1
        S+=n

avg = int((S/C)*10)/10

print(S, avg)