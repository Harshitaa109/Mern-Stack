const questions = [
    {
        question: "When does she expect you to talk to her the most?",
        options: ["During her sleep time", "Only when she wakes up", "After two days of gap"],
        answer: "During her sleep time"
    },
    {
        question: "What is the correct way to balance time with her?",
        options: ["Spend time with friends and balance time with her", "Spend time only with her, forget friends", "Disappear for a week and then text her 'missed you'"],
        answer: "Spend time with friends and balance time with her"
    },
    {
        question: "Whose time is it when she gives you her time?",
        options: ["It's public time, anyone can join", "It’s only her time; it’s exclusive", "Depends on the weather"],
        answer: "It’s only her time; it’s exclusive"
    },
    {
        question: "What can instantly fix her mood?",
        options: ["A random desert date or good food", "Ignoring her till the mood fixes itself", "Sending a 'k' text"],
        answer: "A random desert date or good food"
    },
    {
        question: "What does she expect during cute outings?",
        options: ["Take her out, but no photos", "Click her cute pics, every moment, everywhere", "Just stare at her silently in a room"],
        answer: "Click her cute pics, every moment, everywhere"
    },
    {
        question: "What happens if you isolate her in a room?",
        options: ["She’ll love it forever", "She likes it for a while but regrets it later", "She’ll move in there permanently"],
        answer: "She likes it for a while but regrets it later"
    },
    {
        question: "How should you treat her when you’re together?",
        options: ["Treat her like a boss", "Treat her like a baby but keep a manly vibe", "Ignore her until she calls 5 times"],
        answer: "Treat her like a baby but keep a manly vibe"
    },
    {
        question: "What’s her ideal type of person?",
        options: ["Lazy, random, careless", "Groomed, body-conscious, sincere, and always plans things", "Someone who’s offline forever"],
        answer: "Groomed, body-conscious, sincere, and always plans things"
    },
    {
        question: "What’s the ideal balance between work and love?",
        options: ["Work 24/7; relationship later", "Work hard to buy her everything she wants but also give her time", "No work, only sleep"],
        answer: "Work hard to buy her everything she wants but also give her time"
    },
    {
        question: "What’s the correct way to plan time together?",
        options: ["Surprise her with desert dates, shopping, and cute bike rides", "Wait for her to plan everything", "Cancel plans last minute"],
        answer: "Surprise her with desert dates, shopping, and cute bike rides"
    },
    {
        question: "How often should you click her photos?",
        options: ["Only on anniversaries", "Every day, every moment, until your phone storage dies", "Never"],
        answer: "Every day, every moment, until your phone storage dies"
    },
    {
        question: "What’s the right way to handle her excitement needs?",
        options: ["Random texts once a week", "Keep her constantly excited with plans, surprises, fun chats", "Let boredom do its thing"],
        answer: "Keep her constantly excited with plans, surprises, fun chats"
    },
    {
        question: "What should you NEVER do while being with her?",
        options: ["Let her stay isolated for too long", "Take her out", "Click her pics"],
        answer: "Let her stay isolated for too long"
    },
    {
        question: "What’s one thing she expects even when you’re busy?",
        options: ["No calls, peace mode", "Check on her, text, or call even if it’s for 5 minutes", "Ghost her till work is done"],
        answer: "Check on her, text, or call even if it’s for 5 minutes"
    },
    {
        question: "What is her dream date idea?",
        options: ["Long bike drive + food + cute pics", "Netflix at home, no talking", "Sitting quietly in a corner"],
        answer: "Long bike drive + food + cute pics"
    },
    {
        question: "How should a man handle himself according to her?",
        options: ["Groomed, look good, stay fit, behave sincerely", "Walk around in pajamas all day", "Forget diet, forget looks"],
        answer: "Groomed, look good, stay fit, behave sincerely"
    },
    {
        question: "How should he manage her mood swings?",
        options: ["Ignore and pray", "Take her on cute dates, get good food, and make her laugh", "Run"],
        answer: "Take her on cute dates, get good food, and make her laugh"
    },
    {
        question: "What is the right answer when she says 'I want your time' but also 'go chill with your friends'?",
        options: ["Guess blindly and get confused", "Know exactly when to give her time and when to let her breathe", "Block her for a day"],
        answer: "Know exactly when to give her time and when to let her breathe"
    },
    {
        question: "What happens if he doesn’t make plans?",
        options: ["She’s chill", "Chaos. He better prepare plans always", "Someone else will make plans for her"],
        answer: "Chaos. He better prepare plans always"
    },
    {
        question: "How obsessed should he be with her?",
        options: ["A little", "Fully. Like, 100%. Obsessed. Her pictures everywhere. Her mood = his mood", "Zero. Be cool"],
        answer: "Fully. Like, 100%. Obsessed. Her pictures everywhere. Her mood = his mood"
    },
    {
        question: "When she says 'I don’t want to do it', what should he do?",
        options: ["Respect it and drop it", "Push her sweetly because she secretly wants to do it", "Block her for 24 hours"],
        answer: "Push her sweetly because she secretly wants to do it"
    },
    {
        question: "What does 'No, I don’t feel like going' actually mean?",
        options: ["Cancel the plan", "Convince her, push her a bit, and she’ll get excited", "Go alone"],
        answer: "Convince her, push her a bit, and she’ll get excited"
    },
    {
        question: "When she denies wanting something (like food, outing, photos), what’s the move?",
        options: ["Believe her, cancel everything", "Insist gently; she absolutely wants it but won't admit it", "Tell her 'cool' and leave"],
        answer: "Insist gently; she absolutely wants it but won't admit it"
    },
    {
        question: "When she says 'No, it’s okay. Leave it.' — what is the hidden meaning?",
        options: ["No means no", "NO means 'Yes, push me, make me do it, I’ll love it later.'", "She forgot what she was talking about"],
        answer: "NO means 'Yes, push me, make me do it, I’ll love it later.'"
    },
    {
        question: "What happens when she says 'I don’t want to go on the bike ride'?",
        options: ["Cancel it", "Bring the helmet anyway because she’ll change her mind after 5 mins", "Go on your own"],
        answer: "Bring the helmet anyway because she’ll change her mind after 5 mins"
    }
];


let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultButton = document.getElementById("resultButton");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.innerText = current.question;
    optionsElement.innerHTML = "";

    current.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-button");
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}
const correctMessages = [
    "Omg, you actually listen... husband material alert! 💍",
    "Look at you! Walking green flag 🚩✨",
    "Impressive... you’re a certified simp. 🏅",
    "You = walking encyclopedia of her. 📖❤️",
    "Bro... you are dangerously close to being her favorite person. 😏",
    "Heart unlocked... you nailed it. 🔓❤️",
    "Correct... she’d probably kiss you for this one. 😚",
    "You didn’t just pass... you’re slaying it. 🔥",
    "You’re like her personal diary... you know everything. 📓",
    "Bro, you’re literally winning at boyfriend life. 🎯",
    "Marry him already, girl! 🥹💍",
    "Boyfriend mode: 1000/10. ✅"
];

const wrongMessages = [
    "Wrong... bro, even her shoes know this answer. 👟",
    "Screaming... how do you not know this? 😭",
    "Nope. Sofa is looking real comfy tonight. 🛋️",
    "Incorrect. Guess someone’s losing boyfriend points. 🫠",
    "Oh lord... are you even in this relationship? 🤦‍♀️",
    "This... this is villain behavior. 💀",
    "Broooo... how are you THIS clueless?",
    "Imagine being this wrong in public. Ouch. 😬",
    "FAIL. Like, capital F. 🚫",
    "Even ChatGPT is judging you... and I don’t judge often. 🤖"
];


function getRandomMessage(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function checkAnswer(selected) {
    const current = questions[currentQuestion];

    if (selected === current.answer) {
        alert(getRandomMessage(correctMessages));
        score++;
    } else {
        alert(getRandomMessage(wrongMessages));
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionElement.innerText = "You've completed the quiz!";
        optionsElement.innerHTML = "";
        resultButton.style.display = "block";
    }
}

function showResult() {
    localStorage.setItem("quizScore", score);
    localStorage.setItem("totalQuestions", questions.length);
    window.location.href = "result.html";
}

loadQuestion();
