
;(function() {
    let photoPosts = [
        new Post('1',
            '������� ������� �������� �������� �������� � ������ ������������ �� �������� �� ����������� ����� � ���������!!!',
            new Date('2018-02-23T23:00:00'),
            '������ ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('2',
            'aaaaaa!!!',
            new Date('2018-02-23T23:00:00'),
            '������ �������',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('3',
            'bbbbbbbbbbb!!!',
            new Date('2018-02-23T23:00:00'),
            '������ ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('4',
            'cccccccccccccccccccccccccccc!!!',
            new Date('2018-02-23T23:00:00'),
            '������ ������',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('5',
            'ddddddddddddddddddddddddddddddd!!!',
            new Date('2018-02-23T23:00:00'),
            '������ ����',
            '',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('6',
            'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!!',
            new Date('2018-02-23T23:00:00'),
            '',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('7',
            'fffffffffffffffffffffff!!!',
            new Date('2018-02-23T23:00:00'),
            '����� ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('8',
            'ggggggggggggggggggggggggggggggggggggggggggg!!!',
            new Date('2018-02-23T23:00:00'),
            '����� ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('9',
            'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh!!!',
            new Date('2018-02-23T23:00:00'),
            '����� ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])

        ,
        new Post('10',
            'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj!!!',
            new Date('2018-02-23T23:00:00'),
            '����� ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('11',
            'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk!!!',
            new Date('2018-02-23T23:00:00'),
            '������ ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,

        new Post('12',
            'l������� ������� �������� �������� �������� � ������ ������������ �� �������� �� ����������� ����� � ���������!!!',
            new Date('2018-02-23T23:00:00'),
            '������ ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('13',
            'm������� ������� �������� �������� �������� � ������ ������������ �� �������� �� ����������� ����� � ���������!!!',
            new Date('2018-02-23T23:00:00'),
            '������ ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('14',
            'n������� ������� �������� �������� �������� � ������ ������������ �� �������� �� ����������� ����� � ���������!!!',
            new Date('2018-02-23T23:00:00'),
            '������ ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('15',
            'o������� ������� �������� �������� �������� � ������ ������������ �� �������� �� ����������� ����� � ���������!!!',
            new Date('2018-02-23T23:00:00'),
            '������ ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('16',
            'p������� ������� �������� �������� �������� � ������ ������������ �� �������� �� ����������� ����� � ���������!!!',
            new Date('2018-02-23T23:00:00'),
            '������ ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        ,
        new Post('17',
            'q������� ������� �������� �������� �������� � ������ ������������ �� �������� �� ����������� ����� � ���������!!!',
            new Date('2018-02-23T23:00:00'),
            '������ ����',
            'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            ['������ ����'],
            ['�������', '�������'])
        

    ];


let ivanko = new Post('18', 'hello, world!', '2019-05-06T23:00:00', '���� �����', 'http://www.vk.com/steel.muscles', 'Valenciago Dutin', '#good#morning');
let valentin = new Post('19', 'hello, Earth!', '2019-05-06T23:00:00', '�������� �����', 'http://www.vk.com/valentin.dutin', 'Ivan Sukach', '#good#night');
let mas = [ivanko, valentin];
let postCollection = new postList(mas);
let Page=postCollection.getPage(0,10,{author: '���� �����'});
console.log(Page);
postCollection.addAll(photoPosts);
postCollection.remove('19');
console.log(postCollection.getPage(0,20));
postCollection.clear();
console.log('postCollection after clearing');
console.log(postCollection.getPage(0,20));
console.log(typeof Post);

}());