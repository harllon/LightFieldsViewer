import os
fnames = sorted(os.listdir('.'))
i = 0
new_name = str(i) + '.png'
for fname in fnames:
    x = ""
    i = 4
    while(True):
        x = x + fname[i]
        i = i + 1
        if(i>6):
            i = 0
            x = x + "_"
        if(i == 3):
            break
    #x = fname.replace("ppm", "jpg")
    if(fname != "renomear.py"):
        x = x + '.png'
        os.rename(fname, x, dst_dir_fd="newFile")
    #if(fname != "renomear.py"):
    #    os.rename(fname, new_name)
    #    i = i + 1
    #    new_name = str(i) + '.png'
    