const books = [
    {
        "title": "Chiến Thắng Con Quỷ Trong Bạn",
        "author": "Napoleon Hill",
        "image": "A0001.jpg"
    },
    {
        "title": "Nghệ Thuật Tư Duy Phản Biện",
        "author": "Albert Rutherford",
        "image": "A0002.jpg"
    },
    {
        "title": "Không gia đình",
        "author": "Hector Malot",
        "image": "A0003.jpg"
    },
    {
        "title": "Nghìn Lẻ Một Đêm",
        "author": "Harper Lee",
        "image": "A0004.jpg"
    },
    {
        "title": "Nhà Giả Kim",
        "author": "Paulo Coelho",
        "image": "A0005.jpg"
    },
    {
        "title": "Như Bây Giờ Vẫn Ổn",
        "author": "Đại sư Pomnyun Sunim",
        "image": "A0006.jpg"
    },
    {
        "title": "Bước Chậm Lại Giữa Thế Gian Vội Vã",
        "author": "Hae Min",
        "image": "A0007.jpg"
    },
    {
        "title": "Hoàng Tử Bé",
        "author": "Antoine De Saint-Exupéry",
        "image": "A0008.jpg"
    },
    {
        "title": "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
        "author": "Nguyễn Nhật Ánh",
        "image": "A0009.jpg"
    },
    {
        "title": "Một Lít Nước Mắt",
        "author": "Kito Aya",
        "image": "A0010.jpg"
    },
    {
        "title": "Ngay Bây Giờ Hoặc Không Bao Giờ",
        "author": "J. S. Scott",
        "image": "A0011.jpg"
    },
    {
        "title": "Cân Bằng Cảm Xúc, Cả Lúc Bão Giông",
        "author": "Richard Nicholls",
        "image": "A0012.jpg"
    },
    {
        "title": "Dấu Chân Trên Cát",
        "author": "Mika Waltari",
        "image": "A0013.jpg"
    },
    {
        "title": "Nơi em quay về có tôi đứng đợi",
        "author": "Ichikawa Takuji",
        "image": "A0014.jpg"
    },
    {
        "title": "Sống Thực Tế Giữa Đời Thực Dụng",
        "author": "Mễ Mông",
        "image": "A0015.jpg"
    },
    {
        "title": "Đàn Ông Sao Hỏa Đàn Bà Sao Kim",
        "author": "John Gray",
        "image": "A0016.jpg"
    },
    {
        "title": "Thiên Tài Bên Trái, Kẻ Điên Bên Phải ",
        "author": "Cao Minh",
        "image": "A0017.jpg"
    },
    {
        "title": "Những Điều Tốt Đẹp Luôn Đúng Hạn Mà Đến",
        "author": "Cá yêu tinh Rei",
        "image": "A0018.jpg"
    },
    {
        "title": "Sáng Hoan Ca, Chiều Thưởng Rượu",
        "author": "Quan Đông Dã Khách",
        "image": "A0019.jpg"
    },
    {
        "title": "Trật Tự Thời Gian",
        "author": "Carlo Rovelli",
        "image": "A0020.jpg"
    }
];

// fetch('./data.json')
//   .then(response => response.json())
//   .then(json => console.log(json));
console.log("baotram");

// var books = require('./data.json');
// console.log(books);

// let title = "Như Bây Giờ Vẫn Ổn";
// let author = "Đại sư Pomnyun Sunim";
// let idBook = "A0006";

// document.getElementById('title').innerHTML = books[1].title;
// document.getElementById('author').innerHTML = books[3].author;
// document.getElementById('make-image').src = "img/cover/" + idBook + ".jpg";

for (let index = 0; index < books.length; index++) {
    document.body.innerHTML += 
    '<div class="card" style="width: 18rem;"><img src="img/cover/' + books[index].image +'" class="card-img-center img-fluid rounded" alt="img/cover/000.jpg" ><div class="card-body"> <h5 class="card-title">'+books[index].title+'</h5><p class="card-text">Tác giả: '+books[index].author+'</p></div></div>'

}