# Concealed Carry Quiz - Hosting Instructions

## Overview
This interactive quiz helps users find the most suitable concealed carry firearm based on their preferences, experience level, and carrying style. The quiz consists of 10 questions and provides personalized recommendations.

## Files Included
- `index.html` - The main HTML structure of the quiz
- `styles.css` - CSS styling for the quiz interface
- `script.js` - JavaScript functionality for the quiz logic
- `firearm_data.md` - Reference data on concealed carry firearms (not required for the quiz to function)
- `quiz_questions.md` - Documentation of questions and logic (not required for the quiz to function)

## Hosting Instructions

### Option 1: Simple Local Testing
1. Download all files to a folder on your computer
2. Open the `index.html` file in any modern web browser
3. The quiz should load and function immediately

### Option 2: Web Hosting (GitHub Pages)
1. Create a GitHub account if you don't have one
2. Create a new repository
3. Upload the `index.html`, `styles.css`, and `script.js` files to the repository
4. Go to repository Settings > Pages
5. Under "Source", select "main" branch
6. Click Save, and GitHub will provide you with a URL where your quiz is hosted

### Option 3: Web Hosting (Netlify)
1. Create a Netlify account at netlify.com
2. Drag and drop the folder containing your quiz files onto the Netlify dashboard
3. Netlify will automatically deploy your site and provide you with a URL
4. You can customize the URL in the site settings

### Option 4: Web Hosting (Vercel)
1. Create a Vercel account at vercel.com
2. Install the Vercel CLI or use the web interface
3. Deploy your project by connecting to your repository or uploading the files
4. Vercel will provide you with a deployment URL

## Customization Options

### Adding Images
To add actual firearm images to the results page:
1. Add image files to your project folder
2. In `script.js`, locate the showResults() function
3. Replace the placeholder image code with actual image paths:
   ```javascript
   document.getElementById('primary-image').style.backgroundImage = 'url("path/to/image.jpg")';
   document.getElementById('secondary-image').style.backgroundImage = 'url("path/to/image2.jpg")';
   ```

### Modifying Questions or Scoring
1. Open `script.js` in a text editor
2. Locate the `questions` array to modify question text or answer options
3. Adjust the scoring values in each answer's `score` object to change how recommendations are calculated

## Notes
- The quiz is designed to be responsive and work on both desktop and mobile devices
- All content is for educational and entertainment purposes only
- Always encourage users to follow local laws and seek professional training
