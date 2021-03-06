const initialState = {//инициализации массива
    movies: [
        {
            id: 1,
            name: "Green Book",
            image:"https://images-na.ssl-images-amazon.com/images/I/61Z6bxl6JsL._SY741_.jpg",
            url:"https://itunes.apple.com/us/movie/green-book/id1441554470",
        },
        {
            id: 2,
            name: "Venom",
            image:"https://i.pinimg.com/originals/81/e7/e7/81e7e729be0c451e5de818b522c6cf82.jpg",
            url:"https://itunes.apple.com/us/movie/venom/id1437190744",
        },
        {
            id: 3,
            name: "Aquaman",
            image:"https://cdn.traileraddict.com/content/warner-bros-pictures/aquaman-poster-3.jpg",
            url:"https://itunes.apple.com/us/movie/aquaman-2018/id1444244278",
        },
        {
            id: 4,
            name: "Instant Family",
            image:"data:image/jpeg;base64,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",
            url:"https://itunes.apple.com/us/movie/instant-family/id1440858253",
        },
        {
            id: 5,
            name: "Mary Popins Return",
            image:"https://images-na.ssl-images-amazon.com/images/I/71JiWFUHf6L._SL1112_.jpg",
            url:"https://itunes.apple.com/us/movie/mary-poppins-returns/id1445630334",
        },
        {
            id: 6,
            name: "Creed II",
            image:"https://i.pinimg.com/originals/8a/91/c9/8a91c96f4ec0d16c419e6ff73262df54.jpg",
            url:"https://itunes.apple.com/us/movie/creed-ii/id1440204355",
        },
        {
            id: 7,
            name: "Spider-Man: Into the Spider-Verse",
            image:"https://images-na.ssl-images-amazon.com/images/I/71woXNTh5jL._SY606_.jpg",
            url:"https://itunes.apple.com/us/movie/spider-man-into-the-spider-verse/id1444695454",
        },
        {
            id: 8,
            name: "Ralph Breaks the Internet",
            image:"https://media.kg-portal.ru/movies/w/wreckitralph2/posters/wreckitralph2_17.jpg",
            url:"https://itunes.apple.com/us/movie/ralph-breaks-the-internet/id1441465303",
        },
        {
            id: 9,
            name: "Mortal Engines",
            image:"https://fs.kinomania.ru/file/film_poster/0/ea/0ea1172f335378bb73224bfa315daea0.jpeg",
            url:"https://itunes.apple.com/us/movie/mortal-engines/id1445351607",
        },
        {
            id: 10,
            name: "Iron Man",
            image:"https://www.movieposter.com/posters/archive/main/65/MPW-32744",
            url:"https://itunes.apple.com/us/movie/iron-man/id688163154",
        },
        {
            id: 11,
            name: "Robin Hood(2018)",
            image:"https://i.pinimg.com/originals/6c/d6/bf/6cd6bf6c188e8579261d1e3438780a73.jpg",
            url:"https://itunes.apple.com/us/movie/robin-hood-2018/id1441710319",
        },
        {
            id: 12,
            name: "Fantastic Beasts: The Crimes of Grindelwald",
            image:"https://d1nao0k9edgivc.cloudfront.net/wp-content/uploads/2018/10/fantastic_beasts_the_crimes_of_grindelwald_ver20_xxlg.jpg",
            url:"https://itunes.apple.com/us/movie/fantastic-beasts-the-crimes-of-grindelwald/id1440342126",
        },
        {
            id: 13,
            name: "Bohemian Rhapsody",
            image:"https://media.kg-portal.ru/movies/b/bohemianrhapsody/posters/bohemianrhapsody_9.jpg",
            url:"https://itunes.apple.com/us/movie/bohemian-rhapsody/id1438697738",
        },
        {
            id: 14,
            name: "Free Solo",
            image:"https://m.media-amazon.com/images/M/MV5BMjMwYjcwNWQtNTQ5YS00MzVlLTkxYzMtNDIwZWIxZTE4Zjg2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            url:"https://itunes.apple.com/us/movie/free-solo/id1435961341",
        },
        {
            id: 15,
            name: "Second Act (2018)",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqKUu0mOUOrtIWcQaDJKDIg2nb6cFbB1eUasDtGwO6M6np0yB",
            url:"https://itunes.apple.com/us/movie/second-act-2018/id1441722032",
        },
        {
            id: 16,
            name: "Crazy Rich Asians",
            image:"https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/10/67fc844847236c3213c543d792e57c50_500x735.jpg?t=1544004824",
            url:"https://itunes.apple.com/us/movie/crazy-rich-asians/id1420298262",
        },
        {
            id: 17,
            name: "First Man",
            image:"https://www.dhresource.com/0x0s/f2-albu-g7-M01-66-C3-rBVaSVvsvPWANto2AAQJOYb8iWo546.jpg/first-man-2018-poster-art-silk-print-poster.jpg",
            url:"https://itunes.apple.com/us/movie/first-man/id1437642635",
        },
        {
            id: 18,
            name: "Back to the Future Trilogy",
            image:"https://cdn.shopify.com/s/files/1/0613/4053/products/the-back-to-the-future-trilogy-522a91952ae4d_84d6e583-180a-4bb8-b437-992931e7d562_1024x1024.jpg?v=1515690208",
            url:"https://itunes.apple.com/us/movie-collection/back-to-the-future-trilogy/id585537914",
        },
        {
            id: 19,
            name: "Combat Obscura",
            image:"https://is5-ssl.mzstatic.com/image/thumb/Video113/v4/a7/00/c6/a700c6c9-7639-e6f5-6c5b-e199a5e50789/pr_source.lsr/200x200bb.png",
            url:"https://itunes.apple.com/us/movie/combat-obscura/id1450879590",
        },
        {
            id: 20,
            name: "Sherlock Holmes: A Game of Shadows",
            image:"https://image.tmdb.org/t/p/original/49dt96hBaSS6GAbf2vhrrewtIfp.jpg",
            url:"https://itunes.apple.com/us/movie-collection/sherlock-holmes-a-game-of-shadows-sherlock-holmes/id576495226",
        },
        {
            id: 21,
            name: "Illumination Presents: Dr. Seuss' The Grinch",
            image:"https://www.slashfilm.com/wp/wp-content/images/the-grinch-poster.jpg",
            url:"https://itunes.apple.com/us/movie/illumination-presents-dr-seuss-the-grinch/id1440401528",
        },
        {
            id: 22,
            name: "Captain America: The First Avenger",
            image:"https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_.jpg",
            url:"https://itunes.apple.com/us/movie/captain-america-the-first-avenger/id689184559",
        },
        {
            id: 23,
            name: "The Avengers",
            image:"https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/04/6a/b4/046ab45e-6099-3e1a-ccef-7b3f8b07f057/contsched.sumsaanu.lsr/200x200bb.png",
            url:"https://itunes.apple.com/us/movie/the-avengers/id533654020",
        },
        {
            id: 24,
            name: "Mary Poppins",
            image:"https://is2-ssl.mzstatic.com/image/thumb/Video1/v4/10/5e/73/105e73bb-96e8-bebc-4696-f5e67c796498/pr_source.lsr/200x200bb.png",
            url:"https://itunes.apple.com/us/movie/mary-poppins/id749302475",
        },
        {
            id: 25,
            name: "Moana (2016)",
            image:"http://www.world-art.ru/cinema/img/70000/68781/1.jpg",
            url:"https://itunes.apple.com/us/movie/moana-2016/id1175204079",
        },
    ]
};

function movies(state = initialState, action) {//функция добавления данных из массива
    switch (action.type) {
        default:
            return state;
    }
}
export default movies;
