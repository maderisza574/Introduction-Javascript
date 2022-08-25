const mtk = 80;
const bahasaindonesia = 80;
const bahasainggris = 70;
const ipa = 69;
let avg 
if (typeof mtk === "number" && typeof bahasaindonesia === "number" && typeof bahasainggris === "number" && typeof ipa === "number") {
  avg = (mtk + bahasaindonesia + bahasainggris + ipa)/4
  console.log('rata-rata = ' +avg);
} else {
  console.log('semua nilai harus terisi');
};
let grades = avg;
if (grades<= 100 && grades >= 90) {
    grades = "A";
  } else if ( grades <= 89 && grades >= 80) {
    grades = "B";
  } else if (grades <= 79 && grades >= 70) {
    grades = "C";
   } else if (grades <= 69 && grades >= 60) {
      grades = "D";
  } else if (grades <= 59 && grades >=0) {
    grades = "E";
  } else {
    grade = 'semua nilai harus terisi'
  };
  console.log('grades = ' +grades );

