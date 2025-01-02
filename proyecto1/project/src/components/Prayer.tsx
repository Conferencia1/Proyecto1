interface PrayerProps {
  response: string;
  verses: string[];
  finalPrayer: string;
}

export default function Prayer({ response, verses, finalPrayer }: PrayerProps) {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Oración</h3>
      <div className="space-y-4">
        <p className="italic text-center">{response}</p>
        <div className="space-y-2">
          {verses.map((verse, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: verse.replace(/\n/g, '<br/>') }} />
          ))}
        </div>
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Oremos:</h4>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: finalPrayer.replace(/\n/g, '<br/>') }} />
        </div>
      </div>
    </section>
  );
}