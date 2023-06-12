import Image from 'next/image';
import backgroundImg from '../../public/background.jpg';
import schoolLogo from '../../public/logo.png';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black overflow-y-scroll">
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        
      >
        <Image
          src={backgroundImg}
          alt="Background Image"
          layout="full"
          objectFit="cover"
          objectPosition="top"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white">
        <div className="rounded-full bg-white bg-opacity-60 p-24 flex items-center justify-center">
          <div className="mr-8">
            <Image src={schoolLogo} alt="School Logo" width={250} height={250} />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Golden Jubilee Celebration</h1>
            <p className="text-lg mt-4">50 years of success</p>
          </div>
        </div>
      </div>

      
        

     </div>
  );
};

export default HomePage;
