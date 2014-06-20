
function ObserverList(){
    this.Observerlist = [];
}

ObserverList.prototype.add = function(obj){
    return this.Observerlist.push(obj);
}

ObserverList.prototype.remove = function(obj){
    var i = 0;
    for (object in this.Observerlist){
        if(Object === obj)
            this.Observerlist.splice(i,1);
        i ++;
    }
}

ObserverList.prototype.count = function(obj){
    return this.Observerlist.length;
}

function Observer(){
    this.update = function(){
        alert("");
    }
}