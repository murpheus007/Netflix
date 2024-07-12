const faq = document.getElementById('faq_section');

const faqArray = [
    {
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. Theres always something new to discover and new TV shows and movies are added every week!"
    },
    {
        question: "How much does Netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,600 to ₦5,000 a month. No extra costs, no contracts."
    },
    {
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        question: "How do I cancel?",
        answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        question: "What can I watch Netflix",
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        question: "Is Netflix good for kids?",
        answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    },
];

function handleToggle(e) {
    const currentScrollY = window.scrollY;

    let clickedItem = e.currentTarget;
    let answer = clickedItem.nextElementSibling; 

    let otherItems = document.querySelectorAll('.answer');

    otherItems.forEach(item => {
        if (item !== answer) {
            item.classList.remove('show');
        }
    })
    answer.classList.toggle("show");
    window.scrollTo({ top: currentScrollY, behavior: 'instant'});
    
    
}

faqArray.forEach((item, index )=> {
    const questionCard = document.createElement('div');
    questionCard.classList.add('faq');
   

    const qa = document.createElement('div');
    qa.classList.add("q_a");

    const question = document.createElement('div');
    question.classList.add("question");
    question.setAttribute("id", index);
    question.innerHTML = `${item.question} <span> <img src="images/plus.svg" alt=""></span>`

    const answer = document.createElement('div');
    answer.classList.add("answer");
    answer.innerText = item.answer;

    qa.appendChild(question);
    qa.appendChild(answer);

    questionCard.appendChild(qa);
    faq.appendChild(questionCard);

    question.addEventListener('click', handleToggle)
})
