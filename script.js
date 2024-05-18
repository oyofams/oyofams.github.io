const header = document.querySelector('header');
const header_title = document.getElementById('header_title');
const info_race = document.getElementById("inforace");
const d_btn1 = document.getElementById('d_btn1');
const d_btn2 = document.getElementById('d_btn2');
const slider_btn = document.querySelectorAll('.dot');


const backimg = {
    fimg: 'img/1.jpg',
    simg: 'img/2.jpg',
    timg: 'img/5.jpg'
}



const slider_load = (index) =>{
    const images = [backimg.fimg, backimg.simg, backimg.timg]
    const titles = ["Holy Alliance Cora", "Acretia Empire", "Bellato Union"]
    const text = ["Holy Alliance Cora adalah suatu bangsa dengan peradaban spiritual yang amat kuat budayanya di bidang agama dan seni sihir. Berdasarkan sejarah, bangsa Cora sendiri merupakan bangsa yang terbentuk dari campuran beberapa negara dan bangsa yang memiliki kepercayaan sama. Penampilan mereka juga amat menarik, laki-lakinya tinggi tegap, dan perempuannya elok dan cantik.", "Accretia adalah ras siborg. Sekarang mereka mempunyai tujuan untuk menguasai dunia. Tubuh metal mereka adalah yang paling kuat di dalam permainan dan mempunyai teknologi canggih, tetapi mereka tidak bisa memakai sihir. Ras ini mendirikan kekaisaran, yaitu Acretia Empire.", " Bellato Union merupakan bangsa petualang yang memiliki ilmu pengetahuan yang tinggi. Dalam menjalani petualangannya, bangsa Bellato banyak didukung dengan berbagai macam teknologi. Bellato mampu membuat Massive Armor Unit (MAU) dan senjata untuk dipergunakan dalam peperangan. Tingkat gravitasi yang tinggi di planet asal Bellato membuat tubuh mereka pendek, tetapi fisik mereka cukup kuat dan pandai. Bellato juga merupakan ahli ekonomi dan berdagang. Keserakahan telah mendorong mereka untuk pergi ke planet lainnya, untuk menjajah dan mendapatkan resources lebih. Untuk memperluas sampai akhir alam semesta, Bellato ingin memastikan bahwa Sektor Novus tidak jatuh dalam kekuasaan Accretia atau Cora. Keinginan untuk tumbuh dan berkembang pasti akan membuat alam semesta diliputi kekacauan."]

    header.style.background = `url(${images[index]}) no-repeat center center/cover`;
    header_title.innerText = titles[index];
    info_race.innerText = text[index];

    slider_btn.forEach((btn, i)=>{
        btn.style.background = i === index ? "#fff" : "rgb(184,184,184,0.1)"
    })

    d_btn1.href = "https://www.universepvp.com/"
    d_btn2.href = "#"
};

let currentIndex = 0;

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slider_btn.length;
    slider_load(currentIndex);
};

slider_btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
        slider_load(currentIndex);
    });
});

setInterval(nextSlide, 10000);
slider_load(currentIndex);