import patients from '../../data/patients';
import { PatientEntry, NonSensitivePatientEntry } from '../types';

const getEntries = (): PatientEntry [] => {
  return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry []  => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addEntry
};