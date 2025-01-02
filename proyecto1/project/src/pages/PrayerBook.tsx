export default function PrayerBook() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daily Prayers</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Morning Prayer</h2>
        <p className="text-gray-700">
          Dear Lord, thank you for this new day. Guide my steps and fill my heart with your love and wisdom.
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Evening Prayer</h2>
        <p className="text-gray-700">
          Heavenly Father, as this day comes to an end, I thank you for your protection and blessings.
        </p>
      </div>
    </div>
  );
}