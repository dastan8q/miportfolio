import { Fragment } from 'react';

export default function StackHoverCard({ names }: { names: string[] }) {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute inset-x-0 bottom-4 z-20 flex justify-center px-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100'
    >
      <div className='max-w-full rounded-lg bg-brightTitle px-6 py-3 shadow-lg dark:bg-darkText'>
        <p className='text-center text-base font-semibold tracking-wide text-darkMode dark:text-brightMode'>
          {names.map((name, index) => (
            <Fragment key={name}>
              {name}
              {index < names.length - 1 && (
                <span className='mx-1 text-brightButton'>{' · '}</span>
              )}
            </Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}
