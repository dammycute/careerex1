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

// Get Request endpoint 
app.get("/",(request, response)=>{
    response.send("Welcome to My first Node Server...")
})

// 1. Endpoint to only Antibiotic Drugs
app.get("/drugs/antibiotics", (req, res) => {
    const getAntibiotic = drugs.filter(drug => drug.category === "Antibiotic");
    res.json({
        message: "Successfully fetched antibiotics.",
        status: 200,
        data: getAntibiotic
    });
});

// 2. Endpoint to get the names of drugs and convert to lowercase 
app.get("/drugs/names", (req, res) =>{
    const lowerCaseDrugs = drugs.map((drug) =>drug.name.toLocaleLowerCase())
    res.json({
        message: "The get request was successfully executed...",
        status: 200,
        data: lowerCaseDrugs
    })
})
// 3. Get Drugs by Category Endpoint
app.post("/drugs/by-category", (req, res) => {
    const { category } = req.body;
    const drugByCategory = drugs.filter(drug => drug.category === category);
    res.json({
        message: `Drugs under category: ${category}`,
        status: 200,
        data: drugByCategory
    });
});



// 4. Endpoint returning manufacturer names as response 
app.get("/drugs/names-manufacturers", (req, res) => {
    const data = drugs.map(drug => ({
        name: drug.name,
        manufacturer: drug.manufacturer
    }));
    res.json({
        message: "Successfully fetched Name - Manufacturer pairs.",
        status: 200,
        data
    });
});


// 5. Endpoint to get drugs with isPrescriptionOnly to be true 
app.get("/drugs/prescription", (req, res) =>{
    const prescriptionOnlyDrugs = drugs.filter((drug) => drug.isPrescriptionOnly)
    res.json({
        message: "The get request was successfully executed...",
        status: 200,
        prescriptionOnlyDrugs
    })
})

// 6. Endpoint Returning a formatted array 
app.get("/drugs/formatted", (req, res) =>{
    formattedDrugs = drugs.map((drug) => {
        return `Drug: ${drug.name} - ${drug.dosageMg}mg`
    })
    res.json({
        message: "The get request was successfully executed...",
        status: 200,
        formattedDrugs
    })
})


// 7. Endpoint returning drugs with less than 50 in stock value 
app.get("/drugs/low-stock", (req, res) =>{
    lowStock = drugs.filter((drug) => {
        return drug.stock < 50
    })
    res.json({
        message: "The get request was successfully executed...",
        status: 200,
        lowStock
    })
})

// 8. Endpoint to get drugs with isPrescriptionOnly to be false
app.get("/drugs/non-prescription", (req, res) =>{
    const drugsNotPrescriptionOnly = drugs.filter((drug) => !drug.isPrescriptionOnly)
    res.json({
        message: "The get request was successfully executed...",
        status: 200,
        drugsNotPrescriptionOnly
    })
})

// 9. Manufacturer Count Endpoint 
app.post("/drugs/manufacturer-count", (req, res) => {
    const { manufacturer } = req.body;
    const count = drugs.filter(drug => drug.manufacturer === manufacturer).length;
    res.json({
        message: `Drugs produced by ${manufacturer}: ${count}`,
        status: 200,
        count
    });
});


// 10. Endpoint to Count and return numbers of Analgesic drugs 
app.get("/drugs/count-analgesics", (req, res) => {
    const count = drugs.filter(drug => drug.category === "Analgesic").length;
    res.json({
        message: "Count of analgesic drugs.",
        status: 200,
        count
    });
});