def getdata():
    with open('names.txt', 'r') as f:
        data = f.read()
        names= data.splitlines()
        return names