async function quickstart (projectId = 'io.ionic.starter') {
    const {Translate} = require('@google-cloud/translate');
    const translate = new Translate({projectId});
    const text = 'Hello, world!';
    const target = 'ru';
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  }