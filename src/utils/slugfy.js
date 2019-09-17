const slugfy = (word, options = { hyphens: true, url: true }) => {
  const hyphens = typeof options.hyphens !== 'undefined' ? options.hyphens : true;
  const url = typeof options.url !== 'undefined' ? options.url : true;
  const from = 'ªãàáäâẽèéëêìíïîºõòóöôøùúüûñç';
  const to = 'aaaaaaeeeeeiiiiooooooouuuunc';

  let w = word
    .toLowerCase()
    .trim()
    .replace(/\$/g, 's');

  if (url) {
    w = w
      .replace(/1º/g, 'primeiro')
      .replace(/2º/g, 'segundo')
      .replace(/(\d)%/g, '$1-por-cento')
      .replace(/%/g, 'porcentagem');
  }

  for (let i = 0, l = from.length; i < l; i += 1) {
    w = w.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  if (hyphens) {
    return w.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  return w.replace(/[^a-z0-9]+/g, '');
};

export default slugfy;
