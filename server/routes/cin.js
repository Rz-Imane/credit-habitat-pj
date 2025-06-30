const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const fs = require('fs');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('cin'), async (req, res) => { // <--- ATTENTION: c'est "/" ici!
  try {
    const imgPath = req.file.path;
    const { data: { text } } = await Tesseract.recognize(imgPath, 'fra');

    // Extraction simple (à affiner)
    const nom = text.match(/EL\s+ALAMI|[A-Z]{2,}/g)?.[0] || "";
    const prenom = text.match(/ZAIN(EB)?|[A-Z]{2,}/g)?.[1] || "";
    const dateNaissance = text.match(/N[ée]+e? la (\d{2}\/\d{2}\/\d{4})/i)?.[1] || "";
    const lieu = text.match(/à\s+([A-ZÉÈ ]+)/i)?.[1]?.trim() || "";
    const cin = text.match(/N°\s*([A-Z0-9]+)/i)?.[1] || "";

    fs.unlink(imgPath, () => {});

    if (nom && prenom && dateNaissance && cin) {
      return res.json({ success: true, nom, prenom, dateNaissance, lieu, cin });
    }
    return res.json({ success: false, debugText: text });
  } catch (err) {
    if (req.file && req.file.path) fs.unlink(req.file.path, () => {});
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
