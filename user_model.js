
function UserModel (name, age, collage) {
        this.name = name;
        this.age = age;
        this.collage = collage;
}

UserModel.prototype.toJSON=function(){
    return {
        name:this.name,
        age:this.age,
        collage:this.collage
    };
}

module.exports=UserModel;