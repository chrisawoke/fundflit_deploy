import { missions } from "@/constants"

const Our_Mission = () => {
  return (
    <section className='flex h-fit flex-col items-center justify-center p-20 px-5 md:px-10 lg:px-20'>
        <h2 className='my-5 w-[90%] text-center text-[1.7rem] sm:text-[2.2rem] md:text-[3rem] lg:w-[80%]'>Our mission and vision</h2>

        <div className="mt-5 flex w-[90%] flex-col items-center justify-between gap-5 border-t-2 border-black-100 py-10 lg:w-[80%]">
            {missions.map((mission) => (
                <div key={mission.highlight} className="mb-4 flex w-full flex-col justify-center gap-5 md:mb-0 md:flex-row md:gap-8">
                <div className="w-[45%]">
                   <p className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]">Our <span className="text-coral-green">{mission.highlight}</span></p>
                </div>
                <div className="md:w-[55%]">
                    <p className="text:sm leading-6 md:text-base md:leading-8">{mission.detail}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Our_Mission