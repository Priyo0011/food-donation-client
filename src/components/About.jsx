import abimg from '../assets/images/123.jpg'
const About = () => {
  return (
    <div className='flex justify-between p-14 my-10'>
      <div className='w-1/2 space-y-4'>
        <h1 className='text-3xl font-bold'>
          About Be <span className='text-[#db4437]'>aHand</span>
        </h1>
        <hr />
        <p>
          Be aHand Is a Most Charity/ Non-profit/ Fundraising/ NGO
          organizations. Now Be aHand Is a Biggest organizations In This Globe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          repudiandae sunt delectus praesentium adipisci voluptatem sed,
          consectetur! Optio quis alias necessitatibus quidem dolore est nobis
          iusto, doloremque, velit vel, eligendi excepturi iure quas dignissimos
          eius. Consectetur adipisicing elit. Assumenda in, animi facere illum
          culpa autem minima nostrum doloribus dignissimos!
        </p>
        <h2 className='text-xl font-bold'>History Of Be aHand</h2>
        <p>
          Be aHand Start Their Work With Small organizations In The Year
          1990.Now Be aHand is world wide organizations. There Consectetur
          adipisicing elit. Nemo repudiandae sunt delectus praesentium adipisci
          voluptatem sed, consectetur! Optio quis alias necessitatibus quidem.
        </p>
        <button className='underline text-[#db4437] font-bold'>Read More</button>
      </div>
      <div className='w-1/2'>
        <img className='ml-28 mt-6' src={abimg} alt="" />
      </div>
    </div>
  );
};

export default About;
