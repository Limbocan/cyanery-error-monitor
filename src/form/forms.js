import Table from './table.js';

const Forms = function (feID, update) {
  this.norTable = new Table(feID, 'nor', update);
  this.errTable = new Table(feID, 'err', update);
};
Forms.prototype = {
  addLine(type, data) {
    const table = (type === 'err' || type === 'error' || type === 'ERROR') ? this.errTable : this.norTable;
    // 防止阻塞
    setTimeout(() => {
      table.addLine(data);
    }, 0);
  },
};

export default Forms;
