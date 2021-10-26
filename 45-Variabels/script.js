// mengambil elemen button
const btn = document.querySelector('button');
// mengambil elemen html
const html = document.querySelector('html');

// ketika tombol di klik
btn.addEventListener('click', function(){
    // cek color mode saat ini. kalo ketemu lalu ubah
    if(html.dataset.colorMode === 'light'){
        html.dataset.colorMode = 'dark';
        this.textContent = 'Light Mode';
    } else {
        html.dataset.colorMode = 'light';
        this.textContent = 'Dark Mode';
    }

});

// mengambil id padding
const boxPadding = document.querySelector('#padding');
// mengambil id color
const color = document.querySelector('#color')

// event untuk padding
boxPadding.addEventListener('mousemove', function(){
    document.documentElement.style.setProperty('--box-padding' , this.value + 'px');
});

// event untuk color
color.addEventListener('change', function(){
    document.documentElement.style.setProperty('--colorControl' , this.value);
});