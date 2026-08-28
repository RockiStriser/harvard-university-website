const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Mock database for contacts and admissions inquiries
let contactSubmissions = [];
let admissionsInquiries = [];

// API Routes

// Get all contact submissions
app.get('/api/contacts', (req, res) => {
  res.json(contactSubmissions);
});

// Submit contact form
app.post('/api/contacts', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  const submission = {
    id: contactSubmissions.length + 1,
    name,
    email,
    message,
    timestamp: new Date()
  };
  
  contactSubmissions.push(submission);
  res.status(201).json({ success: true, message: 'Thank you for your message!', data: submission });
});

// Get all admissions inquiries
app.get('/api/admissions', (req, res) => {
  res.json(admissionsInquiries);
});

// Submit admissions inquiry
app.post('/api/admissions', (req, res) => {
  const { fullName, email, phone, program, gpa } = req.body;
  
  if (!fullName || !email || !program) {
    return res.status(400).json({ error: 'Full name, email, and program are required' });
  }
  
  const inquiry = {
    id: admissionsInquiries.length + 1,
    fullName,
    email,
    phone,
    program,
    gpa,
    timestamp: new Date()
  };
  
  admissionsInquiries.push(inquiry);
  res.status(201).json({ success: true, message: 'Your admissions inquiry has been submitted!', data: inquiry });
});

// Get Harvard programs
app.get('/api/programs', (req, res) => {
  const programs = [
    {
      id: 1,
      name: 'Undergraduate College',
      description: 'Harvard College offers world-class undergraduate education with a focus on critical thinking and leadership.',
      duration: '4 years',
      tuition: '$60,660'
    },
    {
      id: 2,
      name: 'Graduate School of Arts and Sciences',
      description: 'Advanced graduate education in sciences, social sciences, and humanities.',
      duration: '5-7 years',
      tuition: '$54,000+'
    },
    {
      id: 3,
      name: 'Harvard Business School',
      description: 'Leading MBA and executive education programs preparing leaders for global business.',
      duration: '2 years (MBA)',
      tuition: '$73,440'
    },
    {
      id: 4,
      name: 'Harvard Law School',
      description: 'Prestigious JD and LLM programs training lawyers and legal scholars.',
      duration: '3 years (JD)',
      tuition: '$65,975'
    },
    {
      id: 5,
      name: 'Harvard Medical School',
      description: 'Excellence in medical education, research, and clinical practice.',
      duration: '4 years (MD)',
      tuition: '$66,980'
    },
    {
      id: 6,
      name: 'Harvard Divinity School',
      description: 'Education in religion, theology, and spiritual leadership.',
      duration: '3 years',
      tuition: '$60,000'
    }
  ];
  res.json(programs);
});

// Get Harvard history
app.get('/api/history', (req, res) => {
  const history = {
    founded: 1636,
    founder: 'Massachusetts General Court',
    location: 'Cambridge, Massachusetts',
    highlights: [
      '1636 - Founded as a college to train clergy',
      '1773 - Renamed Harvard University after John Harvard',
      '1869 - First American university to establish graduate programs',
      '1920 - Harvard Business School founded',
      '1950 - Harvard expansion to major research university',
      '2023 - Over 23,000 students enrolled across all schools'
    ],
    notableFacts: [
      'One of the most prestigious universities in the world',
      'Home to 14 Nobel Prize winners',
      'Endowment of approximately $53.2 billion',
      'Students from over 150 countries',
      'Over 17 Harvard-affiliated hospitals and research centers'
    ]
  };
  res.json(history);
});

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Harvard University Website running on http://localhost:${PORT}`);
});
