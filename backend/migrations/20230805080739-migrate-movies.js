const { ObjectId } = require('mongodb');

module.exports = {
  async up(db, client) {
    const movies = [
      {
        "_id": new ObjectId("647b6fba0e9d23196d9d7613"),
        "title": "Mike and Dave Need Wedding Dates",
        "genre": {
          "type": "Comedy",
          "_id": new ObjectId("647b6ed20e9d23196d9d760a")
        },
        "duration": "1h 38m",
        "releaseDate": 2016,
        "director": "Jake Szymanski",
        "summary": "Two hard-partying brothers place an online ad to find the perfect dates for their sister's Hawaiian wedding. Hoping for a wild getaway, the boys instead find themselves out-hustled by an uncontrollable duo.",
        "cast": "Zac Efron - Adam Devine - Anna Kendrick",
        "numberInStock": 19,
        "dailyRentalRate": 8,
        "publishDate": {
          "$date": "2023-07-29T08:14:52.626Z"
        },
        "__v": 0,
        "posterURL": "https://drive.google.com/uc?export=download&id=134UEQaXdkkbUXTfK6flupXcTtOrFgYHu",
        "liked": false,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1zLPEOX-pIFfnZjjt6RX3Hwx_XPzUYXQl",
          "https://drive.google.com/uc?export=download&id=1xXmsPK2T_OWmn9w2gTELuebFVK1KSJyY",
          "https://drive.google.com/uc?export=download&id=1junyxunc53hhvZ8HVU7XlOY6r4vk1Wgp"
        ],
        "ageRating": "R"
      },
      {
        "_id": new ObjectId("647b6ff10e9d23196d9d7617"),
        "title": "The Notebook",
        "genre": {
          "type": "Romantic",
          "_id": new ObjectId("647b6ec70e9d23196d9d7608")
        },
        "duration": "2h 3m",
        "releaseDate": 2004,
        "director": "Nick Cassavetes",
        "summary": "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom. However, social differences soon get in the way.",
        "cast": "Gena Rowlands - James Garner - Rachel McAdams",
        "numberInStock": 19,
        "dailyRentalRate": 9,
        "publishDate": {
          "$date": "2023-07-29T08:21:45.514Z"
        },
        "__v": 0,
        "posterURL": "https://drive.google.com/uc?export=download&id=1vUSbasFTUYTWAi8bhyoDwbO6YgwW8HCR",
        "liked": false,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1fO2Y_GNLSBMKoeFk0MslmIoGc8NhJgMw",
          "https://drive.google.com/uc?export=download&id=1bIqj9TLTv7739nV-RwTqsOFEZTd4Aj6s",
          "https://drive.google.com/uc?export=download&id=1YX85_iZKOjL3TH-Xpj3-kjekfTeBw-aG"
        ],
        "ageRating": "PG-13"
      },
      {
        "_id": new ObjectId("6485e78ebe0dc1b8289ea4e5"),
        "title": "Demolition",
        "genre": {
          "type": "Comedy",
          "_id": new ObjectId("647b6ed20e9d23196d9d760a")
        },
        "duration": "1h 41m",
        "releaseDate": 2015,
        "director": "Jean-Marc Vallée",
        "summary": "A successful investment banker struggles after losing his wife in a tragic car crash. With the help of a customer service rep and her young son, he starts to rebuild, beginning with the demolition of the life he once knew.",
        "cast": "Jake Gyllenhaal - Naomi Watts - Chris Cooper",
        "numberInStock": 18,
        "dailyRentalRate": 7,
        "publishDate": {
          "$date": "2023-07-29T08:13:53.484Z"
        },
        "__v": 0,
        "posterURL": "https://drive.google.com/uc?export=download&id=173UiP_cYXHd7nJI86IYKfXF4OJB0KWas",
        "liked": false,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1lU-cod7B7CFJ4H5mcdR9LTm7pl1MGLve",
          "https://drive.google.com/uc?export=download&id=1tbdIC7xlWyL7sO9HWzz1Q13H2lOmZigI",
          "https://drive.google.com/uc?export=download&id=14Z5w5rtQ0BqCenxwDRvXdbODNUdYhGft"
        ],
        "ageRating": "R"
      },
      {
        "_id": new ObjectId("6485e817be0dc1b8289ea4e9"),
        "title": "The Longest Ride",
        "genre": {
          "type": "Romantic",
          "_id": new ObjectId("647b6ec70e9d23196d9d7608")
        },
        "duration": "2h 3m",
        "releaseDate": 2015,
        "director": "George Tillman Jr.",
        "summary": "The lives of a young couple intertwine with a much older man, as he reflects back on a past love.",
        "cast": "Scott Eastwood - Britt Robertson - Alan Alda",
        "numberInStock": 24,
        "dailyRentalRate": 8,
        "publishDate": {
          "$date": "2023-07-29T08:20:33.586Z"
        },
        "__v": 0,
        "posterURL": "https://drive.google.com/uc?export=download&id=1Eb9Uv0LbRiwovhJkanP39-cca6571GRu",
        "liked": false,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1VNDEkFn3h8Zt7AHrYd-TU_Ah0QPpohlh",
          "https://drive.google.com/uc?export=download&id=1PPmdIidp_deFy_VFZHzETZ8VUsU-Lz-p",
          "https://drive.google.com/uc?export=download&id=1vOBP0uW_kngUl1hdEj6oj_9acaoWqyEb"
        ],
        "ageRating": "PG-13"
      },
      {
        "_id": new ObjectId("6485e86bbe0dc1b8289ea4ed"),
        "title": "Redeeming Love",
        "genre": {
          "type": "Romantic",
          "_id": new ObjectId("647b6ec70e9d23196d9d7608")
        },
        "duration": "2h 14m",
        "releaseDate": 2022,
        "director": "D.J. Caruso",
        "summary": "Sold into prostitution as a child, Angel knows nothing but betrayal. Can her heart ever be mended? Based upon the novel by Francine Rivers.",
        "cast": "Abigail Cowen - Tom Lewis - Eric Dane",
        "numberInStock": 24,
        "dailyRentalRate": 8,
        "publishDate": {
          "$date": "2023-07-29T08:19:34.495Z"
        },
        "__v": 0,
        "posterURL": "https://drive.google.com/uc?export=download&id=1Liqm0cByB3Vn-5735sUIHQtjpiM2lTjc",
        "liked": false,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1FcLBiCKdm8jvVJQ0Qr1sbJ4Og7k_oZ_g",
          "https://drive.google.com/uc?export=download&id=10FvpMGz7HM0pNGcD3RGVLGGFa_s2iy5Z",
          "https://drive.google.com/uc?export=download&id=15Bruh2Ulx0QofcsVZH1PC58LkY5laceD"
        ],
        "ageRating": "PG-13"
      },
      {
        "_id": new ObjectId("6485e8c0be0dc1b8289ea4f1"),
        "title": "Dirty Grandpa",
        "genre": {
          "type": "Comedy",
          "_id": new ObjectId("647b6ed20e9d23196d9d760a")
        },
        "duration": "1h 42m",
        "releaseDate": 2016,
        "director": "Dan Mazer",
        "summary": "Right before his wedding, an uptight guy is tricked into driving his grandfather, a lecherous former Army Lieutenant Colonel, to Florida for Spring Break.",
        "cast": "Robert De Niro - Zac Efron - Zoey Deutch",
        "numberInStock": 24,
        "dailyRentalRate": 8,
        "publishDate": {
          "$date": "2023-07-29T08:14:45.577Z"
        },
        "__v": 0,
        "posterURL": "https://drive.google.com/uc?export=download&id=1HzOjkVuXLDR4HE9xjPNiZQpoMSGy_b2x",
        "liked": false,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1n9nE8OK5tU8Qeyc24sFNyOe88GaGU94t",
          "https://drive.google.com/uc?export=download&id=1ud-aQldfNy71yjjAzLH5_SxhRUM-pW_-",
          "https://drive.google.com/uc?export=download&id=1wY_A8SrxtuasilvMbGsp0mlLATxrBWIC"
        ],
        "ageRating": "R"
      },
      {
        "_id": new ObjectId("64901b720060e9bff6861dbf"),
        "title": "Black Swan",
        "genre": {
          "type": "Drama",
          "_id": new ObjectId("647b6edc0e9d23196d9d760c")
        },
        "duration": "1h 48m",
        "releaseDate": 2010,
        "director": "Darren Aronofsky",
        "summary": "Nina is a talented but unstable ballerina on the verge of stardom. Pushed to the breaking point by her artistic director and a seductive rival, Nina's grip on reality slips, plunging her into a waking nightmare.",
        "cast": "Natalie Portman - Vincent Cassel - Mila Kunis",
        "numberInStock": 19,
        "dailyRentalRate": 8,
        "publishDate": {
          "$date": "2023-07-29T08:13:14.277Z"
        },
        "__v": 0,
        "posterURL": "https://drive.google.com/uc?export=download&id=1FKOVWkGfa2giS-Kb3_DrxA1ep7EDIXAT",
        "liked": false,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=12xPMjBC7Il-XJhBka5pb3UTj98ob2gvM",
          "https://drive.google.com/uc?export=download&id=1VxelojHfvh3LdH-moBr_OvC3e8ixm9Cc",
          "https://drive.google.com/uc?export=download&id=19sgpoxW3kqVbx7EOTNfaiS6sHzbjMS-G"
        ],
        "ageRating": "R"
      },
      {
        "_id": new ObjectId("64901bc00060e9bff6861dc3"),
        "title": "Passengers",
        "genre": {
          "type": "Sci-fi",
          "_id": new ObjectId("6485e726be0dc1b8289ea4de")
        },
        "duration": "1h 56m",
        "releaseDate": 2016,
        "director": "Morten Tyldum",
        "summary": "A malfunction in a sleeping pod on a spacecraft traveling to a distant colony planet wakes one passenger 90 years early.",
        "cast": "Chris Pratt - Jennifer Lawrence",
        "numberInStock": 10,
        "dailyRentalRate": 4,
        "publishDate": {
          "$date": "2023-07-29T08:17:44.176Z"
        },
        "__v": 0,
        "posterURL": "https://drive.google.com/uc?export=download&id=1V69sNE23daY5RE5ReYkoynM_MuH8rpvq",
        "liked": false,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1fBuegkanqrrSGMcoCHA9mUhu2J3iRBqI",
          "https://drive.google.com/uc?export=download&id=1-9ehlNQYE_fFI2uEK2HJObB4ADzjbYta",
          "https://drive.google.com/uc?export=download&id=11UsH8rRjNgzCJWVZE-JtkYYjrN_gjVF4"
        ],
        "ageRating": "PG-13"
      },
      {
        "_id": new ObjectId("64b3a3f1b7be7242e37ce938"),
        "title": "The Hobbit: An Unexpected Journey",
        "genre": {
          "type": "Fantasy",
          "_id": new ObjectId("64b3a09e71e91646a61e8f55")
        },
        "duration": "2h 49m",
        "releaseDate": 2012,
        "director": "Peter Jackson",
        "summary": "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
        "cast": "Martin Freeman - Ian McKellen - Richard Armitage",
        "numberInStock": 21,
        "dailyRentalRate": 10,
        "publishDate": {
          "$date": "2023-07-29T08:20:15.420Z"
        },
        "__v": 0,
        "posterURL": "https://drive.google.com/uc?export=download&id=1dd-x5dxA5Dv4snV7ehzSzc4F_atr-xQu",
        "liked": false,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1LbeX_pI73TZXUq1wb0-1pMw7Dm8IL9Bb",
          "https://drive.google.com/uc?export=download&id=1uamY7vgHzObSvrON-vhaktiqEKx_GDYc",
          "https://drive.google.com/uc?export=download&id=1ssnAjFjqxfCWRukblTsfJ2bdnEajF_5b"
        ],
        "ageRating": "PG-13"
      },
      {
        "_id": new ObjectId("64b3a45bb7be7242e37ce93c"),
        "title": "The Lord of the Rings: The Two Towers",
        "genre": {
          "type": "Fantasy",
          "_id": new ObjectId("64b3a09e71e91646a61e8f55")
        },
        "duration": "2h 59m",
        "releaseDate": 2002,
        "director": "Peter Jackson",
        "summary": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        "cast": "Elijah Wood - Ian McKellen - Viggo Mortensen",
        "numberInStock": 18,
        "dailyRentalRate": 9,
        "publishDate": {
          "$date": "2023-07-29T08:21:27.029Z"
        },
        "__v": 0,
        "posterURL": "https://drive.google.com/uc?export=download&id=1o3KGsepPbPLgze9vyNrzhcFRHw3LQ-LO",
        "liked": false,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1IJEuMOzEbko-02IgoXGvR9fdFBzrzI6M",
          "https://drive.google.com/uc?export=download&id=1UGtGjV3DUASTGMFcjcoZUtcioLMnXwNW",
          "https://drive.google.com/uc?export=download&id=1BC00wF6XJIjwHhhJNgf9Hff6vYQJDAeQ"
        ],
        "ageRating": "PG-13"
      },
      {
        "_id": new ObjectId("64b3a4c8b7be7242e37ce940"),
        "title": "Harry Potter and the Deathly Hallows: Part 2",
        "genre": {
          "type": "Fantasy",
          "_id": new ObjectId("64b3a09e71e91646a61e8f55")
        },
        "duration": "2h 10m",
        "releaseDate": 2011,
        "director": "David Yates",
        "summary": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        "cast": "Daniel Radcliffe - Emma Watson - Rupert Grint",
        "numberInStock": 19,
        "dailyRentalRate": 10,
        "publishDate": {
          "$date": "2023-07-29T08:15:51.086Z"
        },
        "__v": 0,
        "posterURL": "https://drive.google.com/uc?export=download&id=1LZi3chI4h_tptzSRzvf8usidh6zSIxMs",
        "liked": false,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1JxAvy_w9soak74GVeE9-79TAzC7s1_hQ",
          "https://drive.google.com/uc?export=download&id=1AqkcBF9sG_wgSr2B_Ssu64580ZQNhUu3",
          "https://drive.google.com/uc?export=download&id=1JfpPulNezGeavpdmJYNLUqpcI9T87ggs"
        ],
        "ageRating": "PG-13"
      },
      {
        "_id": new ObjectId("64bc18fb5a6e24e9829ea055"),
        "title": "Avatar: The Way of Water",
        "genre": {
          "type": "Sci-fi",
          "_id": new ObjectId("6485e726be0dc1b8289ea4de")
        },
        "duration": "3h 12m",
        "releaseDate": 2022,
        "director": "James Cameron",
        "summary": "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
        "cast": "Sam Worthington - Zoe Saldana - Sigourney Weaver",
        "numberInStock": 24,
        "dailyRentalRate": 6,
        "publishDate": {
          "$date": "2023-07-29T08:12:28.487Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1InvBBI2wlVNeOR6MM25BFbgQGVnIt4Va",
        "liked": false,
        "__v": 0,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1YKpFxfyp-sgeoOp5_upq--I2AfkFY-T8",
          "https://drive.google.com/uc?export=download&id=137Frf4Ti3a3MegXNh10WkmLNHDM59S11",
          "https://drive.google.com/uc?export=download&id=13fjchiXvzCTviHMj26o04a_oUzQB209g"
        ],
        "ageRating": "PG-13"
      },
      {
        "_id": new ObjectId("64bfc6a5ddec37702232155e"),
        "title": "Dunkirk",
        "genre": {
          "type": "History",
          "_id": new ObjectId("64bfc34bddec377022321558")
        },
        "duration": "1h 46m",
        "releaseDate": 2016,
        "director": "Christopher Nolan",
        "summary": "Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
        "cast": "Harry Styles - Tom Hardy - Fionn Whitehead",
        "numberInStock": 26,
        "dailyRentalRate": 7,
        "publishDate": {
          "$date": "2023-07-29T08:15:42.864Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=17jMUeeqOSIogyW9MP4louIc954jZ0GpL",
        "liked": false,
        "__v": 0,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1R0McmvnwiAWsIBR9ZgnJvDT-ToZ0g81b",
          "https://drive.google.com/uc?export=download&id=1dPtdxgW4CYSlXxlNBono9NLVOZIZpE7u",
          "https://drive.google.com/uc?export=download&id=1Ucb4f2mI0hiS-BDF9MlmAFs0mDs_XooC"
        ],
        "ageRating": "PG-13"
      },
      {
        "_id": new ObjectId("64bfc74cddec377022321565"),
        "title": "Oppenheimer",
        "genre": {
          "type": "History",
          "_id": new ObjectId("64bfc34bddec377022321558")
        },
        "duration": "3h",
        "releaseDate": 2022,
        "director": "Christopher Nolan",
        "summary": "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        "cast": "Cillian Murphy - Robert Downey Jr. - Emily Blunt",
        "numberInStock": 25,
        "dailyRentalRate": 8,
        "publishDate": {
          "$date": "2023-07-29T08:17:50.368Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1Lc4_zkf8QifFVyTtZnU4tfmNJg4awA0G",
        "liked": false,
        "__v": 0,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1O05H1R4LukZAtx2fIrziPtWPkrrEpvfF",
          "https://drive.google.com/uc?export=download&id=1sNmu4bXkUahtn8dGjfrB4ve6FchLjCHd",
          "https://drive.google.com/uc?export=download&id=1ancOazYVtBxI1d0_p90k2_nL9mf-XTDO"
        ],
        "ageRating": "R"
      },
      {
        "_id": new ObjectId("64bfd5d942280d0cb7607b0c"),
        "title": "Mission Impossible - Dead Reckoning Part One",
        "genre": {
          "type": "Action",
          "_id": new ObjectId("6485e5d5be0dc1b8289ea4d4")
        },
        "duration": "2h 43m",
        "releaseDate": 2022,
        "director": "Christopher McQuarrie",
        "summary": "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.",
        "cast": "Tom Cruise - Hayley Atwell - Ving Rhames",
        "numberInStock": 25,
        "dailyRentalRate": 5,
        "publishDate": {
          "$date": "2023-07-29T08:16:58.173Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1NOkBynYBl-83fF8nLfPlZJHuPg0_aU08",
        "liked": false,
        "__v": 0,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1QwPsR3vtDvmQY1RK6nx-B3GGUfVVvHnc",
          "https://drive.google.com/uc?export=download&id=1Bx70Cx_yACd5JXGBLLgMGoKNBjq5XsBP",
          "https://drive.google.com/uc?export=download&id=1BoZNqLZefwsq3l1OLIS1PpXski9jSFc1"
        ],
        "ageRating": "PG-13"
      },
      {
        "_id": new ObjectId("64c01760cd54a44ae67fe94a"),
        "title": "Barbie",
        "genre": {
          "type": "Comedy",
          "_id": new ObjectId("647b6ed20e9d23196d9d760a")
        },
        "duration": "1h 54m",
        "releaseDate": 2022,
        "director": "Greta Gerwig",
        "summary": "Barbie suffers a crisis that leads her to question her world and her existence.",
        "cast": "Margot Robbie - Ryan Gosling - Issa Rae",
        "numberInStock": 24,
        "dailyRentalRate": 6,
        "publishDate": {
          "$date": "2023-07-29T08:12:51.062Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1-zd4gV_CxLcg6cza4sK4RPUUxkXlQCx9",
        "liked": false,
        "__v": 0,
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=158Xhid5Gjj53EscJAZRE0uO3BlvfZ375",
          "https://drive.google.com/uc?export=download&id=1TFammf6L-tdtxPLSDE9Msp6Mef1B0OL5",
          "https://drive.google.com/uc?export=download&id=1sgZ1u4PBxShxzozyBz8zfFaLwJ_MjHiu"
        ],
        "ageRating": "PG-13"
      },
      {
        "_id": new ObjectId("64c02bf4cd54a44ae67fea8e"),
        "title": "My Policeman",
        "genre": {
          "type": "Drama",
          "_id": new ObjectId("647b6edc0e9d23196d9d760c")
        },
        "duration": "1h 53m",
        "releaseDate": 2021,
        "director": "Michael Grandage",
        "summary": "The arrival of Patrick into Marion and Tom's home triggers the exploration of seismic events from 40 years previously.",
        "cast": "Harry Styles - Tom Hardy - Fionn Whitehead",
        "numberInStock": 29,
        "dailyRentalRate": 9,
        "publishDate": {
          "$date": "2023-07-29T08:11:36.178Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1VH8uyPpp0c9x4vOzLjqZEBOvEtTd3Mhi",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1o-sbSDWH3aBXrRvxKdEiBFS4qWv-LBuT",
          "https://drive.google.com/uc?export=download&id=1Sc5Q41Kx0Tf6IZvGe15opzKcu9CZG_LN",
          "https://drive.google.com/uc?export=download&id=1R61ApLbmjYjZ3olN4Rc_MbCWi6KLzXvH"
        ],
        "liked": false,
        "__v": 0,
        "ageRating": "R"
      },
      {
        "_id": new ObjectId("64c7e9843a0df96c2a907cec"),
        "title": "I, Tonya",
        "genre": {
          "type": "Drama",
          "_id": new ObjectId("647b6edc0e9d23196d9d760c")
        },
        "ageRating": "R",
        "duration": "1h 59m",
        "releaseDate": 2017,
        "director": "Craig Gillespie",
        "summary": "Competitive ice skater Tonya Harding rises amongst the ranks at the U.S. Figure Skating Championships, but her future in the activity is thrown into doubt when her ex-husband intervenes.",
        "cast": "Margot Robbie - Sebastian Stan - Allison Janney",
        "numberInStock": 22,
        "dailyRentalRate": 7,
        "publishDate": {
          "$date": "2023-07-31T17:04:04.244Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1HBCY4_FYYSiBEruahNGsvSIHN4pwpLVG",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1HKTVxtgSZ85_wRf1h1hMZOP2SiMIH7Kf",
          "https://drive.google.com/uc?export=download&id=16GXHWg7Tb1orWYcM0Nj-Yi03kVKyTTH6",
          "https://drive.google.com/uc?export=download&id=1JmyYaHRpWUSpDlvIP4q6K71n2OK22fu5"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c7efd33a0df96c2a907d01"),
        "title": "Women Talking",
        "genre": {
          "type": "Drama",
          "_id": new ObjectId("647b6edc0e9d23196d9d760c")
        },
        "ageRating": "PG-13",
        "duration": "1h 44m",
        "releaseDate": 2021,
        "director": "Sarah Polley",
        "summary": "Do nothing, stay and fight, or leave. In 2010, the women of an isolated religious community grapple with reconciling a brutal reality with their faith.",
        "cast": "Rooney Mara - Claire Foy - Jessie Buckley",
        "numberInStock": 22,
        "dailyRentalRate": 8,
        "publishDate": {
          "$date": "2023-07-31T17:30:59.176Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1l_0j1MPseMeaBGpsXoqa7olLYrvrtakD",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1V0PEXNzXO7PZ8p2bJpIGmLNE5DnIKhW3",
          "https://drive.google.com/uc?export=download&id=136U5cuNMBCLZLN_fQDHMAUBqhhCxJALV",
          "https://drive.google.com/uc?export=download&id=1BF9lxBoBPZG19Ob3ajBf-85JGDKDxH5i"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c7f3eb3a0df96c2a907d1c"),
        "title": "The Imitation Game",
        "genre": {
          "type": "Drama",
          "_id": new ObjectId("647b6edc0e9d23196d9d760c")
        },
        "ageRating": "PG-13",
        "duration": "1h 54m",
        "releaseDate": 2014,
        "director": "Morten Tyldum",
        "summary": "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians while attempting to come to terms with his troubled private life.",
        "cast": "Benedict Cumberbatch - Keira Knightley - Matthew Goode",
        "numberInStock": 25,
        "dailyRentalRate": 9,
        "publishDate": {
          "$date": "2023-07-31T17:48:27.297Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1kz0mdzZsIJ6-ceeMSE0HzAFZOhx-al9p",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1-7qTKbXyhcSuf33fsw8xsuoca-DYZuO_",
          "https://drive.google.com/uc?export=download&id=1oMMBWcPYuHZrjRJzpfWYUxtc9ax6jCLT",
          "https://drive.google.com/uc?export=download&id=180cDoPElwW8KD1RBq68tG7uZ3z0CLNxi"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c7fe6c3a0df96c2a907d2b"),
        "title": "Alice in Wonderland",
        "genre": {
          "type": "Fantasy",
          "_id": new ObjectId("64b3a09e71e91646a61e8f55")
        },
        "ageRating": "PG",
        "duration": "1h 48m",
        "releaseDate": 2010,
        "director": "Tim Burton",
        "summary": "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
        "cast": "Mia Wasikowska - Johnny Depp - Helena Bonham Carter",
        "numberInStock": 19,
        "dailyRentalRate": 4,
        "publishDate": {
          "$date": "2023-07-31T18:33:16.754Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=16eO4oer5KzwDymfTVnOGFRStrZZj5Mqn",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=10RQrVMLRWRDHPu6CzzQcNHvMafIa9bzJ",
          "https://drive.google.com/uc?export=download&id=11fPyo0SR_KbtIdQvjUyOyY54JjI69R7s",
          "https://drive.google.com/uc?export=download&id=1ToASq5l9H1i0uSjxtctBP_tG2mxIQu0n"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c801853a0df96c2a907d40"),
        "title": "Venom: Let There Be Carnage",
        "genre": {
          "type": "Action",
          "_id": new ObjectId("6485e5d5be0dc1b8289ea4d4")
        },
        "ageRating": "PG-13",
        "duration": "1h 37m",
        "releaseDate": 2021,
        "director": "Andy Serkis",
        "summary": "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
        "cast": "Tom Hardy - Woody Harrelson - Michelle Williams",
        "numberInStock": 20,
        "dailyRentalRate": 7,
        "publishDate": {
          "$date": "2023-07-31T18:46:29.875Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1yHhYCVftRF17S-x-FujY1quqMcurdps9",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1SDtGxLyrMRRi_gr0huwhS5De9InnPiuQ",
          "https://drive.google.com/uc?export=download&id=1Bquw__pQkfmSqvE06q7l7u-Yby5uZERe",
          "https://drive.google.com/uc?export=download&id=1tj86Rv6LrYQQCCKcpWQzJTxBJgLAZC2g"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c804873a0df96c2a907d4f"),
        "title": "The Little Mermaid",
        "genre": {
          "type": "Fantasy",
          "_id": new ObjectId("64b3a09e71e91646a61e8f55")
        },
        "ageRating": "PG",
        "duration": "2h 15m",
        "releaseDate": 2023,
        "director": "Rob Marshall",
        "summary": "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs so she can discover the world above water and impress a prince.",
        "cast": " Halle Bailey - Jonah Hauer-King - Melissa McCarthy",
        "numberInStock": 20,
        "dailyRentalRate": 7,
        "publishDate": {
          "$date": "2023-07-31T18:59:19.346Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1pwGxl6jw0q2czSAaG4ZAp3M4QwL8QtPE",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=14xc-gHPHAOkPez-rvEDRtELv4WNT-kXd",
          "https://drive.google.com/uc?export=download&id=1gdCbwDgtapIsit_z03XmSykbWPrej8-R",
          "https://drive.google.com/uc?export=download&id=1CNlG0DzKkhgM_F-c2Xu2Rdz9shcLcZcs"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c8097d3a0df96c2a907d58"),
        "title": "Eternals",
        "genre": {
          "type": "Action",
          "_id": new ObjectId("6485e5d5be0dc1b8289ea4d4")
        },
        "ageRating": "PG-13",
        "duration": "2h 36m",
        "releaseDate": 2021,
        "director": "Chloé Zhao",
        "summary": "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
        "cast": "Harry Styles -  Gemma Chan - Richard Madden",
        "numberInStock": 16,
        "dailyRentalRate": 8,
        "publishDate": {
          "$date": "2023-07-31T19:20:29.414Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1vF41IdsQiDDVbrB3DMKjpmBIBEQAXsfl",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1kusc1UiNt4znAPCY11MtjfcRVi3BEag4",
          "https://drive.google.com/uc?export=download&id=17nPhoJSDVgbwERwPRFItGxIe7bY0iL2I",
          "https://drive.google.com/uc?export=download&id=1m2UbR0rk44U1Cf3OCGL5zEmkmPONdxrf"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c80bd13a0df96c2a907d6d"),
        "title": "Free Guy",
        "genre": {
          "type": "Comedy",
          "_id": new ObjectId("647b6ed20e9d23196d9d760a")
        },
        "ageRating": "PG-13",
        "duration": "1h 55m",
        "releaseDate": 2021,
        "director": "Shawn Levy",
        "summary": "When Guy, a bank teller, learns that he is a non-player character in a bloodthirsty, open-world video game, he goes on to become the hero of the story and takes the responsibility of saving the world.",
        "cast": " Ryan Reynolds - Jodie Comer - Taika Waititi",
        "numberInStock": 20,
        "dailyRentalRate": 7,
        "publishDate": {
          "$date": "2023-07-31T19:30:25.796Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1jgT2VMtIIsSACBbTfe0sFIsnD3Iza23e",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1B5pb_eRrRewXFU9BMdDgcAWaw7Nbx4WO",
          "https://drive.google.com/uc?export=download&id=1B5pb_eRrRewXFU9BMdDgcAWaw7Nbx4WO",
          "https://drive.google.com/uc?export=download&id=1B5pb_eRrRewXFU9BMdDgcAWaw7Nbx4WO"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c80e163a0df96c2a907d82"),
        "title": "Alita: Battle Angel",
        "genre": {
          "type": "Action",
          "_id": new ObjectId("6485e5d5be0dc1b8289ea4d4")
        },
        "ageRating": "PG-13",
        "duration": "2h 2m",
        "releaseDate": 2019,
        "director": "Robert Rodriguez",
        "summary": "A deactivated cyborg's revived, but can't remember anything of her past and goes on a quest to find out who she is.",
        "cast": " Rosa Salazar - Christoph Waltz - Jennifer Connelly",
        "numberInStock": 15,
        "dailyRentalRate": 6,
        "publishDate": {
          "$date": "2023-07-31T19:40:06.868Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1KpjdnZ5hdD5dINMO7dBk7-WrmbPvaczd#",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=12BM1RzfIwEnrSFcPpZUyp2mEBNub2shj",
          "https://drive.google.com/uc?export=download&id=1J9yTSAd0L6iMhYp3RUloqWW9WiuEqS8f",
          "https://drive.google.com/uc?export=download&id=1q5YQfWscoEptVjVuvtPr7o_NdeoSZFyA"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c812543a0df96c2a907d97"),
        "title": "The Hunger Games: Mockingjay - Part 2",
        "genre": {
          "type": "Action",
          "_id": new ObjectId("6485e5d5be0dc1b8289ea4d4")
        },
        "ageRating": "PG-13",
        "duration": "2h 17m",
        "releaseDate": 2015,
        "director": "Francis Lawrence",
        "summary": "Katniss and a team of rebels from District 13 prepare for the final battle that will decide the fate of Panem.",
        "cast": " Jennifer Lawrence - Josh Hutcherson - Liam Hemsworth",
        "numberInStock": 13,
        "dailyRentalRate": 6,
        "publishDate": {
          "$date": "2023-07-31T19:58:12.670Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1-DCIukIU3Bleu2cjOSpoE9gT-KCLWtte",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1oRSYhaN83QlM7fNscd-2g72SnaYO-8qE",
          "https://drive.google.com/uc?export=download&id=1-MtoSzgkvDeaUmWddersaD9lARKL-Ncl",
          "https://drive.google.com/uc?export=download&id=1K-Pe32u2MplYNbEoxohDlDVG5uKVXe__"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c816ca3a0df96c2a907dac"),
        "title": "The Current War",
        "genre": {
          "type": "History",
          "_id": new ObjectId("64bfc34bddec377022321558")
        },
        "ageRating": "PG-13",
        "duration": "1h 42m",
        "releaseDate": 2016,
        "director": "Alfonso Gomez-Rejon",
        "summary": "The dramatic story of the cutthroat race between electricity titans Thomas A. Edison and George Westinghouse to determine whose electrical system would power the modern world.",
        "cast": "Benedict Cumberbatch - Oliver Powell - Sophia Ally",
        "numberInStock": 16,
        "dailyRentalRate": 8,
        "publishDate": {
          "$date": "2023-07-31T20:17:14.999Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1puiYndsZTzbrDKD8RrR5BFckeZNrzsJp",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1fS5TkafKPRHVrZlclkJ-cVdbj5TIoPY3",
          "https://drive.google.com/uc?export=download&id=17UnweNQ9WqARg3NZPuxVKOZiKdygV5yu",
          "https://drive.google.com/uc?export=download&id=1IANctNNvjJ3Jc4UloERRH94PSd01WSnq"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c819243a0df96c2a907dc1"),
        "title": "Tolkien",
        "genre": {
          "type": "Romantic",
          "_id": new ObjectId("647b6ec70e9d23196d9d7608")
        },
        "ageRating": "PG-13",
        "duration": "1h 52m",
        "releaseDate": 2019,
        "director": "Dome Karukoski",
        "summary": "Tolkien's novels were inspired by his mom's storytelling, falling in love with another orphan, Edith, forming a brotherhood with 3 other misfits at school, Oxford, the trench war of WWI and later telling stories to his own kids.",
        "cast": " Nicholas Hoult - Lily Collins - Colm Meaney",
        "numberInStock": 18,
        "dailyRentalRate": 8,
        "publishDate": {
          "$date": "2023-07-31T20:27:16.594Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1bHEtKb33qI0CHSjFvUpXDQ8wYM7CyKuj",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1uZaNj_Hij5bZ98-veje09segGuG49k7G",
          "https://drive.google.com/uc?export=download&id=1iJGaqOgj3mqRt_CcZOwARfLYUcaCTB3E",
          "https://drive.google.com/uc?export=download&id=1kPHkfypuQtN6HC8owrUNI77VomcwBS0X"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c81bf53a0df96c2a907dc8"),
        "title": "Hacksaw Ridge",
        "genre": {
          "type": "History",
          "_id": new ObjectId("64bfc34bddec377022321558")
        },
        "ageRating": "R",
        "duration": "2h 19m",
        "releaseDate": 2016,
        "director": "Mel Gibson",
        "summary": "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
        "cast": "Andrew Garfield - Sam Worthington - Luke Bracey",
        "numberInStock": 19,
        "dailyRentalRate": 7,
        "publishDate": {
          "$date": "2023-07-31T20:39:17.435Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1M6jSGI7NfSLg5WQ2oQZqvlAbKUvNSxlQ",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1Y5kGI-HXYcUEPuP3xTGNBZAAdr5n-Yez",
          "https://drive.google.com/uc?export=download&id=1CPcxmcPTbZXEVD9dAwulLzb5kVOvzydd",
          "https://drive.google.com/uc?export=download&id=1csehsBowZY5W6d2goH3QS53ml_qZ5iqb"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c81f7e3a0df96c2a907dd7"),
        "title": "Blonde",
        "genre": {
          "type": "History",
          "_id": new ObjectId("64bfc34bddec377022321558")
        },
        "ageRating": "NC-17",
        "duration": "2h 47m",
        "releaseDate": 2022,
        "director": "Andrew Dominik",
        "summary": "The story of American actress Marilyn Monroe, covering her love and professional lives.",
        "cast": "Ana de Armas - Lily Fisher - Julianne Nicholson",
        "numberInStock": 15,
        "dailyRentalRate": 6,
        "publishDate": {
          "$date": "2023-07-31T20:54:22.142Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1KuQl9dhvx5jW9eV0ascKI9JjMcH2d7Pf",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1FuNeWkyooilyx4EPbDSSDwQYm4DpLEsn",
          "https://drive.google.com/uc?export=download&id=1o3EjgdsqXTtZPf24sujfCzW_6-da_uns",
          "https://drive.google.com/uc?export=download&id=1iYcGnI9UNxbtXQZK0kW34jagBj5Ug1wg"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c822263a0df96c2a907de6"),
        "title": "Me Before You",
        "genre": {
          "type": "Romantic",
          "_id": new ObjectId("647b6ec70e9d23196d9d7608")
        },
        "ageRating": "PG-13",
        "duration": "1h 46m",
        "releaseDate": 2016,
        "director": "Thea Sharrock",
        "summary": "A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of.",
        "cast": " Emilia Clarke - Sam Claflin - Janet McTeer",
        "numberInStock": 20,
        "dailyRentalRate": 8,
        "publishDate": {
          "$date": "2023-07-31T21:05:42.688Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1ZMgH-ekCOGeY1ruURVTUuqbPx7x7XVq_",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=199WGFPheJM-E5GXj0FBbdbBrawm3BBoz",
          "https://drive.google.com/uc?export=download&id=1cQMfE9ZsSiMgdpADomZzO1b5BOU1Ihqx",
          "https://drive.google.com/uc?export=download&id=14xMuc99bf1LUB1ThdrCtgtaJ249gMGlf"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c824383a0df96c2a907ded"),
        "title": "Interstellar",
        "genre": {
          "type": "Sci-fi",
          "_id": new ObjectId("6485e726be0dc1b8289ea4de")
        },
        "ageRating": "PG-13",
        "duration": "2h 49m",
        "releaseDate": 2014,
        "director": "Christopher Nolan",
        "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        "cast": " Matthew McConaughey - Anne Hathaway - Jessica Chastain",
        "numberInStock": 14,
        "dailyRentalRate": 7,
        "publishDate": {
          "$date": "2023-07-31T21:14:32.940Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1tQ4sDou-56IAJJvDk_6QD6hfw0020iOo",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1_pd1W9TYrE8nlvhfC75GlnZwMOYCIQdz",
          "https://drive.google.com/uc?export=download&id=1zkrnHTYKZCFWg5K24HCyYMV476MRviBJ",
          "https://drive.google.com/uc?export=download&id=1CMDl0FdHiVGRSClg9PCA9c8UpZyQ-wP4"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c826ee3a0df96c2a907df4"),
        "title": "Inception",
        "genre": {
          "type": "Sci-fi",
          "_id": new ObjectId("6485e726be0dc1b8289ea4de")
        },
        "ageRating": "PG-13",
        "duration": "2h 28m",
        "releaseDate": 2010,
        "director": "Christopher Nolan",
        "summary": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        "cast": "Leonardo DiCaprio - Cillian Murphy - Elliot Page",
        "numberInStock": 15,
        "dailyRentalRate": 8,
        "publishDate": {
          "$date": "2023-07-31T21:26:06.553Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=1oERjdN8BccI2vANl5vFc_UariiUdfuwX",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=18rSWbEgJyhvQkBuQ3IU3anKuyjWT_Y6E",
          "https://drive.google.com/uc?export=download&id=1VJo456Dib3QNpEIqIWoM_GWU6Ih16IBf",
          "https://drive.google.com/uc?export=download&id=1w4zitYTj7_PijeIxHIGb1EcDU5zK0asY"
        ],
        "liked": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c829eeae56495897be913a"),
        "title": "Lucy",
        "genre": {
          "type": "Sci-fi",
          "_id": new ObjectId("6485e726be0dc1b8289ea4de")
        },
        "ageRating": "R",
        "duration": "1h 29m",
        "releaseDate": 2014,
        "director": "Luc Besson",
        "summary": "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
        "cast": " Scarlett Johansson - Morgan Freeman - Choi Min-sik",
        "numberInStock": 17,
        "dailyRentalRate": 7,
        "publishDate": {
          "$date": "2023-07-31T21:38:54.006Z"
        },
        "posterURL": "https://drive.google.com/uc?export=download&id=17ZYN-LFZdQOiliQ1pjvaOligAUcnYsqR",
        "moviePics": [
          "https://drive.google.com/uc?export=download&id=1qUT9V6ahP25FfYg2OOdM5ij4r8B0zanO",
          "https://drive.google.com/uc?export=download&id=1JH0RX1fWYCC7YhyHsGR1lDQlyN6Q9oQ9",
          "https://drive.google.com/uc?export=download&id=17y0j3gE0dI6Z_PPGFHMXOcxAo0rqlI4A"
        ],
        "liked": false,
        "__v": 0
      }
    ];

    await db.collection('movies').insertMany(movies);
  },

  async down(db, client) {
    await db.collection('movies').deleteMany({});
  }
};
