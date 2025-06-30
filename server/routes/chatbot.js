const express = require('express');
const fetch = require('node-fetch'); // version 2 obligatoire !
const router = express.Router();

router.post('/', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Tu es un assistant crédit immobilier Maroc." },
          { role: "user", content: message }
        ]
      })
    });
    const data = await response.json();
    // Pour debug :
    console.log("Réponse OpenAI:", data);
    const answer = data.choices?.[0]?.message?.content || "Erreur IA.";
    res.json({ answer });
  } catch (e) {
    console.error("Erreur route /api/chatbot :", e);
    res.status(500).json({ answer: "Erreur serveur !" });
  }
});

module.exports = router;
