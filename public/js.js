async function sendTestRequest() {
  const response = await fetch(`https://avt-editor.lenflash.com/api/saveFile`, {
    method: 'POST',
    {'Content-Type': 'application/json'},
    {'Test'}
  });

  console.log(await response.json());
}