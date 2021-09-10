const messageContainer = document.getElementById('message-container');
const formMessage = document.getElementById('form-message');
const inputField = document.getElementById('write-message');

formMessage.onsubmit = messageSent;

function messageSent(e) {
  e.preventDefault();
  strangerMessaging();
  inputField.value = '';
}

function strangerMessaging() {
  const test = ` 
    <div class="stranger">
        <img src="./img/femaleAvatar.svg" class="profile-img" alt="">
        <span class="txt-msg">${inputField.value}</span>
        <button class="replay"><i class="fas fa-reply p-event"></i></button>
    </div>`;
  messageContainer.insertAdjacentHTML('beforeend', test);
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('replay')) {
    console.log('YAS');
    console.log(e.target.parentElement);
    let clone = e.target.parentElement.cloneNode(true);
    console.log('clone', clone);
    let reply = `
            <div class="reply-msg">
                <div  class="replied-msg">
                    ${clone.outerHTML}
                </div>
                <span class="txt-msg">Testing the reply functionality.</span>
            </div>
        `;
    messageContainer.insertAdjacentHTML('beforeend', reply);
  }
});

// Create Template Navigation
const navigation = document.getElementById('navigation');
const templateList = document.createElement('ul');
templateList.classList.add('choose-template');
templateList.id = 'choose-template';
templateList.innerHTML = `
    <li class="template-option">
        <button class="template-change"><i class="fas fa-water"></i> Wavy Dream</button>
    </li>
    <li class="template-option">
        <button class="template-change"><i class="fas fa-fan"></i> Flower Bud</button>
    </li>
    <li class="template-option">
        <button class="template-change"><i class="fas fa-moon"></i> Moon Light</button>
    </li>
   
`;
navigation.insertAdjacentHTML('beforeend', templateList.outerHTML);

// Add The Template Functionality
const head = document.getElementsByTagName('head')[0];
const changeTemplate = document.querySelectorAll('.template-change');
const wavydream = {
  '--background-img': `url('https://images.unsplash.com/photo-1526675849333-144a81e4670d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80')`,
  '--main-gradient': 'linear-gradient(to right, #EAECC6, #2BC0E4)',
  '--user-text-gradient': 'linear-gradient(to left, #FFFDE4, #005AA7)',
  '--you-text-gradient': 'linear-gradient(to right, #FFFDE4, #005AA7)',
  '--reply-text-gradient': 'linear-gradient(to right, #ACB6E5, #74ebd5)',
  '--main-color': '#EAECC6',
  '--second-color': '#2BC0E4',
  '--active-color': '#005AA7',
};
const flowerbud = {
  '--background-img': `url('https://images.unsplash.com/photo-1498752138506-52a681c54b5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
  '--main-gradient': 'linear-gradient(to right, #ffa751, #ffe259)',
  '--user-text-gradient': 'linear-gradient(to left, #F09819, #FF512F)',
  '--you-text-gradient': 'linear-gradient(to right, #F09819, #FF512F)',
  '--reply-text-gradient': 'linear-gradient(to right, #799F0C, #FFE000)',
  '--main-color': '#799F0C',
  '--second-color': '#FF512F',
  '--active-color': '#ffa751',
};
const moonlight = {
  '--background-img': `url('https://images.unsplash.com/photo-1600858388785-d51024fb8f04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80')`,
  '--main-gradient': 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
  '--user-text-gradient': 'linear-gradient(to left, #636fa4, #e8cbc0)',
  '--you-text-gradient': 'linear-gradient(to right, #636fa4, #e8cbc0)',
  '--reply-text-gradient': 'linear-gradient(to bottom, #e9e4f0, #d3cce3)',
  '--main-color': '#6c63ff',
  '--second-color': '#e8cbc0',
  '--active-color': '#636fa4',
};

changeTemplate.forEach((template) => {
  const templateChoice = template.innerText.split(' ').join('').toLowerCase();
  console.log(templateChoice);
  template.addEventListener('click', () => {
    removeActiveTemplate();
    template.classList.add('active');
    changeTemplateStylesheet(templateChoice);
  });
});

function removeActiveTemplate() {
  changeTemplate.forEach((template) => {
    template.classList.remove('active');
  });
}

function changeTemplateStylesheet(templateChoice) {
  switch (templateChoice) {
    case 'wavydream':
      setAttributes(wavydream);
      break;
    case 'flowerbud':
      setAttributes(flowerbud);
      break;
    case 'moonlight':
      setAttributes(moonlight);
      break;
  }
}

function setAttributes(attributes) {
  for (const value in attributes) {
    document.documentElement.style.setProperty(value, attributes[value]);
  }
}
