document.querySelectorAll('button[data-open-dialog]').forEach(trigger => {
  trigger.addEventListener('click', ev => {
    const dialogId = trigger.dataset.openDialog;
    if (!dialogId) 
      return;
    const dialog = document.getElementById(dialogId);
    if (!(dialog instanceof HTMLDialogElement)) 
      return;
    dialog.showModal();
  })
});

document.querySelectorAll('button[data-close-dialog]').forEach((button) => {
  const dialog = button.closest('dialog');
  if (!dialog) 
    return;

  const closeData = button.dataset.closeDialog;
  button.addEventListener('click', () => {
    dialog.close(closeData);
  });
})