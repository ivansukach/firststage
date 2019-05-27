class Post {
    constructor(id, description, createdAt, author, photoLink, likes, hashTags) {
        this._id = id;
        this._description = description;
        this._createdAt = createdAt;
        this._author = author;
        this._photoLink = photoLink;
        this._likes = likes;
        this._hashTags = hashTags;
        console.log('Происходит создание объекта класса Post');
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
            if(PostList.validate(posts[i])){
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


        if (PostList.validate(postForValidation)){
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


}


