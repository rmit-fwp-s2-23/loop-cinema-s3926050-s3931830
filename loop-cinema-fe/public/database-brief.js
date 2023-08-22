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

const director = [
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
        points: 700
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
        points: 0
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
        poster: "link to image",
        banner: "link to banner",
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
        audienceScore: {
            averageScore: 3,
            audienceList: [
                {
                    audience_id: "A001",
                    user_id: "U004",
                    comment: "The momentum the film generates due to the chronological cross-cutting becomes relentless, and that runaway feeling is beautifully harmonious with the film’s broader interest in Oppenheimer’s legacy.",
                    score: 5,
                    createdAt: "05/08/2023",
                    updatedAt: ""
                },
                {
                    audience_id: "A002",
                    user_id: "U005",
                    comment: "I haven't watched it yet!",
                    score: 1,
                    createdAt: "04/08/2023",
                    updatedAt: ""
                },
                {
                    audience_id: "A003",
                    user_id: "U006",
                    comment: "Rarely have I left a movie feeling smarter than when I went in, but “Oppenheimer” is just such a film and it elevated my thinking, especially in regards to the science of politics and the politics of science.",
                    score: 3,
                    createdAt: "04/08/2023",
                    updatedAt: ""
                }
            ]
        },
        genres: [
            "Drama",
            "History",
        ],
        createdAt: "20/07/2023",
        updatedAt: "05/08/2023"
    },
    {
        movie_id: "M123",
        title: "Oppenheimer",
        apercu: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        synopsis: "Written and directed by Christopher Nolan, Oppenheimer is an IMAX®-shot epic thriller that thrusts audiences into the pulse-pounding paradox of the enigmatic man who must risk destroying the world in order to save it. The film stars Cillian Murphy as J. Robert Oppenheimer and Emily Blunt as his wife, biologist and botanist Katherine “Kitty” Oppenheimer. Oscar® winner Matt Damon portrays General Leslie Groves Jr., director of the Manhattan Project, and Robert Downey, Jr. plays Lewis Strauss, a founding commissioner of the U.S. Atomic Energy Commission. Academy Award® nominee Florence Pugh plays psychiatrist Jean Tatlock, Benny Safdie plays theoretical physicist Edward Teller, Michael Angarano plays Robert Serber and Josh Hartnett plays pioneering American nuclear scientist Ernest Lawrence. Oppenheimer also stars Oscar® winner Rami Malek and reunites Nolan with eight-time Oscar® nominated actor, writer and filmmaker Kenneth Branagh.",
        releaseDate: "20/07/2023",
        runTime: 180,
        poster: "link to image",
        banner: "link to banner",
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
        audienceScore: {
            averageScore: 3,
            audienceList: [
                {
                    audience_id: "A001",
                    user_id: "U004",
                    name: "Bao Hoang",
                    comment: "The momentum the film generates due to the chronological cross-cutting becomes relentless, and that runaway feeling is beautifully harmonious with the film’s broader interest in Oppenheimer’s legacy.",
                    score: 5,
                    createdAt: "05/08/2023",
                    updatedAt: ""
                },
                {
                    audience_id: "A002",
                    user_id: "U005",
                    name: "Random people",
                    comment: "I haven't watched it yet!",
                    score: 1,
                    createdAt: "04/08/2023",
                    updatedAt: ""
                },
                {
                    audience_id: "A003",
                    user_id: "U006",
                    name: "Duong Nguyen",
                    comment: "Rarely have I left a movie feeling smarter than when I went in, but “Oppenheimer” is just such a film and it elevated my thinking, especially in regards to the science of politics and the politics of science.",
                    score: 3,
                    createdAt: "04/08/2023",
                    updatedAt: ""
                }
            ]
        },
        genres: [
            "Drama",
            "History",
        ],
        createdAt: "20/07/2023",
        updatedAt: "05/08/2023"
    },
    {
        movie_id: "M123",
        title: "Oppenheimer",
        apercu: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        synopsis: "Written and directed by Christopher Nolan, Oppenheimer is an IMAX®-shot epic thriller that thrusts audiences into the pulse-pounding paradox of the enigmatic man who must risk destroying the world in order to save it. The film stars Cillian Murphy as J. Robert Oppenheimer and Emily Blunt as his wife, biologist and botanist Katherine “Kitty” Oppenheimer. Oscar® winner Matt Damon portrays General Leslie Groves Jr., director of the Manhattan Project, and Robert Downey, Jr. plays Lewis Strauss, a founding commissioner of the U.S. Atomic Energy Commission. Academy Award® nominee Florence Pugh plays psychiatrist Jean Tatlock, Benny Safdie plays theoretical physicist Edward Teller, Michael Angarano plays Robert Serber and Josh Hartnett plays pioneering American nuclear scientist Ernest Lawrence. Oppenheimer also stars Oscar® winner Rami Malek and reunites Nolan with eight-time Oscar® nominated actor, writer and filmmaker Kenneth Branagh.",
        releaseDate: "20/07/2023",
        runTime: 180,
        poster: "link to image",
        banner: "link to banner",
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
        audienceScore: {
            averageScore: 3,
            audienceList: [
                {
                    audience_id: "A001",
                    user_id: "U004",
                    name: "Bao Hoang",
                    comment: "The momentum the film generates due to the chronological cross-cutting becomes relentless, and that runaway feeling is beautifully harmonious with the film’s broader interest in Oppenheimer’s legacy.",
                    score: 5,
                    createdAt: "05/08/2023",
                    updatedAt: ""
                },
                {
                    audience_id: "A002",
                    user_id: "U005",
                    name: "Random people",
                    comment: "I haven't watched it yet!",
                    score: 1,
                    createdAt: "04/08/2023",
                    updatedAt: ""
                },
                {
                    audience_id: "A003",
                    user_id: "U006",
                    name: "Duong Nguyen",
                    comment: "Rarely have I left a movie feeling smarter than when I went in, but “Oppenheimer” is just such a film and it elevated my thinking, especially in regards to the science of politics and the politics of science.",
                    score: 3,
                    createdAt: "04/08/2023",
                    updatedAt: ""
                }
            ]
        },
        genres: [
            "Drama",
            "History",
        ],
        createdAt: "20/07/2023",
        updatedAt: "05/08/2023"
    },
]