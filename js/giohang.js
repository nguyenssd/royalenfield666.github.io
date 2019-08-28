console.log('mguiah');
document.addEventListener("DOMContentLoaded", function() {
    var lienhe = document.querySelector('.lienhe');
    var menu = document.querySelector('.menurs');
    var logo = document.querySelector('.navbar-brand');
    var thongtin1 = document.querySelector('.thongtin1');
    console.log(logo);
    var trangthai = "duoi100";
    window.addEventListener('scroll', function() {
        if (this.pageYOffset > 200) {
            if (trangthai == "duoi100") {
                trangthai = "tren100";
                lienhe.classList.add('lienhebienmat');
                menu.classList.add('menurs-fix');
                logo.classList.add('logo-fix');
            }
        } else {
            if (trangthai == 'tren100') {
                trangthai = 'duoi100';
                lienhe.classList.remove('lienhebienmat');
                menu.classList.remove('menurs-fix')
                logo.classList.remove('logo-fix')

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
    var soluong_sanpham=document.querySelector('.soluong'),
        daucong=document.querySelector('.dau-cong'),
        dautru=document.querySelector('.dau-tru'),
        tamtinh= document.querySelector('.tam-tinh'),
        thanhtien=document.querySelector('.thanh-tien'); 
        var tong_cong= 1 ;
        console.log(tamtinh);
        if(tong_cong >= 1 ){
            dautru.onclick = function(){
                if(tong_cong>1){
                    soluong_sanpham.innerHTML=tong_cong=tong_cong - 1;
                    console.log(tong_cong);
                }

            }
            daucong.onclick = function(){
                soluong_sanpham.innerHTML=tong_cong= tong_cong + 1;
                console.log(tong_cong);
            }
        }
            
        

})

