import Calendar from '../components/Calendar';
import Scripture from '../components/Scripture';
import PatristicReading from '../components/PatristicReading';
import Prayer from '../components/Prayer';
import TextToSpeech from '../components/TextToSpeech';
import { getReadableText } from '../utils/textToSpeech';

const days = [
  { date: '18', day: 'Sáb', isActive: false },
  { date: '19', day: 'Dom', isActive: false },
  { date: '20', day: 'Lun', isActive: true },
  { date: '21', day: 'Mar', isActive: false },
  { date: '22', day: 'Mié', isActive: false },
  { date: '23', day: 'Jue', isActive: false },
  { date: '24', day: 'Vie', isActive: false },
  { date: '25', day: 'Sáb', isActive: false }
];

const readings = [
  'Génesis 1,1-5',
  'Salmo 148,1.3.9-14',
  'Romanos 8,19-23'
];

const patristicReading = {
  title: 'De la tradición griega',
  content: 'Dios que no puede ser visto con ojos humanos, se ve y se conoce gracias a su providencia y a sus obras. De la misma manera que cuando uno ve en el mar un barco completamente equipado entrando al puerto asume que hay a bordo un piloto que lo conduce, así también hay que pensar que Dios pilota todas las cosas, aunque no pueda ser contemplado con ojos carnales, porque es inabarcable.',
  author: '- Teófilo de Antioquía [siglo II], Ad Autolycus, I:5'
};

const prayer = {
  response: '℟ ¡Bendito seas, Señor!',
  verses: [
    'Te alabamos y te damos gracias,\nDios de amor inquebrantable,\npor los grandes signos de tu favor\ny tu misericordia para con toda la creación. ℟',
    'Tú has hecho todas las cosas.\nTú las declaraste como buenas,\nporque tu Espíritu habita en todas ellas\ny te pertenecen, oh Señor, que amas a los vivos. ℟',
    'Confesamos, oh Señor, tu gloria\nen la inmensidad de los cielos estrellados del universo\ny en la más pequeña de las semillas de vida.\nTe damos gracias por las obras de tus manos\ny por la creación de todos los pueblos. ℟',
    'Bendito seas por el aire que nos da la vida.\nBendito seas por la tierra que nos alimenta.\nBendito seas por el agua que sacia nuestra sed.\nBendito seas por el fuego que nos calienta. ℟',
    'Dando voz a toda la creación y acogiendo todo dolor y alegría,\nte glorificamos y te damos gracias.\nSeñor Dios, tú hiciste todas las cosas,\nY serán transfiguradas cuando las vistas de tu gloria. ℟'
  ],
  finalPrayer: 'Señor Dios, Padre de las luces,\nfortalece nuestros corazones en la espera y la esperanza\nmientras trabajamos por la unidad y juntos buscamos la armonía de toda la creación.\nQue seamos lámparas encendidas,\nhasta el día de la venida de tu Hijo en la gloria,\ncon todos los santos en el reino eterno.\nBendito seas, ahora y siempre, y por los siglos de los siglos. AMÉN.'
};

export default function Octavario() {
  const readableText = getReadableText(readings, patristicReading, prayer);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Calendar days={days} />
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <TextToSpeech 
          title="DÍA 2"
          subtitle="La creación como obra de Dios"
          content={readableText}
        />
        <Scripture readings={readings} />
        <PatristicReading {...patristicReading} />
        <Prayer {...prayer} />
      </div>
    </div>
  );
}