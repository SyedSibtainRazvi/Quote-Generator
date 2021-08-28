var quotes = [
    "The purpose of our lives is to be happy. —Dalai Lama",
    "Life is what happens when you’re busy making other plans. —John Lennon",
    "Get busy living or get busy dying. —Stephen King",
    "You only live once, but if you do it right, once is enough. —Mae West",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up.–Thomas A. Edison",
    "If you want to live a happy life, tie it to a goal, not to people or things.–Albert Einstein",
    "Never let the fear of striking out keep you from playing the game. –Babe Ruth",
    "Money and success don’t change people; they merely amplify what is already there. —Will Smith",
    "Not how long, but how well you have lived is the main thing. —Seneca",
    "If life were predictable it would cease to be life, and be without flavor. –Eleanor Roosevelt",
    "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it. –Henry Ford",
    "In order to write about life first you must live it. –Ernest Hemingway",
    "The big lesson in life, baby, is never be scared of anyone or anything. –Frank Sinatra",
    "Curiosity about life in all of its aspects, I think, is still the secret of great creative people. –Leo Burnett",
    "Life is not a problem to be solved, but a reality to be experienced. –Soren Kierkegaard",
    "The unexamined life is not worth living. —Socrates",
    "Turn your wounds into wisdom. — Oprah Winfrey",
    "Don’t settle for what life gives you; make life better and build something. —Ashton Kutcher",
    "Everything negative – pressure, challenges – is all an opportunity for me to rise. —Kobe Bryant",
    "I like criticism. It makes you strong. —LeBron James",
    "You never really learn much from hearing yourself speak. ―George Clooney"
];

function showQuote() {

    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("output").innerHTML = quotes[random];
}
document.getElementById("btn").addEventListener("click", showQuote);