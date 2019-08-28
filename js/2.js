console.log('mguiah');
document.addEventListener("DOMContentLoaded", function() {
    var lienhe = document.querySelector('.lienhe');
    var menu = document.querySelector('.menurs');
    var logo = document.querySelector('.navbar-brand');
    var thongtin1 = document.querySelector('.thongtin1');
    console.log(logo);
    var trangthai = "duoi100";
    window.addEventListener('scroll', function() {
        console.log(window.pageYOffset);
        if (this.pageYOffset > 200) {
            if (trangthai == "duoi100") {
                trangthai = "tren100";
                lienhe.classList.add('lienhebienmat');
                menu.classList.add('menurs-fix');
                logo.classList.add('logo-fix');
                thongtin1.classList.add('bienmat');
            }
        } else {
            if (trangthai == 'tren100') {
                trangthai = 'duoi100';
                lienhe.classList.remove('lienhebienmat');
                menu.classList.remove('menurs-fix')
                logo.classList.remove('logo-fix')
                thongtin1.classList.remove('bienmat');

            }
        }
    })

})
document.addEventListener("DOMContentLoaded", function() {
    var back = document.querySelector('.back-to-top');
    console.log(back);
    var trangthaiback = "duoi1500";
    window.addEventListener('scroll', function() {
        console.log(window.pageYOffset);
        if (this.pageYOffset > 500) {
            if (trangthaiback == "duoi1500") {
                trangthaiback = "tren1500";
                back.classList.add('xuathienback');
            }
        } else {
            if (trangthaiback == 'tren1500') {
                trangthaiback = 'duoi1500';
                back.classList.remove('xuathienback');

            }
        }
    })

})

document.addEventListener("DOMContentLoaded", function() {
    var dangnhap = document.querySelector('.dangnhap');
    var hopthoai = document.querySelector('.hopthoai'),
        nut_close = document.getElementById('close'),
        nut_dangnhap = document.getElementById('dangnhapbg');

    trangthai_nutdangnhap = "false";

    console.log(nut_close);
    console.log(hopthoai);

    dangnhap.onclick = function() {
        if (trangthai_nutdangnhap == 'false') {
            trangthai_nutdangnhap = "true";
            hopthoai.classList.toggle('active');
            nut_dangnhap.classList.toggle('active');
        }
    }
    nut_close.onclick = function() {
        if (trangthai_nutdangnhap == 'true') {
            trangthai_nutdangnhap = "false";
            hopthoai.classList.toggle('active');
            nut_dangnhap.classList.toggle('active');
        }
    }
    // phần giỏ hàng
    var chonmua = document.getElementById('card-button1');
    var soluong = document.getElementById('cart-number'),
        trangthai_soluong= 1;
        like=document.querySelector('.fa-heart');
    chonmua.onclick = function(){
        chonmua.innerHTML='Đi đến giỏ hàng';
        soluong.innerHTML=trangthai_soluong++;
    }
    like.onclick = function (){
        console.log('sadasd');
        like.classList.toggle('fas');
        like.classList.toggle('far');
    }


})

