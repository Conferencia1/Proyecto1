interface ScriptureProps {
  readings: string[];
}

export default function Scripture({ readings }: ScriptureProps) {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Lecturas de las Escrituras</h3>
      <ul className="list-disc list-inside space-y-1">
        {readings.map((reading, index) => (
          <li key={index}>{reading}</li>
        ))}
      </ul>
    </section>
  );
}