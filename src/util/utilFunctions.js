
//create the object with file names and size to be passed as json
function createObject(files, folder){
    var data = {}
    data.table = []
    var i = 0;
    var obj2
    if(files[0] == ".DS_Store"){
      obj2 = {size: files.length-1}
    }else{
      obj2 = {size: files.length}
    }
    data.table.push(obj2)
    files.forEach(file => {
      if(file != ".DS_Store"){
        var obj = {
          id: i,
          filename: folder + "/" + file
        }
        data.table.push(obj)
        i++;
      }
    });
    return data;
}

module.exports = {
    createObject
}