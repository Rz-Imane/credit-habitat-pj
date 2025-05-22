import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MonProfil {
  civilite?: string;
  nom?: string;
  prenom?: string;
  dateNaissance?: string;
  telephone?: string;
  clientBOA?: string;
  coEmprunt?: boolean;
}

interface MaSituation {
  employeur?: string;
  anciennete?: string;
  periodeEssai?: boolean;
  revenuMensuel?: number;
  mensualite?: number;
  revenusComplementaires?: boolean;
}

interface MonProjet {
  valeurBien?: number;
  dureeCredit?: number;
  montantCredit?: number;
  apport?: number;
  typeTaux?: string;
}

interface Personnalisation {
  differe?: string;
  jourPrelevement?: string;
  assurance?: boolean;
}

interface FormState {
  monProfil: MonProfil;
  maSituation: MaSituation;
  monProjet: MonProjet;
  personnalisation: Personnalisation;
}

const initialState: FormState = {
  monProfil: {},
  maSituation: {},
  monProjet: {},
  personnalisation: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateMonProfil(state, action: PayloadAction<MonProfil>) {
      state.monProfil = { ...state.monProfil, ...action.payload };
    },
    updateMaSituation(state, action: PayloadAction<MaSituation>) {
      state.maSituation = { ...state.maSituation, ...action.payload };
    },
    updateMonProjet(state, action: PayloadAction<MonProjet>) {
      state.monProjet = { ...state.monProjet, ...action.payload };
    },
    updatePersonnalisation(state, action: PayloadAction<Personnalisation>) {
      state.personnalisation = { ...state.personnalisation, ...action.payload };
    },
  },
});

export const {
  updateMonProfil,
  updateMaSituation,
  updateMonProjet,
  updatePersonnalisation,
} = formSlice.actions;

export default formSlice.reducer;
