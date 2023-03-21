use shop; 

insert into users(username, email, first_name, last_name, image_url, created_at, updated_at) values ("mikaela", "mie@du.se","Mikaela", "Hedberg", "https://users.du.se/~mie/common/images/mie.jpg", '2022-11-17 22:42:14', '2022-11-17 00:00:00');
insert into users(username, email, first_name, last_name, image_url, created_at, updated_at) values ("yoshi", "yoshi@du.se","Yoshi", "Akterkvist", "https://users.du.se/~mie/common/images/yoshi.jpg", '2022-11-17 22:42:14', '2022-11-17 00:00:00');

insert into products (title, body, image_url, price, created_at, updated_at) values ('Cykel, fin soms fan!', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas ', 'http://dummyimage.com/609x600.png/dddddd/000000', 2000, '2021-04-12 10:22:14', '2022-02-09 00:00:00');

insert into products (title, body, image_url,price, created_at, updated_at) values ('Toffel', 'Äten! ', 'http://dummyimage.com/609x600.png/dddddd/000000', 200,'2021-04-12 10:22:14', '2022-02-09 00:00:00');