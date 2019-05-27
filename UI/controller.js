
;(function() {
    let photoPosts = [
        new Post('1',
            'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('2',
            'aaaaaa!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Евгений',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('3',
            'bbbbbbbbbbb!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Егор',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('4',
            'cccccccccccccccccccccccccccc!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Даниил',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('5',
            'ddddddddddddddddddddddddddddddd!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            '',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('6',
            'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!!',
            new Date('2018-02-23T23:00:00'),
            '',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('7',
            'fffffffffffffffffffffff!!!',
            new Date('2018-02-23T23:00:00'),
            'Сукач Иван',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('8',
            'ggggggggggggggggggggggggggggggggggggggggggg!!!',
            new Date('2018-02-23T23:00:00'),
            'Сукач Иван',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('9',
            'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh!!!',
            new Date('2018-02-23T23:00:00'),
            'Сукач Иван',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])

        ,
        new Post('10',
            'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj!!!',
            new Date('2018-02-23T23:00:00'),
            'Сукач Иван',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('11',
            'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,

        new Post('12',
            'lЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('13',
            'mЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('14',
            'nЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('15',
            'oЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('16',
            'pЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        ,
        new Post('17',
            'qЖенская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            new Date('2018-02-23T23:00:00'),
            'Иванов Иван',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['Иванов Иван'],
            ['женская', 'сборная'])
        

    ];


let ivanko = new Post('', 'hello, world!', '2019-05-06T23:00:00', 'Иван Сукач', 'http://www.vk.com/steel.muscles', 'Valenciago Dutin', '#good#morning');
let valentin = new Post('19', 'hello, Earth!', '2019-05-06T23:00:00', 'Валентин Дутин', 'http://www.vk.com/valentin.dutin', 'Ivan Sukach', '#good#night');
let mas = [ivanko, valentin];
let postCollection = new PostList(mas);
let page=postCollection.getPage(0,10,{author: 'Иван Сукач'});
console.log(page);
postCollection.addAll(photoPosts);
postCollection.edit('2',{author:"Valentin Dutin"});
postCollection.remove('19');
console.log(postCollection.getPage(0,20));
postCollection.clear();
console.log('postCollection after clearing');
console.log(postCollection.getPage(0,20));
console.log(typeof Post);

}());