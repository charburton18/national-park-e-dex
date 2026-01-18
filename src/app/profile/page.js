import { NavBar } from "../_components/NavBar"
import Image from "next/image"

export default function ProfilePage() {
  // Hardcoded demo data
  const user = {
    name: "Demo User",
    profileImage: "/Profile-user-male-1.png"
  }

  const stats = {
    parksVisited: 12,
    totalParks: 24,
    achievements: 18
  }

  const specialAwards = [
    { id: 1, name: "Park Achievement", image: "/Park-acheivement-stamp.png" },
    { id: 2, name: "Overlook Achievement", image: "/Overlook-achievement-stamp.png" },
    { id: 3, name: "Hike Achievement", image: "/Hike-achievment-stamp.png" }
  ]

  const recentlyVisitedParks = [
    { id: 1, name: "Grand Canyon", image: "/Grand-Canyon-Stamp.png", dateVisited: "12/15/2025" },
    { id: 2, name: "Petrified Forest", image: "/Petrified-forest.png", dateVisited: "12/10/2025" },
    { id: 3, name: "Canyon de Chelly", image: "/Canyon-de-Chelly-stamp.png", dateVisited: "12/01/2025" },
    { id: 4, name: "Glen Canyon", image: "/Glen-Canyon-stamp.png", dateVisited: "11/28/2025" }
  ]

  return (
    <div className="min-h-screen pb-32 px-4 pt-8">
      {/* Profile Section */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#1D5D36] shadow-lg">
          <Image
            src={user.profileImage}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#3D3D3D]">{user.name}</h1>
          <div className="flex gap-4 mt-2">
            <div className="text-sm">
              <span className="font-semibold text-[#1D5D36]">{stats.parksVisited}</span>
              <span className="text-[#3D3D3D]"> Parks</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-[#1D5D36]">{stats.achievements}</span>
              <span className="text-[#3D3D3D]"> Achievements</span>
            </div>
          </div>
        </div>
      </div>

      {/* Special Awards Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#3D3D3D] mb-4">Special Awards</h2>
        <div className="flex gap-4">
          {specialAwards.map((award) => (
            <div key={award.id} className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-[#C09635] shadow-md">
              <Image
                src={award.image}
                alt={award.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Date Stamped / Last Visit Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#3D3D3D] mb-4">Last Visit</h2>
        <div className="bg-white rounded-2xl p-4 shadow-md">
          {recentlyVisitedParks.length > 0 && (
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#1D5D36]">
                <Image
                  src={recentlyVisitedParks[0].image}
                  alt={recentlyVisitedParks[0].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#3D3D3D]">{recentlyVisitedParks[0].name}</h3>
                <p className="text-sm text-[#3D3D3D]/70">{recentlyVisitedParks[0].dateVisited}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recently Visited Parks - Small Bubbles */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#3D3D3D] mb-4">Recently Visited</h2>
        <div className="flex gap-3">
          {recentlyVisitedParks.slice(1).map((park) => (
            <div
              key={park.id}
              className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#C09635] shadow-md"
            >
              <Image
                src={park.image}
                alt={park.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <NavBar />
    </div>
  )
}
