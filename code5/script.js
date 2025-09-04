const danhSachSanPham = [
    {
        id: 1,
        ten: "Nike Air Force 1 shadow",
        gia: "2,500,000 VND",
        anh: "giay-nike-air-force-1-shadow-pale-ivory7.jpg",
        mauSac: ["#FFFFFF", "#000000", "#FF0000", "#0000FF", "#FFFF00"],
        kichThuoc: [36, 37, 38, 39, 40, 41, 42],
        moTa: "Giày Nike Air Force 1 cổ điển với thiết kế đơn giản nhưng đầy phong cách."
    },
    {
        id: 2,
        ten: "Giày-AF1-PSG",
        gia: "3,200,000 VND",
        anh: "Giày-AF1-PSG-1.jpg",
        mauSac: ["#FFFFFF", "#000000", "#FFA500", "#00FF00", "#800080"],
        kichThuoc: [36, 37, 38, 39, 40, 41, 42],
        moTa: "Air Max 90 với đế khí đặc trưng, thoải mái và năng động."
    },
    {
        id: 3,
        ten: "Nike Air Force 1 Para Noise",
        gia: "2,800,000 VND",
        anh: "Nike-Air-Force-1-Para-Noise.jpg..webp",
        mauSac: ["#FFFFFF", "#000000", "#FF0000", "#0000FF", "#FFC0CB"],
        kichThuoc: [36, 37, 38, 39, 40, 41, 42],
        moTa: "Dunk Low - biểu tượng của phong cách streetwear."
    },
    {
        id: 4,
        ten: "Nike Air Jordan Obsidian UNC",
        gia: "4,500,000 VND",
        anh: "z4.jpg",
        mauSac: ["#FFFFFF", "#000000", "#FF0000", "#0000FF", "#FFA500"],
        kichThuoc: [36, 37, 38, 39, 40, 41, 42],
        moTa: "Air Jordan 1 - đôi giày bóng rổ huyền thoại nay trở thành biểu tượng thời trang."
    },
    {
        id: 5,
        ten: "Nike Blazer Mid",
        gia: "2,700,000 VND",
        anh: "nike blaze.png",
        mauSac: ["#FFFFFF", "#000000", "#808080", "#964B00", "#FF0000"],
        kichThuoc: [36, 37, 38, 39, 40, 41, 42],
        moTa: "Blazer Mid với thiết kế cổ điển từ những năm 70 nhưng vẫn rất thời thượng."
    },
    {
        id: 6,
        ten: "Nike Air Force 1",
        gia: "3,800,000 VND",
        anh: "Giày-Nike-Air-Force-1-Rep-7.jpg",
        mauSac: ["#FFFFFF", "#000000", "#00FFFF", "#FF00FF", "#00FF00"],
        kichThuoc: [36, 37, 38, 39, 40, 41, 42],
        moTa: "Đôi giày chạy bộ với công nghệ React êm ái, giảm chấn thương."
    },
    {
        id: 7,
        ten: "Nike Air Max Excee",
        gia: "2,000,000 VND",
        anh: "nike.webp",
        mauSac: ["#FFFFFF", "#000000", "#FF0000", "#0000FF", "#FFFF00"],
        kichThuoc: [36, 37, 38, 39, 40, 41, 42],
        moTa: "VaporMax với đế khí nguyên khối, êm ái và nhẹ tênh."
    },
    {
        id: 8,
        ten: "Nike Air Max 97",
        gia: "3,500,000 VND",
        anh: "Giày-Nike-Air-Max-97-All-White.jpg",
        mauSac: ["#FFFFFF", "#000000", "#FFA500", "#00FF00", "#800080"],
        kichThuoc: [36, 37, 38, 39, 40, 41, 42],
        moTa: "Pegasus - đôi giày chạy bộ được ưa chuộng nhất với công nghệ Zoom Air."
    },
    {
        id: 9,
        ten: "Nike Wmns Air Force 1 ",
        gia: "2,900,000 VND",
        anh: "dd9625-100-1.webp",
        mauSac: ["#FFFFFF", "#000000", "#FF0000", "#0000FF", "#FFC0CB"],
        kichThuoc: [36, 37, 38, 39, 40, 41, 42],
        moTa: "Free RN với thiết kế linh hoạt, cảm giác như đi chân đất."
    },
    {
        id: 10,
        ten: "Nike super red",
        gia: "3,600,000 VND",
        anh: "khs5t0kjv6jfz.jpg",
        mauSac: ["#FFFFFF", "#000000", "#FFA500", "#00FF00", "#800080"],
        kichThuoc: [36, 37, 38, 39, 40, 41, 42],
        moTa: "Metcon 6 - đôi giày tập luyện đa năng, ổn định và bền bỉ."
    },
        {
        id: 11,
        ten: "jordan stadium 90 white teal",
        gia: "1,600,000 VND",
        anh: "jordan-stadium-90-white-teal.png",
        mauSac: ["#FFFFFF", "#000000", "#FFA500", "#00FF00", "#800080"],
        kichThuoc: [36, 37, 38, 39, 40, 41, 42],
        moTa: "Metcon 6 - đôi giày tập luyện đa năng, ổn định và bền bỉ."
    },
        {
        id: 12,
        ten: "Nike Jordan Replica",
        gia: "2,800,000 VND",
        anh: "jordan_hong.jpg",
        mauSac: ["#FFFFFF", "#000000", "#FFA500", "#00FF00", "#800080"],
        kichThuoc: [36, 37, 38, 39, 40, 41, 42],
        moTa: "Metcon 6 - đôi giày tập luyện đa năng, ổn định và bền bỉ."
    }

];

let gioHang = [];
let lichSuMuaHang = JSON.parse(localStorage.getItem('lichSuMuaHang')) || [];
let sanPhamDangChon = null;
let mauDangChon = null;
let sizeDangChon = null;

const danhSachSanPhamElement = document.getElementById('danh-sach-san-pham');
const chiTietSanPhamElement = document.getElementById('chi-tiet-san-pham');
const thongTinKhachHangElement = document.getElementById('thong-tin-khach-hang');
const lichSuMuaHangElement = document.getElementById('lich-su-mua-hang');
const formMuaHang = document.getElementById('form-mua-hang');
const danhSachDonHangElement = document.getElementById('danh-sach-don-hang');

function hienThiDanhSachSanPham() {
    danhSachSanPhamElement.innerHTML = '';
    
    danhSachSanPham.forEach(sanPham => {
        const sanPhamElement = document.createElement('div');
        sanPhamElement.className = 'san-pham-item';
        sanPhamElement.innerHTML = `
            <img src="${sanPham.anh}" alt="${sanPham.ten}">
            <div class="thong-tin-san-pham">
                <h3>${sanPham.ten}</h3>
                <p class="gia">${sanPham.gia}</p>
                <button class="xem-them" data-id="${sanPham.id}">Xem chi tiết</button>
            </div>
        `;
        danhSachSanPhamElement.appendChild(sanPhamElement);
    });

    document.querySelectorAll('.xem-them').forEach(button => {
        button.addEventListener('click', function() {
            const idSanPham = parseInt(this.getAttribute('data-id'));
            hienThiChiTietSanPham(idSanPham);
        });
    });
}

function hienThiChiTietSanPham(id) {
    sanPhamDangChon = danhSachSanPham.find(sp => sp.id === id);
    
    document.getElementById('anh-chi-tiet').src = sanPhamDangChon.anh;
    document.getElementById('ten-san-pham-chi-tiet').textContent = sanPhamDangChon.ten;
    document.getElementById('gia-chi-tiet').textContent = sanPhamDangChon.gia;
    
    const chonMauElement = document.getElementById('chon-mau');
    chonMauElement.innerHTML = '';
    sanPhamDangChon.mauSac.forEach((mau, index) => {
        const mauElement = document.createElement('div');
        mauElement.className = 'mau';
        mauElement.style.backgroundColor = mau;
        mauElement.setAttribute('data-mau', mau);
        if (index === 0) {
            mauElement.classList.add('active');
            mauDangChon = mau;
        }
        mauElement.addEventListener('click', function() {
            document.querySelectorAll('.mau').forEach(m => m.classList.remove('active'));
            this.classList.add('active');
            mauDangChon = this.getAttribute('data-mau');
        });
        chonMauElement.appendChild(mauElement);
    });
    
    const chonSizeElement = document.getElementById('chon-size');
    chonSizeElement.innerHTML = '';
    sanPhamDangChon.kichThuoc.forEach(size => {
        const sizeElement = document.createElement('button');
        sizeElement.className = 'size-btn';
        sizeElement.textContent = size;
        sizeElement.setAttribute('data-size', size);
        if (size === 38) {
            sizeElement.classList.add('active');
            sizeDangChon = size;
        }
        sizeElement.addEventListener('click', function() {
            document.querySelectorAll('.size-btn').forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            sizeDangChon = parseInt(this.getAttribute('data-size'));
        });
        chonSizeElement.appendChild(sizeElement);
    });
    
    danhSachSanPhamElement.style.display = 'none';
    chiTietSanPhamElement.style.display = 'block';
    
    document.querySelector('.them-vao-gio').addEventListener('click', function() {
        themVaoGioHang();
    });
    
    document.querySelector('.quay-lai').addEventListener('click', function() {
        danhSachSanPhamElement.style.display = 'grid';
        chiTietSanPhamElement.style.display = 'none';
    });
}

function themVaoGioHang() {
   
    if (!mauDangChon || !sizeDangChon) {
        alert('Vui lòng chọn màu sắc và kích thước!');
        return;
    }
    
    gioHang = [];
    
    const sanPhamTrongGio = {
        ...sanPhamDangChon,
        mau: mauDangChon,
        size: sizeDangChon,
        soLuong: 1
    };
    
    gioHang.push(sanPhamTrongGio);
    
    chiTietSanPhamElement.style.display = 'none';
    thongTinKhachHangElement.style.display = 'block';
}

function hienThiLichSuMuaHang() {
    danhSachDonHangElement.innerHTML = '';
    
    if (lichSuMuaHang.length === 0) {
        danhSachDonHangElement.innerHTML = '<p>Bạn chưa có đơn hàng nào.</p>';
        return;
    }
    
lichSuMuaHang.forEach((donHang, index) => {
    const donHangElement = document.createElement('div');
    donHangElement.className = 'don-hang';
    donHangElement.innerHTML = `
        <div class="thong-tin-don-hang-wrapper" style="display: flex; justify-content: space-between; flex-wrap: wrap;">
            <div class="cot-trai" style="flex: 1; min-width: 200px;">
                <p><strong>Ngày:</strong> ${donHang.ngay}</p>
                <p><strong>Tổng tiền:</strong> ${donHang.tongTien}</p>
                <p><strong>STĐ:</strong> ${donHang.sdt}</p>
                <p><strong>Địa chỉ:</strong> ${donHang.diaChi}</p>
            </div>
            <div class="cot-phai" style="flex: 1; min-width: 200px; text-align: right">
                <p><strong>Khách hàng:</strong> ${donHang.tenKhachHang}</p>
                <p><strong>Trạng thái:</strong> ${donHang.trangThai}</p>
            </div>
        </div>
        
        <h3>Sản phẩm:</h3>
        ${donHang.sanPham.map(sp => `
            <div class="san-pham-trong-don">
                <img src="${sp.anh}" alt="${sp.ten}">
                <div class="chi-tiet-san-pham-don">
                    <p><strong>${sp.ten}</strong></p>
                    <p>Size: ${sp.size} | Màu: 
                        <span style="display: inline-block; width: 15px; height: 15px; background-color: ${sp.mau}; border-radius: 50%;"></span>
                    </p>
                    <p>Giá: ${sp.gia}</p>
                </div>
            </div>
        `).join('')}

        <button class="huy-don" data-index="${index}">Hủy đơn</button>
    `;
    danhSachDonHangElement.appendChild(donHangElement);
});


    document.querySelectorAll('.huy-don').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            huyDonHang(index);
        });
    });
}


function huyDonHang(index) {
    lichSuMuaHang.splice(index, 1);
    localStorage.setItem('lichSuMuaHang', JSON.stringify(lichSuMuaHang));
    hienThiLichSuMuaHang();
}


function tinhTongTien(gioHang) {
    let tongTien = 0;
    gioHang.forEach(sp => {
        const gia = parseInt(sp.gia.replace(/\D/g, '')) * sp.soLuong;
        tongTien += gia;
    });
    return tongTien.toLocaleString('vi-VN') + ' VND';
}


document.addEventListener('DOMContentLoaded', function() {
 
    if (!window.localStorage) {
        alert('Trình duyệt của bạn không hỗ trợ localStorage. Lịch sử mua hàng sẽ không được lưu.');
    }
    
    hienThiDanhSachSanPham();
    

    document.querySelector('.lich-su').addEventListener('click', function(e) {
        e.preventDefault();
        danhSachSanPhamElement.style.display = 'none';
        lichSuMuaHangElement.style.display = 'block';
        hienThiLichSuMuaHang();
    });
    
 
    document.querySelector('.quay-lai-lich-su').addEventListener('click', function() {
        lichSuMuaHangElement.style.display = 'none';
        danhSachSanPhamElement.style.display = 'grid';
    });
    
 
    formMuaHang.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const tenKhachHang = document.getElementById('ten').value;
        const sdt = document.getElementById('sdt').value;
        const diaChi = document.getElementById('dia-chi').value;
        
 
        const donHangMoi = {
            ngay: new Date().toLocaleString(),
            tenKhachHang: tenKhachHang,
            sdt: sdt,
            diaChi: diaChi,
            sanPham: [...gioHang], 
            tongTien: tinhTongTien(gioHang),
            trangThai: 'Đã đặt hàng'
        };
        
    
        lichSuMuaHang.push(donHangMoi);
        localStorage.setItem('lichSuMuaHang', JSON.stringify(lichSuMuaHang));
        
       
        formMuaHang.reset();
        gioHang = [];
        
     
        thongTinKhachHangElement.style.display = 'none';
        danhSachSanPhamElement.style.display = 'grid';
        
       
        alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại Nike Store.');
    });
});