const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you’re halfway there. - Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Opportunities don't happen, you create them. - Chris Grosser",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the end, we only regret the chances we didn't take. - Lewis Carroll",
    "The best revenge is massive success. - Frank Sinatra",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get your facts first, then you can distort them as you please. - Mark Twain",
    "The mind is everything. What you think you become. - Buddha",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "The purpose of life is not to be happy. It is to be useful, honorable, and to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Dream big and dare to fail. - Norman Vaughan",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "It is never too late to be what you might have been. - George Eliot",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Your life does not get better by chance, it gets better by change. - Jim Rohn",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "What we think, we become. - Buddha",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the end, we only regret the chances we didn't take. - Lewis Carroll",
    "The best revenge is massive success. - Frank Sinatra",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get your facts first, then you can distort them as you please. - Mark Twain",
    "The mind is everything. What you think you become. - Buddha",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "The purpose of life is not to be happy. It is to be useful, honorable, and to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
];
document.addEventListener("DOMContentLoaded", function() {
    const quoteElement = document.getElementById("quote");
    const generateButton = document.getElementById("generate-quote");

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    generateButton.addEventListener("click", function() {
        quoteElement.textContent = getRandomQuote();
    });

    // Generate an initial quote on page load
    quoteElement.textContent = getRandomQuote();
});