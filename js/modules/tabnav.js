export default class TabNav {
  // Recebe a lista de imagens do construtor;
  // Recebe a lista de sections contendo o conteudo do construtor.
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // Ative a tab de acordo com o index da mesma. Além de adicionar uma classe com a animação.

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // Adiciona os eventos as Tabs

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  // Caso exite menu e conteudo, adiciona a classa ativo a primeira seção do site.
  // Adiciona o evento aos item do menu, que assim que clicado, chama a função activeTab.

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
