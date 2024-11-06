  async function translate() {
    const text = document.getElementById('textInput').value;
    const sourceLanguage = document.getElementById('sourceLanguage').value;
  
    try {
      const response = await fetch('https://europe-west1-pretalab-aprofunda-crislaine.cloudfunctions.net/translatePoem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, sourceLanguage }),
      });

      const data = await response.json();
      document.getElementById('output').innerText = data.translation || 'Erro ao traduzir o texto.';
    } catch (error) {
      document.getElementById('output').innerText = 'Erro de conexão com a função de tradução.';
    }
}
