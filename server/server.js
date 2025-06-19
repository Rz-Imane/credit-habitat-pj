const express = require('express');
const cors = require('cors');
const app = express();
const formulaireRoutes = require('./routes/formulaire');

app.use(cors());
app.use(express.json());
app.use('/api/formulaire', formulaireRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const propositionRoutes = require('./routes/proposition');
app.use('/api/proposition', propositionRoutes);
