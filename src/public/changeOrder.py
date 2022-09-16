import os
import shutil
fnames = sorted(os.listdir('.'))
i = 0
for fname in fnames:
    x = ""
    i = 4
    while(i != 3):
        x = x + fname[i]
        i = i + 1
        if(i>6):
            i = 0
            x = x + "_"
    if(fname != "renomear.py"):
        newName = x + '.png'
        filename = fname
        shutil.copy(filename, "folder/"+ newName)
    