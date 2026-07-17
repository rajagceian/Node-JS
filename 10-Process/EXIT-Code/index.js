console.log("Checking file...");

const fileExists = false;

if (!fileExists) {
    console.error("Error: File not found!");
    process.exit(1); // manually failure signal diya
    // 0 => Success (Sab kuchh sahi chala)
    // 1 => Failure
}

console.log("File processed successfully"); // ye kabhi nahi chalega