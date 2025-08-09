class QuizApp {
    constructor() {
        this.currentTopic = null;
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.totalQuestions = 10;
        
        this.initializeElements();
        this.bindEvents();
        this.showWelcomeScreen();
    }

    initializeElements() {

        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.quizScreen = document.getElementById('quizScreen');
        this.resultsScreen = document.getElementById('resultsScreen');
        this.questionsListScreen = document.getElementById('questionsListScreen');
        

        this.topicCards = document.querySelectorAll('.topic-card');
        this.questionCountSelect = document.getElementById('questionCount');
        this.startBtn = document.getElementById('startBtn');
        this.viewQuestionsBtn = document.getElementById('viewQuestionsBtn');
        

        this.progressFill = document.getElementById('progressFill');
        this.questionCounter = document.getElementById('questionCounter');
        this.scoreElement = document.getElementById('score');
        this.questionContainer = document.getElementById('questionContainer');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.finishBtn = document.getElementById('finishBtn');
        this.exitBtn = document.getElementById('exitBtn');
        this.skipBtn = document.getElementById('skipBtn');
        

        this.finalScore = document.getElementById('finalScore');
        this.percentage = document.getElementById('percentage');
        this.grade = document.getElementById('grade');
        this.reviewList = document.getElementById('reviewList');
        this.retakeBtn = document.getElementById('retakeBtn');
        this.homeBtn = document.getElementById('homeBtn');
        

        this.questionsContainer = document.getElementById('questionsContainer');
        this.backToHomeBtn = document.getElementById('backToHomeBtn');
        this.topicNavBtns = document.querySelectorAll('.topic-nav-btn');
    }

    bindEvents() {

        this.topicCards.forEach(card => {
            card.addEventListener('click', () => this.selectTopic(card));
        });


        this.startBtn.addEventListener('click', () => this.startQuiz());
        

        this.viewQuestionsBtn.addEventListener('click', () => this.showQuestionsListScreen());


        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.finishBtn.addEventListener('click', () => this.finishQuiz());
        this.exitBtn.addEventListener('click', () => this.exitQuiz());
        this.skipBtn.addEventListener('click', () => this.skipQuestion());


        this.retakeBtn.addEventListener('click', () => this.retakeQuiz());
        this.homeBtn.addEventListener('click', () => this.showWelcomeScreen());
        

        this.backToHomeBtn.addEventListener('click', () => this.showWelcomeScreen());
        this.topicNavBtns.forEach(btn => {
            btn.addEventListener('click', () => this.filterQuestionsByTopic(btn.dataset.topic));
        });
    }

    selectTopic(card) {

        this.topicCards.forEach(c => c.classList.remove('selected'));
        

        card.classList.add('selected');
        

        this.currentTopic = card.dataset.topic;
        

        this.startBtn.disabled = false;
    }

    startQuiz() {
        if (!this.currentTopic) {
            alert('Please select a topic first!');
            return;
        }


        const questionCountValue = this.questionCountSelect.value;
        

        this.currentQuestions = this.getQuestionsForTopic(this.currentTopic);
        

        if (this.currentTopic === 'mixed') {
            this.shuffleArray(this.currentQuestions);
        }
        

        if (questionCountValue === 'all') {

            this.totalQuestions = this.currentQuestions.length;
        } else {

            this.totalQuestions = parseInt(questionCountValue);
            this.currentQuestions = this.currentQuestions.slice(0, this.totalQuestions);
        }
        

        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.currentQuestions.length).fill(null);
        this.score = 0;
        

        this.showQuizScreen();
        

        this.displayQuestion();
    }

    getQuestionsForTopic(topic) {
        return quizData[topic] || [];
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    showWelcomeScreen() {
        this.welcomeScreen.classList.remove('hidden');
        this.quizScreen.classList.add('hidden');
        this.resultsScreen.classList.add('hidden');
        this.questionsListScreen.classList.add('hidden');
        

        this.topicCards.forEach(c => c.classList.remove('selected'));
        this.startBtn.disabled = true;
        this.currentTopic = null;
    }

    showQuizScreen() {
        this.welcomeScreen.classList.add('hidden');
        this.quizScreen.classList.remove('hidden');
        this.resultsScreen.classList.add('hidden');
        this.questionsListScreen.classList.add('hidden');
    }

    showResultsScreen() {
        this.welcomeScreen.classList.add('hidden');
        this.quizScreen.classList.add('hidden');
        this.resultsScreen.classList.remove('hidden');
        this.questionsListScreen.classList.add('hidden');
    }

    showQuestionsListScreen() {
        this.welcomeScreen.classList.add('hidden');
        this.quizScreen.classList.add('hidden');
        this.resultsScreen.classList.add('hidden');
        this.questionsListScreen.classList.remove('hidden');
        

        this.displayAllQuestions('all');
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        

        const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        

        this.questionCounter.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.currentQuestions.length}`;
        

        this.scoreElement.textContent = `Score: ${this.score}`;
        

        let questionHTML = `
            <div class="question">
                <div class="question-text">${question.question}</div>
        `;
        

        if (question.code) {
            questionHTML += `<div class="question-code">${this.formatXmlCode(question.code)}</div>`;
        }
        

        questionHTML += '<div class="options">';
        question.options.forEach((option, index) => {
            const isSelected = this.userAnswers[this.currentQuestionIndex] === index;
            const isAnswered = this.userAnswers[this.currentQuestionIndex] !== null;
            const isCorrect = index === question.correct;
            const isIncorrect = isAnswered && isSelected && !isCorrect;
            const isSkipped = this.userAnswers[this.currentQuestionIndex] === null;
            
            let optionClass = 'option';
            if (isSelected) optionClass += ' selected';
            if (isAnswered && isCorrect) optionClass += ' correct';
            if (isIncorrect) optionClass += ' incorrect';
            
            const optionIcon = this.getOptionIcon(index);
            
            questionHTML += `
                <div class="${optionClass}" data-index="${index}">
                    <span class="option-icon">${optionIcon}</span>
                    <span class="option-text">${this.escapeHtml(option)}</span>
                </div>
            `;
        });
        questionHTML += '</div>';
        

        if (this.userAnswers[this.currentQuestionIndex] !== null) {
            const isCorrect = this.userAnswers[this.currentQuestionIndex] === question.correct;
            const correctAnswer = question.options[question.correct];
            
            questionHTML += `
                <div class="hint-section ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="hint-header">
                        <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                        <span>${isCorrect ? 'Correct!' : 'Incorrect'}</span>
                    </div>
                    <div class="hint-content">
                        <p><strong>Correct Answer:</strong> ${this.escapeHtml(correctAnswer)}</p>
                        ${question.explanation ? `<p><strong>Explanation:</strong> ${this.escapeHtml(question.explanation)}</p>` : ''}
                        <p class="hint-note"><i class="fas fa-info-circle"></i> You can change your answer by clicking on a different option.</p>
                    </div>
                </div>
            `;
        }

        
        questionHTML += '</div>';
        
        this.questionContainer.innerHTML = questionHTML;
        

        const options = this.questionContainer.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', () => this.selectOption(parseInt(option.dataset.index)));
        });
        

        this.updateNavigationButtons();
    }

    getOptionIcon(index) {
        const icons = ['⭕', '⭕', '⭕', '⭕', '⭕'];
        return icons[index] || '⭕';
    }

    selectOption(optionIndex) {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const previousAnswer = this.userAnswers[this.currentQuestionIndex];
        

        if (previousAnswer !== null) {

            if (previousAnswer === question.correct) {
                this.score--;
            }
        }
        

        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        

        if (optionIndex === question.correct) {
            this.score++;
        }
        

        this.displayQuestion();
    }

    updateNavigationButtons() {

        this.prevBtn.disabled = this.currentQuestionIndex === 0;
        

        this.skipBtn.disabled = this.currentQuestionIndex === this.currentQuestions.length - 1;
        

        const isLastQuestion = this.currentQuestionIndex === this.currentQuestions.length - 1;
        const hasAnswered = this.userAnswers[this.currentQuestionIndex] !== null;
        
        if (isLastQuestion) {
            this.nextBtn.classList.add('hidden');
            this.finishBtn.classList.remove('hidden');
            this.finishBtn.disabled = !hasAnswered;
        } else {
            this.nextBtn.classList.remove('hidden');
            this.finishBtn.classList.add('hidden');
            this.nextBtn.disabled = !hasAnswered;
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    skipQuestion() {

        this.userAnswers[this.currentQuestionIndex] = null;
        

        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        } else {

            this.updateNavigationButtons();
        }
    }

    finishQuiz() {

        const unansweredCount = this.userAnswers.filter(answer => answer === null).length;
        if (unansweredCount > 0) {
            if (!confirm(`You have ${unansweredCount} unanswered question(s). Are you sure you want to finish?`)) {
                return;
            }
        }
        
        this.showResults();
    }

    showResults() {

        const percentage = Math.round((this.score / this.currentQuestions.length) * 100);
        const grade = this.calculateGrade(percentage);
        

        this.finalScore.textContent = `${this.score}/${this.currentQuestions.length}`;
        this.percentage.textContent = `${percentage}%`;
        this.grade.textContent = grade;
        

        this.buildReviewList();
        

        this.showResultsScreen();
    }

    calculateGrade(percentage) {
        if (percentage >= 90) return 'A';
        if (percentage >= 80) return 'B';
        if (percentage >= 70) return 'C';
        if (percentage >= 60) return 'D';
        return 'F';
    }

    buildReviewList() {
        let reviewHTML = '';
        
        this.currentQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            const isSkipped = userAnswer === null;
            const userAnswerText = userAnswer !== null ? question.options[userAnswer] : 'Skipped';
            const correctAnswerText = question.options[question.correct];
            
            let reviewItemClass = isSkipped ? 'skipped' : (isCorrect ? 'correct' : 'incorrect');
            let reviewStatusText = isSkipped ? '⏭ Skipped' : (isCorrect ? '✓ Correct' : '✗ Incorrect');
            
            reviewHTML += `
                <div class="review-item ${reviewItemClass}">
                    <div class="review-question">Question ${index + 1}: ${this.escapeHtml(question.question)}</div>
                    <div class="review-answer">
                        <strong>Your answer:</strong> ${this.escapeHtml(userAnswerText)}<br>
                        <strong>Correct answer:</strong> ${this.escapeHtml(correctAnswerText)}
                    </div>
                    <div class="review-status ${reviewItemClass}">
                        ${reviewStatusText}
                    </div>
                    ${question.explanation ? `<div class="review-explanation"><strong>Explanation:</strong> ${this.escapeHtml(question.explanation)}</div>` : ''}
                </div>
            `;
        });
        
        this.reviewList.innerHTML = reviewHTML;
    }

    retakeQuiz() {
        this.startQuiz();
    }

    exitQuiz() {

        if (confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
            this.showWelcomeScreen();
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    formatXmlCode(xmlString) {

        if (!xmlString.includes('<?xml')) {
            xmlString = '<?xml version="1.0" encoding="utf-8"?>\n' + xmlString;
        }
        

        let formatted = this.formatXml(xmlString);
        

        formatted = formatted

            .replace(/(&lt;\?xml)([^&]*?)(\?&gt;)/g, '<span class="xml-declaration">$1$2$3</span>')

            .replace(/(&lt;\/?)([a-zA-Z][a-zA-Z0-9\-_:]*)/g, '<span class="xml-tag">$1$2</span>')

            .replace(/(&lt;\/)([a-zA-Z][a-zA-Z0-9\-_:]*)(&gt;)/g, '<span class="xml-tag">$1$2$3</span>')

            .replace(/(&lt;)([a-zA-Z][a-zA-Z0-9\-_:]*)([^&]*?)(\/&gt;)/g, '<span class="xml-tag">$1$2</span><span class="xml-attr">$3</span><span class="xml-tag">$4</span>')

            .replace(/([a-zA-Z][a-zA-Z0-9\-_]*=)(")([^"]*)(")/g, '<span class="xml-attr">$1</span><span class="xml-value">$2$3$4</span>')

            .replace(/(&gt;)([^&]*?)(&lt;)/g, '$1<span class="xml-text">$2</span>$3');
        
        return formatted;
    }

    formatXml(xml) {
        let formatted = '';
        let indent = '';
        const tab = '  ';
        xml.split(/>\s*</).forEach(function(node) {
            if (node.match(/^\/\w/)) { // Closing tag
                indent = indent.substring(tab.length);
            }
            formatted += indent + '<' + node + '>\r\n';
            if (node.match(/^<?\w[^>]*[^\/]$/)) { // Opening tag
                indent += tab;
            }
        });
        return formatted.substring(1, formatted.length-3);
    }

    displayAllQuestions(topicFilter = 'all') {
        let questionsToShow = [];
        
        if (topicFilter === 'all') {

            Object.keys(quizData).forEach(topic => {
                if (topic !== 'mixed') {
                    const topicQuestions = quizData[topic].slice(0, 20);
                    questionsToShow.push({
                        topic: topic,
                        questions: topicQuestions
                    });
                }
            });
        } else {

            if (quizData[topicFilter]) {
                const topicQuestions = quizData[topicFilter].slice(0, 20);
                questionsToShow.push({
                    topic: topicFilter,
                    questions: topicQuestions
                });
            }
        }


        let questionsHTML = '';
        
        questionsToShow.forEach(topicData => {
            const topicDisplayName = this.getTopicDisplayName(topicData.topic);
            
            questionsHTML += `
                <div class="topic-section">
                    <h3 class="topic-title">${topicDisplayName} (${topicData.questions.length} questions)</h3>
                    <div class="questions-grid">
            `;
            
            topicData.questions.forEach((question, index) => {
                const optionsHTML = question.options.map((option, optIndex) => {
                    const isCorrect = optIndex === question.correct;
                    return `
                        <div class="question-option ${isCorrect ? 'correct-option' : ''}">
                            <span class="option-label">${String.fromCharCode(65 + optIndex)})</span>
                            <span class="option-text">${this.escapeHtml(option)}</span>
                            ${isCorrect ? '<i class="fas fa-check correct-indicator"></i>' : ''}
                        </div>
                    `;
                }).join('');

                questionsHTML += `
                    <div class="question-card">
                        <div class="question-header">
                            <span class="question-number">Question ${index + 1}</span>
                        </div>
                        <div class="question-text">${this.escapeHtml(question.question)}</div>
                        ${question.code ? `<div class="question-code">${this.formatXmlCode(question.code)}</div>` : ''}
                        <div class="question-options">
                            ${optionsHTML}
                        </div>
                        ${question.explanation ? `
                            <div class="question-explanation">
                                <strong>Explanation:</strong> ${this.escapeHtml(question.explanation)}
                            </div>
                        ` : ''}
                    </div>
                `;
            });
            
            questionsHTML += `
                    </div>
                </div>
            `;
        });

        this.questionsContainer.innerHTML = questionsHTML;
    }

    filterQuestionsByTopic(topic) {

        this.topicNavBtns.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-topic="${topic}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }


        this.displayAllQuestions(topic);
    }

    getTopicDisplayName(topic) {
        const topicNames = {
            'dom': 'DOM Interfaces',
            'namespaces': 'XML Namespaces',
            'xpath': 'XPath Expressions',
            'xml': 'XML Basics',
            'xsd': 'XML Schema (XSD)',
            'xslt': 'XSLT Transformations'
        };
        return topicNames[topic] || topic.toUpperCase();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
}); 