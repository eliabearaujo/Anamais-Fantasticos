export default class ScrollSuave {
  // 1 - Constructor recebe os argumentos do objeto a ser construido.
  constructor(links, options) {
    // 2 - links internos recebe os links passado para o constructor.
    this.linksInternos = document.querySelectorAll(links);
    // 6 - Caso a pessoa não informa as opções, utilizamos a padrão.
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    // Aqui usamos o bind para mudar a refencia do this da função scrollToSection.
    // Sendo assim o this passa a ser o this do objeto e não perdemos a referencia do callback.
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  // 3 - Tranforma a função scrollToSection em um método do objeto ScrollSuave.

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    // 5 - Recebe as opções de ScrollSuave, como smoth e inicio do bloco.
    section.scrollIntoView(this.options);
  }

  // 4 - Usando o this no linksInternos e no scrollToSection
  // pois estamos referenciando métodos e propriedades do próprio objeto.

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      // Usando o this da maneira que está abaixo, o this faz referencia ao link e não ao objeto.
      // Para resolver podemos usar uma arrow function, pois ela faz referencia ao elemento pai.
      // O problema em usar arrow function é que perdemos referencia a função.
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
