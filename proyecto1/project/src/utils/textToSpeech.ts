export function getReadableText(readings: string[], patristicReading: any, prayer: any): string {
  const readingsText = `Lecturas de las Escrituras: ${readings.join('. ')}`;
  
  const patristicText = `Lectura Patrística. ${patristicReading.title}. ${patristicReading.content} ${patristicReading.author}`;
  
  const prayerText = `Oración. ${prayer.response} ${prayer.verses.join(' ')} Oremos: ${prayer.finalPrayer}`;
  
  return `${readingsText}. ${patristicText}. ${prayerText}`;
}