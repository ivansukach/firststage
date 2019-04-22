
;(function() {
let photoPosts = [
  {
    id: '1',
    descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
   },
     {
       id: '2',
       descriprion: 'aaaaaa!!!',
       createdAt: new Date('2018-02-23T23:00:00'),
       author: 'Иванов Иван',
       photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
      },
        {
          id: '3',
          descriprion: 'bbbbbbbbbbb!!!',
          createdAt: new Date('2018-02-23T23:00:00'),
          author: 'Иванов Иван',
          photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
         },
           {
             id: '4',
             descriprion: 'cccccccccccccccccccccccccccc!!!',
             createdAt: new Date('2018-02-23T23:00:00'),
             author: 'Иванов Иван',
             photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
            },
              {
                id: '5',
                descriprion: 'ddddddddddddddddddddddddddddddd!!!',
                createdAt: new Date('2018-02-23T23:00:00'),
                author: 'Иванов Иван',
                photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
               },
                 {
                   id: '6',
                   descriprion: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!!',
                   createdAt: new Date('2018-02-23T23:00:00'),
                   author: 'Иванов Иван',
                   photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
                  },
                    {
                      id: '7',
                      descriprion: 'fffffffffffffffffffffff!!!',
                      createdAt: new Date('2018-02-23T23:00:00'),
                      author: 'Иванов Иван',
                      photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
                     },
                       {
                         id: '8',
                         descriprion: 'ggggggggggggggggggggggggggggggggggggggggggg!!!',
                         createdAt: new Date('2018-02-23T23:00:00'),
                         author: 'Иванов Иван',
                         photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
                        },
                          {
                            id: '9',
                            descriprion: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh!!!',
                            createdAt: new Date('2018-02-23T23:00:00'),
                            author: 'Иванов Иван',
                            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
                           },
                             {
                               id: '10',
                               descriprion: 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj!!!',
                               createdAt: new Date('2018-02-23T23:00:00'),
                               author: 'Иванов Иван',
                               photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
                              },
                                {
                                  id: '11',
                                  descriprion: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk!!!',
                                  createdAt: new Date('2018-02-23T23:00:00'),
                                  author: 'Иванов Иван',
                                  photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
                                 },

                                   {
                                     id: '12',
                                     descriprion: 'lЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
                                     createdAt: new Date('2018-02-23T23:00:00'),
                                     author: 'Иванов Иван',
                                     photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
                                    },
                                      {
                                        id: '13',
                                        descriprion: 'mЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
                                        createdAt: new Date('2018-02-23T23:00:00'),
                                        author: 'Иванов Иван',
                                        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
                                       },
                                         {
                                           id: '14',
                                           descriprion: 'nЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
                                           createdAt: new Date('2018-02-23T23:00:00'),
                                           author: 'Иванов Иван',
                                           photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
                                          },
                                            {
                                              id: '15',
                                              descriprion: 'oЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
                                              createdAt: new Date('2018-02-23T23:00:00'),
                                              author: 'Иванов Иван',
                                              photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
                                             },
                                               {
                                                 id: '16',
                                                 descriprion: 'pЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
                                                 createdAt: new Date('2018-02-23T23:00:00'),
                                                 author: 'Иванов Иван',
                                                 photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
                                                },
                                                  {
                                                    id: '17',
                                                    descriprion: 'qЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
                                                    createdAt: new Date('2018-02-23T23:00:00'),
                                                    author: 'Иванов Иван',
                                                    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
                                                   }

];


    function getPhotoPosts(skip=0, top=10, filterConfig){
    let empty_for_filter[];
    let i = skip;
    let count=0;
    switch(filterConfig) {
      case 'author':  // if (x === 'value1')
            while(i<photoPosts.length){
            if(photoPosts[i].author==filterConfig){
            empty_for_filter.push(photoPosts[i])
            count++;
            }
            i++;
            }
        [break]

      case 'description':  // if (x === 'value2')

        [break]

      case 'id':  // if (x === 'value2')

              [break]
      case 'createdAt':  // if (x === 'value2')

        [break]
      case 'photoLink':  // if (x === 'value2')

            [break]
      default:
        alert("Неправильный ввод");
        [break]
    }



    }


} ());