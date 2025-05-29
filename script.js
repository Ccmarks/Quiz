// Quiz data
const questions = [
    {
        question: "What's your experience level with firearms?",
        answers: [
            { text: "Complete beginner - I've never owned or shot a firearm", score: { ultraCompactPistol: 2, ultraLightRevolver: 2, compactReliablePistol: 0, balancedRevolver: 0, premiumCompactPistol: 0, powerfulRevolver: 0, highCapacityPistol: 0, modernFeatureRevolver: 0 } },
            { text: "Novice - I've shot firearms a few times but don't own one", score: { ultraCompactPistol: 1, ultraLightRevolver: 1, compactReliablePistol: 1, balancedRevolver: 2, premiumCompactPistol: 0, powerfulRevolver: 0, highCapacityPistol: 0, modernFeatureRevolver: 0 } },
            { text: "Intermediate - I own firearms and shoot occasionally", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 2, balancedRevolver: 1, premiumCompactPistol: 1, powerfulRevolver: 0, highCapacityPistol: 1, modernFeatureRevolver: 1 } },
            { text: "Experienced - I own multiple firearms and shoot regularly", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 0, balancedRevolver: 0, premiumCompactPistol: 2, powerfulRevolver: 2, highCapacityPistol: 2, modernFeatureRevolver: 1 } }
        ]
    },
    {
        question: "What's your primary reason for carrying concealed?",
        answers: [
            { text: "Everyday personal protection", score: { ultraCompactPistol: 2, ultraLightRevolver: 1, compactReliablePistol: 2, balancedRevolver: 1, premiumCompactPistol: 1, powerfulRevolver: 0, highCapacityPistol: 1, modernFeatureRevolver: 1 } },
            { text: "Professional requirement (security, law enforcement, etc.)", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 1, balancedRevolver: 0, premiumCompactPistol: 2, powerfulRevolver: 1, highCapacityPistol: 3, modernFeatureRevolver: 1 } },
            { text: "Occasional carry in specific situations", score: { ultraCompactPistol: 1, ultraLightRevolver: 2, compactReliablePistol: 1, balancedRevolver: 1, premiumCompactPistol: 0, powerfulRevolver: 0, highCapacityPistol: 0, modernFeatureRevolver: 1 } },
            { text: "Home defense with occasional carry", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 1, balancedRevolver: 1, premiumCompactPistol: 1, powerfulRevolver: 2, highCapacityPistol: 1, modernFeatureRevolver: 2 } }
        ]
    },
    {
        question: "How important is concealability to you?",
        answers: [
            { text: "Extremely important - I need deep concealment that's invisible", score: { ultraCompactPistol: 3, ultraLightRevolver: 3, compactReliablePistol: 0, balancedRevolver: 0, premiumCompactPistol: 0, powerfulRevolver: 0, highCapacityPistol: 0, modernFeatureRevolver: 0 } },
            { text: "Very important - I want it to be discreet but comfortable", score: { ultraCompactPistol: 2, ultraLightRevolver: 2, compactReliablePistol: 2, balancedRevolver: 1, premiumCompactPistol: 1, powerfulRevolver: 0, highCapacityPistol: 0, modernFeatureRevolver: 1 } },
            { text: "Moderately important - I'm willing to dress around a slightly larger firearm", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 2, balancedRevolver: 2, premiumCompactPistol: 2, powerfulRevolver: 1, highCapacityPistol: 1, modernFeatureRevolver: 2 } },
            { text: "Less important - I prioritize other features over maximum concealment", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 1, balancedRevolver: 1, premiumCompactPistol: 2, powerfulRevolver: 2, highCapacityPistol: 3, modernFeatureRevolver: 2 } }
        ]
    },
    {
        question: "What's your comfort level with firearm complexity?",
        answers: [
            { text: "I want the simplest, most straightforward operation possible", score: { ultraCompactPistol: 1, ultraLightRevolver: 3, compactReliablePistol: 1, balancedRevolver: 3, premiumCompactPistol: 0, powerfulRevolver: 2, highCapacityPistol: 0, modernFeatureRevolver: 1 } },
            { text: "I prefer simplicity but can handle some features", score: { ultraCompactPistol: 2, ultraLightRevolver: 2, compactReliablePistol: 2, balancedRevolver: 2, premiumCompactPistol: 1, powerfulRevolver: 1, highCapacityPistol: 1, modernFeatureRevolver: 2 } },
            { text: "I'm comfortable with moderate complexity and features", score: { ultraCompactPistol: 1, ultraLightRevolver: 0, compactReliablePistol: 2, balancedRevolver: 1, premiumCompactPistol: 2, powerfulRevolver: 1, highCapacityPistol: 2, modernFeatureRevolver: 2 } },
            { text: "I enjoy advanced features and don't mind complexity", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 1, balancedRevolver: 0, premiumCompactPistol: 3, powerfulRevolver: 1, highCapacityPistol: 2, modernFeatureRevolver: 3 } }
        ]
    },
    {
        question: "How do you feel about recoil?",
        answers: [
            { text: "I'm very sensitive to recoil and want minimal kick", score: { ultraCompactPistol: 2, ultraLightRevolver: 3, compactReliablePistol: 1, balancedRevolver: 0, premiumCompactPistol: 0, powerfulRevolver: 0, highCapacityPistol: 0, modernFeatureRevolver: 0 } },
            { text: "I prefer manageable recoil but can handle moderate kick", score: { ultraCompactPistol: 1, ultraLightRevolver: 1, compactReliablePistol: 2, balancedRevolver: 2, premiumCompactPistol: 2, powerfulRevolver: 0, highCapacityPistol: 1, modernFeatureRevolver: 1 } },
            { text: "Recoil doesn't bother me much", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 1, balancedRevolver: 1, premiumCompactPistol: 2, powerfulRevolver: 2, highCapacityPistol: 2, modernFeatureRevolver: 2 } },
            { text: "I can handle significant recoil with proper technique", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 0, balancedRevolver: 0, premiumCompactPistol: 1, powerfulRevolver: 3, highCapacityPistol: 1, modernFeatureRevolver: 1 } }
        ]
    },
    {
        question: "What's your preferred carrying method?",
        answers: [
            { text: "Inside the waistband (IWB)", score: { ultraCompactPistol: 1, ultraLightRevolver: 1, compactReliablePistol: 2, balancedRevolver: 1, premiumCompactPistol: 2, powerfulRevolver: 1, highCapacityPistol: 1, modernFeatureRevolver: 1 } },
            { text: "Outside the waistband (OWB)", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 1, balancedRevolver: 1, premiumCompactPistol: 2, powerfulRevolver: 2, highCapacityPistol: 2, modernFeatureRevolver: 2 } },
            { text: "Pocket carry", score: { ultraCompactPistol: 3, ultraLightRevolver: 3, compactReliablePistol: 0, balancedRevolver: 1, premiumCompactPistol: 0, powerfulRevolver: 0, highCapacityPistol: 0, modernFeatureRevolver: 0 } },
            { text: "Ankle, shoulder, or other specialized carry", score: { ultraCompactPistol: 2, ultraLightRevolver: 2, compactReliablePistol: 0, balancedRevolver: 1, premiumCompactPistol: 0, powerfulRevolver: 0, highCapacityPistol: 0, modernFeatureRevolver: 1 } }
        ]
    },
    {
        question: "How important is ammunition capacity to you?",
        answers: [
            { text: "Not very - I'm comfortable with 5-6 rounds", score: { ultraCompactPistol: 1, ultraLightRevolver: 3, compactReliablePistol: 0, balancedRevolver: 3, premiumCompactPistol: 0, powerfulRevolver: 2, highCapacityPistol: 0, modernFeatureRevolver: 2 } },
            { text: "Somewhat - I'd prefer 7-10 rounds", score: { ultraCompactPistol: 2, ultraLightRevolver: 0, compactReliablePistol: 2, balancedRevolver: 1, premiumCompactPistol: 1, powerfulRevolver: 0, highCapacityPistol: 0, modernFeatureRevolver: 1 } },
            { text: "Important - I want at least 10-12 rounds", score: { ultraCompactPistol: 1, ultraLightRevolver: 0, compactReliablePistol: 2, balancedRevolver: 0, premiumCompactPistol: 2, powerfulRevolver: 0, highCapacityPistol: 2, modernFeatureRevolver: 0 } },
            { text: "Very important - I want maximum capacity possible", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 1, balancedRevolver: 0, premiumCompactPistol: 1, powerfulRevolver: 0, highCapacityPistol: 3, modernFeatureRevolver: 0 } }
        ]
    },
    {
        question: "What's your budget range for a concealed carry firearm?",
        answers: [
            { text: "Budget-friendly ($300-$500)", score: { ultraCompactPistol: 2, ultraLightRevolver: 1, compactReliablePistol: 1, balancedRevolver: 1, premiumCompactPistol: 0, powerfulRevolver: 0, highCapacityPistol: 1, modernFeatureRevolver: 1 } },
            { text: "Mid-range ($500-$800)", score: { ultraCompactPistol: 1, ultraLightRevolver: 2, compactReliablePistol: 2, balancedRevolver: 2, premiumCompactPistol: 0, powerfulRevolver: 1, highCapacityPistol: 1, modernFeatureRevolver: 1 } },
            { text: "Premium ($800-$1200)", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 1, balancedRevolver: 1, premiumCompactPistol: 2, powerfulRevolver: 2, highCapacityPistol: 1, modernFeatureRevolver: 2 } },
            { text: "High-end ($1200+)", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 0, balancedRevolver: 0, premiumCompactPistol: 3, powerfulRevolver: 1, highCapacityPistol: 2, modernFeatureRevolver: 1 } }
        ]
    },
    {
        question: "How important are aftermarket modifications and accessories?",
        answers: [
            { text: "Not important - I want something that works well out of the box", score: { ultraCompactPistol: 1, ultraLightRevolver: 2, compactReliablePistol: 1, balancedRevolver: 2, premiumCompactPistol: 0, powerfulRevolver: 1, highCapacityPistol: 0, modernFeatureRevolver: 1 } },
            { text: "Somewhat important - I might add basic accessories like better sights", score: { ultraCompactPistol: 1, ultraLightRevolver: 1, compactReliablePistol: 2, balancedRevolver: 1, premiumCompactPistol: 1, powerfulRevolver: 1, highCapacityPistol: 1, modernFeatureRevolver: 2 } },
            { text: "Important - I plan to customize with several modifications", score: { ultraCompactPistol: 1, ultraLightRevolver: 0, compactReliablePistol: 1, balancedRevolver: 0, premiumCompactPistol: 2, powerfulRevolver: 1, highCapacityPistol: 2, modernFeatureRevolver: 1 } },
            { text: "Very important - I want a platform with extensive customization options", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 1, balancedRevolver: 0, premiumCompactPistol: 3, powerfulRevolver: 0, highCapacityPistol: 2, modernFeatureRevolver: 1 } }
        ]
    },
    {
        question: "What caliber are you most comfortable with?",
        answers: [
            { text: "Smaller calibers (.22LR, .32, .380 ACP)", score: { ultraCompactPistol: 3, ultraLightRevolver: 2, compactReliablePistol: 1, balancedRevolver: 1, premiumCompactPistol: 0, powerfulRevolver: 0, highCapacityPistol: 0, modernFeatureRevolver: 0 } },
            { text: "9mm", score: { ultraCompactPistol: 1, ultraLightRevolver: 0, compactReliablePistol: 3, balancedRevolver: 0, premiumCompactPistol: 2, powerfulRevolver: 0, highCapacityPistol: 3, modernFeatureRevolver: 0 } },
            { text: ".38 Special/.357 Magnum", score: { ultraCompactPistol: 0, ultraLightRevolver: 1, compactReliablePistol: 0, balancedRevolver: 2, premiumCompactPistol: 0, powerfulRevolver: 3, highCapacityPistol: 0, modernFeatureRevolver: 3 } },
            { text: ".40 S&W, .45 ACP, or larger", score: { ultraCompactPistol: 0, ultraLightRevolver: 0, compactReliablePistol: 1, balancedRevolver: 0, premiumCompactPistol: 2, powerfulRevolver: 1, highCapacityPistol: 1, modernFeatureRevolver: 1 } }
        ]
    }
];

// Firearm categories and recommendations
const firearmCategories = {
    ultraCompactPistol: {
        title: "Ultra-Compact Pistol",
        description: "These pistols prioritize deep concealment and ease of carry, making them ideal for situations where discretion is paramount.",
        examples: ["KelTec P15", "SIG P365"],
        image: "https://gearfireimages.s3.amazonaws.com/imagedb/image4671408-1abe9240af14c74d0897bd8ea6daa8d6.jpg",
        purchaseLinks: {
            "SIG P365": "https://shop.optimalzerofirearms.com/handguns/semi-automatic-handguns/p365-9mm-nitron-101-sfty-masssi3659bxr3pmsma"
        },
        explanation: "Ultra-compact pistols offer maximum concealability while still providing adequate defensive capability. They're ideal for those who prioritize ease of carry and deep concealment."
    },
    ultraLightRevolver: {
        title: "Ultra-Lightweight Revolver",
        description: "These revolvers offer simplicity of operation with minimal weight, perfect for those who value reliability and ease of use.",
        examples: ["Ruger LCR", "Smith & Wesson 43C"],
        image: "placeholder_revolver.jpg",
        purchaseLinks: {
            "Ruger LCR": "#",
            "Smith & Wesson 43C": "#"
        },
        explanation: "Ultra-lightweight revolvers combine simplicity with deep concealment capabilities. Their straightforward operation makes them excellent choices for beginners or those who prefer mechanical simplicity."
    },
    compactReliablePistol: {
        title: "Compact Reliable Pistol",
        description: "These pistols balance size, capacity, and reliability, making them versatile options for everyday carry.",
        examples: ["Glock 49 MOS", "Springfield Armory Echelon"],
        image: "placeholder_compact_pistol.jpg",
        purchaseLinks: {
            "Glock 49 MOS": "#",
            "Springfield Armory Echelon": "#"
        },
        explanation: "Compact reliable pistols offer an excellent balance of concealability, capacity, and shootability. They're versatile enough for most carry situations while providing adequate firepower."
    },
    balancedRevolver: {
        title: "Balanced Carry Revolver",
        description: "These revolvers offer a good balance of size, weight, and capacity, making them versatile for various carry situations.",
        examples: ["Smith & Wesson 432UC", "Taurus 856 Defender"],
        image: "placeholder_balanced_revolver.jpg",
        purchaseLinks: {
            "Smith & Wesson 432UC": "#",
            "Taurus 856 Defender": "#"
        },
        explanation: "Balanced carry revolvers provide a good mix of concealability and shootability. They're reliable, simple to operate, and offer adequate capacity for self-defense scenarios."
    },
    premiumCompactPistol: {
        title: "Premium Compact Pistol",
        description: "These high-end pistols offer advanced features, superior ergonomics, and exceptional build quality for discerning carriers.",
        examples: ["Shadow Systems MR920 Elite", "Walther PDP F-Series"],
        image: "placeholder_premium_pistol.jpg",
        purchaseLinks: {
            "Shadow Systems MR920 Elite": "#",
            "Walther PDP F-Series": "#"
        },
        explanation: "Premium compact pistols feature enhanced ergonomics, trigger systems, and overall quality. They're ideal for experienced shooters who appreciate refined performance and are willing to invest in superior craftsmanship."
    },
    powerfulRevolver: {
        title: "Powerful Compact Revolver",
        description: "These revolvers pack significant stopping power in a relatively compact package, ideal for those who prioritize terminal performance.",
        examples: ["Smith & Wesson 640 Pro", "Ruger SP101"],
        image: "placeholder_powerful_revolver.jpg",
        purchaseLinks: {
            "Smith & Wesson 640 Pro": "#",
            "Ruger SP101": "#"
        },
        explanation: "Powerful compact revolvers deliver substantial stopping power in a carry-friendly package. They're well-suited for experienced shooters who can manage increased recoil and value terminal ballistic performance."
    },
    highCapacityPistol: {
        title: "High-Capacity Carry Pistol",
        description: "These pistols maximize ammunition capacity while remaining concealable, offering extended engagement capability.",
        examples: ["Staccato HD P4", "Taurus GX2"],
        image: "placeholder_high_capacity.jpg",
        purchaseLinks: {
            "Staccato HD P4": "#",
            "Taurus GX2": "#"
        },
        explanation: "High-capacity carry pistols provide maximum ammunition without excessive bulk. They're ideal for those who prioritize having additional rounds available without reloading."
    },
    modernFeatureRevolver: {
        title: "Modern Feature Revolver",
        description: "These revolvers combine traditional reliability with modern enhancements like optics compatibility and improved ergonomics.",
        examples: ["Taurus 856 Defender TORO", "Colt King Cobra Carry"],
        image: "placeholder_modern_revolver.jpg",
        purchaseLinks: {
            "Taurus 856 Defender TORO": "#",
            "Colt King Cobra Carry": "#"
        },
        explanation: "Modern feature revolvers blend the reliability of traditional wheelguns with contemporary enhancements. They're perfect for those who appreciate revolver simplicity but want modern features like improved sights or optics compatibility."
    }
};

// Initialize variables
const startButton = document.getElementById('start-btn');
const introScreen = document.getElementById('intro-screen');
const questionScreen = document.getElementById('question-screen');
const resultsScreen = document.getElementById('results-screen');
const questionText = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let scores = {
    ultraCompactPistol: 0,
    ultraLightRevolver: 0,
    compactReliablePistol: 0,
    balancedRevolver: 0,
    premiumCompactPistol: 0,
    powerfulRevolver: 0,
    highCapacityPistol: 0,
    modernFeatureRevolver: 0
};

// Set up the next question
function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    updateProgress();
}

// Reset the question state
function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Show the current question
function showQuestion(question) {
    questionText.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

// Update progress bar and counter
function updateProgress() {
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progressPercentage + '%';
    questionCounter.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

// Handle answer selection
function selectAnswer(answer) {
    // Update scores
    for (const category in answer.score) {
        scores[category] += answer.score[category];
    }
    
    // Move to next question or show results
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showResults();
    }
}

// Show quiz results
function showResults() {
    questionScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    // Find top two categories
    const sortedCategories = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    const primaryCategory = sortedCategories[0];
    const secondaryCategory = sortedCategories[1];
    
    // Display primary recommendation
    document.getElementById('primary-title').innerText = firearmCategories[primaryCategory].title;
    
    // Create description with purchase links
    let primaryDescription = `${firearmCategories[primaryCategory].description}\n\nRecommended models: `;
    firearmCategories[primaryCategory].examples.forEach((model, index) => {
        if (index > 0) primaryDescription += ', ';
        
        if (firearmCategories[primaryCategory].purchaseLinks[model] && 
            firearmCategories[primaryCategory].purchaseLinks[model] !== "#") {
            primaryDescription += `<a href="${firearmCategories[primaryCategory].purchaseLinks[model]}" target="_blank">${model}</a>`;
        } else {
            primaryDescription += model;
        }
    });
    
    document.getElementById('primary-description').innerHTML = primaryDescription;
    
    // Display secondary recommendation
    document.getElementById('secondary-title').innerText = firearmCategories[secondaryCategory].title;
    
    // Create description with purchase links
    let secondaryDescription = `${firearmCategories[secondaryCategory].description}\n\nRecommended models: `;
    firearmCategories[secondaryCategory].examples.forEach((model, index) => {
        if (index > 0) secondaryDescription += ', ';
        
        if (firearmCategories[secondaryCategory].purchaseLinks[model] && 
            firearmCategories[secondaryCategory].purchaseLinks[model] !== "#") {
            secondaryDescription += `<a href="${firearmCategories[secondaryCategory].purchaseLinks[model]}" target="_blank">${model}</a>`;
        } else {
            secondaryDescription += model;
        }
    });
    
    document.getElementById('secondary-description').innerHTML = secondaryDescription;
    
    // Set images
    if (firearmCategories[primaryCategory].image && 
        !firearmCategories[primaryCategory].image.includes('placeholder')) {
        document.getElementById('primary-image').style.backgroundImage = 
            `url('${firearmCategories[primaryCategory].image}')`;
        document.getElementById('primary-image').style.backgroundColor = 'transparent';
    } else {
        document.getElementById('primary-image').style.backgroundColor = '#ccc';
        document.getElementById('primary-image').style.backgroundImage = 'none';
    }
    
    if (firearmCategories[secondaryCategory].image && 
        !firearmCategories[secondaryCategory].image.includes('placeholder')) {
        document.getElementById('secondary-image').style.backgroundImage = 
            `url('${firearmCategories[secondaryCategory].image}')`;
        document.getElementById('secondary-image').style.backgroundColor = 'transparent';
    } else {
        document.getElementById('secondary-image').style.backgroundColor = '#ccc';
        document.getElementById('secondary-image').style.backgroundImage = 'none';
    }
    
    // Explanation text
    document.getElementById('results-explanation-text').innerText = 
        `Based on your responses, you seem to prioritize ${getTopPriorities()}. ` +
        `${firearmCategories[primaryCategory].explanation} As an alternative, ` +
        `${firearmCategories[secondaryCategory].explanation}`;
}

// Helper function to determine top priorities based on answers
function getTopPriorities() {
    const priorities = [];
    
    // Check scores to determine priorities
    if (Math.max(scores.ultraCompactPistol, scores.ultraLightRevolver) > 
        Math.max(scores.highCapacityPistol, scores.premiumCompactPistol)) {
        priorities.push("concealability");
    }
    
    if (Math.max(scores.ultraLightRevolver, scores.balancedRevolver) > 
        Math.max(scores.premiumCompactPistol, scores.highCapacityPistol)) {
        priorities.push("simplicity");
    }
    
    if (Math.max(scores.highCapacityPistol, scores.compactReliablePistol) > 
        Math.max(scores.ultraLightRevolver, scores.powerfulRevolver)) {
        priorities.push("capacity");
    }
    
    if (Math.max(scores.premiumCompactPistol, scores.powerfulRevolver) > 
        Math.max(scores.ultraCompactPistol, scores.ultraLightRevolver)) {
        priorities.push("performance");
    }
    
    // Default if no clear priorities
    if (priorities.length === 0) {
        priorities.push("a balance of features");
    }
    
    return priorities.join(", ");
}

// Restart the quiz
function restartQuiz() {
    resultsScreen.classList.remove('active');
    document.getElementById('intro-screen').classList.add('active');
    
    // Reset scores and question index
    currentQuestionIndex = 0;
    scores = {
        ultraCompactPistol: 0,
        ultraLightRevolver: 0,
        compactReliablePistol: 0,
        balancedRevolver: 0,
        premiumCompactPistol: 0,
        powerfulRevolver: 0,
        highCapacityPistol: 0,
        modernFeatureRevolver: 0
    };
}

// Event listeners
startButton.addEventListener('click', () => {
    introScreen.classList.remove('active');
    questionScreen.classList.add('active');
    currentQuestionIndex = 0;
    setNextQuestion();
});

restartButton.addEventListener('click', restartQuiz);
