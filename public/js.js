async function sendTestRequest() {

  const headers = {};
  headers['Content-Type'] = 'application/json';

  const data = JSON.stringify('test');

  const response = await fetch(`https://avt-editor.lenflash.com/api/saveFile`, {
    method: 'POST',
    headers,
    data
  });

  console.log(await response.json());
}