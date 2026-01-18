import parks from '../data/parks.json';
export default function Stamps() {
  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-6">My Stamps</h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-6 px-4 justify-center">
        {parks.map((park) => (
          <div
            key={park.id}
            className="w-full aspect-square border-2flex items-center justify-center hover:scale-105 transition"
            style={{ borderColor: '#C09635' }}
          >
            <img
              src={park.stamp}
              alt={`${park.name} stamp`}
              className="w-[90%] h-[90%] object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
}

