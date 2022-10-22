const ScrollToFooter = () => {
  let footer = document.getElementById('footer');
  footer.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'start',
  });
};
