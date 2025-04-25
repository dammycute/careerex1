const drugs = [

  { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
 
  { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
 
  { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
 
  { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
 
  { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
 
  { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
 
  { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
 
  { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
 
  { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
 
  { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
 
  { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
 
  { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
 
  { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
 
  { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
 
  { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
 
  { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
 
  { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
 
  { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
 
  { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
 
  { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }
 
 ];

//  1 The filter of category with Antibiotic 
const filterCategory = drugs.filter((drug) => drug.category === "Antibiotic");
console.log(filterCategory);

// 2. Returning Array of drugs in lowercase 
const lowerCaseDrugs = drugs.map((drug) => drug.name.toLowerCase());
console.log(lowerCaseDrugs);

// 3. A function that accepts a category and returns all drugs in that category 
const getDrugsByCategory = (category) => {
  const filteredDrugs = drugs.filter((drug) => drug.category === category);
  return filteredDrugs;
};
console.log(getDrugsByCategory("Supplement"));

// 4. Logging each drugs and it's Manufacturer
const logDrugs = (drugs) => {
  drugs.forEach((drug) => {
    console.log(`Drug: ${drug.name}, Manufacturer: ${drug.manufacturer}`);
  });
};
logDrugs(drugs);

// 5. Drugs that requires Prescription 
const prescriptionOnlyDrugs = drugs.filter((drug) => drug.isPrescriptionOnly);
console.log(prescriptionOnlyDrugs);


// 6. Returning a new array, each item should follow the format: "Drug: [name] - [dosageMg]mg".
const drugDetails = drugs.map((drug) => {
  return `Drug: ${drug.name} - ${drug.dosageMg}mg`;
});
console.log(drugDetails);


// 7. A function that returns an array of drug objects that have a stock less than 50
function stockLessThan50(){
  const drugsFilter = drugs.filter((drug) => drug.stock < 50);
  return drugsFilter;
}
console.log(stockLessThan50()); 


// 8. Return all drugs that are not prescription-based-only 
const drugsNotPrescriptionOnly = drugs.filter((drug) => !drug.isPrescriptionOnly);
console.log(drugsNotPrescriptionOnly);


// 9. Function that takes a manufacturer name and return how many drugs are from that company 
const manufacturerCount = (manufacturer) => {
  const count = drugs.filter((drug) => drug.manufacturer === manufacturer).length;
  return count;
};
console.log(manufacturerCount("Pfizer"));



// 10. Use forEach() to count how many drugs are Analgesics.
let analgesicCount = 0;
drugs.forEach((drug) => {
  if (drug.category === "Analgesic") {
    analgesicCount++;
  }
});
console.log(analgesicCount);
