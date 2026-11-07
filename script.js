const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('open', !isExpanded);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

const heroSlides = [
  {
    heading: ['Pure Wild', 'Honey'],
    subtitle: 'Good Substitute\nFor Sugar',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1100&q=85',
    alt: 'A jar of golden raw honey',
  },
  {
    heading: ['Straight from', 'the Hive'],
    subtitle: 'Wild-Sourced\nNatural Goodness',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1100&q=85',
    alt: 'Golden wildflower honey',
  },
  {
    heading: ['Sweeten', 'Naturally'],
    subtitle: 'Pure Honey\nFor Every Day',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1100&q=85',
    alt: 'Golden honey from the wild',
  },
];

document.querySelectorAll('.hero-dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    const slide = heroSlides[index];
    document.querySelectorAll('.hero-dot').forEach((item) => {
      item.classList.remove('selected');
      item.setAttribute('aria-pressed', 'false');
    });
    dot.classList.add('selected');
    dot.setAttribute('aria-pressed', 'true');
    document.querySelector('.hero').dataset.slide = String(index + 1);
    document.querySelectorAll('.hero h1 span').forEach((line, lineIndex) => {
      line.textContent = slide.heading[lineIndex];
    });
    document.querySelector('.hero-subtitle').textContent = slide.subtitle;
    document.querySelector('.hero-art img').src = slide.image;
    document.querySelector('.hero-art img').alt = slide.alt;
  });
});

const cartStatus = document.querySelector('.cart-status');
let cartCount = 0;
let statusTimer;

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1;
    const productName = button.getAttribute('aria-label').replace('Add ', '').replace(' to bag', '');
    cartStatus.textContent = `${productName} added to your bag · ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`;
    cartStatus.classList.add('visible');
    window.clearTimeout(statusTimer);
    statusTimer = window.setTimeout(() => cartStatus.classList.remove('visible'), 2600);
  });
});