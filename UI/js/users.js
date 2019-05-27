let list = localStorage.getItem("userList");
console.log(list);
let userForm = JSON.parse(list);
console.log(userForm);
let users = userForm;
let currentUser = localStorage.getItem("activeUser");
let activeUser = JSON.parse(currentUser);
//let users = [{
//        name: "Ivan",
//        surname: "Sukach",
//        avatar: "img/myface.jpg",
//        age: 19,
//        posts: [1, 2, 4, 5],
//        nickname: "ivan.suka_ch",
//        password: "aaa123",
//        friends: ["_valentin_", "_.lyazhayka._"]
//
//
//
//    },
//    {
//        name: "Valentin",
//        surname: "Dutin",
//        avatar: "img/myface.jpg",
//        age: 19,
//        posts: [3, 6],
//        nickname: "_valentin_",
//        password: "bbb123",
//        friends: ["ivan.suka_ch", "_.lyazhayka._"]
//
//
//
//    },
//    {
//        name: "Lyazhayka",
//        surname: "Aleh",
//        avatar: "img/myface.jpg",
//        age: 19,
//        posts: [7, 8],
//        nickname: "_.lyazhayka._",
//        password: "ccc123",
//        friends: ["ivan.suka_ch", "_valentin_"]
//
//
//
//    }
//];
class Users{
    constructor(users) {
        this._userList = [];
        for (let i = 0; i < users.length; i++) {
            if (Users.validate(users[i])) {
                this._userList.push(users[i]);
            } else {
                console.log("not valid");
            }
        }

        console.log('Происходит создание массива пользователей');
    }
    registration(formContent){
            let emptyUser = {
                name: '',
                surname: '',
                avatar: '',
                age: 0,
                posts: [],
                nickname: '',
                password: '',
                friends: []
            };
            emptyUser.name=formContent.children[0].children[1].children[1].children[0].value;
            console.log(emptyUser.name);
            emptyUser.surname=formContent.children[0].children[2].children[1].children[0].value;
            console.log(emptyUser.surname);
            emptyUser.age=Number(formContent.children[0].children[3].children[1].children[0].value);
            console.log(typeof(emptyUser.age));
            emptyUser.nickname=formContent.children[0].children[4].children[1].children[0].value;
            console.log(emptyUser.nickname);
            emptyUser.password=formContent.children[0].children[5].children[1].children[0].value;
            console.log(emptyUser.password);
            let passwordCopy=formContent.children[0].children[6].children[1].children[0].value;
            if(emptyUser.name === '' || emptyUser.surname === '' ){
                alert("Введены не все поля");
                return false;
            }
            if(emptyUser.age === 0 || emptyUser.nickname === '' ){
                alert("Введены не все поля");
                return false;
            }
            if(emptyUser.password === '' || passwordCopy === '' ){
                alert("Введены не все поля");
                return false;
            }
            if(emptyUser.password!=passwordCopy){
                alert("Пароли не совпадают");
                return false;
            }
            this.addUser(emptyUser);
            return true;
    }
    addUser(element){
            let emptyUser = {
                name: '',
                surname: '',
                avatar: '',
                age: 0,
                posts: [],
                nickname: '',
                password: '',
                friends: []
            };
            emptyUser.name=element.name;
            emptyUser.surname=element.surname;
            emptyUser.age=element.age;
            emptyUser.nickname=element.nickname;
            emptyUser.password=element.password;
            if(Users.validate(emptyUser)){
                this._userList.push(emptyUser);
                console.log("Успешное добавление");
            }
            else{
                console.log("Проверьте вводимые данные");
            }


    }
    checkIn(fields){
        console.log(fields.children[0]);
        console.log(fields.children[0].children[1]);
        let login=fields.children[0].children[1].children[1].children[0].value;
        let password=fields.children[0].children[2].children[1].children[0].value;
        let index=-1;
        for(let j=0; j<this._userList.length;j++){
        if(this._userList[j].nickname===login){
        index=j;
        break;
        }
        }
        if(index!=-1){
             if(this._userList[index].password===password){
                  this.setActiveUser(index);
                  return true;
             }
             else{
                  alert("Пароль введён неверно!");
                  return false;
             }

        } else {
        alert("Пользователя с таким логином не существует");
        return false;
        }
    }
    saveToJSON(){
        let list = JSON.stringify(this._userList);
        let currentUser = JSON.stringify(activeUser);
        localStorage.setItem("userList", list);
        localStorage.setItem("activeUser", currentUser);
        users=this._userList;
    }
    getFromJSON(){
        let list = localStorage.getItem("userList");
        console.log(list);
        let userForm = JSON.parse(list);
        console.log(userForm);
        this.clear();
        for(let j=0; j<userForm.length; j++)
        this.addUser(userForm[j]);
        users = userForm;
        this.printUsers();
    }
    clear() {
        this._userList.splice(0, this._userList.length);
    }
    printUsers(){
        console.log(this._userList);
    }
    setActiveUser(index){
        activeUser = this._userList[index];
        alert("Вход выполнен успешно");
    }

    static validate(user) {
        let check = true;
        console.log(user.age);
        console.log(typeof(user.age));
        if (user.age === undefined || typeof(user.age) != 'number') {
            return false;
        }



        if (user.name === undefined || typeof(user.name) != 'string' || user.name.length == 0) {
            return false;
        }
        if (user.surname === undefined || typeof(user.surname) != 'string' || user.surname.length == 0) {
            return false;
        }
        if (user.nickname === undefined || typeof(user.nickname) != 'string' || user.nickname.length == 0) {
            return false;
        }
        if (user.password === undefined || typeof(user.password) != 'string' || user.password.length == 0) {
            return false;
        }


        if (check)
            console.log("Valid data")
        else
            console.log("not valid")
        return check;
    }

}
let userCollection=new Users(users);

let form3 = document.getElementById("form3");
form3.addEventListener("submit", function(event)  {event.preventDefault(); userCollection.registration(this); userCollection.saveToJSON(); userCollection.getFromJSON();});
let form2 = document.getElementById("form2");
form2.addEventListener("submit", function(event)  {event.preventDefault(); userCollection.checkIn(this); userCollection.saveToJSON();});


