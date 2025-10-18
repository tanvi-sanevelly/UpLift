// ===== GOAL SETTING =====
function addGoal() {
    const input = document.getElementById('new-goal');
    const goalText = input.value.trim();
  
    if (goalText === "") return;
  
    const goalList = document.querySelector('.goal-list');
    const label = document.createElement('label');
    label.innerHTML = `<input type="radio" name="goal"> ${goalText}`;
    goalList.insertBefore(label, document.querySelector('.add-goal'));
    
    input.value = ""; // Clear input
  }
  
  // ===== SELF-CARE CHECKLIST =====
  function addTask() {
    const input = document.getElementById('new-task');
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    const selfCareSection = document.querySelector('.self-care');
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox"> ${taskText}`;
    selfCareSection.insertBefore(label, document.querySelector('.add-task'));
  
    input.value = ""; // Clear input
  }
  
  // ===== HOW ARE YOU FEELING BUTTONS =====
  const feelingButtons = document.querySelectorAll('.button-group button');
  const feelingsContainer = document.querySelector('.feelings');
  
  // Create a message area
  const messageBox = document.createElement('p');
  messageBox.classList.add('feeling-message');
  messageBox.style.marginTop = '15px';
  messageBox.style.fontFamily = 'Cormorant Garamond';
  messageBox.style.fontSize = '16px';
  messageBox.style.fontWeight = 'bold';
  feelingsContainer.appendChild(messageBox);
  
  // Responses for each feeling
  const feelingResponses = {
    Happy: "That's wonderful! Spread your positivity today 🌞",
    Calm: "Peace of mind is priceless — enjoy this calm 🕊️",
    Sad: "It's okay to feel sad sometimes 💙 — take care of yourself.",
    Neutral: "A balanced day is still a good day ⚖️",
    Stressed: "Deep breaths. You’re stronger than you think 💪",
    Angry: "Pause and breathe — you’ve got this 🔥",
    Anxious: "Try a grounding exercise. You’re safe here 🌿",
    Tired: "Rest is productive too 😴",
    Motivated: "Let’s channel that energy into something great 🚀"
  };
  
  // Button behavior
  feelingButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Reset all buttons
      feelingButtons.forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.color = '#000';
      });
  
      // Highlight clicked one
      button.style.backgroundColor = '#000';
      button.style.color = 'white';
  
      // Show message
      const feeling = button.textContent.trim();
      messageBox.textContent = feelingResponses[feeling] || "You're doing great!";
    });
  });