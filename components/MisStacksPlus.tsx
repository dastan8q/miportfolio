import { useEffect } from 'react';

export default function MisStacks() {

  return (
    <section className="bg-brightMode flex flex-col justify-center items-center py-1 dark:bg-darkMode">
      <div className="flex items-center mb-10">
      <svg
        className="fill-current text-darkMode dark:text-brightMode"
        width="64"
        height="64"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 511.999 511.999"
        xmlSpace="preserve"
        >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g>
            <g>
                <path d="M280.068,174.292c-9.323,0-16.908,7.585-16.908,16.908c0,9.323,7.584,16.908,16.908,16.908 c9.324,0,16.908-7.585,16.908-16.908C296.976,181.877,289.391,174.292,280.068,174.292z"></path>
            </g>
            </g>
            <g>
            <g>
                <path d="M280.068,123.597c-37.276,0-67.602,30.327-67.602,67.603c0,37.276,30.326,67.603,67.602,67.603 c37.277,0,67.603-30.327,67.603-67.603C347.671,153.924,317.345,123.597,280.068,123.597z M280.068,238.524 c-26.095,0-47.325-21.229-47.325-47.325s21.229-47.325,47.325-47.325c26.096,0,47.325,21.229,47.325,47.325 S306.163,238.524,280.068,238.524z"></path>
            </g>
            </g>
            <g>
            <g>
                <path d="M280.068,0C175.516,0,90.293,84.355,88.886,188.58L40.731,327.056h48.138V430.24h93.414v81.759h219.545V338.606 c20.245-16.76,37.064-37.757,48.903-61.125c13.627-26.9,20.538-55.929,20.538-86.28C471.268,85.772,385.496,0,280.068,0z M404.089,206.41h-27.182c-2.456,15.697-8.653,30.169-17.643,42.479l19.254,19.253L357.01,289.65l-19.254-19.254 c-12.309,8.991-26.781,15.188-42.479,17.644v27.182h-30.417v-27.182c-15.697-2.456-30.169-8.653-42.478-17.644l-19.254,19.254 l-21.508-21.508l19.254-19.254c-8.99-12.309-15.187-26.781-17.643-42.479H156.05v-30.417h27.182 c2.456-15.697,8.653-30.169,17.643-42.479l-19.254-19.254l21.508-21.508l19.254,19.254c12.309-8.991,26.78-15.188,42.478-17.644 V67.18h30.417v27.181c15.698,2.456,30.17,8.653,42.479,17.644l19.254-19.254l21.508,21.508l-19.254,19.255 c8.99,12.309,15.187,26.78,17.643,42.479h27.182V206.41z"></path>
            </g>
            </g>
        </g>
        </svg>
          <h1 className="text-darkMode text-5xl font-bold ml-4 dark:text-brightMode">Stacks en proceso de aprender</h1>
      </div>

      <section className="flex space-x-16 overflow-hidden group">
        <aside className="flex animate-loop-scroll space-x-16 group-hover:paused">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/22b35b3b57a63e4b7a9e123631b53e2bbb17e90fc4b92b3e80d6da3fdf31d4bc?placeholderIfAbsent=true&apiKey=7e4550569fdf4650ac9f280e98b7566b" className="max-w-none" alt="Partner Logo 1" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcf205bd020220887daecaa5e060d6cf20c2fbc7046780a82c7a29621fbdcea3?placeholderIfAbsent=true&apiKey=7e4550569fdf4650ac9f280e98b7566b" className="max-w-none" alt="Partner Logo 2" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7be2bd529f8704144bd1a3c392aadcd0f52aa00e2088a57c0fa166792b89a82b?placeholderIfAbsent=true&apiKey=7e4550569fdf4650ac9f280e98b7566b" className="max-w-none" alt="Partner Logo 3" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c3263b599e6958126e334cbd657001eebf079a24241235e7d349eb8862d9468?placeholderIfAbsent=true&apiKey=7e4550569fdf4650ac9f280e98b7566b" className="max-w-none" alt="Partner Logo 4" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/397f59b03a3d3056519a6c2b5252dc30093035dd19f18bc0642f3bf30219ffa4?placeholderIfAbsent=true&apiKey=7e4550569fdf4650ac9f280e98b7566b" className="max-w-none" alt="Partner Logo 5" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b50bf0620f0f0fb94ecb2e1f1c474cc898410afe696a30e739cc21ea2258ee8?placeholderIfAbsent=true&apiKey=7e4550569fdf4650ac9f280e98b7566b" className="max-w-none" alt="Partner Logo 6" />
        </aside>
        <aside className="flex animate-loop-scroll space-x-16 group-hover:paused" aria-hidden="true">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/22b35b3b57a63e4b7a9e123631b53e2bbb17e90fc4b92b3e80d6da3fdf31d4bc?placeholderIfAbsent=true&apiKey=7e4550569fdf4650ac9f280e98b7566b" className="max-w-none" alt="Partner Logo 1" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcf205bd020220887daecaa5e060d6cf20c2fbc7046780a82c7a29621fbdcea3?placeholderIfAbsent=true&apiKey=7e4550569fdf4650ac9f280e98b7566b" className="max-w-none" alt="Partner Logo 2" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7be2bd529f8704144bd1a3c392aadcd0f52aa00e2088a57c0fa166792b89a82b?placeholderIfAbsent=true&apiKey=7e4550569fdf4650ac9f280e98b7566b" className="max-w-none" alt="Partner Logo 3" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c3263b599e6958126e334cbd657001eebf079a24241235e7d349eb8862d9468?placeholderIfAbsent=true&apiKey=7e4550569fdf4650ac9f280e98b7566b" className="max-w-none" alt="Partner Logo 4" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/397f59b03a3d3056519a6c2b5252dc30093035dd19f18bc0642f3bf30219ffa4?placeholderIfAbsent=true&apiKey=7e4550569fdf4650ac9f280e98b7566b" className="max-w-none" alt="Partner Logo 5" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b50bf0620f0f0fb94ecb2e1f1c474cc898410afe696a30e739cc21ea2258ee8?placeholderIfAbsent=true&apiKey=7e4550569fdf4650ac9f280e98b7566b" className="max-w-none" alt="Partner Logo 6" />
        </aside>
      </section>
    </section>
  );
}
