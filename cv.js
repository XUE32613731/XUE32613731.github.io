// A lightweight UI challenge, not access control: static PDF URLs remain public.
const cvPage = (() => {
  const root = document.querySelector('#cv-content');
  const dialog = document.querySelector('#cv-verification');
  let copy;
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  function verify(documentInfo, label) {
    dialog.replaceChildren();
    const title = element('h2', 'cv-dialog-title', copy.verifyTitle);
    title.id = 'cv-dialog-title';
    const note = element('p', 'cv-dialog-note', copy.verifyNote);
    note.id = 'cv-dialog-note';
    const selected = element('p', 'cv-selected', label);
    const form = element('form', 'cv-challenge');
    const a = Math.floor(Math.random() * 12) + 1;
    const b = Math.floor(Math.random() * 12) + 1;
    const question = element('p', 'cv-question', `${a} + ${b} = ?`);
    question.id = 'cv-question';
    const answerLabel = element('label', 'cv-answer-label', copy.answerLabel);
    answerLabel.htmlFor = 'cv-answer';
    const input = element('input', 'cv-answer');
    input.id = 'cv-answer';
    input.type = 'text';
    input.inputMode = 'numeric';
    input.pattern = '[0-9]+';
    input.maxLength = 3;
    input.required = true;
    input.autocomplete = 'off';
    input.setAttribute('aria-describedby', 'cv-question cv-error');
    const error = element('p', 'cv-error');
    error.id = 'cv-error';
    error.setAttribute('aria-live', 'polite');
    const actions = element('div', 'cv-actions');
    const submit = element('button', 'cv-button cv-primary', copy.submit);
    submit.type = 'submit';
    const cancel = element('button', 'cv-button', copy.cancel);
    cancel.type = 'button';
    cancel.addEventListener('click', () => dialog.close());
    actions.append(submit, cancel);
    form.append(question, answerLabel, input, error, actions);
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!/^\d+$/.test(input.value.trim()) || Number(input.value) !== a + b) {
        error.textContent = copy.error;
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        input.select();
        return;
      }
      title.textContent = copy.success;
      note.textContent = copy.ready;
      const links = element('div', 'cv-actions');
      const open = element('a', 'cv-button cv-primary', `${copy.open} ↗`);
      open.href = documentInfo.file;
      open.target = '_blank';
      open.rel = 'noopener noreferrer';
      open.setAttribute('aria-label', `${copy.open} — ${label} — ${copy.newTab}`);
      const download = element('a', 'cv-button', `${copy.download} ↓`);
      download.href = documentInfo.file;
      download.download = documentInfo.file.split('/').pop();
      const close = element('button', 'cv-button', copy.close);
      close.type = 'button';
      close.addEventListener('click', () => dialog.close());
      links.append(open, download, close);
      form.replaceWith(links);
      open.focus();
    });
    dialog.append(title, note, selected, form);
    dialog.showModal();
    input.focus();
  }
  function render(language, active) {
    if (dialog.open) dialog.close();
    dialog.replaceChildren();
    root.hidden = !active;
    document.querySelector('#inner-page').classList.toggle('cv-page', active);
    if (root.hidden) return;
    copy = Object.fromEntries(Object.entries(cvCopy).map(([key, value]) => [key, value[language]]));
    root.replaceChildren(element('p', 'cv-intro', copy.intro));
    const grid = element('div', 'cv-grid');
    const orderedDocuments = [...cvDocuments].sort((a, b) => Number(b.locale === language) - Number(a.locale === language));
    orderedDocuments.forEach(documentInfo => {
      const label = documentInfo.label[language];
      const card = element('article', 'cv-card');
      card.append(element('span', 'cv-format', copy.format));
      card.append(element('h2', 'cv-card-title', label));
      card.append(element('p', 'cv-language', documentInfo.language));
      const button = element('button', 'cv-button cv-primary', `${copy.access} ↗`);
      button.type = 'button';
      button.setAttribute('aria-label', `${copy.access} — ${label}`);
      button.addEventListener('click', () => verify(documentInfo, label));
      card.append(button);
      grid.append(card);
    });
    const materials = element('p', 'cv-materials', copy.materialsNote);
    const contact = element('a', 'cv-contact', copy.contactMe);
    contact.href = '#/contact';
    materials.append(contact);
    root.append(grid, materials);
  }
  return { render };
})();
