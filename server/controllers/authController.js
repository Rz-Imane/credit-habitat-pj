// server/controllers/authController.js
const db = require('../models');
const Utilisateur = db.utilisateur;
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');

// Create transporter ONCE at the top (reuse it!)
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'reyna.tremblay32@ethereal.email',
        pass: 'vFttWh74EACRtGPHG2'
    }
});

// Signup: send code
exports.signup = async (req, res) => {
  try {
    const { mail } = req.body;
    let user = await Utilisateur.findOne({ where: { mail } });
    if (!user) {
      user = await Utilisateur.create({
        id: require('crypto').randomUUID(),
        mail,
        password: 'placeholder',
        codeHasBeenChanged: false,
      });
    }
    const accessCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = new Date(Date.now() + 10 * 60 * 1000);
    user.accessCode = accessCode;
    user.accessCodeExpiresAt = expires;
    await user.save();

    // Send the email and get the info object
    const info = await transporter.sendMail({
      from: '"Credit Habitat" <reyna.tremblay32@ethereal.email>',
      to: mail,
      subject: "Votre code d'accès",
      text: `Votre code de vérification est : ${accessCode}`
    });

    // ADD THIS LINE for the preview URL
    console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));

    res.json({ message: "Code envoyé par email" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Change password: verify code
exports.changePassword = async (req, res) => {
  try {
    const { email, accessCode, newPassword } = req.body;
    const user = await Utilisateur.findOne({ where: { mail: email } });
    if (
      !user ||
      user.accessCode !== accessCode ||
      !user.accessCodeExpiresAt ||
      new Date() > new Date(user.accessCodeExpiresAt)
    ) {
      return res.status(400).json({ error: "Code invalide ou expiré" });
    }

    const hash = await bcrypt.hash(newPassword, 10);
    user.password = hash;
    user.codeHasBeenChanged = true;
    user.accessCode = null;
    user.accessCodeExpiresAt = null;
    await user.save();

    res.json({ message: "Mot de passe changé avec succès" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;  // <-- receive password
    const user = await Utilisateur.findOne({ where: { mail: email } });
    if (!user) {
      return res.status(400).json({ error: "Email ou mot de passe incorrect" });
    }
    const valid = await bcrypt.compare(password, user.password);  // <-- compare with bcrypt
    if (!valid) {
      return res.status(400).json({ error: "Email ou mot de passe incorrect" });
    }
    res.json({ message: "Connexion réussie" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
