n=int(input())

x, y =  0,0


dy = [1,0,-1,0]
dx = [0,1,0,-1]

for i in range(n):
    a,b = input().split()
    b=int(b)
    if a == "N":
        y+=dy[0]*b
        x+=dx[0]*b
    if a == "E":
        y+=dy[1]*b
        x+=dx[1]*b
    if a == "S":
        y+=dy[2]*b
        x+=dx[2]*b
    if a == "W":
        y+=dy[3]*b
        x+=dx[3]*b
                


print(x, y)
