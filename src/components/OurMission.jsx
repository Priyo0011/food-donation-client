import b1 from "../assets/images/do1.jpg";
import b2 from "../assets/images/do2.jpg";
import b3 from "../assets/images/do.jpg";

const OurMission = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-20">
            <h1 className="text-xl md:text-3xl text-[#db4437] font-bold text-center">
              OUR MISSION
            </h1>
            <p className="mt-8 text-center">
              church food pantry mission statement mission and vision of feeding <br />
              program sample vision statement for food pantry food bank.
            </p>
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src={b1}
                alt=""
              />

              <div className="mt-8">
                <span className="text-[#db4437] uppercase">food</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                We connect people to food where they are, when they need it.
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                One of the most preferred acts of charity that a Muslim can perform during the blessed month of Ramadan is to feed other Muslims who are fasting. When you give food to those who are fasting, you all receive rewards for both your own fast and for the meal you provide.
                </p>

                <div className="flex items-center justify-between mt-4">

                  <a
                    href="#"
                    className="inline-block text-[#db4437] underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src={b2}
                alt=""
              />

              <div className="mt-8">
                <span className="text-[#db4437] uppercase">medicine</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                Medical Bills are a Burden for Many Individuals and Families
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                Expenses related to hospital stays, cancer treatments with high- cost chemotherapy routines, and other medicinal costs can be even higher. Treatment costs and necessary living expenses can bring the best of families to the brink of experiencing hard times. Insurance plans are not enough, as policies do not cover everything you need.
                </p>

                <div className="flex items-center justify-between mt-4">
                  

                  <a
                    href="#"
                    className="inline-block text-[#db4437] underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src={b3}
                alt=""
              />

              <div className="mt-8">
                <span className="text-[#db4437] uppercase">education</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                Fundraising for poor children education and help poverty stricken people.
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                Despite enormous gains in the wellbeing and economic circumstances of hundreds of millions of people, 10% of the worlds population still live on less than $2 a day. High population growth traps individuals, communities and even entire countries in poverty. Achieving sustainable population levels, locally and globally, helps people achieve the dignity and standard of living we all deserve.
                </p>

                <div className="flex items-center justify-between mt-4">

                  <a
                    href="#"
                    className="inline-block text-[#db4437] underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
