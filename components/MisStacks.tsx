import Image from 'next/image';

export default function MisStacks() {

  return (
    <section className="bg-brightMode flex flex-col justify-center items-center py-20 dark:bg-darkMode">
      <div className="flex items-center mb-10">
      <svg
        className="fill-current text-darkMode dark:text-brightMode"
        width="64"
        height="64"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
        </g>
      </svg>
        <h1 className="text-darkMode text-5xl font-bold ml-4 dark:text-brightMode">Mis stacks</h1>
      </div>
      <div className="flex space-x-16 overflow-hidden group">
        <section className="flex animate-loop-scroll space-x-16 group-hover:paused">
          <Image loading="lazy" src="/images/python-127-svgrepo-com.png" alt="Partner Logo 1" className="max-w-none" width={210} height={210}/>
          <Image loading="lazy" src="/images/java-svgrepo-com.png" alt="Partner Logo 2" className="max-w-none" width={210} height={210}/>
          <Image loading="lazy" src="/images/git-svgrepo-com.png" alt="Partner Logo 3" className="max-w-none" width={210} height={210}/>
          <Image loading="lazy" src="/images/github-svgrepo-com.png" alt="Partner Logo 4" className="max-w-none" width={210} height={210}/>
          <Image loading="lazy" src="/images/azure-devops-svgrepo-com.png" alt="Partner Logo 5" className="max-w-none" width={210} height={210}/>
          <Image loading="lazy" src="/images/eclipseide-svgrepo-com.png" alt="Partner Logo 6" className="max-w-none" width={210} height={210}/>
        </section>
        <section className="flex animate-loop-scroll space-x-16 group-hover:paused" aria-hidden="true">
          <Image loading="lazy" src="/images/python-127-svgrepo-com.png" alt="Partner Logo 1" className="max-w-none" width={210} height={210}/>
          <Image loading="lazy" src="/images/java-svgrepo-com.png" alt="Partner Logo 2" className="max-w-none" width={210} height={210}/>
          <Image loading="lazy" src="/images/git-svgrepo-com.png" alt="Partner Logo 3" className="max-w-none" width={210} height={210}/>
          <Image loading="lazy" src="/images/github-svgrepo-com.png" alt="Partner Logo 4" className="max-w-none" width={210} height={210}/>
          <Image loading="lazy" src="/images/azure-devops-svgrepo-com.png" alt="Partner Logo 5" className="max-w-none" width={210} height={210}/>
          <Image loading="lazy" src="/images/eclipseide-svgrepo-com.png" alt="Partner Logo 6" className="max-w-none" width={210} height={210}/>
        </section>
      </div>
    </section>
  );
}