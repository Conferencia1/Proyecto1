interface PatristicReadingProps {
  title: string;
  content: string;
  author: string;
}

export default function PatristicReading({ title, content, author }: PatristicReadingProps) {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Lectura Patrística</h3>
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-gray-700 mb-4">{content}</p>
      <p className="text-gray-600 italic">{author}</p>
    </section>
  );
}