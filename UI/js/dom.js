class Post {
    constructor(id, description, createdAt, author, photoLink, likes, hashTags) {
        this._id = id;
        this._description = description;
        this._createdAt = createdAt;
        this._author = author;
        this._photoLink = photoLink;
        this._likes = likes;
        this._hashTags = hashTags;
        console.log('Происходит создание объекта класса  Post');
    }
    get id() {
        return this._id;
    }
    set id(number) {
        this._id = number;
    }

    get description() {
        return this._description;
    }
    set description(text) {
        this._description = text;
    }

    get createdAt() {
        return this._createdAt;
    }
    set createdAt(text) {
        this._createdAt = text;
    }

    get author() {
        return this._author;
    }
    set author(text) {
        this._author = text;
    }

    get photoLink() {
        return this._photoLink;
    }
    set photoLink(text) {
        this._photoLink = text;
    }

    get likes() {
        return this._likes;
    }
    set likes(arr) {
        let i = 0;
        while (i < arr.length) {
            this._likes[i] = arr[i];
            i++;
        }

    }


    get hashTags() {
        return this._hashTags;
    }
    set hashTags(arr) {
        let i = 0;
        while (i < arr.length) {
            this._hashTags[i] = arr[i];
            i++;
        }

    }


}




class PostList {
    constructor(posts) {
        this._photoPosts = [];
        for (let i = 0; i < posts.length; i++) {
            if (PostList.validate(posts[i])) {
                this._photoPosts.push(posts[i]);
            } else {
                console.log("not valid");
            }
        }

        console.log('Происходит создание массива объектов');
    }

    static comparator(a, b) {
        let date_of_a = new Date(a.createdAt);
        let date_of_b = new Date(b.createdAt);
        return date_of_a - date_of_b;

    }



    getPage(skip = 0, top = 10, filterConfig = {}) {
        let empty_for_filter = [];

        let i = 0;
        if (filterConfig.author != undefined) {
            while (i < this._photoPosts.length) {
                if (filterConfig.author == this._photoPosts[i].author) {
                    empty_for_filter.push(this._photoPosts[i]);
                }
                i++;
            }
        }
        if (filterConfig.description != undefined) {
            while (i < this._photoPosts.length) {
                if (filterConfig.description == this._photoPosts[i].description) {
                    empty_for_filter.push(this._photoPosts[i]);
                }
                i++;
            }
        }
        if (filterConfig.id != undefined) {
            while (i < this._photoPosts.length) {
                if (filterConfig.id == this._photoPosts[i].id) {
                    empty_for_filter.push(this._photoPosts[i]);
                }
                i++;
            }


        }
        if (filterConfig.createdAt != undefined) {
            while (i < this._photoPosts.length) {
                if (this._photoPosts[i].createdAt == filterConfig.createdAt) {
                    empty_for_filter.push(this._photoPosts[i]);
                }
                i++;
            }
        }
        if (filterConfig.photoLink != undefined) {
            while (i < this._photoPosts.length) {
                if (this._photoPosts[i].photoLink == filterConfig.photoLink) {
                    empty_for_filter.push(this._photoPosts[i]);
                }
                i++;
            }

        }
        if (filterConfig.hashTags != undefined) {
            while (i < this._photoPosts.length) {
                for (let j = 0; j < filterConfig.hashTags.length; j++)
                    for (let k = 0; k < filterConfig.hashTags.length; k++)
                        if (this._photoPosts[i].hashTags[j] == filterConfig.hashTags[k]) {
                            empty_for_filter.push(this._photoPosts[i]);
                        }
                i++;
            }

        }

        if (filterConfig.author === undefined && filterConfig.id === undefined && filterConfig.description === undefined && filterConfig.createdAt === undefined && filterConfig.photoLink === undefined && filterConfig.likes === undefined && filterConfig.hashTags === undefined) {
            empty_for_filter = this._photoPosts.slice(0, this._photoPosts.length);
        }

        empty_for_filter.sort(this.comparator);
        empty_for_filter.splice(0, skip - 1);
        empty_for_filter.splice(top, empty_for_filter.length);
        return empty_for_filter;
    }

    get(id) {
        let i = this.getIndex(id);
        if (i != -1) {
            return this._photoPosts[i];
        } else
            return -1;
    }

    getIndex(id) {
        let i = 0;
        while (i < this._photoPosts.length) {
            if (id === this._photoPosts[i].id) {
                return i;
            }
            i++;
        }
        return -1;
    }

    static validate(post) {
        let check = true;
        if (post.id === undefined || typeof(post.id) != 'string') {
            return false;
        }


        if (post.description === undefined || typeof(post.description) != 'string') {
            return false;
        }
        let ff = false;
        if (post.hashTags != undefined)
            for (let m = 0; m < post.hashTags.length; m++) {
                if (typeof(post.hashTags[m]) != 'string') {
                    ff = true;
                    break;
                }
            }
        if (post.description.length >= 200 || ff) {
            return false;
        }


        if (post.likes != undefined)
            for (let m = 0; m < post.likes.length; m++) {
                if (typeof(post.likes[m]) != 'string') {
                    return false;
                }
            }


        if (post.createdAt === undefined || !(post.createdAt instanceof Date)) {
            return false;
        }


        if (post.author === undefined || typeof(post.author) != 'string' || post.author.length == 0) {
            return false;
        }




        if (post.photoLink === undefined || typeof(post.photoLink) != 'string' || post.photoLink.length == 0) {
            return false;
        }



        if (check)
            console.log("Valid data")
        else
            console.log("not valid")
        return check;
    }
    add(post) {
        if (PostList.validate(post)) {
            this._photoPosts.push(post);
            return true;
        } else return false;
    }
    edit(id, obj) {
        let postForValidation = this.get(id);


        if (obj.description != undefined) {
            postForValidation.description = obj.description;
        }
        if (obj.photoLink != undefined) {
            postForValidation.photoLink = obj.photoLink;
        }
        if (obj.likes != undefined) {
            for (let i = 0; i < obj.likes.length; i++) {
                postForValidation.likes[i] = obj.likes[i];
            }
        }
        if (obj.hashTags != undefined) {

            for (let i = 0; i < obj.hashTags.length; i++)
                postForValidation.hashTags[i] = obj.hashTags[i];
        }


        if (PostList.validate(postForValidation)) {
            this.remove(id);
            this.add(postForValidation);
            return true;
        } else return false;
    }
    remove(id) {
        let index = this.getIndex(id);
        if (index != -1) {
            this._photoPosts.splice(index, 1);
        } else return false;
    }

    addAll(mas) {
        let not_validate = [];
        for (let i = 0; i < mas.length; i++) {
            if (PostList.validate(mas[i])) {
                this._photoPosts.push(mas[i]);
            } else {
                not_validate.push(mas[i]);
            }
        }
        return not_validate;
    }
    clear() {
        this._photoPosts.splice(0, this._photoPosts.length);
    }


};
var Module = (function() {
    let photoPosts = [
        new Post('0',
            '26.04.2019 Состоится вечеринка в Сороковщине',
            new Date('2018-02-23T23:00:00'),
            'Иван Сукач',
            'https://oper.ru/static/data/gallery/l1048754573.jpg',
            ['Сукач Иван'],
            ['Раубичи', 'Минск', 'Вечеринка']),
        new Post('1',
            '26.04.2019 Состоится вечеринка в Раубичах',
            new Date('2018-02-23T23:00:00'),
            'Иван Сукач',
            'img/1st_party.jpg',
            ['Сукач Иван'],
            ['Раубичи', 'Минск', 'Вечеринка']),
        new Post('2',
            '27.04.2019 Лола и Лейла будут ждать тебя на яхте',
            new Date('2018-02-23T23:00:00'),
            'Дутин Валентин',
            'img/2st_party.jpg',
            ['Сукач Иван'],
            ['Яхта', 'Вечеринка', 'Минск']),
        new Post('3',
            'bbbbbbbbbbb!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Егор',
            'img/велотуса.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная']),
        new Post('4',
            'cccccccccccccccccccccccccccc!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Даниил',
            'img/на тачках.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная']),
        new Post('5',
            'ddddddddddddddddddddddddddddddd!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'img/yacht.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная']),
        new Post('6',
            'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!!',
            new Date('2018-02-23T23:00:00'),
            'Sukach Ivan',
            'img/s1200.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная']),
        new Post('7',
            'fffffffffffffffffffffff!!!',
            new Date('2018-02-23T23:00:00'),
            'Сукач Иван',
            'img/автобус.png',
            ['Иванов Иван'],
            ['женская', 'сборная']),
        new Post('8',
            'ggggggggggggggggggggggggggggggggggggggggggg!!!',
            new Date('2018-02-23T23:00:00'),
            'Сукач Иван',
            'img/пляжный волейбол.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная']),
        new Post('9',
            'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh!!!',
            new Date('2018-02-23T23:00:00'),
            'Сукач Иван',
            'img/посиделки.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])

        ,
        new Post('10',
            'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj!!!',
            new Date('2018-02-23T23:00:00'),
            'Сукач Иван',
            'img/рокконцерт.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная']),
        new Post('11',
            'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'img/стритрейсеры.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная']),

        new Post('12',
            'l!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'img/флет.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная']),
        new Post('13',
            'm!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'img/шашлындос.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная']),
        new Post('14',
            'n!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'http://www.vascoplanet.com/pictures/large/7920ed.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная']),
        new Post('15',
            'o!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'https://s.zagranitsa.com/images/articles/3580/870x486/4b3f99d416a1ba4467accc568b6402c0.jpg?1463482530',
            ['Иванов Иван'],
            ['женская', 'сборная']),
        new Post('16',
            'p!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'https://www.grekomania.ru/images/greek-articles/other/big/354_santorini-sunset-1.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная']),
        new Post('17',
            'q!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'https://frazy.su/wp-content/uploads/2016/06/34741.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])


    ];
    let postCollection = new PostList(photoPosts);
    return {
        postCollection
    };

}());




let t = document.querySelector('#tmpl');
let inn = t.content;
let flex = document.querySelector('#flexContainer');
let options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};
let user;
class View {
    constructor() {
        this._blocks = [];
        this._currentId = 0;
        console.log('Происходит создание класса View');
    }

    add(post) {
        this._blocks.push(post);
    }


    dynamicDownload() {
        console.log(flex);
        this.addElementsToSelect();
        for (let j = 0; j < Module.postCollection._photoPosts.length; j++) {

            let tempNode = inn.cloneNode(true);
            this._currentId = j;
            tempNode.firstElementChild.firstElementChild.src = Module.postCollection.get("" + j).photoLink;
            tempNode.firstElementChild.id = "elemId" + j;
            tempNode.children[1].id = "elemId" + j + "B";
            tempNode.firstElementChild.children[2].children[0].children[2].id = "elemId" + j + "M";
            let str = "Автор: " + Module.postCollection.get("" + j).author + '\r\n';

            str += "Время добавления : " + Module.postCollection.get("" + j).createdAt.toLocaleString("ru", options) + "\r\n";
            str += "Событие: " + Module.postCollection.get("" + j).description + "\r\n";
            let temp = "";
            for (let x = 0; x < Module.postCollection.get("" + j).hashTags.length; x++) {
                temp += "#" + Module.postCollection.get("" + j).hashTags[x];
            }
            str += temp;
            tempNode.firstElementChild.children[1].textContent = str;
            console.log(Module.postCollection.get("" + j).photoLink);
            let copyNode = tempNode.cloneNode(true);
            flex.appendChild(tempNode);
            this.add(copyNode);
        }
        this._currentId++;
    }


    //let downloadOn = document.getElementById('addPh');

    downloadOnSite(photo, description, tags) {
        let emptyPost = {
            id: '',
            description: '',
            createdAt: '',
            author: '',
            photoLink: '',
            likes: '',
            hashTags: ''
        };
        let length1 = Module.postCollection._photoPosts.length;
        emptyPost.id = '' + this._currentId;
        emptyPost.description = description;
        emptyPost.createdAt = new Date();
        emptyPost.author = document.getElementById('userName').textContent;
        emptyPost.photoLink = photo;
        let arr = tags.split(', ');
        emptyPost.hashTags = arr;
        let newPost = new Post(emptyPost.id, emptyPost.description, emptyPost.createdAt, emptyPost.author, emptyPost.photoLink, emptyPost.likes, emptyPost.hashTags);
        Module.postCollection.add(newPost);
        let length2 = Module.postCollection._photoPosts.length;
        if (length2 > length1) {


            this._blocks.push(inn.cloneNode(true));

            this._blocks[this._currentId].firstElementChild.firstElementChild.src = Module.postCollection.get("" + this._currentId).photoLink;
            let str = "Автор: " + Module.postCollection.get("" + this._currentId).author + '\r\n';

            str += "Время добавления : " + Module.postCollection.get("" + this._currentId).createdAt.toLocaleString("ru", options) + "\r\n";
            str += "Событие: " + Module.postCollection.get("" + this._currentId).description + "\r\n";
            let temp = "";
            for (let x = 0; x < Module.postCollection.get("" + this._currentId).hashTags.length; x++) {
                temp += "#" + Module.postCollection.get("" + this._currentId).hashTags[x];
            }
            str += temp;
            this._blocks[this._currentId].firstElementChild.children[1].textContent = str;
            this._blocks[this._currentId].firstElementChild.id = "elemId" + this._currentId;
            this._blocks[this._currentId].firstElementChild.children[2].children[0].children[2].id = "elemId" + this._currentId + "M";
            this._blocks[this._currentId].children[1].id = "elemId" + this._currentId + "B";
            let copy = this._blocks[this._currentId].cloneNode(true);
            flex.appendChild(copy);
            this._currentId++;
            alert("Пост добавлен успешно");
        }
    }

    deleteFromSite(id) {
        let recycle = document.getElementById('' + id);
        let button = document.getElementById('' + id + "B");
        recycle && flex.removeChild(recycle);
        button && flex.removeChild(button);

    }
    setUser() {
        let name = document.getElementById('userName');
        name.textContent = user.name + " " + user.surname;
        let avatar = document.getElementById('avatar');
        avatar.src = user.avatar;

    }
    authorization(login, password) {
        for (let j = 0; j < users.length; j++) {
            if (users[j].nickname === login && users[j].password === password) {
                user = users[j];
                this.setUser();
                alert("Вход выполнен успешно");
                return true;
            }

        }
        alert("Имя пользователя или пароль введены неверно");
        return false;

    }


    editPostOnSite(id, obj) {
        let arr = id.split('elemId');
        let idEl = Number(arr[1]);
        let value;
        for (let j = 0; j < this._blocks.length; j++) {
            if (this._blocks[j].firstElementChild.id === id) {
                value = j;
                break;
            }
        }
        Module.postCollection.edit(arr[1], obj);

        console.log(this._blocks[0].firstElementChild);
        this._blocks[value].firstElementChild.firstElementChild.src = Module.postCollection.get("" + arr[1]).photoLink;
        let str = "Автор: " + Module.postCollection.get("" + arr[1]).author + '\r\n';

        str += "Время добавления : " + Module.postCollection.get("" + arr[1]).createdAt.toLocaleString("ru", options) + "\r\n";
        str += "Событие: " + Module.postCollection.get("" + arr[1]).description + "\r\n";
        let temp = "";
        for (let x = 0; x < Module.postCollection.get("" + arr[1]).hashTags.length; x++) {
            temp += "#" + Module.postCollection.get("" + arr[1]).hashTags[x];
        }
        str += temp;
        this._blocks[value].firstElementChild.children[1].textContent = str;
        let postToBeChanged = document.getElementById(id);
        postToBeChanged.firstElementChild.src = Module.postCollection.get("" + arr[1]).photoLink;
        postToBeChanged.children[1].textContent = str;

        alert("Пост добавлен успешно");




    }
    isThereAnyUser() {
        if (user != undefined) {
            return true;



        }
        return false;
    }
    displayElementsForCurrentUser() {
        if (this.isThereAnyUser()) {
            let menus = document.getElementsByClassName("mobile-wrap");
            let wissList = document.getElementsByClassName("nb");
            for (let j = 0; j < menus.length; j++) {
                menus[j].style.display = "block";
                wissList[j].style.display = "block";
            }
            let form = document.getElementById("addPost");
            form.style.display = "block";

        } else {
            alert("Рекомендуем Вам войти или зарегистрироваться");
        }
    }
    addElementsToSelect() {
        let temp = document.getElementById("name");
        temp.children[0].value = users[0].name + " " + users[0].surname;
        temp.children[0].textContent = users[0].name + " " + users[0].surname;
        for (let j = 1; j < users.length; j++) {
            temp.appendChild(temp.children[j - 1].cloneNode(true))
            temp.children[j].value = users[j].name + " " + users[j].surname;
            temp.children[j].textContent = users[j].name + " " + users[j].surname;
        }
    }
}
let users = [{
        name: "Ivan",
        surname: "Sukach",
        avatar: "img/myface.jpg",
        age: 19,
        posts: [1, 2, 4, 5],
        nickname: "ivan.suka_ch",
        password: "aaa123",
        friends: ["_valentin_", "_.lyazhayka._"]



    },
    {
        name: "Valentin",
        surname: "Dutin",
        avatar: "img/myface.jpg",
        age: 19,
        posts: [3, 6],
        nickname: "_valentin_",
        password: "bbb123",
        friends: ["ivan.suka_ch", "_.lyazhayka._"]



    },
    {
        name: "Lyazhayka",
        surname: "Aleh",
        avatar: "img/myface.jpg",
        age: 19,
        posts: [7, 8],
        nickname: "_.lyazhayka._",
        password: "ccc123",
        friends: ["ivan.suka_ch", "_valentin_"]



    }
]
let display = new View();
display.dynamicDownload();
display.authorization("ivan.suka_ch", "aaa12");
display.authorization("ivan.suka_ch", "aaa123");
display.displayElementsForCurrentUser();
display.editPostOnSite("elemId0", {
    photoLink: "https://frazy.su/wp-content/uploads/2016/06/34741.jpg"
});
display.deleteFromSite("elemId1");
display.deleteFromSite("elemId3");
display.deleteFromSite("elemId4");
display.deleteFromSite("elemId5");

display.downloadOnSite("https://frazy.su/wp-content/uploads/2016/06/34741.jpg", "aaa", "allo, hallo");
display.downloadOnSite("https://www.grekomania.ru/images/greek-articles/other/big/354_santorini-sunset-1.jpg", "aaa", "allo, hallo");