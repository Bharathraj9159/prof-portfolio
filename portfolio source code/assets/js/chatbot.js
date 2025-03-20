 /* --- Digital Marketing Chatbot Triggers & Responses --- */
 const triggers = [
    // 0: Greetings
    ["hi", "hello", "hey", "good morning", "good evening", "good afternoon"],
    // 1: Digital Marketing Definition
    ["what is digital marketing", "define digital marketing", "explain digital marketing", "tell me about digital marketing"],
    // 2: SEO
    ["what is seo", "explain seo", "seo tips", "how to optimize website","seo"],
    // 3: PPC
    ["what is ppc", "explain ppc", "pay per click", "google ads","ppc"],
    // 4: Social Media Marketing
    ["what is social media marketing", "explain social media marketing", "social media tips", "how to promote on social media"],
    // 5: Content Marketing
    ["what is content marketing", "explain content marketing", "content marketing tips", "how to create engaging content"],
    // 6: Email Marketing
    ["what is email marketing", "explain email marketing", "email marketing strategies", "how to build an email list"],
    // 7: Affiliate Marketing
    ["what is affiliate marketing", "explain affiliate marketing", "affiliate marketing tips", "how to do affiliate marketing"],
    // 8: Conversion Rate Optimization
    ["what is conversion rate optimization", "explain conversion rate optimization", "increase conversion rate", "conversion optimization tips"],
    // 9: Web Analytics
    ["what is web analytics", "explain web analytics", "google analytics", "analytics tools"],
    // 10: Digital Marketing ROI
    ["how to measure digital marketing roi", "what is roi", "digital marketing return on investment", "calculate marketing roi"],
    // 11: Registration (Webinar)
    ["register", "sign up", "i want to register", "join webinar"],
    // 12: Thanks
    ["thanks", "thank you", "thx"],
    // 13: Goodbye
    ["bye", "goodbye", "see you"],
    // 14: High-Level Questions
    ["detailed explanation", "advanced", "in-depth", "high question", "high level"],
    // 15: Brochure
    ["brochure", "download brochure", "get brochure", "brouchere","details","more info","more infromation"],
    // 16: Register for a Call
    ["register for a call", "schedule a call", "book a call", "talk to an expert", "request a call","call","register"],
    // 17: Front-End Development
    ["what is front-end development", "explain front-end", "front-end technologies", "how to become a front-end developer","front end"],
    // 18: Back-End Development
    ["what is back-end development", "explain back-end", "back-end technologies", "how to become a back-end developer","back end"],
    // 19: Full-Stack Development
    ["what is full-stack development", "explain full-stack", "how to become a full-stack developer", "full-stack technologies","full stack"],
    // 20: Website Development
    ["how to develop a website", "website development process", "steps to build a website", "best practices for web development","web development","website"],
    // 21: JavaScript
    ["what is javascript", "explain javascript", "javascript tips", "how to learn javascript","js","javascript"],
    // 22: Web Frameworks
    ["best web frameworks", "frontend frameworks", "backend frameworks", "popular web frameworks","frameworks"],
    // 23: Company Details
    ["company details","company","company info","company information","digtai","DigtAi","Digtai","Digtai info","Digtai information","Digtai details","Digtai company","Digtai company info","Digtai company information"],
    // 24: Address
    ["address","mobile","contact","contact number","contact details","contact info","contact information","address details","address info","address information","address","address of company","address of Digtai","address of Digtai company","address of Digtai company info","address of Digtai company information","company address","company address info","company address information","company address details","company address of Digtai","company address of Digtai company","company address of Digtai company info","company address of Digtai company information"],

      // 25: CEO NAME
      ["ceo name","founder","founder name","ceo","ceo of Digtai","ceo of Digtai company","ceo of Digtai company info","ceo of Digtai company information","who is ceo of this company","who is ceo of digtai company","who is ceo of your company"]
  ];

  const responses = [
    // 0: Greetings
    ["Hello! How can I assist you with your digital marketing questions?", "Hi there! What digital marketing query can I help with today?"],
    // 1: Digital Marketing Definition
    ["Digital marketing is the practice of promoting products or services using digital channels. It includes SEO, PPC, social media, content marketing, and more.", "It involves strategies like SEO, PPC, and social media marketing to reach and engage your audience."],
    // 2: SEO
    ["SEO stands for Search Engine Optimization. It helps improve your website's visibility in search engines.", "Focus on quality content and backlinks for effective SEO."],
    // 3: PPC
    ["PPC means Pay-Per-Click. It’s an advertising model where you pay each time someone clicks on your ad.", "Google Ads is a popular PPC platform to drive targeted traffic to your website."],
    // 4: Social Media Marketing
    ["Social media marketing involves using platforms like Facebook, Instagram, and Twitter to promote your brand.", "It’s about engaging with your audience and increasing brand awareness through social media."],
    // 5: Content Marketing
    ["Content marketing is about creating valuable content to attract and engage your target audience.", "It includes blogs, videos, and infographics to build trust and drive conversions."],
    // 6: Email Marketing
    ["Email marketing is a direct way to communicate with your audience through emails.", "Building an email list and sending targeted messages can boost your conversions."],
    // 7: Affiliate Marketing
    ["Affiliate marketing involves earning a commission by promoting someone else's products.", "It’s a performance-based strategy where you earn when referrals result in sales."],
    // 8: Conversion Rate Optimization
    ["Conversion rate optimization focuses on improving your website to convert visitors into customers.", "A/B testing and improving user experience are key strategies."],
    // 9: Web Analytics
    ["Web analytics is about measuring and analyzing website data to optimize performance.", "Tools like Google Analytics help track user behavior and marketing effectiveness."],
    // 10: Digital Marketing ROI
    ["Digital marketing ROI measures the return on investment from your online marketing efforts.", "It’s important to track which campaigns yield the best results for revenue generation."],
    // 11: Registration (Webinar)
    [
      "Great! To register for our upcoming digital marketing webinar, please <a href='#' id='open-register'>click here</a>.",
      "I can help with registration. Please <a href='#' id='open-register'>click here</a> to sign up."
    ],
    // 12: Thanks
    ["You're welcome!", "Happy to help!"],
    // 13: Goodbye
    ["Goodbye! Have a great day!", "See you later!"],
    // 14: High-Level Questions
    [
      "For a more comprehensive understanding, please refer to this detailed PDF: <a href='https://example.com/wikipedia.pdf' target='_blank'>Wikipedia PDF</a>.",
      "Check out this PDF for in-depth details: <a href='https://example.com/wikipedia.pdf' target='_blank'>Wikipedia PDF</a>."
    ],
    // 15: Brochure
      [
      "You can download our brochure from this link: <a href='/assets/img/digtai-brochure.pdf' download='digtai-brochure.pdf'>Download Brochure</a>.",
      "Here's our brochure: <a href='/assets/img/digtai-brochure.pdf' download='digtai-brochure.pdf'>Download Now</a>."
      ],
    // 16: Register for a Call
    [
      "To register for a call, please <a href='#' id='open-register-call'>click here</a>.",
      "Schedule a call with our experts by <a href='#' id='open-register-call'>clicking here</a> to fill out your details."
    ],
    // 17: Front-End Development
    [
      "Front-end development focuses on the user interface and experience of a website or web application. It involves technologies like HTML, CSS, JavaScript, and frameworks such as React, Angular, and Vue.js.",
      "A front-end developer is responsible for designing and implementing the visual aspects of a website that users interact with. Skills required include HTML, CSS, JavaScript, and UI/UX principles."
    ],
    // 18: Back-End Development
    [
      "Back-end development refers to server-side programming that powers the website or application. It involves databases, APIs, and server-side technologies like Node.js, Python, PHP, Java, and databases such as MySQL and MongoDB.",
      "A back-end developer works on the logic, database management, and server-side processes to ensure seamless functionality. They use technologies like Node.js, Express, Django, and Spring Boot."
    ],
    // 19: Full-Stack Development
    [
      "Full-stack development involves both front-end and back-end development. A full-stack developer handles everything from user interfaces to databases and server management.",
      "To become a full-stack developer, you need knowledge of front-end (HTML, CSS, JavaScript, React), back-end (Node.js, Python, PHP), and databases (MongoDB, SQL)."
    ],
    // 20: Website Development
    [
      "Website development involves designing, coding, and deploying websites. It includes front-end (UI/UX), back-end (server-side logic), and database management.",
      "To develop a website, you need to follow a structured approach: planning, designing, coding (HTML, CSS, JavaScript), back-end integration, testing, and deployment."
    ],
    // 21: JavaScript
    [
      "JavaScript is a programming language used to create dynamic and interactive web pages. It is essential for front-end development and also used in back-end development with Node.js.",
      "Learning JavaScript involves understanding variables, functions, DOM manipulation, and working with frameworks like React and Vue.js."
    ],
    // 22: Web Frameworks
    [
      "Popular web frameworks help in faster development. Front-end frameworks include React, Angular, and Vue.js, while back-end frameworks include Node.js (Express), Django, and Spring Boot.",
      "Choosing the right web framework depends on project requirements. React is great for UI, Django for Python back-end, and Express for fast API development."
    ],
    // 23: Company Details
    [
      "DigtAi is a digital marketing agency that specializes in SEO, PPC, social media marketing, content marketing, and web development. We help businesses grow their online presence and achieve their marketing goals.",
      "DigtAi offers a range of digital marketing services to help businesses succeed online. Our team of experts is dedicated to delivering results and driving growth for our clients."
    ],
    // 24: Address
    [
      "4th floor, Chirag Tower, Marathahalli, Bangalore, Karnataka, India - 560037. Contact Number: <a href='tel:+919148043555'>+91 9148043555</a> Email: <a href='mailto:info@digtai.in'>info@digtai.in</a>"
    ],
      // 25 : ceo & Founder Name
      ["Mr. Madhusudhan Guni is the Founder and CEO of DigtAi. He has over 10 years of experience in digital marketing and has helped numerous businesses achieve success online."]
    ];

  // Updated alternatives array includes registration link for additional details
  const alternatives = [
    "I'm sorry, I didn't understand that. You can <a href='#' id='open-register'>register here</a> for more details.",
    "I'm sorry, I couldn't get that. Please rephrase your question, or <a href='#' id='open-register'>register here</a> for more details."
  ];

  const synth = window.speechSynthesis;

  /* --- Levenshtein Distance Function --- */
  function levenshteinDistance(a, b) {
    const matrix = [];
    const aLen = a.length;
    const bLen = b.length;
    if (aLen === 0) return bLen;
    if (bLen === 0) return aLen;
    for (let i = 0; i <= bLen; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= aLen; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= bLen; i++) {
      for (let j = 1; j <= aLen; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }
    return matrix[bLen][aLen];
  }

  /* --- Similarity & Fuzzy Matching Functions --- */
  function similarity(s1, s2) {
    const distance = levenshteinDistance(s1, s2);
    const maxLen = Math.max(s1.length, s2.length);
    return (maxLen - distance) / maxLen;
  }
  // Return true if input is at least 80% similar to triggerStr
  function isSimilar(input, triggerStr) {
    return similarity(input, triggerStr) >= 0.8;
  }

  /* --- Speech Synthesis --- */
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    synth.speak(utterance);
  }

  /* --- Chat Functionality --- */
  function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();
    if (message === "") return;
    addMessage(message, "user");
    processMessage(message);
    input.value = "";
  }
  function addMessage(text, sender) {
    const chatBody = document.getElementById("chat-body");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");
    messageDiv.innerHTML = `<span>${text}</span>`;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  function processMessage(message) {
    const normalizedMsg = message.toLowerCase();
    let response = null;
    outer: for (let i = 0; i < triggers.length; i++) {
      for (let j = 0; j < triggers[i].length; j++) {
        if (isSimilar(normalizedMsg, triggers[i][j])) {
          const possibleResponses = responses[i];
          response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
          break outer;
        }
      }
    }
    if (!response) {
      response = alternatives[Math.floor(Math.random() * alternatives.length)];
    }
    setTimeout(() => {
      addMessage(response, "bot");
      //speak(response);
      // Attach event listeners for registration links if present
      if (response.includes("id='open-register'")) {
        document.getElementById("open-register").addEventListener("click", function(e) {
          e.preventDefault();
          openRegisterModal();
        });
      }
      if (response.includes("id='open-register-call'")) {
        document.getElementById("open-register-call").addEventListener("click", function(e) {
          e.preventDefault();
          openRegisterCallModal();
        });
      }
    }, 500);
  }

  /* --- Toggle Chat Popup --- */
  document.getElementById("chat-icon").addEventListener("click", function() {
    const chatPopup = document.getElementById("chat-popup");
    chatPopup.style.display = chatPopup.style.display === "flex" ? "none" : "flex";
  });
  document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chat-popup").style.display = "none";
  });

  /* --- Registration Modal Functions (Webinar) --- */
  function openRegisterModal() {
    document.getElementById("register-modal").style.display = "block";
  }
  document.getElementById("chat-close-modal").addEventListener("click", function() {
    document.getElementById("register-modal").style.display = "none";
  });
  document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    console.log("Webinar Registration Details:", { name, email, phone });
    alert("Thank you for registering!");
    document.getElementById("register-modal").style.display = "none";
    document.getElementById("register-form").reset();
  });

  /* --- Registration Modal Functions (Call) --- */
  function openRegisterCallModal() {
    document.getElementById("register-call-modal").style.display = "block";
  }
  document.getElementById("chat-close-call-modal").addEventListener("click", function() {
    document.getElementById("register-call-modal").style.display = "none";
  });
  document.getElementById("register-call-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("call-name").value;
    const email = document.getElementById("call-email").value;
    const phone = document.getElementById("call-phone").value;
    const preferredTime = document.getElementById("preferred-time").value;
    const message = document.getElementById("call-message").value;
    console.log("Call Registration Details:", { name, email, phone, preferredTime, message });
    alert("Thank you for registering for a call! We'll get back to you soon.");
    document.getElementById("register-call-modal").style.display = "none";
    document.getElementById("register-call-form").reset();
  });

  // Allow sending messages via the Enter key
  document.getElementById("chat-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Close chat popup if clicking outside of it
  document.addEventListener('click', function(e) {
    const chatPopup = document.getElementById("chat-popup");
    const chatIcon = document.getElementById("chat-icon");
    if (chatPopup.style.display === "flex") {
      if (!chatPopup.contains(e.target) && !chatIcon.contains(e.target)) {
        chatPopup.style.display = "none";
      }
    }
  });

  // Focus the chat input field when the chat popup is opened by clicking the chat icon
  document.getElementById("chat-icon").addEventListener("click", function() {
    setTimeout(() => {
      if (document.getElementById("chat-popup").style.display === "flex") {
        document.getElementById("chat-input").focus();
      }
    }, 100);
  });