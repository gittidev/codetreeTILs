a,b= map(int, input().split());

temp = a//b

temp2 = a%b

result = str(temp)+"."
for i in range(1,21):
    temp2*=10
    result +=str(temp2//b)
    temp2 %= b
print(result)