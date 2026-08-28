// Base URL for API
const API_BASE_URL = 'http://localhost:3000/api';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadProgramsData();
  loadHistoryData();
  setupFormListeners();
});

// Navigation function
function navigateTo(section) {
  // Smooth scroll to section
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
  }
}

// Load Programs Data from Backend
async function loadProgramsData() {
  try {
    const response = await fetch(`${API_BASE_URL}/programs`);
    const programs = await response.json();
    
    const container = document.getElementById('programs-container');
    container.innerHTML = '';
    
    programs.forEach(program => {
      const card = document.createElement('div');
      card.className = 'program-card';
      card.innerHTML = `
        <h3>${program.name}</h3>
        <p>${program.description}</p>
        <div class="program-details">
          <p><strong>Duration:</strong> ${program.duration}</p>
          <p><strong>Annual Tuition:</strong> ${program.tuition}</p>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading programs:', error);
    document.getElementById('programs-container').innerHTML = '<p>Error loading programs. Please try again later.</p>';
  }
}

// Load History Data from Backend
async function loadHistoryData() {
  try {
    const response = await fetch(`${API_BASE_URL}/history`);
    const historyData = await response.json();
    
    const container = document.getElementById('history-container');
    let highlightsHTML = '<ul>';
    
    historyData.highlights.forEach(highlight => {
      highlightsHTML += `<li>${highlight}</li>`;
    });
    
    highlightsHTML += '</ul>';
    highlightsHTML += '<h4 style="margin-top: 1.5rem; color: #8b0000;">Notable Facts:</h4><ul>';
    
    historyData.notableFacts.forEach(fact => {
      highlightsHTML += `<li>${fact}</li>`;
    });
    
    highlightsHTML += '</ul>';
    
    container.innerHTML = `
      <h3>Harvard University Timeline</h3>
      <p><strong>Founded:</strong> ${historyData.founded}</p>
      <p><strong>Location:</strong> ${historyData.location}</p>
      ${highlightsHTML}
    `;
  } catch (error) {
    console.error('Error loading history:', error);
    document.getElementById('history-container').innerHTML = '<p>Error loading historical data.</p>';
  }
}

// Setup Form Listeners
function setupFormListeners() {
  // Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
  
  // Admissions Form
  const admissionsForm = document.getElementById('admissionsForm');
  if (admissionsForm) {
    admissionsForm.addEventListener('submit', handleAdmissionsSubmit);
  }
}

// Handle Contact Form Submit
async function handleContactSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };
  
  try {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    const messageDiv = document.getElementById('contactMessage');
    
    if (response.ok) {
      messageDiv.className = 'form-message success';
      messageDiv.textContent = result.message || 'Message sent successfully!';
      event.target.reset();
      
      // Clear message after 5 seconds
      setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = 'form-message';
      }, 5000);
    } else {
      messageDiv.className = 'form-message error';
      messageDiv.textContent = result.error || 'Error sending message. Please try again.';
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    const messageDiv = document.getElementById('contactMessage');
    messageDiv.className = 'form-message error';
    messageDiv.textContent = 'Network error. Please check your connection and try again.';
  }
}

// Handle Admissions Form Submit
async function handleAdmissionsSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    program: formData.get('program'),
    gpa: formData.get('gpa') ? parseFloat(formData.get('gpa')) : null
  };
  
  try {
    const response = await fetch(`${API_BASE_URL}/admissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    const messageDiv = document.getElementById('admissionsMessage');
    
    if (response.ok) {
      messageDiv.className = 'form-message success';
      messageDiv.textContent = result.message || 'Inquiry submitted successfully!';
      event.target.reset();
      
      // Clear message after 5 seconds
      setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = 'form-message';
      }, 5000);
    } else {
      messageDiv.className = 'form-message error';
      messageDiv.textContent = result.error || 'Error submitting inquiry. Please try again.';
    }
  } catch (error) {
    console.error('Error submitting admissions form:', error);
    const messageDiv = document.getElementById('admissionsMessage');
    messageDiv.className = 'form-message error';
    messageDiv.textContent = 'Network error. Please check your connection and try again.';
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
