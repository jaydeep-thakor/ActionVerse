import seriesPoster1 from "../assets/images/posters/series-1.jpg"
import seriesPoster2 from "../assets/images/posters/series-2.jpg"
import seriesPoster3 from "../assets/images/posters/series-3.jpg"
import seriesPoster4 from "../assets/images/posters/series-4.jpg"
import seriesPoster5 from "../assets/images/posters/series-5.jpg"
import seriesPoster6 from "../assets/images/posters/series-6.jpg"
import seriesPoster7 from "../assets/images/posters/series-7.jpg"
import seriesPoster8 from "../assets/images/posters/series-8.jpg"
import seriesPoster9 from "../assets/images/posters/series-9.jpg"
import seriesPoster10 from "../assets/images/posters/series-10.jpg"
import seriesPoster11 from "../assets/images/posters/series-11.jpg"
import seriesPoster12 from "../assets/images/posters/series-12.jpg"
import seriesPoster13 from "../assets/images/posters/series-13.jpg"
import seriesPoster14 from "../assets/images/posters/series-14.jpg"
import seriesPoster15 from "../assets/images/posters/series-15.jpg"
import seriesPoster16 from "../assets/images/posters/series-16.jpg"
import seriesPoster17 from "../assets/images/posters/series-17.jpg"
import seriesPoster18 from "../assets/images/posters/series-18.jpg"

import moviePoster1 from "../assets/images/posters/movie-1.jpg"
import moviePoster2 from "../assets/images/posters/movie-2.jpg"
import moviePoster3 from "../assets/images/posters/movie-3.jpg"
import moviePoster4 from "../assets/images/posters/movie-4.jpg"
import moviePoster5 from "../assets/images/posters/movie-5.jpg"
import moviePoster6 from "../assets/images/posters/movie-6.jpg"
import moviePoster7 from "../assets/images/posters/movie-7.jpg"
import moviePoster8 from "../assets/images/posters/movie-8.jpg"
import moviePoster9 from "../assets/images/posters/movie-9.jpg"
import moviePoster10 from "../assets/images/posters/movie-10.jpg"
import moviePoster11 from "../assets/images/posters/movie-11.jpg"
import moviePoster12 from "../assets/images/posters/movie-12.jpg"
import moviePoster13 from "../assets/images/posters/movie-13.jpg"
import moviePoster14 from "../assets/images/posters/movie-14.jpg"
import moviePoster15 from "../assets/images/posters/movie-15.jpg"
import moviePoster16 from "../assets/images/posters/movie-16.jpg"
import moviePoster17 from "../assets/images/posters/movie-17.jpg"
import moviePoster18 from "../assets/images/posters/movie-18.jpg"

import cast1 from "../assets/images/casts/1.jpg"
import cast2 from "../assets/images/casts/2.jpg"
import cast3 from "../assets/images/casts/3.jpg"
import cast4 from "../assets/images/casts/4.jpg"
import cast5 from "../assets/images/casts/5.jpg"
import cast6 from "../assets/images/casts/6.jpg"
import cast7 from "../assets/images/casts/7.jpg"
import cast8 from "../assets/images/casts/8.jpg"

const dummyCastsData = [
    { name: "Hailee Steinfeld", castName: "Kate Bishop", castImg: cast1 },
    { name: "", castName: "Pizza Dog", castImg: cast2 },
    { name: "Jeremy Renner", castName: "Clint Barton", castImg: cast3 },
    { name: "Florence Pugh", castName: "Yelena Belova", castImg: cast4 },
    { name: "Vera Farmiga", castName: "Eleanor Bishop", castImg: cast5 },
    { name: "Tony Dalton", castName: "Jack Duquesne", castImg: cast6 },
    { name: "Alaqua Cox", castName: "Echo", castImg: cast7 },
    { name: "Fra Fee", castName: "Kazi", castImg: cast8 },
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyShowsData = [
    {
        "_id": "318452",
        "id": 318452,
        "title": "Ironheart",
        "overview": "Riri Williams, a brilliant teenage inventor, creates the most advanced suit of armor since Iron Man. As she finds her place in a post-Tony Stark world, she faces threats that test her genius and heart.",
        "poster_path": seriesPoster1,
        "genres": [
            { "id": 18, "name": "Drama" },
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 10759, "name": "Action & Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-06-24",
        "original_language": "en",
        "tagline": "From the legacy of Iron Man rises a new hero.",
        "vote_average": 0,
        "vote_count": 0,
        "total_episodes": 6,
        "type": "series",
        "trailer_link": ""
    }, {
        "_id": "520498",
        "id": 520498,
        "title": "Hawkeye",
        "overview": "Former Avenger Clint Barton teams up with a young archer, Kate Bishop, to confront enemies from his past as Ronin — all while trying to get home in time for Christmas.",
        "poster_path": seriesPoster2,
        "genres": [
            { "id": 10759, "name": "Action & Adventure" },
            { "id": 18, "name": "Drama" },
            { "id": 80, "name": "Crime" }
        ],
        "casts": dummyCastsData,
        "release_date": "2021-11-24",
        "original_language": "en",
        "tagline": "This holiday season, the best gifts come with a bow.",
        "vote_average": 7.6,
        "vote_count": 95000,
        "total_episodes": 6,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=5VYb3B1ETlk"
    }, {
        "_id": "907134",
        "id": 907134,
        "title": "Daredevil: Born Again",
        "overview": "Matt Murdock returns to Hell's Kitchen as Daredevil, balancing life as a blind lawyer and a masked vigilante. With old enemies rising and new threats emerging, his darkest chapter unfolds.",
        "poster_path": seriesPoster3,
        "genres": [
            { "id": 80, "name": "Crime" },
            { "id": 18, "name": "Drama" },
            { "id": 10759, "name": "Action & Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-03-04",
        "original_language": "en",
        "tagline": "Justice never dies.",
        "vote_average": 0,
        "vote_count": 0,
        "total_episodes": 9,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=7xALolZzhSM"
    },
    {
        "_id": "864210",
        "id": 864210,
        "title": "Eyes of Wakanda",
        "overview": "Follow the heroes and spies of Wakanda as they uncover hidden threats and protect the kingdom from unseen dangers, blending high-tech espionage with royal intrigue.",
        "poster_path": seriesPoster13,
        "genres": [
            { "id": 10759, "name": "Action & Adventure" },
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 18, "name": "Drama" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-08-01",
        "original_language": "en",
        "tagline": "The eyes of Wakanda never miss a threat.",
        "vote_average": 7.8,
        "vote_count": 15000,
        "total_episodes": 6,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=ODHh6oe4MlE"
    },
    {
        "_id": "284761",
        "id": 284761,
        "title": "Ms. Marvel",
        "overview": "Kamala Khan, a Muslim American teenager growing up in Jersey City, discovers she has polymorphic powers. As a huge fan of the Avengers—especially Captain Marvel—Kamala struggles to balance high school life, family expectations, and her newfound identity as a superhero.",
        "poster_path": seriesPoster4,
        "genres": [
            { "id": 10759, "name": "Action & Adventure" },
            { "id": 35, "name": "Comedy" },
            { "id": 18, "name": "Drama" }
        ],
        "casts": dummyCastsData,
        "release_date": "2022-06-08",
        "original_language": "en",
        "tagline": "Not all heroes have to be grown up.",
        "vote_average": 6.2,
        "vote_count": 45000,
        "total_episodes": 6,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=m9EX0f6V11Y"
    }, {
        "_id": "675230",
        "id": 675230,
        "title": "Agatha: All Along",
        "overview": "Agatha Harkness returns after the events of Westview, stripped of her powers and forced to reckon with her past. As she explores dark magic and the mysteries of witchcraft, a new coven may rise—or fall.",
        "poster_path": seriesPoster5,
        "genres": [
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 9648, "name": "Mystery" },
            { "id": 18, "name": "Drama" }
        ],
        "casts": dummyCastsData,
        "release_date": "2024-09-18",
        "original_language": "en",
        "tagline": "Witches. Chaos. Secrets. And it’s been Agatha all along.",
        "vote_average": 0,
        "vote_count": 0,
        "total_episodes": 9,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=R9pXbNz6Vbw"
    }, {
        "_id": "139846",
        "id": 139846,
        "title": "WandaVision",
        "overview": "Living idealized suburban lives, Wanda Maximoff and Vision begin to suspect that everything is not as it seems. As their world unravels, they must confront the truth behind their constructed reality.",
        "poster_path": seriesPoster6,
        "genres": [
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 18, "name": "Drama" },
            { "id": 9648, "name": "Mystery" }
        ],
        "casts": dummyCastsData,
        "release_date": "2021-01-15",
        "original_language": "en",
        "tagline": "A love story, a mystery, and a reality unlike any other.",
        "vote_average": 8.0,
        "vote_count": 120000,
        "total_episodes": 9,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=sj9J2ecsSpo"
    }, {
        "_id": "746193",
        "id": 746193,
        "title": "The Falcon and the Winter Soldier",
        "overview": "Sam Wilson and Bucky Barnes team up on a global mission that tests their abilities—and their patience—in the aftermath of Captain America's legacy.",
        "poster_path": seriesPoster7,
        "genres": [
            { "id": 10759, "name": "Action & Adventure" },
            { "id": 18, "name": "Drama" },
            { "id": 10768, "name": "War & Politics" }
        ],
        "casts": dummyCastsData,
        "release_date": "2021-03-19",
        "original_language": "en",
        "tagline": "Honor the legacy. Fight for the future.",
        "vote_average": 7.2,
        "vote_count": 90000,
        "total_episodes": 6,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=IWBsDaFWyTE"
    }, {
        "_id": "381920",
        "id": 381920,
        "title": "Your Friendly Neighborhood Spider-Man",
        "overview": "An animated retelling of Peter Parker’s early days as Spider-Man, navigating high school, friendship, and his journey into becoming a hero—with a twist on the origin story.",
        "poster_path": seriesPoster8,
        "genres": [
            { "id": 16, "name": "Animation" },
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 10759, "name": "Action & Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-01-29",
        "original_language": "en",
        "tagline": "Every hero has a beginning—even in high school.",
        "vote_average": 0,
        "vote_count": 0,
        "total_episodes": 10,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=N3J2JRQg040"
    }, {
        "_id": "609473",
        "id": 609473,
        "title": "Loki Season 2",
        "overview": "After the multiverse fractures, Loki joins forces with Mobius, Sylvie, and new allies to navigate time loops, branching timelines, and unraveling chaos at the TVA. The fate of reality hangs in the balance.",
        "poster_path": seriesPoster9,
        "genres": [
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 18, "name": "Drama" },
            { "id": 10759, "name": "Action & Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2023-10-05",
        "original_language": "en",
        "tagline": "Time is running out.",
        "vote_average": 8.3,
        "vote_count": 75000,
        "total_episodes": 6,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=dug56u8NN7g"
    }, {
        "_id": "492087",
        "id": 492087,
        "title": "X-Men '97",
        "overview": "The X-Men are back in this continuation of the iconic 1990s animated series, facing new threats and internal conflict as they fight to protect a world that hates and fears them.",
        "poster_path": seriesPoster10,
        "genres": [
            { "id": 16, "name": "Animation" },
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 28, "name": "Action" }
        ],
        "casts": dummyCastsData,
        "release_date": "2024-03-20",
        "original_language": "en",
        "tagline": "The mutant legacy lives on.",
        "vote_average": 8.5,
        "vote_count": 30000,
        "total_episodes": 10,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=pv3Ss8o9gGQ"
    }, {
        "_id": "753810",
        "id": 753810,
        "title": "Guardians of the Galaxy Holiday Special",
        "overview": "The Guardians head to Earth to find the perfect Christmas gift for Peter Quill. What follows is a heartwarming and hilarious adventure filled with festive chaos, unexpected surprises, and galactic cheer.",
        "poster_path": seriesPoster11,
        "genres": [
            { "id": 35, "name": "Comedy" },
            { "id": 878, "name": "Science Fiction" },
            { "id": 10751, "name": "Family" }
        ],
        "casts": dummyCastsData,
        "release_date": "2022-11-25",
        "original_language": "en",
        "tagline": "The galaxy’s most festive misfits are back.",
        "vote_average": 6.9,
        "vote_count": 25000,
        "total_episodes": 1,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=OYhFFQl4fLs"
    }, {
        "_id": "864209",
        "id": 864209,
        "title": "What If...? Season 2",
        "overview": "The Watcher guides us through new and strange alternate realities in the Marvel multiverse, featuring unexpected twists, reimagined heroes, and surprising outcomes to familiar stories.",
        "poster_path": seriesPoster12,
        "genres": [
            { "id": 16, "name": "Animation" },
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 28, "name": "Action" }
        ],
        "casts": dummyCastsData,
        "release_date": "2023-12-22",
        "original_language": "en",
        "tagline": "New worlds. New heroes. Same Watcher.",
        "vote_average": 7.4,
        "vote_count": 20000,
        "total_episodes": 9,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=TiEVqZ2Bc_c"
    },
    {
        "_id": "864212",
        "id": 864212,
        "title": "She-Hulk: Attorney at Law",
        "overview": "Jennifer Walters, a lawyer who inherits her cousin Bruce Banner’s Hulk powers, navigates the challenges of balancing her legal career with her newfound superhero abilities, all while facing unusual cases and personal dilemmas.",
        "poster_path": seriesPoster15,
        "genres": [
            { "id": 35, "name": "Comedy" },
            { "id": 18, "name": "Drama" },
            { "id": 10759, "name": "Action & Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2022-08-17",
        "original_language": "en",
        "tagline": "Strong on the streets. Stronger in the courtroom.",
        "vote_average": 7.9,
        "vote_count": 25000,
        "total_episodes": 9,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=u7JsKhI2An0"
    },
    {
        "_id": "864213",
        "id": 864213,
        "title": "MPower",
        "overview": "MPower is a four-part documentary series that celebrates the women of the Marvel Cinematic Universe, featuring archival footage, animation, and interviews with key actors and creators.",
        "poster_path": seriesPoster16,
        "genres": [
            { "id": 99, "name": "Documentary" }
        ],
        "casts": dummyCastsData,
        "release_date": "2023-03-08",
        "original_language": "en",
        "tagline": "Celebrating the women who bring the Marvel Universe to life.",
        "vote_average": 7.5,
        "vote_count": 15000,
        "total_episodes": 4,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=SBPdq6be_Ss"
    },
    {
        "_id": "864214",
        "id": 864214,
        "title": "Marvel’s Behind the Mask",
        "overview": "A documentary series that explores the history, evolution, and cultural impact of Marvel’s iconic characters and superheroes, featuring interviews with creators, actors, and fans.",
        "poster_path": seriesPoster17,
        "genres": [
            { "id": 99, "name": "Documentary" }
        ],
        "casts": dummyCastsData,
        "release_date": "2023-07-12",
        "original_language": "en",
        "tagline": "Unmasking the stories behind the legends.",
        "vote_average": 7.6,
        "vote_count": 12000,
        "total_episodes": 4,
        "type": "series",
        "trailer_link": "http://youtube.com/watch?v=ZZKzPblr1lc"
    },
    {
        "_id": "864215",
        "id": 864215,
        "title": "Marvel’s 616",
        "overview": "A documentary series that delves into the rich history of the Marvel Universe, exploring the stories behind the comics, characters, and creators who shaped Marvel’s legacy over the decades.",
        "poster_path": seriesPoster18,
        "genres": [
            { "id": 99, "name": "Documentary" }
        ],
        "casts": dummyCastsData,
        "release_date": "2020-11-20",
        "original_language": "en",
        "tagline": "The stories behind the Marvel Universe.",
        "vote_average": 7.8,
        "vote_count": 10000,
        "total_episodes": 8,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=1ODhWjCxydU"
    },{
        "_id": "864211",
        "id": 864211,
        "title": "I Am Groot Season 2",
        "overview": "Baby Groot embarks on new mischievous adventures across the galaxy, encountering strange creatures, hilarious situations, and heartwarming moments along the way.",
        "poster_path": seriesPoster14,
        "genres": [
            { "id": 16, "name": "Animation" },
            { "id": 10751, "name": "Family" },
            { "id": 35, "name": "Comedy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2023-09-06",
        "original_language": "en",
        "tagline": "Big adventures, tiny Groot.",
        "vote_average": 8.2,
        "vote_count": 12000,
        "total_episodes": 10,
        "type": "series",
        "trailer_link": "https://www.youtube.com/watch?v=1k8H2CywVqg"
    }, {
        "_id": "429617",
        "id": 429617,
        "title": "Spider-Man: Far From Home",
        "overview": "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury recruits him for a mission to uncover the mystery of several elemental creature attacks, creating havoc across the continent.",
        "poster_path": moviePoster1,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2019-07-02",
        "original_language": "en",
        "tagline": "Step up. It's your turn.",
        "vote_average": 7.4,
        "vote_count": 150000,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=Nt9L1jCKGnE"
    },
    {
        "_id": "800391",
        "id": 800391,
        "title": "Fantastic Four: First Steps",
        "overview": "When four brilliant young explorers gain extraordinary powers after a cosmic experiment goes wrong, they must learn to harness their new abilities and work together to stop a powerful enemy threatening Earth.",
        "poster_path": moviePoster2,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-15",
        "original_language": "en",
        "tagline": "Every hero has a beginning.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=18QQWa5MEcs"
    },
    {
        "_id": "747375",
        "id": 747375,
        "title": "Thunderbolts",
        "overview": "A team of misfit anti-heroes and reformed villains are brought together by the government for dangerous missions no one else is willing to take on. But as secrets unfold, trust within the group becomes their biggest challenge.",
        "poster_path": moviePoster3,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-07-25",
        "original_language": "en",
        "tagline": "Bad guys. Worse mission.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=-sAOWhvheK8"
    },
    {
        "_id": "529680",
        "id": 529680,
        "title": "Captain America: Brave New World",
        "overview": "Sam Wilson takes up the mantle of Captain America as he faces a new global threat that challenges his leadership, ideals, and the responsibility of carrying the shield. Allies and enemies emerge in a world striving for balance.",
        "poster_path": moviePoster4,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-02-14",
        "original_language": "en",
        "tagline": "A new hero rises for a new world.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=1pHDWnXmK7Y"
    },
    {
        "_id": "726491",
        "id": 726491,
        "title": "Deadpool & Wolverine",
        "overview": "Deadpool’s chaotic world collides with Wolverine’s when an unexpected mission forces the reluctant duo to team up. As timelines unravel and enemies multiply, the two unlikely allies must fight together to survive.",
        "poster_path": moviePoster5,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 35, "name": "Comedy" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2024-07-26",
        "original_language": "en",
        "tagline": "Guess who's back, bub?",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=73_1biulkYk"
    },
    {
        "_id": "835274",
        "id": 835274,
        "title": "The Marvels",
        "overview": "Carol Danvers, Kamala Khan, and Monica Rambeau find their powers entangled, forcing them to unite as The Marvels to confront a universe-spanning threat that could change the fate of worlds.",
        "poster_path": moviePoster6,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2023-11-10",
        "original_language": "en",
        "tagline": "Higher. Further. Faster. Together.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=wS_qbDztgVY"
    },
    {
        "_id": "639182",
        "id": 639182,
        "title": "Ant-Man and the Wasp: Quantumania",
        "overview": "Scott Lang and Hope van Dyne, along with Hank Pym and Janet van Dyne, explore the Quantum Realm, encountering strange new creatures and an adversary who could reshape the future of the multiverse.",
        "poster_path": moviePoster7,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2023-02-17",
        "original_language": "en",
        "tagline": "Witness the beginning of a new dynasty.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=5WfTEZJnv_8"
    },
    {
        "_id": "584927",
        "id": 584927,
        "title": "Thor: Love and Thunder",
        "overview": "Thor embarks on a journey of self-discovery, but his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. With the help of Valkyrie, Korg, and Jane Foster wielding Mjolnir as the Mighty Thor, they set out to stop him.",
        "poster_path": moviePoster8,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 14, "name": "Fantasy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2022-07-08",
        "original_language": "en",
        "tagline": "The one and only Thor.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=Go8nTmfrQd8"
    },
    {
        "_id": "471982",
        "id": 471982,
        "title": "Doctor Strange in the Multiverse of Madness",
        "overview": "Doctor Stephen Strange traverses the mind-bending and dangerous alternate realities of the Multiverse with the help of mystical allies, confronting a powerful new adversary while pushing the limits of his magic.",
        "poster_path": moviePoster9,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 14, "name": "Fantasy" },
            { "id": 27, "name": "Horror" }
        ],
        "casts": dummyCastsData,
        "release_date": "2022-05-06",
        "original_language": "en",
        "tagline": "Enter a new dimension of Strange.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=aWzlQ2N6qqg"
    },
    {
        "_id": "529734",
        "id": 529734,
        "title": "Shang-Chi and the Legend of the Ten Rings",
        "overview": "Martial-arts master Shang-Chi confronts the past he thought he left behind when he is drawn into the mysterious Ten Rings organization, forcing him to face his destiny and unlock his true potential.",
        "poster_path": moviePoster10,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 14, "name": "Fantasy" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2021-09-03",
        "original_language": "en",
        "tagline": "You can't outrun your destiny.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=8YjFbMbfXaQ"
    },
    {
        "_id": "413982",
        "id": 413982,
        "title": "Black Widow",
        "overview": "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force determined to bring her down, she must reunite with her broken family to survive.",
        "poster_path": moviePoster11,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 53, "name": "Thriller" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2021-07-09",
        "original_language": "en",
        "tagline": "Her world. Her secrets. Her legacy.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=RxAtuMu_ph4"
    },
    {
        "_id": "526193",
        "id": 526193,
        "title": "Captain Marvel",
        "overview": "Carol Danvers becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien civilizations. She must harness her newfound powers to protect humanity.",
        "poster_path": moviePoster12,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2019-03-08",
        "original_language": "en",
        "tagline": "Higher. Further. Faster.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=Z1BCujX3pw8"
    },
    {
        "_id": "618473",
        "id": 618473,
        "title": "Ant-Man and the Wasp",
        "overview": "Scott Lang balances being both a superhero and a father while teaming up with Hope van Dyne as the Wasp. Together, they embark on a new mission to uncover secrets from the past while facing a powerful new threat.",
        "poster_path": moviePoster13,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 35, "name": "Comedy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2018-07-06",
        "original_language": "en",
        "tagline": "Suit up for the next chapter.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=8_rTIAOohas"
    },
    {
        "_id": "734912",
        "id": 734912,
        "title": "Thor: Ragnarok",
        "overview": "Thor finds himself imprisoned on the other side of the universe without his hammer and must race against time to prevent the all-powerful Hela from destroying Asgard. He forms an unlikely alliance with Hulk and Valkyrie to save his home.",
        "poster_path": moviePoster14,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 14, "name": "Fantasy" },
            { "id": 35, "name": "Comedy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2017-11-03",
        "original_language": "en",
        "tagline": "No Hammer. No Problem.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=ue80QwXMRHg"
    },
    {
        "_id": "642379",
        "id": 642379,
        "title": "Spider-Man: Homecoming",
        "overview": "Peter Parker navigates high school life while trying to prove himself as a worthy superhero. With the guidance of Tony Stark, he must confront the villainous Vulture and protect New York from his dangerous schemes.",
        "poster_path": moviePoster15,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2017-07-07",
        "original_language": "en",
        "tagline": "The next generation of heroes.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=DiTECkLZ8HM"
    },
    {
        "_id": "751364",
        "id": 751364,
        "title": "Captain America: Civil War",
        "overview": "Political interference in the Avengers' activities causes a rift between Captain America and Iron Man. The team splits into factions, leading to an epic showdown that tests friendships and alliances like never before.",
        "poster_path": moviePoster16,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2016-04-12",
        "original_language": "en",
        "tagline": "Divided We Fall.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=dKrVegVI0Us"
    },
    {
        "_id": "689241",
        "id": 689241,
        "title": "Ant-Man",
        "overview": "Armed with a suit that allows him to shrink in size but increase in strength, Scott Lang must embrace his inner hero and help his mentor, Hank Pym, protect the secrets of the Ant-Man technology from falling into the wrong hands.",
        "poster_path": moviePoster17,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 35, "name": "Comedy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2015-07-17",
        "original_language": "en",
        "tagline": "Heroes come in small packages.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=pWdKf3MneyI"
    },
    {
        "_id": "734865",
        "id": 734865,
        "title": "Captain America: The First Avenger",
        "overview": "During World War II, Steve Rogers transforms from a frail young man into the super-soldier Captain America. He must stop the Red Skull and the nefarious HYDRA organization from using a powerful artifact to conquer the world.",
        "poster_path": moviePoster18,
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 10752, "name": "War" }
        ],
        "casts": dummyCastsData,
        "release_date": "2011-07-22",
        "original_language": "en",
        "tagline": "The world needed a hero. It got one.",
        "vote_average": 0.0,
        "vote_count": 0,
        "type": "movie",
        "trailer_link": "https://www.youtube.com/watch?v=JerVrbLldXw"
    }
]

import thumbnail1 from "./images/thumbnails/thumbnail-1.jpg";
import thumbnail2 from "./images/thumbnails/thumbnail-2.jpg";
import thumbnail3 from "./images/thumbnails/thumbnail-3.jpg";
import thumbnail4 from "./images/thumbnails/thumbnail-4.jpg";

export const dummyTrailers = [
    {
        image: thumbnail1,
        videoUrl: 'https://www.youtube.com/watch?v=wS_qbDztgVY'
    },
    {
        image: thumbnail2,
        videoUrl: 'https://www.youtube.com/watch?v=5VYb3B1ETlk&pp=ygUPaGF3a2V5ZSB0cmFpbGVy'
    },
    {
        image: thumbnail3,
        videoUrl: 'https://www.youtube.com/watch?v=-mjWrrKgwJM'
    },

    {
        image: thumbnail4,
        videoUrl: 'https://www.youtube.com/watch?v=N3J2JRQg040&pp=ygUleW91ciBmcmllbmRseSBuZWlnaGJvcmhvb2Qgc3BpZGVyLW1hbg%3D%3D'
    },
]