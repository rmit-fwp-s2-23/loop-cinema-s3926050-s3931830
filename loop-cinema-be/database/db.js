const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config.js");

const db = {
  Op: Sequelize.Op
};

// Create Sequelize.
db.sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT
});

// Include models.
db.audience_review = require("../models/audience_review.js")(db, DataTypes);
db.cast = require("../models/cast.js")(db, DataTypes);
db.director = require("../models/director.js")(db, DataTypes);
db.genre = require("../models/genre.js")(db, DataTypes);
db.location = require("../models/location.js")(db, DataTypes);
db.movie = require("../models/movie.js")(db, DataTypes);
db.rating_type = require("../models/rating_type.js")(db, DataTypes);
db.reservation = require("../models/reservation.js")(db, DataTypes);
db.session = require("../models/session.js")(db, DataTypes);
db.trailer = require("../models/trailer.js")(db, DataTypes);
db.user = require("../models/user.js")(db, DataTypes);

db.director.hasMany(db.movie, { foreignKey: { name: "directorID", allowNull: false } });
db.movie.belongsTo(db.director, { foreignKey: { name: "directorID", allowNull: false } });
db.rating_type.hasMany(db.movie, { foreignKey: { name: "ratingTypeID", allowNull: false } });
db.movie.belongsTo(db.rating_type, { foreignKey: { name: "ratingTypeID", allowNull: false } });

db.movie.hasMany(db.trailer, { foreignKey: { name: "movieID", allowNull: false } });
db.trailer.belongsTo(db.movie, { foreignKey: { name: "movieID", allowNull: false } })

db.movie.hasMany(db.session, { foreignKey: { name: "movieID", allowNull: false } });
db.session.belongsTo(db.movie, { foreignKey: { name: "movieID", allowNull: false } })
db.location.hasMany(db.session, { foreignKey: { name: "locationID", allowNull: false } });
db.session.belongsTo(db.location, { foreignKey: { name: "locationID", allowNull: false } })

db.movie.hasMany(db.audience_review, { foreignKey: { name: "movieID", allowNull: false } });
db.user.hasMany(db.audience_review, { foreignKey: { name: "userID", allowNull: false } });

db.user.hasMany(db.reservation, { foreignKey: { name: "userID", allowNull: false } });
db.reservation.belongsTo(db.user, { foreignKey: { name: "userID", allowNull: false } });
db.session.hasMany(db.reservation, { foreignKey: { name: "sessionID", allowNull: false } });
db.reservation.belongsTo(db.session, { foreignKey: { name: "sessionID", allowNull: false } });

db.movie_cast = require("../models/movie_cast.js")(db, DataTypes);
db.movie.belongsToMany(db.cast, { through: db.movie_cast, as: "castIDs", foreignKey: "movieID" });
db.cast.belongsToMany(db.movie, { through: db.movie_cast, as: "movieIDs", foreignKey: "castID" });

db.movie_genre = require("../models/movie_genre.js")(db, DataTypes);
db.movie.belongsToMany(db.genre, { through: db.movie_genre, as: "genreIDs", foreignKey: "movieID" });
db.genre.belongsToMany(db.movie, { through: db.movie_genre, as: "movieIDs", foreignKey: "genreID" });

// Include a sync option with seed data logic included.
db.sync = async () => {
  // Sync schema.
  await db.sequelize.sync({force: true});

  // Can sync with force if the schema has become out of date - note that syncing with force is a destructive operation.
  // await db.sequelize.sync({ force: true });
  
  await seedDataUser();
  await seedDataCast();
  await seedDataDirector();
  await seedDataGenre();
  await seedDataRatingType();
  await seedDataLocation();

  await seedDataMovie();
  await seedDataTrailer();
  await seedDataSession();
  await seedDataAudienceReview();
};

async function seedDataUser() {
    const count = await db.user.count();

    // Only seed data if necessary.
    if (count > 0)
        return;

    const argon2 = require("argon2");

    let hash = await argon2.hash("baohoang", { type: argon2.argon2id });
    const user1 = {
        userID: "U004",
        userEmail: "baohoang@gmail.com",
        userPasswordHashed: hash,
        userFirstName: "Bao",
        userLastName: "Hoang",
        userPhone: "0456775093",
        userDOB: "2003-12-26",
        userPostCode: 3000,
        userIsSubscribe: true,
        userPoint: 1000
    }
    await db.user.create(user1);

    hash = await argon2.hash("hongduong", { type: argon2.argon2id });
    const user2 = {
        userID: "U006",
        userEmail: "hongduong@gmail.com",
        userPasswordHashed: hash,
        userFirstName: "Duong",
        userLastName: "Hong",
        userPhone: "0123675887",
        userDOB: "2003-01-01",
        userPostCode: 3001,
        userIsSubscribe: true,
        userPoint: 700
    }
    await db.user.create(user2);

    hash = await argon2.hash("randompeople", { type: argon2.argon2id });
    const user3 = {
        userID: "U005",
        userEmail: "randompeople@gmail.com",
        userPasswordHashed: hash,
        userFirstName: "Random",
        userLastName: "People",
        userPhone: "0123456789",
        userDOB: "2000-01-01",
        userPostCode: 3054,
        userIsSubscribe: false,
        userPoint: 0
    }
    await db.user.create(user3);
}

async function seedDataCast() {
  const count = await db.cast.count();

  // Only seed data if necessary.
  if (count > 0)
      return;

  await db.cast.bulkCreate([
    {
      castID: "C001",
      castName: "Cillian Murphy"
    },
    {
      castID: "C002",
      castName: "David Krumholtz"
    },
    {
      castID: "C003",
      castName: "Emily Blunt"
    }
  ])
}

async function seedDataDirector() {
  const count = await db.director.count();

  // Only seed data if necessary.
  if (count > 0)
      return;

  await db.director.bulkCreate([
    { directorID: 'D001', directorName: 'Christopher Nolan' },
    { directorID: 'D002', directorName: 'Frank Darabont' },
    { directorID: 'D003', directorName: 'Peter Jackson' },
    { directorID: 'D004', directorName: 'Ryan Coogler' },
    { directorID: 'D005', directorName: 'Steven Spielberg' },
    { directorID: 'D006', directorName: 'James Cameron' },
    { directorID: 'D007', directorName: 'John Lasseter' },
    { directorID: 'D008', directorName: 'Quentin Tarantino' },
    { directorID: 'D009', directorName: 'Roger Allers' },
    { directorID: 'D010', directorName: 'Chris Columbus' },
    { directorID: 'D011', directorName: 'Robert Zemeckis' },
    { directorID: 'D012', directorName: 'The Wachowskis' },
    { directorID: 'D013', directorName: 'Michel Gondry' },
    { directorID: 'D014', directorName: 'Joss Whedon' },
    { directorID: 'D015', directorName: 'George Lucas' }
  ])
}

async function seedDataGenre() {
  const count = await db.genre.count();

  // Only seed data if necessary.
  if (count > 0)
      return;

  await db.genre.bulkCreate([
    {
      genreID: "G001",
      genreName: "Documentary"
    },
    {
      genreID: "G002",
      genreName: "Comedy"
    },
    {
      genreID: "G003",
      genreName: "Drama"
    }
  ])
}

async function seedDataRatingType() {
  const count = await db.rating_type.count();

  // Only seed data if necessary.
  if (count > 0)
      return;

  await db.rating_type.bulkCreate([
    {
      ratingTypeID: "RT001",
      ratingTypeName: "G"
    },
    {
      ratingTypeID: "RT002",
      ratingTypeName: "PG"
    },
    {
      ratingTypeID: "RT003",
      ratingTypeName: "M"
    },
    {
      ratingTypeID: "RT004",
      ratingTypeName: "MA-15"
    },
    {
      ratingTypeID: "RT005",
      ratingTypeName: "R-18"
    },
    {
      ratingTypeID: "RT006",
      ratingTypeName: "X-18"
    }
  ])
}

async function seedDataLocation() {
  const count = await db.location.count();

  // Only seed data if necessary.
  if (count > 0)
      return;

  await db.location.bulkCreate([
    {
      locationID: "L001",
      locationName: "Loop Cinema,  Bankstown",
      locationAddress: "63 The Mall, Bankstown, NSW 2200",
      locationPhone: "0290033800",
      locationImage: "https://cdn.broadsheet.com.au/cache/2c/5f/2c5f0f82b01888628a20ff53550c6b94.jpg",
    },
    {
      locationID: "L002",
      locationName: "Loop Cinema,  District Dockland",
      locationAddress: "440 Docklands Drive, Docklands, VIC 3008",
      locationPhone: "0390271540",
      locationImage: "https://media.timeout.com/images/103085905/750/562/image.jpg",
    },
    {
      locationID: "L003",
      locationName: "Loop Cinema,  Melbounre Central",
      locationAddress: "Cnr Swanston & Latrobe Street, Melbourne, VIC 3000",
      locationPhone: "1300357357",
      locationImage: "https://headbox-media.imgix.net/spaces/22571/photos/aa639165-6939-4cb1-a599-749d5024484b_Rydges%20Sydney%20Central%20-%20Cinema%20HR.jpg?auto=format&ar=3%3A2&fit=crop&q=60&ixlib=react-9.5.4",
    }
  ])
}

async function seedDataMovie() {
  const count = await db.movie.count();

  // Only seed data if necessary.
  if (count > 0)
    return;

  await db.movie.bulkCreate([
    {
      movieID: "M123",
      movieTitle: "Oppenheimer",
      movieApercu: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      movieSynopsis: "Written and directed by Christopher Nolan, Oppenheimer is an IMAX®-shot epic thriller that thrusts audiences into the pulse-pounding paradox of the enigmatic man who must risk destroying the world in order to save it. The film stars Cillian Murphy as J. Robert Oppenheimer and Emily Blunt as his wife, biologist and botanist Katherine “Kitty” Oppenheimer. Oscar® winner Matt Damon portrays General Leslie Groves Jr., director of the Manhattan Project, and Robert Downey, Jr. plays Lewis Strauss, a founding commissioner of the U.S. Atomic Energy Commission. Academy Award® nominee Florence Pugh plays psychiatrist Jean Tatlock, Benny Safdie plays theoretical physicist Edward Teller, Michael Angarano plays Robert Serber and Josh Hartnett plays pioneering American nuclear scientist Ernest Lawrence. Oppenheimer also stars Oscar® winner Rami Malek and reunites Nolan with eight-time Oscar® nominated actor, writer and filmmaker Kenneth Branagh.",
      movieReleaseDate: "2023/07/20",
      movieRuntime: 180,
      moviePoster: "https://xl.movieposterdb.com/23_06/2023/15398776/xl_oppenheimer-movie-poster_a9df9f84.jpg?v=2023-08-17%2011:42:56",
      movieBanner: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-08/MM-1207%20Oppenheimer.jpg?itok=0U-jOPJC",
      directorID: "D001",
      ratingTypeID: "RT004"
    },
    {
      movieID: "M124",
      movieTitle: "Inception",
      movieApercu: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      movieSynopsis: "Written and directed by Christopher Nolan, Inception is a mind-bending sci-fi thriller that explores the concept of shared dreaming and subconscious manipulation. The film stars Leonardo DiCaprio as Dom Cobb, a skilled thief and dream extractor, and features an ensemble cast including Joseph Gordon-Levitt, Ellen Page, Tom Hardy, and Marion Cotillard. Inception takes audiences on a journey through layers of reality and dreams, blurring the lines between perception and reality.",
      movieReleaseDate: "2010-07-16",
      movieRuntime: 148,
      moviePoster: "https://xl.movieposterdb.com/10_06/2010/1375666/xl_1375666_07030c72.jpg",
      movieBanner: "https://s3.eu-central-1.amazonaws.com/rausgegangen/Ts665W5SxmlqmkZsRwWD_inception-bannerjpg",
      directorID: "D001",
      ratingTypeID: "RT002"
    },
    {
      movieID: "M125",
      movieTitle: "The Shawshank Redemption",
      movieApercu: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      movieSynopsis: "Directed by Frank Darabont, The Shawshank Redemption is a powerful drama that follows the lives of Andy Dufresne, played by Tim Robbins, and Ellis Boyd 'Red' Redding, played by Morgan Freeman, as they navigate the challenges of prison life. The film is based on a novella by Stephen King and is celebrated for its exploration of hope, friendship, and resilience. The Shawshank Redemption is widely regarded as one of the greatest films ever made.",
      movieReleaseDate: "1994-09-23",
      movieRuntime: 142,
      moviePoster: "https://xl.movieposterdb.com/05_03/1994/0111161/xl_8494_0111161_3bb8e662.jpg?v=2023-08-21%2006:57:05",
      movieBanner: "https://irs.www.warnerbros.com/hero-banner-jpeg/movies/media/browser/the_shawshank_redemption_25th_banner.jpg",
      directorID: "D002",
      ratingTypeID: "RT005"
    },
    {
      movieID: "M126",
      movieTitle: "The Lord of the Rings: The Fellowship of the Ring",
      movieApercu: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      movieSynopsis: "Directed by Peter Jackson, The Lord of the Rings: The Fellowship of the Ring is the first installment in the epic fantasy trilogy. The film follows Frodo Baggins, played by Elijah Wood, and his companions as they embark on a perilous journey to Mount Doom to destroy the One Ring. The movie masterfully brings J.R.R. Tolkien's rich world to life, showcasing breathtaking landscapes, captivating characters, and thrilling battles.",
      movieReleaseDate: "2001-12-19",
      movieRuntime: 178,
      moviePoster: "https://xl.movieposterdb.com/04_12/2001/0120737/xl_166_0120737_158c8914.jpg",
      movieBanner: "https://www.wetanz.com/media//amasty/shopby/option_images/146768033123a810f5abad3aa0a1420b83498efab1.jpg",
      directorID: "D003",
      ratingTypeID: "RT002"
    },
    {
      movieID: "M127",
      movieTitle: "Black Panther",
      movieApercu: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and confront a challenger from his country's past.",
      movieSynopsis: "Directed by Ryan Coogler, Black Panther is a groundbreaking superhero film that showcases the rich culture of Wakanda. Chadwick Boseman stars as T'Challa, the newly crowned king of Wakanda and the Black Panther. The film combines action, drama, and social commentary as T'Challa navigates the challenges of ruling his nation and protecting its advanced technology. Black Panther received critical acclaim for its cultural significance and representation in mainstream cinema.",
      movieReleaseDate: "2018-02-16",
      movieRuntime: 134,
      moviePoster: "https://xl.movieposterdb.com/21_11/2018/1825683/xl_1825683_ebbf6bc0.jpg",
      movieBanner: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/869ae92e-855f-4458-8e52-e9d04604a682/dcjxgyy-4e4e6040-c341-4d6a-9798-29fa00dfff5a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg8PTM5ZWJkMzcyLTVhMjctNDZhZi04ZTI5LWE1ZTg1MjAwOTBiY1wvZGNqeGd5eS00ZTRlNjA0MC1jMzQxLTRkNmEtOTc9PTI5ZmEwMGRmZmY1YS5qLmdpaJ9V1HqK4GBjb7C9UPYlc1Vep4Tp0PLDMasXau-oXg",
      directorID: "D004",
      ratingTypeID: "RT002"
    },
    {
      movieID: "M128",
      movieTitle: "Jurassic Park",
      movieApercu: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      movieSynopsis: "Directed by Steven Spielberg, Jurassic Park is a landmark science fiction adventure that brings dinosaurs back to life. The film follows Dr. Alan Grant, played by Sam Neill, and other characters as they visit a dinosaur theme park where genetically engineered dinosaurs roam. Chaos erupts when the park's systems fail, and the dinosaurs escape their enclosures. Jurassic Park combines cutting-edge visual effects with thrilling action, making it a classic in the genre.",
      movieReleaseDate: "1993-06-11",
      movieRuntime: 127,
      moviePoster: "https://xl.movieposterdb.com/05_08/1993/0107290/xl_45298_0107290_be4e0db3.jpg",
      movieBanner: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/554d27b6-5a27-46af-8e25-a5e8520090bc/d6fpuwi-ef5e1a54-b685-47d8-a040-25bc8cd0b994.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg9PTM5ZWJkMzcyLTVhMjctNDZhZi04ZTI1LWE1ZTg1MjAwOTBiY1wvZDZmcHV3aS1lZjVlMWE1NC1iNjg1LTQ3ZDgtYTA0PTI1YmM4Y2QwYjk5NC6qcGc",
      directorID: "D005",
      ratingTypeID: "RT002"
    },
    {
      movieID: "M129",
      movieTitle: "Avatar",
      movieApercu: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      movieSynopsis: "Directed by James Cameron, Avatar is a groundbreaking science fiction film set on the alien moon of Pandora. The movie follows Jake Sully, portrayed by Sam Worthington, as he navigates the conflict between humans and the indigenous Na'vi people. The film combines stunning visual effects with a thought-provoking story about environmentalism and cultural understanding.",
      movieReleaseDate: "2009-12-18",
      movieRuntime: 162,
      moviePoster: "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
      movieBanner: "https://www.beebibelle.com.au/assets/full/Avatar_Banner1.jpg?20220613140726",
      directorID: "D006",
      ratingTypeID: "RT002"
    },
    {
      movieID: "M130",
      movieTitle: "Toy Story",
      movieApercu: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
      movieSynopsis: "Directed by John Lasseter, Toy Story is an animated classic that follows the secret lives of toys when their owners are not around. The film introduces Woody, a cowboy doll voiced by Tom Hanks, and Buzz Lightyear, a space ranger toy voiced by Tim Allen. The two toys form an unexpected friendship as they navigate the challenges of being replaced and the excitement of adventure. Toy Story revolutionized animation and storytelling, becoming a beloved franchise.",
      movieReleaseDate: "1995-11-22",
      movieRuntime: 81,
      moviePoster: "https://xl.movieposterdb.com/22_11/1995/178952/xl_toy-story-movie-poster_98469593.jpg",
      movieBanner: "https://i.insider.com/54f62b896da8119338df0cf4?width=700",
      directorID: "D007",
      ratingTypeID: "RT001"
    },
    {
      movieID: "M131",
      movieTitle: "Pulp Fiction",
      movieApercu: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      movieSynopsis: "Directed by Quentin Tarantino, Pulp Fiction is a groundbreaking crime film known for its non-linear narrative and memorable dialogue. The movie weaves together interconnected stories involving hitmen, criminals, and a boxer. With its eclectic soundtrack and unique storytelling style, Pulp Fiction has become a cultural icon and a favorite among fans of unconventional filmmaking.",
      movieReleaseDate: "1994-10-14",
      movieRuntime: 154,
      moviePoster: "https://xl.movieposterdb.com/05_08/1994/0110912/xl_42127_0110912_e6312b43.jpg",
      movieBanner: "https://100filmsinayear.files.wordpress.com/2016/09/pulp-fiction-banner.jpg",
      directorID: "D008",
      ratingTypeID: "RT005"
    },
    {
      movieID: "M132",
      movieTitle: "The Lion King",
      movieApercu: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      movieSynopsis: "Directed by Roger Allers and Rob Minkoff, The Lion King is a beloved animated musical that tells the story of Simba, a lion prince, and his journey from exile back to his rightful place as king. With stunning animation, memorable songs, and powerful themes of family and identity, The Lion King has captured the hearts of audiences of all ages.",
      movieReleaseDate: "1994-06-24",
      movieRuntime: 88,
      moviePoster: "https://xl.movieposterdb.com/22_11/1994/323073/xl_the-lion-king-movie-poster_07016269.jpg",
      movieBanner: "https://i.pinimg.com/originals/10/f1/09/10f109cac6c14685bc63efb862ffbd77.jpg",
      directorID: "D009",
      ratingTypeID: "RT001"
    },
    {
      movieID: "M133",
      movieTitle: "Harry Potter and the Sorcerer's Stone",
      movieApercu: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family, and the terrible evil that haunts the magical world.",
      movieSynopsis: "Directed by Chris Columbus, Harry Potter and the Sorcerer's Stone is the first film adaptation of J.K. Rowling's beloved fantasy book series. The movie follows young Harry Potter, played by Daniel Radcliffe, as he discovers his magical heritage and embarks on a journey at Hogwarts School of Witchcraft and Wizardry. With its enchanting world-building and endearing characters, the film captures the wonder and excitement of the Harry Potter universe.",
      movieReleaseDate: "2001-11-16",
      movieRuntime: 152,
      moviePoster: "https://xl.movieposterdb.com/06_08/2001/0241527/xl_127659_0241527_f40641d0.jpg",
      movieBanner: "https://image.tmdb.org/t/p/original//hziiv14OpD73u9gAak4XDDfBKa2.jpg",
      directorID: "D010",
      ratingTypeID: "RT002"
    },
    {
      movieID: "M134",
      movieTitle: "Forrest Gump",
      movieApercu: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other history unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      movieSynopsis: "Directed by Robert Zemeckis, Forrest Gump is a heartwarming drama that follows the extraordinary life of Forrest Gump, portrayed by Tom Hanks. The film takes viewers through decades of American history and culture, as seen through the eyes of a man with a unique perspective. With its iconic quotes and touching moments, Forrest Gump remains a beloved classic that celebrates the power of kindness and perseverance.",
      movieReleaseDate: "1994-07-06",
      movieRuntime: 142,
      moviePoster: "https://xl.movieposterdb.com/05_06/1994/0109830/xl_21293_0109830_af6ba7a1.jpg",
      movieBanner: "https://i0.wp.com/www.filmsnobreviews.com/wp-content/uploads/2018/09/650608.jpg?fit=1024%2C576&ssl=1",
      directorID: "D011",
      ratingTypeID: "RT002"
    },
    {
      movieID: "M135",
      movieTitle: "The Matrix",
      movieApercu: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      movieSynopsis: "Directed by the Wachowskis, The Matrix is a groundbreaking science fiction film that explores themes of reality and consciousness. The movie follows Neo, portrayed by Keanu Reeves, as he discovers the truth about the simulated world he lives in and joins a rebellion against the machines that control it. The Matrix is known for its innovative visual effects and philosophical undertones, making it a cult classic.",
      movieReleaseDate: "1999-03-31",
      movieRuntime: 136,
      moviePoster: "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
      movieBanner: "https://www.comicbox.eu/wp-content/uploads/2019/08/4K-TheMatrix.jpg",
      directorID: "D012",
      ratingTypeID: "RT005"
    },
    {
      movieID: "M136",
      movieTitle: "Eternal Sunshine of the Spotless Mind",
      movieApercu: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
      movieSynopsis: "Directed by Michel Gondry, Eternal Sunshine of the Spotless Mind is a romantic science fiction film that explores the complexities of love and memory. The movie follows Joel, portrayed by Jim Carrey, as he undergoes a procedure to erase memories of his failed relationship with Clementine, played by Kate Winslet. The film beautifully intertwines surreal visuals with heartfelt storytelling, leaving audiences contemplating the nature of relationships.",
      movieReleaseDate: "2004-03-19",
      movieRuntime: 108,
      moviePoster: "https://xl.movieposterdb.com/06_04/2004/0338013/xl_106627_0338013_8f7a2994.jpg",
      movieBanner: "https://images.squarespace-cdn.com/content/v1/578bc194bebafb8c81474cc9/1518564566918-OLSXPJLVTLF6A1J1C3WV/Eternal+Sunshine+Banner.jpg",
      directorID: "D013",
      ratingTypeID: "RT005"
    },
    {
      movieID: "M137",
      movieTitle: "The Avengers",
      movieApercu: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      movieSynopsis: "Directed by Joss Whedon, The Avengers is a superhero ensemble film that brings together iconic Marvel characters. The movie features Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye as they team up to face the threat of Loki and his alien forces. With action-packed sequences and witty banter, The Avengers is a thrilling entry in the Marvel Cinematic Universe.",
      movieReleaseDate: "2012-05-04",
      movieRuntime: 143,
      moviePoster: "https://xl.movieposterdb.com/12_01/2012/848228/xl_848228_df20a875.jpg",
      movieBanner: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3603bdf4-2419-4aa3-a515-21ab3bae8739/d4cdp27-456f1caf-2ed5-42c2-9cb5-740d8cb8ef66.png/v1/fill/w_1234,h_648,q_70,strp/avengers_banner_1_by_hobo95_d4cdp27-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg9ONxk-7ZgMfb4oqAABZ-_Lr-YQ3e64QY-MRut1N85kGzN1wQK2UzHO1arz_27AsTzUeg44g_e9nwkp-PzcrC-2PMqtkKdfX52N1i3_Yq_TK5JmUwhwNspqTzgK8v0Xj9C5O5NlYzbcS1gmh_UlVaJllrL7Y7Ll1ylatdaDJJ0EYUvbDTB6W7YOdbEx7pGXUBtW8gn-9sCQKpL_L-sf_tg4rlk0shjNhuc2bH7bYU0AMVF-t6_mHgcrDZ5C6vWNGNjsL5mfjGODfRyfsU5j6--KUcg_KfM9c5v5Ck04VL93WbfS-eiAIoMgGEgPPKWTkY2dM1uLxqgXN2G4-Qjkp6JmN_1Y7YHJuWjI8A",
      directorID: "D014",
      ratingTypeID: "RT002"
    },
    {
      movieID: "M138",
      movieTitle: "The Dark Knight",
      movieApercu: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      movieSynopsis: "Directed by Christopher Nolan, The Dark Knight is a superhero film that follows Batman as he confronts the Joker, a chaotic criminal mastermind. The movie explores themes of morality and chaos, with the late Heath Ledger's portrayal of the Joker receiving critical acclaim. The Dark Knight is known for its intense storytelling and memorable performances.",
      movieReleaseDate: "2008-07-18",
      movieRuntime: 152,
      moviePoster: "https://xl.movieposterdb.com/21_06/2012/1345836/xl_1345836_429edb63.jpg",
      movieBanner: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59662fdd-1ee6-4a9c-8733-3eeb57c22956/daje8hi-18d8ddc5-9c08-477b-a317-953b5a64f5cd.jpg/v1/fill/w_1280,h_427,q_75,strp/the_dark_knight_concept_banner_by_sirbriggsy_daje8hi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg9O8UGNYUarXchUks1H7VKWcW5IaaHk3RhzsflUTKkDXU_ziJJOue__-aKQgUDFHXJrZvBJM8NBuS0u0vb-tkgChQxOde-4VOOFxexG2UjLU6OW5oeqUMJiuj7lcOiSKFByx2rE_rh5ji3Yq_TK5JmUwhwNspqTzgK8v0Xj9C5O5NlYzbcS1gmh_UlVaJllrL7Y7Ll1ylatdaDJJ0EYUvbDTB6W7YOdbEx7pGXUBtW8gn-9sCQKpL_L-sf_tg4rlk0shjNhuc2bH7bYU0AMVF-t6_mHgcrDZ5C6vWNGNjsL5mfjGODfRyfsU5j6--KUcg_KfM9c5v5Ck04VL93WbfS-eiAIoMgGEgPPKWTkY2dM1uLxqgXN2G4-Qjkp6JmN_1Y7YHJuWjI8A",
      directorID: "D001",
      ratingTypeID: "RT002"
    },
    {
      movieID: "M139",
      movieTitle: "Star Wars: Episode IV - A New Hope",
      movieApercu: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      movieSynopsis: "Directed by George Lucas, Star Wars: Episode IV - A New Hope is the first installment in the iconic Star Wars saga. The film introduces audiences to a galaxy far, far away, as Luke Skywalker embarks on a journey to become a Jedi and join the Rebel Alliance against the tyrannical Galactic Empire. A New Hope revolutionized filmmaking and storytelling, giving rise to a beloved franchise.",
      movieReleaseDate: "1977-05-25",
      movieRuntime: 121,
      moviePoster: "https://xl.movieposterdb.com/21_01/1977/76759/xl_76759_43e2730",
      movieBanner: "https://filmartgallery.com/cdn/shop/t/27/assets/star-wars-banner.jpeg?v=80624120874934922901668841836",
      directorID: "D015",
      ratingTypeID: "RT002"
    },
  ])
}

async function seedDataTrailer() {
  const count = await db.trailer.count();

  // Only seed data if necessary.
  if (count > 0)
      return;

  await db.trailer.bulkCreate([
    { trailerID: 'S001', trailerURL: "https://www.youtube.com/watch?v=lgm4IeSUJOw", movieID: "M123"},
    { trailerID: 'S002', trailerURL: "https://www.youtube.com/watch?v=cJW0wjSx0GY", movieID: "M123"},
    { trailerID: 'S003', trailerURL: "https://www.youtube.com/watch?v=YoHD9XEInc0", movieID: "M124"},
    { trailerID: 'S004', trailerURL: "https://www.youtube.com/watch?v=Jvurpf91omw", movieID: "M124"},
    { trailerID: 'S005', trailerURL: "https://www.youtube.com/watch?v=6hB3S9bIaco", movieID: "M125"},
    { trailerID: 'S006', trailerURL: "https://www.youtube.com/watch?v=V75dMMIW2B4", movieID: "M126"},
    { trailerID: 'S007', trailerURL: "https://www.youtube.com/watch?v=xjDjIWPwcPU", movieID: "M127"},
    { trailerID: 'S008', trailerURL: "https://www.youtube.com/watch?v=lc0UehYemQA", movieID: "M128"},
    { trailerID: 'S009', trailerURL: "https://www.youtube.com/watch?v=5PSNL1qE6VY", movieID: "M129"},
    { trailerID: 'S010', trailerURL: "https://www.youtube.com/watch?v=KYz2wyBy3kc", movieID: "M130"},
  ])
}

async function seedDataSession() {
  const count = await db.session.count();

  // Only seed data if necessary.
  if (count > 0)
      return;

  await db.session.bulkCreate([
    { sessionID: 'S001', sessionTime: "2023-11-01 10:00:00", movieID: "M123", locationID: "L001"},
    { sessionID: 'S002', sessionTime: "2023-11-01 14:00:00", movieID: "M123", locationID: "L001"},
    { sessionID: 'S003', sessionTime: "2023-11-01 18:00:00", movieID: "M123", locationID: "L001"},
    { sessionID: 'S004', sessionTime: "2023-11-01 14:30:00", movieID: "M124", locationID: "L001"},
    { sessionID: 'S005', sessionTime: "2023-11-01 19:30:00", movieID: "M124", locationID: "L001"},
    { sessionID: 'S006', sessionTime: "2023-11-01 14:00:00", movieID: "M124", locationID: "L002"},
    { sessionID: 'S007', sessionTime: "2023-11-01 18:00:00", movieID: "M125", locationID: "L002"},
    { sessionID: 'S008', sessionTime: "2023-11-01 09:00:00", movieID: "M125", locationID: "L003"},
    { sessionID: 'S009', sessionTime: "2023-11-01 12:00:00", movieID: "M126", locationID: "L003"},
    { sessionID: 'S010', sessionTime: "2023-11-01 18:00:00", movieID: "M126", locationID: "L003"},
  ])
}

async function seedDataAudienceReview() {
  const count = await db.audience_review.count();

  // Only seed data if necessary.
  if (count > 0)
      return;

  await db.audience_review.bulkCreate([
    { 
      audienceReviewID: 'AR001', 
      audienceReviewComment: "The momentum the film generates due to the chronological cross-cutting becomes relentless, and that runaway feeling is beautifully harmonious with the film's broader interest in Oppenheimer's legacy.", 
      audienceReviewScore: 5, 
      movieID: "M123", 
      userID: "U004"
    },
    { 
      audienceReviewID: 'AR002', 
      audienceReviewComment: "I haven't watched it yet!", 
      audienceReviewScore: 1, 
      movieID: "M123", 
      userID: "U005"
    },
    { 
      audienceReviewID: 'AR003', 
      audienceReviewComment: "Rarely have I left a movie feeling smarter than when I went in, but “Oppenheimer” is just such a film and it elevated my thinking, especially in regards to the science of politics and the politics of science.", 
      audienceReviewScore: 3, 
      movieID: "M123", 
      userID: "U006"
    },
  ])
}


module.exports = db;
