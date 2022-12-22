const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

const cardsButton = document.querySelectorAll('.btn-border');

const myProjects = [

  {
    title: 'Tonic',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImage: 'images/dt-tonic.png',
    technology: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
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
    featuredImage: 'images/dt-multi-post.png',
    technology: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
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
    featuredImage: 'images/dt-fb.png',
    technology: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    liveVersion: 'https://maleemh.github.io/muhammad-aleem-portfolio/',
    sourceCode: 'https://github.com/MAleemH/muhammad-aleem-portfolio',
  },

  {
    title: 'Uber Navigation',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImage: 'images/dt-uber.png',
    technology: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
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
  const popupImage = popContainer.querySelector('.popup-image');
  popupImage.src = project.featuredImage;
  const popupThechnologies = popContainer.querySelectorAll('.tech2');
  popupThechnologies.forEach((item, i) => {
    item.textContent = project.technology[i];
  });
  const popupLiveVersion = popContainer.querySelector('#live');
  popupLiveVersion.href = project.liveVersion;
  const popupSourceCode = popContainer.querySelector('#source');
  popupSourceCode.href = project.sourceCode;
}));
// for mobile
const myMobProjects = [

  {
    title: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    featuredImage: 'images/portfolio_1.png',
    technology: ['html', 'css', 'javaScript'],
    liveVersion: 'https://maleemh.github.io/muhammad-aleem-portfolio/',
    sourceCode: 'https://github.com/MAleemH/muhammad-aleem-portfolio',
  },

  {
    title: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    featuredImage: 'images/portfolio_2.png',
    technology: ['html', 'css', 'javaScript'],
    liveVersion: 'https://maleemh.github.io/muhammad-aleem-portfolio/',
    sourceCode: 'https://github.com/MAleemH/muhammad-aleem-portfolio',
  },

  {
    title: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    featuredImage: 'images/portfolio_3.png',
    technology: ['html', 'css', 'javaScript'],
    liveVersion: 'https://maleemh.github.io/muhammad-aleem-portfolio/',
    sourceCode: 'https://github.com/MAleemH/muhammad-aleem-portfolio',
  },

  {
    title: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    featuredImage: 'images/portfolio_4.png',
    technology: ['html', 'css', 'javaScript'],
    liveVersion: 'https://maleemh.github.io/muhammad-aleem-portfolio/',
    sourceCode: 'https://github.com/MAleemH/muhammad-aleem-portfolio',
  },

];
cardsButton.forEach((item, i) => item.addEventListener('click', () => {
  const Mobproject = myMobProjects[i];
  const popContainer = document.querySelector('.modal');
  const popupTitle = popContainer.querySelector('.title');
  popupTitle.textContent = Mobproject.title;
  const popupDescription = popContainer.querySelector('.description');
  popupDescription.textContent = Mobproject.description;
  const popupImage = popContainer.querySelector('.popup-portfolio-image');
  popupImage.src = Mobproject.featuredImage;
  const popupThechnology = popContainer.querySelectorAll('.tech');
  popupThechnology.forEach((item, i) => {
    item.textContent = Mobproject.technology[i];
  });
  const popupLiveVersion = popContainer.querySelector('#live');
  popupLiveVersion.href = Mobproject.liveVersion;
  const popupSourceCode = popContainer.querySelector('#source');
  popupSourceCode.href = Mobproject.sourceCode;
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