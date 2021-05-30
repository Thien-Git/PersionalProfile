/**
 * 1. Render songs
 * 2. Scroll top
 * 3. Play / pause / seek
 * 4. CD rotate
 * 5. Next / prev
 * 6. Random
 * 7. Next / Repeat when ended
 * 8. Avctive song
 * 9. Scroll active song into view
 * 10. Play song when click
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    currentIndex: 0,
    songs: [{
            name: 'Laylalay',
            singer: 'JackG5R',
            path: '../assets/music/Laylalay-JackG5R.mp3',
            image: '../assets/img/laylalay.jpeg'
        },
        {
            name: 'SaiGonDauLongQua',
            singer: 'HuaKimTuyenHoangDuyen',
            path: '../assets/music/SaiGonDauLongQua-HuaKimTuyenHoangDuyen.mp3',
            image: '../assets/img/saigondaulongqua.jpg'
        },
        {
            name: 'VachNgocNga',
            singer: 'AnhRong',
            path: '../assets/music/VachNgocNga-AnhRong.mp3',
            image: '../assets/img/vachngocnga.jpg'
        },
        {
            name: 'VachNgocNga',
            singer: 'AnhRong',
            path: '../assets/music/VachNgocNga-AnhRong.mp3',
            image: '../assets/img/vachngocnga.jpg'
        },
        {
            name: 'VachNgocNga',
            singer: 'AnhRong',
            path: '../assets/music/VachNgocNga-AnhRong.mp3',
            image: '../assets/img/vachngocnga.jpg'
        },
        {
            name: 'VachNgocNga',
            singer: 'AnhRong',
            path: '../assets/music/VachNgocNga-AnhRong.mp3',
            image: '../assets/img/vachngocnga.jpg'
        },
    ],
    render: function() {
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>`
        })
        $('.playlist').innerHTML = htmls.join('')
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            ger: function() {
                return this.song[this.currentIndex]
            }
        })
    },
    
    handleEvents: function() {
        const cd = $('.cd');
        const cdWidth = cd.offsetWidth

        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop   
            const newCdWidth = cdWidth - scrollTop

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }
    },
   
    start: function() {
        this.handleEvents()
        this.defineProperties()
        this.render()
    }  
}

app.start();

