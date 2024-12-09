a, b = map(int, input().split());

Sum=0
Cnt =0
for i in range(a,b+1) :
    if i%5==0 or i%7==0:
        Sum+=i
        Cnt+=1

print(f"{Sum} {(Sum/Cnt):.1f}")