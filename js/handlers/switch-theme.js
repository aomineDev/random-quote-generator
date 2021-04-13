export default function handleSwitchTheme () {
  if (document.body.dataset.theme === 'dark') {
    document.body.dataset.theme = 'light'
  } else {
    document.body.dataset.theme = 'dark'
  }
}
