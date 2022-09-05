import ShowPage from './showpage';

function Panel(csi) {
  this.csi = csi;
}

Panel.prototype = {
  init(opts) {
    const showPage = new ShowPage(this.csi.report.bind(this.csi), opts);

    const keyIndex = opts.key || 6
    document.addEventListener('keydown', (event) => {
      event = event || window.event;
      if (event.ctrlKey && parseInt(event.key, 10) === keyIndex) {
        showPage.toggleShow();
      }
    });

    return showPage.toggleShow.bind(showPage)
  },
};

export default Panel;
