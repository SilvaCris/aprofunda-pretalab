const { TranslationServiceClient } = require('@google-cloud/translate').v3;


const translationClient = new TranslationServiceClient();

exports.translatePoem = async (req, res) => {
    try {
        const { text, sourceLanguage } = req.body;
        const targetLanguage = 'pt';

        const [response] = await translationClient.translateText({
            parent: `projects/${process.env.PROJECT_ID}/locations/global`,
            contents: [text],
            mimeType: 'text/plain',
            sourceLanguageCode: sourceLanguage,
            targetLanguageCode: targetLanguage,
        });


        res.status(200).json({ translation: response.translations[0].translatedText });
    } catch (error) {
        console.error('Erro ao traduzir:', error);
        res.status(500).json({ error: 'Erro ao traduzir o texto' });
    }
};
