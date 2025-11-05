// === DATA ===
const questionFlow = [
    {
        id: 'q1_image',
        text: "Avez-vous déjà vu cette image ?",
        type: 'question',
        special: true,
        next: { yes: 'q1_pray', no: 'q1_pray' }
    },
    {
        id: 'q1_pray',
        text: "Priez-vous ?",
        type: 'question',
        next: { yes: 'q2', no: 'q_believe_god' }
    },
    {
        id: 'q_believe_god',
        text: "Croyez-vous en Dieu ?",
        type: 'question_three',
        next: { yes: 'q_continue', no: 'final_god_believes', doubt: 'q_doubt_verse' }
    },
    {
        id: 'q_doubt_verse',
        text: "Dieu dit :\n\n« Approchez-vous de Dieu, et il s'approchera de vous. »\n— Jacques 4:8\n\nDieu vous attend avec amour. Il comprend vos doutes et désire marcher avec vous.",
        type: 'text',
        special: true,
        nextId: 'q_doubt_continue'
    },
    {
        id: 'q_doubt_continue',
        text: "Voulez-vous continuer ?",
        type: 'question',
        next: { yes: 'q2', no: 'final_god_believes' }
    },
    {
        id: 'q_continue',
        text: "Voulez-vous continuer ?",
        type: 'question',
        next: { yes: 'q2', no: 'final_god_believes' }
    },
    {
        id: 'q2',
        text: "Voici, Jésus frappe à la porte de votre cœur. La poignée est à l'intérieur, vous êtes la seule personne à pouvoir Le laisser entrer.",
        type: 'text'
    },
    {
        id: 'q4',
        text: "Imaginez porter sur vos épaules un sac contenant tous vos péchés. Ce poids, c'est votre dette envers Dieu. C'est ce qui brise la relation avec Lui.",
        type: 'question',
        question: "Selon vous, serait-il lourd ?",
        next: { yes: 'q5', no: 'q4_verse' }
    },
    {
        id: 'q4_verse',
        text: "La Bible dit :\n\n« Car tous ont péché et sont privés de la gloire de Dieu. »\n— Romains 3:23\n\nNous avons tous besoin de la grâce de Dieu.",
        type: 'text',
        special: true,
        nextId: 'q4_continue'
    },
    {
        id: 'q4_continue',
        text: "Voulez-vous continuer ?",
        type: 'question',
        next: { yes: 'q5', no: 'final_god_believes' }
    },
    {
        id: 'q5',
        text: "Si vous deviez un million d'Euros à la banque et que je vous donne un chèque de ce montant et que vous le remettiez à la banque, qu'adviendrait-il de votre dette ?",
        type: 'question_yes_only',
        question: "Votre dette serait effacée ?",
        next: { yes: 'q6' }
    },
    {
        id: 'q6',
        text: "C'est ce que Jésus a fait lorsqu'Il est mort sur la croix, {name}.\n\nIl vous a fait un chèque signé de Son sang - avec votre nom « {name} » écrit dessus.\n\nIl est ressuscité, et aujourd'hui, Il se tient à la porte de votre cœur, désirant que vous l'encaissiez.",
        type: 'text',
        special: true
    },
    {
        id: 'q7',
        text: "Si Jésus était ici en ce moment, Le laisseriez-vous entrer ?",
        type: 'question_yes_only',
        next: { yes: 'q8' }
    },
    {
        id: 'q8',
        text: "Pouvez-vous voir le vent ? Non, mais vous pouvez le sentir, n'est-ce pas ? Comme le vent, Jésus est ici en ce moment.",
        type: 'question_yes_only',
        question: "Puis-je prier pour que vous sentiez Sa présence ?",
        next: { yes: 'prayer' }
    },
    {
        id: 'prayer',
        text: "Jésus,\n\nJe te prie pour {name} en cet instant.\n\nRévèle-toi à {name}, fais-lui ressentir ta présence.\nQue ton amour infini touche son cœur profondément.\n\nJésus, je te prie, fais entendre à {name} que tu frappes à la porte de son cœur.\n\nRemplis {name} de ta paix,\net de ta lumière qui dissipe toutes ténèbres.\n\nSeigneur Jésus, bénis {name} abondamment.\n\nAu nom de Jésus,\nAmen.",
        type: 'text',
        special: true,
        nextId: 'q9_felt'
    },
    {
        id: 'q9_felt',
        text: "Avez-vous ressenti la présence de Dieu ?",
        type: 'question',
        next: { yes: 'q10_follow', no: 'q11_faith' }
    },
    {
        id: 'q10_follow',
        text: "En ce moment, vous êtes sur un chemin de vie sans Jésus. Vous devez vous détourner de votre péché, changer de direction et Le suivre.",
        type: 'question',
        question: "Voulez-vous Le suivre ?",
        next: { yes: 'final_prayer', no: 'final_reflection' }
    },
    {
        id: 'q11_faith',
        text: "Par la foi, croyez-vous que Jésus est ici en ce moment ?",
        type: 'question',
        next: { yes: 'final_prayer', no: 'final_reflection' }
    },
    {
        id: 'final_prayer',
        text: "Jésus, pardonne-moi mes péchés. J'ouvre la porte de mon cœur. Je te fais Seigneur de ma vie. Remplis-moi de ton Esprit.\n\nAmen.",
        type: 'final',
        special: true
    },
    {
        id: 'final_reflection',
        text: "Merci d'avoir pris le temps de réfléchir à ces questions. La porte reste toujours ouverte.",
        type: 'final'
    },
    {
        id: 'final_god_believes',
        text: "Dieu vous aime d'un amour infini.\n\n« Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse pas, mais qu'il ait la vie éternelle. »\n— Jean 3:16\n\n« J'ai mis devant toi la vie et la mort, la bénédiction et la malédiction. Choisis la vie, afin que tu vives, toi et ta postérité. »\n— Deutéronome 30:19\n\nLa porte reste toujours ouverte.\nDieu vous attend, les bras ouverts.",
        type: 'final',
        special: true
    }
];

// === STATE ===
let userName = '';
let currentQuestionId = 'q1';
let answers = {};
let autoAdvanceTimeout = null;
let questionHistory = []; // Track navigation history
let currentQuestionAnswered = false; // Track if current question was answered

// === DOM ELEMENTS ===
const homeScreen = document.getElementById('homeScreen');
const nameScreen = document.getElementById('nameScreen');
const questionsScreen = document.getElementById('questionsScreen');
const finalScreen = document.getElementById('finalScreen');
const startBtn = document.getElementById('startBtn');
const nameForm = document.getElementById('nameForm');
const userNameInput = document.getElementById('userName');
const themeToggle = document.querySelector('.theme-toggle');
const cardsContainer = document.getElementById('cardsContainer');
const progressFill = document.getElementById('progressFill');
const progressCounter = document.getElementById('progressCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const navButtons = document.getElementById('navButtons');

// === INITIALIZATION ===
function init() {
    loadTheme();
    setupEventListeners();
}

// === THEME MANAGEMENT ===
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    icon.textContent = theme === 'light' ? '🌙' : '☀️';
}

// === NAME HANDLING ===
function handleNameSubmit(e) {
    e.preventDefault();
    userName = userNameInput.value.trim();
    if (userName) {
        localStorage.setItem('userName', userName);
        showQuestionnaire();
    }
}

// === QUESTION FLOW ===
function getQuestionById(id) {
    return questionFlow.find(q => q.id === id);
}

function showQuestionnaire() {
    showScreen(questionsScreen);
    currentQuestionId = 'q1_image';
    questionHistory = ['q1_image'];
    displayQuestion(currentQuestionId);
}

function displayQuestion(questionId) {
    const question = getQuestionById(questionId);
    if (!question) return;

    // Check if question was already answered
    if (question.type === 'question' || question.type === 'question_three' || question.type === 'question_yes_only') {
        currentQuestionAnswered = answers[questionId] !== undefined;
    } else {
        currentQuestionAnswered = true; // Text questions don't need answers
    }

    // Clear previous content
    cardsContainer.innerHTML = '';
    clearTimeout(autoAdvanceTimeout);

    // Create card
    const card = document.createElement('div');
    card.className = 'question-card active';
    if (question.special) {
        card.classList.add('special-card');
    }

    // Add question text - Replace all occurrences of {name}
    let displayText = question.text.replaceAll('{name}', userName);

    const questionText = document.createElement('h2');
    questionText.className = 'question-text';
    questionText.style.whiteSpace = 'pre-line';
    questionText.textContent = displayText;

    // Add class for long text (more than 200 characters)
    if (displayText.length > 200) {
        card.classList.add('has-long-text');
    }

    card.appendChild(questionText);

    // Add additional question if exists
    if (question.question) {
        const subQuestion = document.createElement('p');
        subQuestion.className = 'question-text';
        subQuestion.style.fontSize = '1.5rem';
        subQuestion.style.marginTop = '2rem';
        subQuestion.textContent = question.question;
        card.appendChild(subQuestion);
    }

    // Add answer buttons inside card for question types
    if (question.type === 'question' || question.type === 'question_three' || question.type === 'question_yes_only') {
        const answerBtnsContainer = document.createElement('div');
        answerBtnsContainer.className = 'answer-buttons';
        answerBtnsContainer.style.display = 'flex';

        const yesBtn = document.createElement('button');
        yesBtn.className = 'btn-answer btn-yes';
        yesBtn.textContent = 'Oui';
        yesBtn.setAttribute('type', 'button');
        yesBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            handleAnswer('yes');
        });

        answerBtnsContainer.appendChild(yesBtn);

        // Add doubt button for question_three type
        if (question.type === 'question_three') {
            const doubtBtn = document.createElement('button');
            doubtBtn.className = 'btn-answer btn-doubt';
            doubtBtn.textContent = "J'ai un doute";
            doubtBtn.setAttribute('type', 'button');
            doubtBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                handleAnswer('doubt');
            });
            answerBtnsContainer.appendChild(doubtBtn);
        }

        // Add No button only if not question_yes_only
        if (question.type !== 'question_yes_only') {
            const noBtn = document.createElement('button');
            noBtn.className = 'btn-answer btn-no';
            noBtn.textContent = 'Non';
            noBtn.setAttribute('type', 'button');
            noBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                handleAnswer('no');
            });
            answerBtnsContainer.appendChild(noBtn);
        }

        card.appendChild(answerBtnsContainer);
    }

    cardsContainer.appendChild(card);

    // Update progress
    updateProgress();

    // Show/hide navigation buttons based on question type
    if (question.type === 'final') {
        navButtons.style.display = 'none';
        // Show final screen immediately
        showFinalScreen();
    } else {
        navButtons.style.display = 'flex';
    }

    // Update navigation buttons state
    updateNavigationButtons();
}

function advanceToNext(currentId) {
    const question = getQuestionById(currentId);

    // Determine next question
    let nextId = null;

    // Check if there's a custom nextId
    if (question.nextId) {
        nextId = question.nextId;
    } else if (question.type === 'text') {
        // Find next question in sequence for text types
        const currentIndex = questionFlow.findIndex(q => q.id === currentId);
        if (currentIndex < questionFlow.length - 1) {
            nextId = questionFlow[currentIndex + 1].id;
        }
    }

    if (nextId) {
        navigateToQuestion(nextId);
    }
}

function navigateToQuestion(questionId) {
    // Add to history if not already the last item
    if (questionHistory[questionHistory.length - 1] !== questionId) {
        questionHistory.push(questionId);
    }
    currentQuestionId = questionId;
    displayQuestion(questionId);
}

function goToPrevQuestion() {
    if (questionHistory.length > 1) {
        // Remove current question
        questionHistory.pop();
        // Get previous question
        const prevId = questionHistory[questionHistory.length - 1];
        currentQuestionId = prevId;
        displayQuestion(prevId);
    }
}

function goToNextQuestion() {
    const question = getQuestionById(currentQuestionId);

    if (question.type === 'text') {
        // For text questions, advance automatically
        advanceToNext(currentQuestionId);
    } else if (question.type === 'question') {
        // For questions, we can't auto-advance without an answer
        // Just try to go to the first possible next
        if (question.next && question.next.yes) {
            navigateToQuestion(question.next.yes);
        }
    }
}

function handleAnswer(answer) {
    const question = getQuestionById(currentQuestionId);
    if (!question || !question.next) return;

    // Mark question as answered
    currentQuestionAnswered = true;
    updateNavigationButtons();

    // Save answer
    answers[currentQuestionId] = {
        answer: answer,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('answers', JSON.stringify(answers));

    // Visual feedback on the clicked button
    const activeCard = document.querySelector('.question-card.active');
    if (activeCard) {
        const buttons = activeCard.querySelectorAll('.btn-answer');
        buttons.forEach(btn => {
            btn.style.opacity = '0.5';
        });

        const clickedBtn = Array.from(buttons).find(btn =>
            btn.textContent.toLowerCase() === (answer === 'yes' ? 'oui' : 'non')
        );

        if (clickedBtn) {
            clickedBtn.style.opacity = '1';
            clickedBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                clickedBtn.style.transform = '';
            }, 200);
        }
    }

    // Navigate to next question based on answer
    const nextId = question.next[answer];
    if (nextId) {
        setTimeout(() => {
            navigateToQuestion(nextId);
        }, 400);
    }
}

// === PROGRESS ===
function updateProgress() {
    const currentIndex = questionFlow.findIndex(q => q.id === currentQuestionId);
    const progress = ((currentIndex + 1) / questionFlow.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressCounter.textContent = `Étape ${currentIndex + 1} / ${questionFlow.length}`;
}

function updateNavigationButtons() {
    // Disable prev button if we're at the start of history
    prevBtn.disabled = questionHistory.length <= 1;

    // Disable next button based on conditions
    const question = getQuestionById(currentQuestionId);

    if (question && question.type === 'final') {
        nextBtn.disabled = true; // Final screen
    } else if (question && (question.type === 'question' || question.type === 'question_three' || question.type === 'question_yes_only') && !currentQuestionAnswered) {
        nextBtn.disabled = true; // Question not answered yet
    } else {
        nextBtn.disabled = false; // Can navigate
    }
}

// === SCREEN TRANSITIONS ===
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.setAttribute('aria-hidden', 'true');
    });
    screen.classList.add('active');
    screen.setAttribute('aria-hidden', 'false');
}

function showFinalScreen() {
    // Get the final question to display its message
    const finalQuestion = getQuestionById(currentQuestionId);

    // Clear and create final content
    finalScreen.innerHTML = '';

    const finalContent = document.createElement('div');
    finalContent.className = 'final-content';

    // Add special background if needed
    if (finalQuestion && finalQuestion.special) {
        finalContent.style.backgroundImage = "url('assets/Sticker-2-700x700.webp')";
        finalContent.style.backgroundSize = 'contain';
        finalContent.style.backgroundPosition = 'center';
        finalContent.style.backgroundRepeat = 'no-repeat';
        finalContent.style.position = 'relative';

        // Add overlay for better text readability
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0, 0, 0, 0.6)';
        overlay.style.borderRadius = '20px';
        finalContent.appendChild(overlay);
    }

    const contentWrapper = document.createElement('div');
    contentWrapper.style.position = 'relative';
    contentWrapper.style.zIndex = '1';

    const finalMessage = document.createElement('p');
    finalMessage.className = 'final-message';
    finalMessage.style.color = finalQuestion && finalQuestion.special ? 'white' : 'var(--text-primary)';
    finalMessage.style.fontSize = 'clamp(1.1rem, 2.5vw, 1.4rem)';
    finalMessage.style.fontWeight = '400';
    // Replace {name} with actual user name
    const finalText = finalQuestion ? finalQuestion.text.replaceAll('{name}', userName) : "Merci d'avoir participé.";
    finalMessage.textContent = finalText;

    contentWrapper.appendChild(finalMessage);

    // Add restart button
    const restartButton = document.createElement('button');
    restartButton.className = 'btn-primary';
    restartButton.textContent = 'Recommencer';
    restartButton.style.marginTop = '2rem';
    restartButton.addEventListener('click', restartQuestionnaire);

    contentWrapper.appendChild(restartButton);
    finalContent.appendChild(contentWrapper);
    finalScreen.appendChild(finalContent);

    showScreen(finalScreen);
}

function restartQuestionnaire() {
    userName = '';
    userNameInput.value = '';
    currentQuestionId = 'q1_image';
    questionHistory = [];
    answers = {};
    localStorage.removeItem('answers');
    localStorage.removeItem('userName');
    clearTimeout(autoAdvanceTimeout);
    showScreen(homeScreen);
}

// === KEYBOARD NAVIGATION ===
function handleKeyboard(e) {
    if (questionsScreen.classList.contains('active')) {
        const question = getQuestionById(currentQuestionId);

        // Navigation arrows work on all questions
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                if (!prevBtn.disabled) {
                    goToPrevQuestion();
                }
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (!nextBtn.disabled) {
                    goToNextQuestion();
                }
                break;
        }

        // Answer shortcuts only work on question type
        if (question && (question.type === 'question' || question.type === 'question_three' || question.type === 'question_yes_only')) {
            switch(e.key) {
                case '1':
                case 'o':
                case 'O':
                    e.preventDefault();
                    handleAnswer('yes');
                    break;
                case '2':
                case 'n':
                case 'N':
                    if (question.type !== 'question_yes_only') {
                        e.preventDefault();
                        handleAnswer('no');
                    }
                    break;
                case '3':
                case 'd':
                case 'D':
                    if (question.type === 'question_three') {
                        e.preventDefault();
                        handleAnswer('doubt');
                    }
                    break;
                case 'Enter':
                    e.preventDefault();
                    handleAnswer('yes');
                    break;
            }
        }
    }
}

// === EVENT LISTENERS ===
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Screen navigation
    startBtn.addEventListener('click', () => showScreen(nameScreen));
    nameForm.addEventListener('submit', handleNameSubmit);

    // Question navigation buttons
    prevBtn.addEventListener('click', goToPrevQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
}

// === ACCESSIBILITY ===
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
`;
document.head.appendChild(style);

// === START APPLICATION ===
document.addEventListener('DOMContentLoaded', init);

// === PERFORMANCE OPTIMIZATION ===
// Lazy load video
if ('IntersectionObserver' in window) {
    const video = document.querySelector('video');
    if (video) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(() => console.log('Video autoplay may be blocked'));
                    observer.unobserve(video);
                }
            });
        });
        observer.observe(video);
    }
}

// Preload special card image
const specialImage = new Image();
specialImage.src = 'assets/Sticker-2-700x700.webp';
