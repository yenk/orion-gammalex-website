import Image from "next/image"

const TeamSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="team-member">
            <div className="relative overflow-hidden rounded-3xl mb-8 w-80 h-64 mx-auto">
              <Image src="/team/member1.jpg" alt="Team Member 1" layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
            <div className="relative overflow-hidden rounded-3xl mb-8 w-80 h-64 mx-auto">
              <Image src="/team/member2.jpg" alt="Team Member 2" layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>

          {/* Team Member 3 */}
          <div className="team-member">
            <div className="relative overflow-hidden rounded-3xl mb-8 w-80 h-64 mx-auto">
              <Image src="/team/member3.jpg" alt="Team Member 3" layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-xl font-semibold">Peter Jones</h3>
            <p className="text-gray-600">Marketing Manager</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const HomePage = () => {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="text-lg">This is the homepage.</p>
      </main>
      <TeamSection />
    </div>
  )
}

export default HomePage
