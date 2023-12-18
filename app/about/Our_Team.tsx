import { members } from "@/constants";

const Our_Team = () => {
  return (
    <section className="flex h-fit flex-col items-center justify-center py-20">
      <div className="w-[80%] sm:w-[70%] md:w-[60%]">
        <span className="text-xs md:text-base">Our Team</span>
        <h2 className="my-4 text-[1.7rem] sm:text-[2.5rem] md:text-[3rem]">
          Meet the Men Behind Fundflit
        </h2>
        <p className="text-base leading-8">
          Our team is comprised of individuals who bring a wealth of experience,
          creativity, and dedication to the table. Together, we are united by a
          shared vision of empowering founders and fostering a vibrant
          community. Get to know the faces behind Fundflit.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap items-start justify-between gap-2 px-8 xs:flex-nowrap xs:gap-4 sm:justify-center md:gap-5 xl:gap-10 xl:px-24">
        {members.map((member) => (
          <div key={member.id} className="mb-10 w-[47%] xs:w-[25%]">
            <div className="h-[11rem] w-full sm:h-[12rem] md:h-[20rem]">
              <img
                src={member.imgUrl}
                alt=""
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <p className="mb-0 mt-6 sm:mt-10 md:mb-2 md:text-[1.75rem]">
              {member.name}
            </p>
            <small className="text-gray-30 md:text-[1.25rem]">
              {member.position}
            </small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Our_Team;
