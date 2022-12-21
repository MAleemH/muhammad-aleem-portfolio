const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

const cardsButton = document.querySelectorAll('.btn-border');

const myProjects = [

  {
    title: 'Uber Navigation',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImage: 'images/dt-tonic.png',
    technology: ['Html', 'Css', 'javaScript', 'Bootstrap', 'GitHub', 'Codepen'],
    liveVersion: 'https://maleemh.github.io/muhammad-aleem-portfolio/',
    sourceCode: 'https://github.com/MAleemH/muhammad-aleem-portfolio',
  },

  {
    title: 'Multi-Post Stories Gain+Glory',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImage: 'images/dt-multi-post.png',
    technology: ['CodeKit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://maleemh.github.io/muhammad-aleem-portfolio/',
    sourceCode: 'https://github.com/MAleemH/muhammad-aleem-portfolio',
  },

  {
    title: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImage: 'images/dt-fb.png',
    technology: ['CodeKit', 'GitHub', 'javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://maleemh.github.io/muhammad-aleem-portfolio/',
    sourceCode: 'https://github.com/MAleemH/muhammad-aleem-portfolio',
  },

  {
    title: 'Facebook 360',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImage: 'images/dt-uber.png',
    technology: ['Html', 'Ruby on rails', 'javascript', 'Css', 'Terminal', 'Codepen'],
    liveVersion: 'https://maleemh.github.io/muhammad-aleem-portfolio/',
    sourceCode: 'https://github.com/MAleemH/muhammad-aleem-portfolio',
  },

];

cardsButton.forEach((item, i) => item.addEventListener('click', () => {
  
  const project = myProjects[i];
  const popContainer = document.querySelector('.modal');

  const popupTitle = popContainer.querySelector('.title');
  popupTitle.textContent = project.title;
  const popupDescription = popContainer.querySelector('.description');
  popupDescription.textContent = project.description;
  const popupImage = popContainer.getElementsByClassName('popup-image');
  popupImage.src = project.featuredImage;
  const popupThechnology = popContainer.querySelectorAll('.dt-languages');
  popupThechnology.forEach((item, i) => {
    item.textContent = project.technology[i];
  });
  const popupLiveVersion = popContainer.querySelector('.popup-button-live');
  popupLiveVersion.href = project.liveVersion;
  const popupSourceCode = popContainer.querySelector('.popup-button-source');
  popupSourceCode.href = project.sourceCode;
}));

function openModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.add('active');
  overlay.classList.add('active');
}
function closeModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});