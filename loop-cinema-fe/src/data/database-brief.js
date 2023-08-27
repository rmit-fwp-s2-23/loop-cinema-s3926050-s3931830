const loopCinema = {
    name: "Loop Cinema",
    briefDesc: "this is brief description",
    longDesc: "this is long description"
}

const genres = [
    "Comedy",
    "Fantasy",
    "Crime",
    "Drama",
    "Music",
    "Adventure",
    "History",
]

const casts = [
    "David Krumholtz",
    "Cillian Murphy",
    "Kenneth Branagh",
    "Jason Clarke",
    "Rami Malek",
    "Emily Blunt"
]

const directors = [
    "Christopher Nolan",
    "Tim Burton",
    "Mel Gibson",
    "James Cameron",
    "Jack Snyder"
]

const ratings = [
    "G",
    "PG",
    "M",
    "MA-15",
    "R-18",
    "X-18"
]

const offers = [
    {
        offer_id: "O001",
        name: "Father's Day Gift Card",
        desc: "Give Dad the perfect gift this Father's Day with a HOYTS Gift Card",
        status: "active"
    },
    {
        offer_id: "O002",
        name: "Movie of the Week",
        desc: "HOYTS Rewards members get access to $11* tickets every week on our selected movie.",
        status: "active"
    },
    {
        offer_id: "O003",
        name: "$9.50 movie tickets for 60+",
        desc: "Members aged 60+ have access to $9.50 movie tickets for sessions commencing before 5pm.",
        status: "end"
    },
    {
        offer_id: "O004",
        name: "HOYTS Jnr.",
        desc: "HOYTS Rewards Members can enjoy $8* standard tickets for everyone on selected movies at our HOYTS Jnr. sessions.",
        status: "upcoming"
    },
]

const locations = [
    {
        location_id: "L001",
        name: "Loop Cinema Bankstown",
        address: "63 The Mall, Bankstown, NSW 2200",
        phone: "0290033800",
        offers: [
            "O001",
            "O004",
            "O003"
        ]
    },
    {
        location_id: "L002",
        name: "Loop Cinema District Dockland",
        address: "440 Docklands Drive, Docklands, VIC 3008",
        phone: "0390271540",
        offers: [
            "O001",
            "O002",
            "O003"
        ]
    },
    {
        location_id: "L002",
        name: "Loop Cinema Melbounre Central",
        address: "Cnr Swanston & Latrobe Street, Melbourne, VIC 3000",
        phone: "1300357357",
        offers: [
            "O001",
            "O002",
            "O004"
        ]
    },
]

const users = [
    {
        user_id: "U004",
        email: "baohoang@gmail.com",
        password: "baohoang",
        firstName: "Bao",
        lastName: "Hoang",
        phone: "04556775091",
        dob: "26/12/2003",
        postCode: 3000,
        subscribe: true,
        points: 1000,
        createdAt: "10/08/2023"
    },
    {
        user_id: "U006",
        email: "hongduong@gmail.com",
        password: "hongduong",
        firstName: "Duong",
        lastName: "Hong",
        phone: "0123675887",
        dob: "01/01/2003",
        postCode: 3001,
        subscribe: true,
        points: 700,
        createdAt: "11/08/2023"
    },
    {
        user_id: "U005",
        email: "randompeople@gmail.com",
        password: "randompeople",
        firstName: "Random",
        lastName: "People",
        phone: "0123456789",
        dob: "01/01/2000",
        postCode: 3054,
        subscribe: false,
        points: 0,
        createdAt: "20/08/2023"
    }
]

const audienceReviews = [
  {
    movie_id: "M123",
    audience_review_id: "AR001",
    user_id: "U004",
    comment: "The momentum the film generates due to the chronological cross-cutting becomes relentless, and that runaway feeling is beautifully harmonious with the film’s broader interest in Oppenheimer’s legacy.",
    score: 5,
    createdAt: "05/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M123",
    audience_review_id: "AR002",
    user_id: "U005",
    comment: "I haven't watched it yet!",
    score: 1,
    createdAt: "04/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M123",
    audience_review_id: "AR003",
    user_id: "U006",
    comment: "Rarely have I left a movie feeling smarter than when I went in, but “Oppenheimer” is just such a film and it elevated my thinking, especially in regards to the science of politics and the politics of science.",
    score: 3,
    createdAt: "04/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M124",
    audience_review_id: "AR004",
    user_id: "U004",
    comment: "Inception is a masterpiece that challenges the audience's perception of reality.",
    score: 5,
    createdAt: "10/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M124",
    audience_review_id: "AR005",
    user_id: "U005",
    comment: "The layers of dreams and the intricate storytelling left me amazed.",
    score: 4,
    createdAt: "09/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M125",
    audience_review_id: "AR006",
    user_id: "U006",
    comment: "The Shawshank Redemption is an emotionally gripping tale of friendship and survival.",
    score: 5,
    createdAt: "15/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M125",
    audience_review_id: "AR007",
    user_id: "U004",
    comment: "This film's message of hope and perseverance resonates deeply with me.",
    score: 5,
    createdAt: "14/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M126",
    audience_review_id: "AR008",
    user_id: "U005",
    comment: "The Fellowship of the Ring transports viewers to a magical world of adventure.",
    score: 5,
    createdAt: "20/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M126",
    audience_review_id: "AR009",
    user_id: "U006",
    comment: "This film's visuals and storytelling are simply breathtaking.",
    score: 4,
    createdAt: "19/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M127",
    audience_review_id: "AR010",
    user_id: "U004",
    comment: "Black Panther is a landmark film that celebrates African culture.",
    score: 5,
    createdAt: "25/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M127",
    audience_review_id: "AR011",
    user_id: "U005",
    comment: "The film's portrayal of Wakanda is mesmerizing and empowering.",
    score: 4,
    createdAt: "24/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M128",
    audience_review_id: "AR012",
    user_id: "U006",
    comment: "Jurassic Park ignited my fascination with dinosaurs and adventure.",
    score: 5,
    createdAt: "30/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M128",
    audience_review_id: "AR013",
    user_id: "U004",
    comment: "The suspense and dinosaur encounters kept me on the edge of my seat.",
    score: 4,
    createdAt: "29/08/2023",
    updatedAt: ""
  },
  {
    movie_id: "M129",
    audience_review_id: "AR014",
    user_id: "U005",
    comment: "Avatar transported me to a mesmerizing alien world.",
    score: 5,
    createdAt: "05/09/2023",
    updatedAt: ""
  },
  {
    movie_id: "M129",
    audience_review_id: "AR015",
    user_id: "U006",
    comment: "The film's visuals and message are both awe-inspiring.",
    score: 4,
    createdAt: "04/09/2023",
    updatedAt: ""
  },
  {
    movie_id: "M130",
    audience_review_id: "AR016",
    user_id: "U004",
    comment: "Toy Story sparked nostalgia and captivated audiences of all ages.",
    score: 5,
    createdAt: "10/09/2023",
    updatedAt: ""
  },
  {
    movie_id: "M130",
    audience_review_id: "AR017",
    user_id: "U005",
    comment: "The film's charm and creativity remain unmatched in animation.",
    score: 4,
    createdAt: "09/09/2023",
    updatedAt: ""
  },
  {
    movie_id: "M131",
    audience_review_id: "AR018",
    user_id: "U006",
    comment: "Pulp Fiction's narrative complexity and memorable moments are captivating.",
    score: 5,
    createdAt: "15/09/2023",
    updatedAt: ""
  },
  {
    movie_id: "M131",
    audience_review_id: "AR019",
    user_id: "U004",
    comment: "The film's unique structure and sharp dialogue make it a timeless classic.",
    score: 4,
    createdAt: "14/09/2023",
    updatedAt: ""
  },
  {
    movie_id: "M132",
    audience_review_id: "AR020",
    user_id: "U005",
    comment: "The Lion King's emotional depth and memorable songs make it a timeless favorite.",
    score: 5,
    createdAt: "20/09/2023",
    updatedAt: ""
  },
  {
    movie_id: "M132",
    audience_review_id: "AR021",
    user_id: "U006",
    comment: "The film's themes of responsibility and courage resonate with audiences of all ages.",
    score: 5,
    createdAt: "19/09/2023",
    updatedAt: ""
  }
]

const movies = [
    {
        movie_id: "M123",
        title: "Oppenheimer",
        apercu: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        synopsis: "Written and directed by Christopher Nolan, Oppenheimer is an IMAX®-shot epic thriller that thrusts audiences into the pulse-pounding paradox of the enigmatic man who must risk destroying the world in order to save it. The film stars Cillian Murphy as J. Robert Oppenheimer and Emily Blunt as his wife, biologist and botanist Katherine “Kitty” Oppenheimer. Oscar® winner Matt Damon portrays General Leslie Groves Jr., director of the Manhattan Project, and Robert Downey, Jr. plays Lewis Strauss, a founding commissioner of the U.S. Atomic Energy Commission. Academy Award® nominee Florence Pugh plays psychiatrist Jean Tatlock, Benny Safdie plays theoretical physicist Edward Teller, Michael Angarano plays Robert Serber and Josh Hartnett plays pioneering American nuclear scientist Ernest Lawrence. Oppenheimer also stars Oscar® winner Rami Malek and reunites Nolan with eight-time Oscar® nominated actor, writer and filmmaker Kenneth Branagh.",
        releaseDate: "20/07/2023",
        runTime: 180,
        poster: "https://xl.movieposterdb.com/23_06/2023/15398776/xl_oppenheimer-movie-poster_a9df9f84.jpg?v=2023-08-17%2011:42:56",
        banner: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-08/MM-1207%20Oppenheimer.jpg?itok=0U-jOPJC",
        rating: "MA-15",
        language: [
            "English"
        ],
        trailer: [
            "https://www.youtube.com/watch?v=lgm4IeSUJOw",
            "https://www.youtube.com/watch?v=cJW0wjSx0GY"
        ],
        directors: [
            "Christopher Nolan"
        ],
        casts: [
            "David Krumholtz",
            "Cillian Murphy",
            "Kenneth Branagh",
            "Jason Clarke",
            "Rami Malek",
            "Emily Blunt"
        ],
        averageAudienceReviewScore: 3,
        genres: [
            "Drama",
            "History",
        ],
        createdAt: "20/07/2023",
        updatedAt: "05/08/2023"
    },
    {
        movie_id: "M124",
        title: "Inception",
        apercu: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        synopsis: "Written and directed by Christopher Nolan, Inception is a mind-bending sci-fi thriller that explores the concept of shared dreaming and subconscious manipulation. The film stars Leonardo DiCaprio as Dom Cobb, a skilled thief and dream extractor, and features an ensemble cast including Joseph Gordon-Levitt, Ellen Page, Tom Hardy, and Marion Cotillard. Inception takes audiences on a journey through layers of reality and dreams, blurring the lines between perception and reality.",
        releaseDate: "16/07/2010",
        runTime: 148,
        poster: "https://xl.movieposterdb.com/10_06/2010/1375666/xl_1375666_07030c72.jpg",
        banner: "https://s3.eu-central-1.amazonaws.com/rausgegangen/Ts665W5SxmlqmkZsRwWD_inception-bannerjpg",
        rating: "PG-13",
        language: ["English"],
        trailer: ["https://www.youtube.com/watch?v=YoHD9XEInc0"],
        directors: ["Christopher Nolan"],
        casts: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy", "Marion Cotillard"],
        averageAudienceReviewScore: 4,
        genres: ["Action", "Adventure", "Sci-Fi"],
        createdAt: "16/07/2010",
        updatedAt: "10/08/2023"
    },
    {
      movie_id: "M125",
      title: "The Shawshank Redemption",
      apercu: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      synopsis: "Directed by Frank Darabont, The Shawshank Redemption is a powerful drama that follows the lives of Andy Dufresne, played by Tim Robbins, and Ellis Boyd 'Red' Redding, played by Morgan Freeman, as they navigate the challenges of prison life. The film is based on a novella by Stephen King and is celebrated for its exploration of hope, friendship, and resilience. The Shawshank Redemption is widely regarded as one of the greatest films ever made.",
      releaseDate: "23/09/1994",
      runTime: 142,
      poster: "https://xl.movieposterdb.com/05_03/1994/0111161/xl_8494_0111161_3bb8e662.jpg?v=2023-08-21%2006:57:05",
      banner: "https://irs.www.warnerbros.com/hero-banner-jpeg/movies/media/browser/the_shawshank_redemption_25th_banner.jpg",
      rating: "R",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=6hB3S9bIaco"],
      directors: ["Frank Darabont"],
      casts: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
      averageAudienceReviewScore: 4.8,
      genres: ["Drama"],
      createdAt: "23/09/1994",
      updatedAt: "15/08/2023"
    },
    {
      movie_id: "M126",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      apercu: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      synopsis: "Directed by Peter Jackson, The Lord of the Rings: The Fellowship of the Ring is the first installment in the epic fantasy trilogy. The film follows Frodo Baggins, played by Elijah Wood, and his companions as they embark on a perilous journey to Mount Doom to destroy the One Ring. The movie masterfully brings J.R.R. Tolkien's rich world to life, showcasing breathtaking landscapes, captivating characters, and thrilling battles.",
      releaseDate: "19/12/2001",
      runTime: 178,
      poster: "https://xl.movieposterdb.com/04_12/2001/0120737/xl_166_0120737_158c8914.jpg",
      banner: "https://www.wetanz.com/media//amasty/shopby/option_images/146768033123a810f5abad3aa0a1420b83498efab1.jpg",
      rating: "PG-13",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=V75dMMIW2B4"],
      directors: ["Peter Jackson"],
      casts: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin"],
      averageAudienceReviewScore: 4.7,
      genres: ["Adventure", "Fantasy"],
      createdAt: "19/12/2001",
      updatedAt: "20/08/2023"
    },
    {
      movie_id: "M127",
      title: "Black Panther",
      apercu: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and confront a challenger from his country's past.",
      synopsis: "Directed by Ryan Coogler, Black Panther is a groundbreaking superhero film that showcases the rich culture of Wakanda. Chadwick Boseman stars as T'Challa, the newly crowned king of Wakanda and the Black Panther. The film combines action, drama, and social commentary as T'Challa navigates the challenges of ruling his nation and protecting its advanced technology. Black Panther received critical acclaim for its cultural significance and representation in mainstream cinema.",
      releaseDate: "16/02/2018",
      runTime: 134,
      poster: "https://xl.movieposterdb.com/21_11/2018/1825683/xl_1825683_ebbf6bc0.jpg",
      banner: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/869ae92e-855f-4458-8e52-e9d04604a682/dcjxgyy-4e4e6040-c341-4d6a-9798-29fa00dfff5a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2OWFlOTJlLTg1NWYtNDQ1OC04ZTUyLWU5ZDA0NjA0YTY4MlwvZGNqeGd5eS00ZTRlNjA0MC1jMzQxLTRkNmEtOTc5OC0yOWZhMDBkZmZmNWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GK8fTZvxcREnzpX3S9JVVclhyqlzPhz5Tj8OYzM76ZA",
      rating: "PG-13",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=xjDjIWPwcPU"],
      directors: ["Ryan Coogler"],
      casts: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira"],
      averageAudienceReviewScore: 4.5,
      genres: ["Action", "Adventure", "Sci-Fi"],
      createdAt: "16/02/2018",
      updatedAt: "25/08/2023"
    },
    {
      movie_id: "M128",
      title: "Jurassic Park",
      apercu: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      synopsis: "Directed by Steven Spielberg, Jurassic Park is a landmark science fiction adventure that brings dinosaurs back to life. The film follows Dr. Alan Grant, played by Sam Neill, and other characters as they visit a dinosaur theme park where genetically engineered dinosaurs roam. Chaos erupts when the park's systems fail, and the dinosaurs escape their enclosures. Jurassic Park combines cutting-edge visual effects with thrilling action, making it a classic in the genre.",
      releaseDate: "11/06/1993",
      runTime: 127,
      poster: "https://xl.movieposterdb.com/05_08/1993/0107290/xl_45298_0107290_be4e0db3.jpg",
      banner: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/554d27b6-5a27-46af-8e25-a5e8520090bc/d6fpuwi-ef5e1a54-b685-47d8-a040-25bc8cd0b994.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NGQyN2I2LTVhMjctNDZhZi04ZTI1LWE1ZTg1MjAwOTBiY1wvZDZmcHV3aS1lZjVlMWE1NC1iNjg1LTQ3ZDgtYTA0MC0yNWJjOGNkMGI5OTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S8wdc2JgeH3GI53BB9Rles5YfIKPCWCKm0BwlxNENuw",
      rating: "PG-13",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=lc0UehYemQA"],
      directors: ["Steven Spielberg"],
      casts: ["Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough"],
      averageAudienceReviewScore: 4.6,
      genres: ["Action", "Adventure", "Sci-Fi"],
      createdAt: "11/06/1993",
      updatedAt: "30/08/2023"
    },
    {
      movie_id: "M129",
      title: "Avatar",
      apercu: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      synopsis: "Directed by James Cameron, Avatar is a groundbreaking science fiction film set on the alien moon of Pandora. The movie follows Jake Sully, portrayed by Sam Worthington, as he navigates the conflict between humans and the indigenous Na'vi people. The film combines stunning visual effects with a thought-provoking story about environmentalism and cultural understanding.",
      releaseDate: "18/12/2009",
      runTime: 162,
      poster: "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
      banner: "https://www.beebibelle.com.au/assets/full/Avatar_Banner1.jpg?20220613140726",
      rating: "PG-13",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=5PSNL1qE6VY"],
      directors: ["James Cameron"],
      casts: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],
      averageAudienceReviewScore: 4.3,
      genres: ["Action", "Adventure", "Sci-Fi"],
      createdAt: "18/12/2009",
      updatedAt: "05/09/2023"
    },
    {
      movie_id: "M130",
      title: "Toy Story",
      apercu: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
      synopsis: "Directed by John Lasseter, Toy Story is an animated classic that follows the secret lives of toys when their owners are not around. The film introduces Woody, a cowboy doll voiced by Tom Hanks, and Buzz Lightyear, a space ranger toy voiced by Tim Allen. The two toys form an unexpected friendship as they navigate the challenges of being replaced and the excitement of adventure. Toy Story revolutionized animation and storytelling, becoming a beloved franchise.",
      releaseDate: "22/11/1995",
      runTime: 81,
      poster: "https://xl.movieposterdb.com/22_11/1995/178952/xl_toy-story-movie-poster_98469593.jpg",
      banner: "https://i.insider.com/54f62b896da8119338df0cf4?width=700",
      rating: "G",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=KYz2wyBy3kc"],
      directors: ["John Lasseter"],
      casts: ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney"],
      averageAudienceReviewScore: 4.8,
      genres: ["Animation", "Adventure", "Comedy"],
      createdAt: "22/11/1995",
      updatedAt: "10/09/2023"
    },
    {
      movie_id: "M131",
      title: "Pulp Fiction",
      apercu: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      synopsis: "Directed by Quentin Tarantino, Pulp Fiction is a groundbreaking crime film known for its non-linear narrative and memorable dialogue. The movie weaves together interconnected stories involving hitmen, criminals, and a boxer. With its eclectic soundtrack and unique storytelling style, Pulp Fiction has become a cultural icon and a favorite among fans of unconventional filmmaking.",
      releaseDate: "14/10/1994",
      runTime: 154,
      poster: "https://xl.movieposterdb.com/05_08/1994/0110912/xl_42127_0110912_e6312b43.jpg",
      banner: "https://100filmsinayear.files.wordpress.com/2016/09/pulp-fiction-banner.jpg",
      rating: "R",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=s7EdQ4FqbhY"],
      directors: ["Quentin Tarantino"],
      casts: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis"],
      averageAudienceReviewScore: 4.7,
      genres: ["Crime", "Drama"],
      createdAt: "14/10/1994",
      updatedAt: "15/09/2023"
    },
    {
      movie_id: "M132",
      title: "The Lion King",
      apercu: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      synopsis: "Directed by Roger Allers and Rob Minkoff, The Lion King is a beloved animated musical that tells the story of Simba, a lion prince, and his journey from exile back to his rightful place as king. With stunning animation, memorable songs, and powerful themes of family and identity, The Lion King has captured the hearts of audiences of all ages.",
      releaseDate: "24/06/1994",
      runTime: 88,
      poster: "https://xl.movieposterdb.com/22_11/1994/323073/xl_the-lion-king-movie-poster_07016269.jpg",
      banner: "https://i.pinimg.com/originals/10/f1/09/10f109cac6c14685bc63efb862ffbd77.jpg",
      rating: "G",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=4sj1MT05lAA"],
      directors: ["Roger Allers", "Rob Minkoff"],
      casts: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones", "Nathan Lane"],
      averageAudienceReviewScore: 4.9,
      genres: ["Animation", "Adventure", "Drama"],
      createdAt: "24/06/1994",
      updatedAt: "20/09/2023"
    },
    {
      movie_id: "M133",
      title: "Harry Potter and the Sorcerer's Stone",
      apercu: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family, and the terrible evil that haunts the magical world.",
      synopsis: "Directed by Chris Columbus, Harry Potter and the Sorcerer's Stone is the first film adaptation of J.K. Rowling's beloved fantasy book series. The movie follows young Harry Potter, played by Daniel Radcliffe, as he discovers his magical heritage and embarks on a journey at Hogwarts School of Witchcraft and Wizardry. With its enchanting world-building and endearing characters, the film captures the wonder and excitement of the Harry Potter universe.",
      releaseDate: "16/11/2001",
      runTime: 152,
      poster: "https://xl.movieposterdb.com/06_08/2001/0241527/xl_127659_0241527_f40641d0.jpg",
      banner: "https://image.tmdb.org/t/p/original//hziiv14OpD73u9gAak4XDDfBKa2.jpg",
      rating: "PG",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=VyHV0BRtdxo"],
      directors: ["Chris Columbus"],
      casts: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Alan Rickman"],
      averageAudienceReviewScore: 4.8,
      genres: ["Adventure", "Family", "Fantasy"],
      createdAt: "16/11/2001",
      updatedAt: "25/09/2023"
    },
    {
      movie_id: "M134",
      title: "Forrest Gump",
      apercu: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other history unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      synopsis: "Directed by Robert Zemeckis, Forrest Gump is a heartwarming drama that follows the extraordinary life of Forrest Gump, portrayed by Tom Hanks. The film takes viewers through decades of American history and culture, as seen through the eyes of a man with a unique perspective. With its iconic quotes and touching moments, Forrest Gump remains a beloved classic that celebrates the power of kindness and perseverance.",
      releaseDate: "06/07/1994",
      runTime: 142,
      poster: "https://xl.movieposterdb.com/05_06/1994/0109830/xl_21293_0109830_af6ba7a1.jpg",
      banner: "https://i0.wp.com/www.filmsnobreviews.com/wp-content/uploads/2018/09/650608.jpg?fit=1024%2C576&ssl=1",
      rating: "PG-13",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=uPIEn0M8su0"],
      directors: ["Robert Zemeckis"],
      casts: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
      averageAudienceReviewScore: 4.7,
      genres: ["Drama", "Romance"],
      createdAt: "06/07/1994",
      updatedAt: "30/09/2023"
    },
    {
      movie_id: "M135",
      title: "The Matrix",
      apercu: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      synopsis: "Directed by the Wachowskis, The Matrix is a groundbreaking science fiction film that explores themes of reality and consciousness. The movie follows Neo, portrayed by Keanu Reeves, as he discovers the truth about the simulated world he lives in and joins a rebellion against the machines that control it. The Matrix is known for its innovative visual effects and philosophical undertones, making it a cult classic.",
      releaseDate: "31/03/1999",
      runTime: 136,
      poster: "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
      banner: "https://www.comicbox.eu/wp-content/uploads/2019/08/4K-TheMatrix.jpg",
      rating: "R",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=vKQi3bBA1y8"],
      directors: ["The Wachowskis"],
      casts: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
      averageAudienceReviewScore: 4.6,
      genres: ["Action", "Sci-Fi"],
      createdAt: "31/03/1999",
      updatedAt: "05/10/2023"
    },
    {
      movie_id: "M136",
      title: "Eternal Sunshine of the Spotless Mind",
      apercu: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
      synopsis: "Directed by Michel Gondry, Eternal Sunshine of the Spotless Mind is a romantic science fiction film that explores the complexities of love and memory. The movie follows Joel, portrayed by Jim Carrey, as he undergoes a procedure to erase memories of his failed relationship with Clementine, played by Kate Winslet. The film beautifully intertwines surreal visuals with heartfelt storytelling, leaving audiences contemplating the nature of relationships.",
      releaseDate: "19/03/2004",
      runTime: 108,
      poster: "https://xl.movieposterdb.com/06_04/2004/0338013/xl_106627_0338013_8f7a2994.jpg",
      banner: "https://images.squarespace-cdn.com/content/v1/578bc194bebafb8c81474cc9/1518564566918-OLSXPJLVTLF6A1J1C3WV/Eternal+Sunshine+Banner.jpg",
      rating: "R",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=rb9a00bXf-U"],
      directors: ["Michel Gondry"],
      casts: ["Jim Carrey", "Kate Winslet", "Mark Ruffalo", "Kirsten Dunst"],
      averageAudienceReviewScore: 4.5,
      genres: ["Drama", "Romance", "Sci-Fi"],
      createdAt: "19/03/2004",
      updatedAt: "10/10/2023"
    },
    {
      movie_id: "M137",
      title: "The Avengers",
      apercu: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      synopsis: "Directed by Joss Whedon, The Avengers is a superhero ensemble film that brings together iconic Marvel characters. The movie features Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye as they team up to face the threat of Loki and his alien forces. With action-packed sequences and witty banter, The Avengers is a thrilling entry in the Marvel Cinematic Universe.",
      releaseDate: "04/05/2012",
      runTime: 143,
      poster: "https://xl.movieposterdb.com/12_01/2012/848228/xl_848228_df20a875.jpg",
      banner: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3603bdf4-2419-4aa3-a515-21ab3bae8739/d4cdp27-456f1caf-2ed5-42c2-9cb5-740d8cb8ef66.png/v1/fill/w_1234,h_648,q_70,strp/avengers_banner_1_by_hobo95_d4cdp27-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzk4IiwicGF0aCI6IlwvZlwvMzYwM2JkZjQtMjQxOS00YWEzLWE1MTUtMjFhYjNiYWU4NzM5XC9kNGNkcDI3LTQ1NmYxY2FmLTJlZDUtNDJjMi05Y2I1LTc0MGQ4Y2I4ZWY2Ni5wbmciLCJ3aWR0aCI6Ijw9MTUxOSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NDu9CAKz92AYldr1kz5A10p1IWjucg3IQe7jhTANS9Q",
      rating: "PG-13",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=eOrNdBpGMv8"],
      directors: ["Joss Whedon"],
      casts: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Scarlett Johansson", "Mark Ruffalo", "Jeremy Renner"],
      averageAudienceReviewScore: 4.7,
      genres: ["Action", "Adventure", "Sci-Fi"],
      createdAt: "04/05/2012",
      updatedAt: "15/10/2023"
    },
    {
      movie_id: "M138",
      title: "The Dark Knight",
      apercu: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      synopsis: "Directed by Christopher Nolan, The Dark Knight is a superhero film that follows Batman as he confronts the Joker, a chaotic criminal mastermind. The movie explores themes of morality and chaos, with the late Heath Ledger's portrayal of the Joker receiving critical acclaim. The Dark Knight is known for its intense storytelling and memorable performances.",
      releaseDate: "18/07/2008",
      runTime: 152,
      poster: "https://xl.movieposterdb.com/21_06/2012/1345836/xl_1345836_429edb63.jpg",
      banner: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59662fdd-1ee6-4a9c-8733-3eeb57c22956/daje8hi-18d8ddc5-9c08-477b-a317-953b5a64f5cd.jpg/v1/fill/w_1280,h_427,q_75,strp/the_dark_knight_concept_banner_by_sirbriggsy_daje8hi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI3IiwicGF0aCI6IlwvZlwvNTk2NjJmZGQtMWVlNi00YTljLTg3MzMtM2VlYjU3YzIyOTU2XC9kYWplOGhpLTE4ZDhkZGM1LTljMDgtNDc3Yi1hMzE3LTk1M2I1YTY0ZjVjZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4O3aFSvEaaWI5z8tb5fDJcyW-F7ZpkLRTT7NCgD6Wm8",
      rating: "PG-13",
      language: ["English"],
      trailer: ["https://www.youtube.com/watch?v=EXeTwQWrcwY"],
      directors: ["Christopher Nolan"],
      casts: ["Christian Bale", "Heath Ledger", "Gary Oldman", "Aaron Eckhart", "Maggie Gyllenhaal"],
      averageAudienceReviewScore: 4.8,
      genres: ["Action", "Crime", "Drama"],
      createdAt: "18/07/2008",
      updatedAt: "20/10/2023"
    },
    {
    movie_id: "M139",
    title: "Star Wars: Episode IV - A New Hope",
    apercu: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    synopsis: "Directed by George Lucas, Star Wars: Episode IV - A New Hope is the first installment in the iconic Star Wars saga. The film introduces audiences to a galaxy far, far away, as Luke Skywalker embarks on a journey to become a Jedi and join the Rebel Alliance against the tyrannical Galactic Empire. A New Hope revolutionized filmmaking and storytelling, giving rise to a beloved franchise.",
    releaseDate: "25/05/1977",
    runTime: 121,
    poster: "https://xl.movieposterdb.com/21_01/1977/76759/xl_76759_43e2730c.jpg",
    banner: "https://filmartgallery.com/cdn/shop/t/27/assets/star-wars-banner.jpeg?v=80624120874934922901668841836",
    rating: "PG",
    language: ["English"],
    trailer: ["https://www.youtube.com/watch?v=vZ734NWnAHA"],
    directors: ["George Lucas"],
    casts: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Alec Guinness"],
    averageAudienceReviewScore: 4.9,
    genres: ["Action", "Adventure", "Fantasy"],
    createdAt: "25/05/1977",
    updatedAt: "25/10/2023"
    },
]

export {
    loopCinema,
    genres,
    casts,
    directors,
    ratings,
    offers,
    locations,
    users,
    movies,
    audienceReviews
}