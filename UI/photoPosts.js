
;(function() {
let photoPosts = [
  {
    id: '1',
    description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
    likes: ['Иванов Иван'],
    hashTags: ['женская', 'сборная']
   },
     {
       id: '2',
       description: 'aaaaaa!!!',
       createdAt: new Date('2018-02-23T23:00:00'),
       author: 'Иванов Евгений',
       photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
       likes: ['Иванов Иван'],
       hashTags: ['женская', 'сборная']
      },
        {
          id: '3',
          description: 'bbbbbbbbbbb!!!',
          createdAt: new Date('2018-02-23T23:00:00'),
          author: 'Иванов Егор',
          photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
          likes: ['Иванов Иван'],
          hashTags: ['женская', 'сборная']
         },
           {
             id: '4',
             description: 'cccccccccccccccccccccccccccc!!!',
             createdAt: new Date('2018-02-23T23:00:00'),
             author: 'Иванов Даниил',
             photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
             likes: ['Иванов Иван'],
             hashTags: ['женская', 'сборная']
            },
              {
                id: '5',
                description: 'ddddddddddddddddddddddddddddddd!!!',
                createdAt: new Date('2018-02-23T23:00:00'),
                author: 'Иванов Иван',
                photoLink: '',
                likes: ['Иванов Иван'],
                hashTags: ['женская', 'сборная']
               },
                 {
                   id: '6',
                   description: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!!',
                   createdAt: new Date('2018-02-23T23:00:00'),
                   author: '',
                   photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                   likes: ['Иванов Иван'],
                   hashTags: ['женская', 'сборная']
                  },
                    {
                      id: '7',
                      description: 'fffffffffffffffffffffff!!!',
                      createdAt: new Date('2018-02-23T23:00:00'),
                      author: 'Сукач Иван',
                      photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                      likes: ['Иванов Иван'],
                      hashTags: ['женская', 'сборная']
                     },
                       {
                         id: '8',
                         description: 'ggggggggggggggggggggggggggggggggggggggggggg!!!',
                         createdAt: new Date('2018-02-23T23:00:00'),
                         author: 'Сукач Иван',
                         photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                         likes: ['Иванов Иван'],
                         hashTags: ['женская', 'сборная']
                        },
                          {
                            id: '9',
                            description: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh!!!',
                            createdAt: new Date('2018-02-23T23:00:00'),
                            author: 'Сукач Иван',
                            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                            likes: ['Иванов Иван'],
                            hashTags: ['женская', 'сборная']

                           },
                             {
                               id: '10',
                               description: 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj!!!',
                               createdAt: new Date('2018-02-23T23:00:00'),
                               author: 'Сукач Иван',
                               photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                               likes: ['Иванов Иван'],
                               hashTags: ['женская', 'сборная']
                              },
                                {
                                  id: '11',
                                  description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk!!!',
                                  createdAt: new Date('2018-02-23T23:00:00'),
                                  author: 'Иванов Иван',
                                  photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                                  likes: ['Иванов Иван'],
                                  hashTags: ['женская', 'сборная']
                                 },

                                   {
                                     id: '12',
                                     description: 'lЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
                                     createdAt: new Date('2018-02-23T23:00:00'),
                                     author: 'Иванов Иван',
                                     photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                                     likes: ['Иванов Иван'],
                                     hashTags: ['женская', 'сборная']
                                    },
                                      {
                                        id: '13',
                                        description: 'mЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
                                        createdAt: new Date('2018-02-23T23:00:00'),
                                        author: 'Иванов Иван',
                                        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                                        likes: ['Иванов Иван'],
                                        hashTags: ['женская', 'сборная']
                                       },
                                         {
                                           id: '14',
                                           description: 'nЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
                                           createdAt: new Date('2018-02-23T23:00:00'),
                                           author: 'Иванов Иван',
                                           photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                                           likes: ['Иванов Иван'],
                                           hashTags: ['женская', 'сборная']
                                          },
                                            {
                                              id: '15',
                                              description: 'oЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
                                              createdAt: new Date('2018-02-23T23:00:00'),
                                              author: 'Иванов Иван',
                                              photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                                              likes: ['Иванов Иван'],
                                              hashTags: ['женская', 'сборная']
                                             },
                                               {
                                                 id: '16',
                                                 description: 'pЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
                                                 createdAt: new Date('2018-02-23T23:00:00'),
                                                 author: 'Иванов Иван',
                                                 photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                                                 likes: ['Иванов Иван'],
                                                 hashTags: ['женская', 'сборная']
                                                },
                                                  {
                                                    id: '17',
                                                    description: 'qЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
                                                    createdAt: new Date('2018-02-23T23:00:00'),
                                                    author: 'Иванов Иван',
                                                    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                                                    likes: ['Иванов Иван'],
                                                    hashTags: ['женская', 'сборная']
                                                   }

]; 

    function comparator(a,b){
    let date_of_a=new Date(a.createdAt);
    let date_of_b=new Date(b.createdAt);
    return date_of_a-date_of_b;

    }

    function getPhotoPost(id){
        let i=0;
        while(i<photoPosts.length){
            if(Number(id)==photoPosts[i].id){
            return photoPosts[i];
            }
            i++;
            }
        return -1;
    }
    function getIndex(id){
        let i=0;
        while(i<photoPosts.length){
            if(Number(id)==photoPosts[i].id){
            return i;
            }
            i++;
            }
        return -1;
    }

    function getPhotoPosts(skip=0, top=10, filterConfig={}){
    let empty_for_filter = [];

    let i = skip;
    let count=0;
    if(filterConfig.author!=undefined){
            while(i<photoPosts.length){
            if(filterConfig.author==photoPosts[i].author){
            empty_for_filter.push(photoPosts[i]);
            count++;
            }
            i++;
            }
    }
    if(filterConfig.description!=undefined){
                               while(i<photoPosts.length){
                        if(filterConfig.description==photoPosts[i].description){
                        empty_for_filter.push(photoPosts[i]);
                        count++;
                        }
                        i++;
                        } 
    }
    if(filterConfig.id!=undefined){
                               while(i<photoPosts.length){
                               if(filterConfig.id==photoPosts[i].id){
                               empty_for_filter.push(photoPosts[i]);
                               count++;
                               }
                               i++;
                               }


    }
    if(filterConfig.createdAt!=undefined){
                             while(i<photoPosts.length){
                            if(photoPosts[i].createdAt==filterConfig.createdAt){
                            empty_for_filter.push(photoPosts[i]);
                            count++;
                            }
                            i++;
                            }       
    }
    if(filterConfig.photoLink!=undefined){
                                    while(i<photoPosts.length){
                                    if(photoPosts[i].photoLink==filterConfig.photoLink){
                                    empty_for_filter.push(photoPosts[i]);
                                    count++;
                                    }
                                    i++;
                                    }
        
    }
    if(filterConfig.hashTags!=undefined){
                                    while(i<photoPosts.length){
                                    if(photoPosts[i].hashTags==filterConfig.hashTags){
                                    empty_for_filter.push(photoPosts[i]);
                                    count++;
                                    }
                                    i++;
                                    }
        
    }

    if(!filterConfig.hasOwnProperty()){
    empty_for_filter=photoPosts.slice(0, photoPosts.length);
    }

    empty_for_filter.sort(comparator);
    empty_for_filter.splice(0,skip-1);
    empty_for_filter.splice(top,empty_for_filter.length);
    return empty_for_filter;
    }

    function validatePhotoPost(post){
        check=true;
        if(post.id===undefined){
            return false;
        }
        else if (typeof(post.id) != 'string') {
            return false;
            
        }
            let i=0;
            let timer=0;
            while(i<photoPosts.length){
                if(photoPosts[i].id==post.id){
                    timer++;
                }
                i++;
            }
            if(timer>1){
            console.log("Not unique id")
            return false;
            }
        

        if(post.description===undefined){
            return false;
        }
        else if (typeof(post.description) != 'string') {
            return false;
        }
        
        if(post.description.length>=200){
              return false;
        }

        if(post.hashTags!=undefined){
            if (typeof(post.hashTags) != 'string') {
                return false;
            }
        }
        if(post.likes!=undefined){
            if (typeof(post.likes) != 'string') {
                return false;
            }
        }


        if(post.createdAt===undefined){
            return false;
        }
        else if (!(post.createdAt instanceof Date)) {
            return false;
        }

        if(post.author===undefined){
            return false;
        }
        else if (typeof(post.author) != 'string') {
            return false;
        }
        if(post.author.length==0){
            return false;
        }

        

        if(post.photoLink===undefined){
            return false;
        }
        else if (typeof(post.photoLink) != 'string') {
            return false;
        }
        if(post.photoLink.length==0){
            return false;
        }

        
        if(check)
        console.log("Valid data")
        else
        console.log("not valid")
        return check;
    }

    function addPhotoPost(post){
    if(validatePhotoPost(post)){
        photoPosts.push(post);
        return true;
    }
    else return false;
    }

    function editPhotoPost(id, obj){
        if(validatePhotoPost){
            let index=getIndex(id);
            if(obj.description!=undefined){
                photoPosts[index].description=obj.description;
            }
            if(obj.photoLink!=undefined){
                photoPosts[index].photoLink=obj.photoLink;
            }
            if(obj.likes!=undefined){
                photoPosts[index].likes=obj.likes;
            }
            if(obj.hashTags!=undefined){
                photoPosts[index].hashTags=obj.hashTags;
            }
            return true;

        }
        else return false;
    }

    function removePhotoPost(id){
        let index=getIndex(id);
        if(index!=-1){
            delete  photoPosts[index];
        }
        else return false;
    }




console.log(getPhotoPosts(undefined,undefined, undefined));
console.log("-------");
console.log(getPhotoPost("3"));
console.log("-------");
console.log(validatePhotoPost(photoPosts[2]));
console.log("-------");
console.log(addPhotoPost(photoPosts[1]));
console.log("-------");
console.log(editPhotoPost(2,{description: 'all-parties.com'}));
console.log("-------");
console.log(removePhotoPost(1));
console.log("-------");
} ());