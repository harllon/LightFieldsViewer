import os
fnames = sorted(os.listdir('.'))
i = 0
new_name = str(i) + '.png'
for fname in fnames:
    x = ""
    i = 4
    while(true):
        x = x + fname[i]
        i = i + 1
        if(i>6){
            i = 0
            x = x + "_"
        }
        if(i == 3){
            break;
        } 
    #x = fname.replace("ppm", "jpg")
    if(fname != renomear.py):
        os.rename(fname, x)
    #if(fname != "renomear.py"):
    #    os.rename(fname, new_name)
    #    i = i + 1
    #    new_name = str(i) + '.png'
    
    000_000