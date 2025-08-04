# INFO3138 Study Quiz

A comprehensive web-based study quiz application for **INFO3138 Programming with Declarative Languages**. This application helps students prepare for their XML, DOM, XPath, and Namespaces topics.

## Features

### 🎯 Topic-Based Learning
- **DOM Interfaces**: XML DOM, Node interfaces, and .NET implementations
- **XML Namespaces**: Default namespaces, prefixes, and namespace declarations
- **XPath Expressions**: Node selection, attributes, and path expressions
- **Mixed Topics**: Random questions from all topics

### 📊 Interactive Quiz Experience
- **Progress Tracking**: Visual progress bar and question counter
- **Real-time Scoring**: Live score updates during the quiz
- **Navigation**: Previous/Next buttons for easy question navigation
- **Answer Validation**: Immediate feedback on correct/incorrect answers

### 📈 Comprehensive Results
- **Score Summary**: Final score, percentage, and letter grade
- **Question Review**: Detailed review of all questions with explanations
- **Answer Comparison**: Shows your answer vs. correct answer
- **Retake Option**: Easy retake functionality

### 🎨 Modern UI/UX
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Beautiful Interface**: Modern gradient design with smooth animations
- **Accessibility**: Clear typography and intuitive navigation
- **Visual Feedback**: Color-coded answers and progress indicators

## How to Use

### Getting Started
1. Open `index.html` in your web browser
2. Select a topic from the four available options
3. Choose the number of questions (5, 10, 15, or 20)
4. Click "Start Quiz" to begin

### Taking the Quiz
- **Answer Questions**: Click on your chosen answer
- **Navigate**: Use Previous/Next buttons to move between questions
- **Progress**: Monitor your progress with the progress bar
- **Score**: Watch your score update in real-time

### Reviewing Results
- **Score Summary**: See your final score, percentage, and grade
- **Question Review**: Review each question with explanations
- **Retake**: Click "Retake Quiz" to try again
- **Home**: Return to the main menu

## Quiz Content

### DOM Interfaces (5 Questions)
- ChildNodes property types
- Node interface capabilities
- Attribute access methods
- .NET DOM implementations
- GetElementsByTagName return types

### XML Namespaces (5 Questions)
- Default namespace identification
- Namespace prefix assignments
- Element namespace membership
- Default namespace characteristics
- Namespace inheritance

### XPath Expressions (5 Questions)
- Child node selection
- Descendant element retrieval
- Attribute value access
- Parent-child relationships
- Conditional element filtering

## Technical Details

### File Structure
```
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── quiz-data.js        # Question database
├── app.js             # JavaScript application logic
└── README.md          # This file
```

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (ES6+)**: Object-oriented programming with classes
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Inter font family for typography

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Customization

### Adding New Questions
To add new questions, edit `quiz-data.js`:

```javascript
{
    id: 16,
    question: "Your question here?",
    options: [
        "Option A",
        "Option B", 
        "Option C",
        "Option D"
    ],
    correct: 2, // 0-based index of correct answer
    explanation: "Explanation of the correct answer"
}
```

### Modifying Styles
Edit `styles.css` to customize:
- Color scheme
- Typography
- Layout
- Animations

### Changing Quiz Behavior
Modify `app.js` to adjust:
- Scoring system
- Navigation behavior
- Question display logic
- Results calculation

## Study Tips

### For DOM Topics
- Understand the hierarchy of DOM interfaces
- Practice with .NET XmlNode methods
- Focus on property types and return values

### For Namespaces
- Learn namespace declaration syntax
- Understand prefix vs. default namespaces
- Practice identifying element namespaces

### For XPath
- Master basic path expressions
- Practice attribute selection
- Understand predicates and filtering

## Performance

- **Fast Loading**: Optimized for quick startup
- **Smooth Animations**: 60fps transitions
- **Memory Efficient**: Minimal resource usage
- **Offline Capable**: Works without internet connection

## Contributing

Feel free to:
- Add more questions to the database
- Improve the UI/UX design
- Add new features or functionality
- Report bugs or issues

## License

This project is open source and available under the MIT License.

---

**Happy Studying!** 📚✨ 