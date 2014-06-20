function Subject(){
    this.observers = new ObserverList();
}

Subject.prototype.notify = function(value){

    for(obj in this.observers.Observerlist){
        this.observers.Observerlist[obj].update(value);

    }

}

Subject.prototype.removeObserver = function(obj){
        this.observers.remove(obj);


}
Subject.prototype.addObserver = function(obj){
    this.observers.add(obj);

}