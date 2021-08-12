var p ={
    va1: 'v1',
    va2 :'v2',
    f1 : function(){
        console.log(this.va1);
    },
    f2 : function(){
        console.log(this.va2);
    }
}


p.f1();
p.f2();