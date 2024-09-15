import React from 'react'

const Faq = () => {
  return (
    <>
    <div className='pt-36'>
      <h1 className='text-6xl tracking-widest text-slate-100 text-center'>FAQs</h1>
    </div>
    <div className='grid grid-rows-5 '>
    <div
        className=" w-full mt-14 pb-4 border bg-transparent  shadow-xl sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
    <div className="mx-auto">
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-3">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Is Skills++ 2024 free?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, Skills++ 2024 is absolutely free for all. You can register for free and participate in the event without any charges.
                    </p>
                </details>
            </div>
            
        </div>
    </div>
</div>
<div
        className=" w-full mt-14 pb-4 border bg-transparent  shadow-xl sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
    <div className="mx-auto">
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-3">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Is Skills++ 2024 free?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, Skills++ 2024 is absolutely free for all. You can register for free and participate in the event without any charges.
                    </p>
                </details>
            </div>
            
        </div>
    </div>
</div>
<div className='text-center pt-4 text-purple-400' >
    <h1>Can't find what you are looking for? <underline>Visit Zairza</underline></h1>
</div>
</div>
    </>
  )
}

export default Faq
