get name(){return this._name;}
set name(name){
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(name))
        this._name = name;
    else throw 'Name is incorrect';
}
get address(){
    return this._address;
}
set address(address){
    this._address = address;
}

get selectcity(){
    return this._selectcity;
}
set selectcity(selectcity){
    this._selectcity = selectcity;
}

get state(){
    return this._state;
}
set state(state){
    this._state = state;
}

get zip(){
    return this._zip;
}
set zip(zip){
    this._zip = this.zip;
}

toString(){
    const options = {selectcity:'long',state:'long',zip:'numeric'};

    const startDate = !this.startDate ? "undefined":
    this.startDate.toLocaleDateString("en-US",options);

    return  ",name='"+ this.name+ "',Address ='"
        +this.Address +"',select city='"+this.selectcity +"',state="
        +this.state + ",zip="+this.zip;
}
