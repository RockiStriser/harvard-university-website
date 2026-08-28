# Harvard University Website

A comprehensive multi-page website about Harvard University featuring general overview, history, academics, and admissions information.

## Features

✨ **Responsive Multi-Page Website**
- Home page with hero section
- About page with university history
- Academics section highlighting academic excellence
- Programs page displaying all major schools and programs
- Admissions page with inquiry form
- Contact page with contact form

🎨 **Modern Frontend**
- HTML5 semantic markup
- CSS3 with responsive design
- Smooth animations and transitions
- Mobile-friendly interface
- Clean and professional styling

⚙️ **Backend API**
- Express.js server
- RESTful API endpoints
- Form submission handling
- Data storage and retrieval
- CORS enabled for frontend communication

## Project Structure

```
harvard-university-website/
├── public/
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   └── styles.css      # Stylesheet
│   └── js/
│       └── script.js       # Frontend JavaScript
├── server.js               # Express backend server
├── package.json            # Node.js dependencies
└── README.md               # This file
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RockiStriser/harvard-university-website.git
cd harvard-university-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Development Mode

To run the server with automatic reload on file changes:
```bash
npm run dev
```

## API Endpoints

### Programs
- **GET** `/api/programs` - Get all Harvard programs

### History
- **GET** `/api/history` - Get Harvard's historical information

### Contacts
- **GET** `/api/contacts` - Get all contact submissions
- **POST** `/api/contacts` - Submit a contact form

### Admissions
- **GET** `/api/admissions` - Get all admissions inquiries
- **POST** `/api/admissions` - Submit an admissions inquiry

## Contact Form Example

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I would like more information about Harvard."
}
```

## Admissions Inquiry Example

```json
{
  "fullName": "Jane Smith",
  "email": "jane@example.com",
  "phone": "(555) 123-4567",
  "program": "Harvard Business School",
  "gpa": 3.95
}
```

## Available Programs

1. **Undergraduate College** - 4-year program
2. **Graduate School of Arts and Sciences** - 5-7 year program
3. **Harvard Business School** - 2-year MBA program
4. **Harvard Law School** - 3-year JD program
5. **Harvard Medical School** - 4-year MD program
6. **Harvard Divinity School** - 3-year program

## Technologies Used

### Frontend
- HTML5
- CSS3 (with Grid and Flexbox)
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- CORS middleware
- Body Parser

## Responsive Design

The website is fully responsive and works seamlessly on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (below 768px)

## Features Implemented

✅ Navigation bar with smooth scrolling
✅ Dynamic content loading from backend
✅ Form validation and submission
✅ Success and error message handling
✅ Responsive grid layouts
✅ Hover animations and transitions
✅ Mobile-friendly navigation
✅ Professional Harvard color scheme (Crimson #8b0000)
✅ Social media links
✅ Footer with copyright information

## Future Enhancements

- Database integration (MongoDB, PostgreSQL)
- User authentication and registration
- Student portal
- News and events section
- Photo gallery
- Virtual campus tour
- Search functionality
- Email notification system

## License

This project is licensed under the ISC License.

## Author

Created by RockiStriser

## Support

For issues or questions about the website, please contact admissions@harvard.edu or create an issue in the repository.
