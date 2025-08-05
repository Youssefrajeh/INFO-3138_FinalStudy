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
        // Screens
        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.quizScreen = document.getElementById('quizScreen');
        this.resultsScreen = document.getElementById('resultsScreen');
        
        // Welcome screen elements
        this.topicCards = document.querySelectorAll('.topic-card');
        this.questionCountSelect = document.getElementById('questionCount');
        this.startBtn = document.getElementById('startBtn');
        
        // Quiz screen elements
        this.progressFill = document.getElementById('progressFill');
        this.questionCounter = document.getElementById('questionCounter');
        this.scoreElement = document.getElementById('score');
        this.questionContainer = document.getElementById('questionContainer');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.finishBtn = document.getElementById('finishBtn');
        this.exitBtn = document.getElementById('exitBtn');
        
        // Results screen elements
        this.finalScore = document.getElementById('finalScore');
        this.percentage = document.getElementById('percentage');
        this.grade = document.getElementById('grade');
        this.reviewList = document.getElementById('reviewList');
        this.retakeBtn = document.getElementById('retakeBtn');
        this.homeBtn = document.getElementById('homeBtn');
    }

    bindEvents() {
        // Topic selection
        this.topicCards.forEach(card => {
            card.addEventListener('click', () => this.selectTopic(card));
        });

        // Start quiz
        this.startBtn.addEventListener('click', () => this.startQuiz());

        // Navigation
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.finishBtn.addEventListener('click', () => this.finishQuiz());
        this.exitBtn.addEventListener('click', () => this.exitQuiz());

        // Results actions
        this.retakeBtn.addEventListener('click', () => this.retakeQuiz());
        this.homeBtn.addEventListener('click', () => this.showWelcomeScreen());
    }

    selectTopic(card) {
        // Remove previous selection
        this.topicCards.forEach(c => c.classList.remove('selected'));
        
        // Add selection to clicked card
        card.classList.add('selected');
        
        // Store selected topic
        this.currentTopic = card.dataset.topic;
        
        // Enable start button
        this.startBtn.disabled = false;
    }

    startQuiz() {
        if (!this.currentTopic) {
            alert('Please select a topic first!');
            return;
        }

        // Get number of questions
        this.totalQuestions = parseInt(this.questionCountSelect.value);
        
        // Get questions for selected topic
        this.currentQuestions = this.getQuestionsForTopic(this.currentTopic);
        
        // Shuffle questions if needed
        if (this.currentTopic === 'mixed') {
            this.shuffleArray(this.currentQuestions);
        }
        
        // Limit to requested number of questions
        this.currentQuestions = this.currentQuestions.slice(0, this.totalQuestions);
        
        // Initialize quiz state
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.currentQuestions.length).fill(null);
        this.score = 0;
        
        // Show quiz screen
        this.showQuizScreen();
        
        // Display first question
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
        
        // Reset topic selection
        this.topicCards.forEach(c => c.classList.remove('selected'));
        this.startBtn.disabled = true;
        this.currentTopic = null;
    }

    showQuizScreen() {
        this.welcomeScreen.classList.add('hidden');
        this.quizScreen.classList.remove('hidden');
        this.resultsScreen.classList.add('hidden');
    }

    showResultsScreen() {
        this.welcomeScreen.classList.add('hidden');
        this.quizScreen.classList.add('hidden');
        this.resultsScreen.classList.remove('hidden');
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        
        // Update question counter
        this.questionCounter.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.currentQuestions.length}`;
        
        // Update score
        this.scoreElement.textContent = `Score: ${this.score}`;
        
        // Build question HTML
        let questionHTML = `
            <div class="question">
                <div class="question-text">${question.question}</div>
        `;
        
        // Add code block if present
        if (question.code) {
            questionHTML += `<div class="question-code">${this.formatXmlCode(question.code)}</div>`;
        }
        
        // Add options
        questionHTML += '<div class="options">';
        question.options.forEach((option, index) => {
            const isSelected = this.userAnswers[this.currentQuestionIndex] === index;
            const isAnswered = this.userAnswers[this.currentQuestionIndex] !== null;
            const isCorrect = index === question.correct;
            const isIncorrect = isAnswered && isSelected && !isCorrect;
            
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
        
        // Add hint section if answered
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
        
        // Add click handlers to options
        const options = this.questionContainer.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', () => this.selectOption(parseInt(option.dataset.index)));
        });
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }

    getOptionIcon(index) {
        const icons = ['⭕', '⭕', '⭕', '⭕', '⭕'];
        return icons[index] || '⭕';
    }

    selectOption(optionIndex) {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const previousAnswer = this.userAnswers[this.currentQuestionIndex];
        
        // If changing answer, update score accordingly
        if (previousAnswer !== null) {
            // Remove previous answer's score
            if (previousAnswer === question.correct) {
                this.score--;
            }
        }
        
        // Set new answer
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        
        // Add new answer's score
        if (optionIndex === question.correct) {
            this.score++;
        }
        
        // Update display to show hint
        this.displayQuestion();
    }

    updateNavigationButtons() {
        // Previous button
        this.prevBtn.disabled = this.currentQuestionIndex === 0;
        
        // Next/Finish button
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

    finishQuiz() {
        // Check if all questions are answered
        const unansweredCount = this.userAnswers.filter(answer => answer === null).length;
        if (unansweredCount > 0) {
            if (!confirm(`You have ${unansweredCount} unanswered question(s). Are you sure you want to finish?`)) {
                return;
            }
        }
        
        this.showResults();
    }

    showResults() {
        // Calculate results
        const percentage = Math.round((this.score / this.currentQuestions.length) * 100);
        const grade = this.calculateGrade(percentage);
        
        // Update results display
        this.finalScore.textContent = `${this.score}/${this.currentQuestions.length}`;
        this.percentage.textContent = `${percentage}%`;
        this.grade.textContent = grade;
        
        // Build review list
        this.buildReviewList();
        
        // Show results screen
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
            const userAnswerText = userAnswer !== null ? question.options[userAnswer] : 'Not answered';
            const correctAnswerText = question.options[question.correct];
            
            reviewHTML += `
                <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="review-question">Question ${index + 1}: ${this.escapeHtml(question.question)}</div>
                    <div class="review-answer">
                        <strong>Your answer:</strong> ${this.escapeHtml(userAnswerText)}<br>
                        <strong>Correct answer:</strong> ${this.escapeHtml(correctAnswerText)}
                    </div>
                    <div class="review-status ${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
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
        // Confirm exit
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
        // Add XML declaration if not present
        if (!xmlString.includes('<?xml')) {
            xmlString = '<?xml version="1.0" encoding="utf-8"?>\n' + xmlString;
        }
        
        // Format and indent XML
        let formatted = this.formatXml(xmlString);
        
        // Apply syntax highlighting
        formatted = formatted
            // XML declaration
            .replace(/(&lt;\?xml)([^&]*?)(\?&gt;)/g, '<span class="xml-declaration">$1$2$3</span>')
            // Opening tags
            .replace(/(&lt;\/?)([a-zA-Z][a-zA-Z0-9\-_:]*)/g, '<span class="xml-tag">$1$2</span>')
            // Closing tags
            .replace(/(&lt;\/)([a-zA-Z][a-zA-Z0-9\-_:]*)(&gt;)/g, '<span class="xml-tag">$1$2$3</span>')
            // Self-closing tags
            .replace(/(&lt;)([a-zA-Z][a-zA-Z0-9\-_:]*)([^&]*?)(\/&gt;)/g, '<span class="xml-tag">$1$2</span><span class="xml-attr">$3</span><span class="xml-tag">$4</span>')
            // Attributes
            .replace(/([a-zA-Z][a-zA-Z0-9\-_]*=)(")([^"]*)(")/g, '<span class="xml-attr">$1</span><span class="xml-value">$2$3$4</span>')
            // Text content (between tags)
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
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
}); 