a,b,c = map(int, input().split());

while True:


    if (a<=b and a%c==0) :
        print("YES")
        break
    elif (a>b) :
        print("NO")
        break

    a+=1

    