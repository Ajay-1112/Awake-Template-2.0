import { useParams } from 'react-router-dom'; // Changed from 'next/navigation'
import { usePortfolio } from '@/contexts/PortfolioContext';
import Safari from "../components/ui/safari";
import { createSlug } from '../utils/CreateSlug'; // Adjusted path
import React from 'react';

export function SafariComponent({ src, url, width, height }) {
    return (
        <div className="relative">
            <Safari src={src} url={url} width={width} height={height} className="size-full max-w-6xl mx-auto" />
        </div>
    );
}

export default function ProjectOverview() {
    const { slug: projectTitle } = useParams(); // Use useParams from 'react-router-dom'
    const portfolioItems = usePortfolio();

    // Find the project item by title
    const projectItem = portfolioItems.find(item => createSlug(item.title) === projectTitle);

    if (!projectItem) {
        return <div className="p-6">Project not found 🚫</div>;
    }

    return (
        <div className="mt-16 max-w-7xl mx-auto px-2 lg:px-4 xl:px-0">
            {projectItem && <SafariComponent src={projectItem.imgSrc} url={projectItem.href} />}
            <div className='grid grid-cols-1 xl:grid-cols-4 gap-12 xl:gap-2 pt-12'>
                <div className='xl:col-span-3 flex flex-col gap-6'>
                    <div>
                        <label htmlFor="projectTitle" className='text-gray-600 text-[14px]'>Project Title</label>
                        <h3 className="max-w-sm text-balance font-bold text-neutral-900 dark:text-white text-xl md:text-3xl">
                            {projectItem.title}
                        </h3>
                    </div>
                    <div>
                        <label htmlFor="projectDescription" className='text-gray-600 text-[14px]'>The Story</label>
                        <p className="mt-2 tracking-tight dark:text-gray-300">
                            {projectItem.description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index < projectItem.description.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                    <a href={projectItem.href} target='_blank' className="cursor-pointer flex h-10 w-40 items-center justify-center rounded-full bg-neutral-800 text-base font-semibold text-white transition ease-out hover:ring-2 hover:ring-neutral-900 hover:ring-offset-2 dark:bg-white dark:text-black dark:hover:ring-white dark:hover:ring-offset-black lg:h-12 lg:text-base">
                        <span className="tracking-tight">Live Preview</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                            <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
                <div className='xl:col-span-1'>
                    <h3 className="max-w-sm text-balance font-medium text-neutral-900 dark:text-white text-sm md:text-base">
                        Feedback
                    </h3>
                    
                    <div className='mt-2 border p-4 rounded-lg'>
                        <div className="flex flex-row items-center gap-2">
                            <img className="rounded-full w-8 h-8 object-cover" width={500} height={500} alt={projectItem.review.clientName} src={projectItem.review.clientProfilePhoto} />
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium dark:text-white">{projectItem.review.clientName}</figcaption>
                                <p className="text-xs font-medium dark:text-white/40">{projectItem.review.clientUsername}</p>
                            </div>
                        </div>
                        <p className='mt-2 text-xs dark:text-white/40 inline-flex items-center justify-center gap-1'>
                            {projectItem.review.platform === 'Upwork' && (
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 50 50">
                                    <path fill='green' d="M 1 9 C 0.448 9 0 9.448 0 10 L 0 24.115234 C 0 30.276234 4.6829844 35.631469 10.833984 35.980469 C 16.730984 36.314469 21.747875 32.176391 22.796875 26.650391 C 23.366875 27.420391 23.94625 28.135969 24.53125 28.792969 L 21.001953 43.771484 C 20.932953 44.069484 21.002406 44.380094 21.191406 44.621094 C 21.382406 44.859094 21.670563 45 21.976562 45 L 27.095703 45 C 27.559703 45 27.959406 44.687328 28.066406 44.236328 C 28.687406 41.615328 29.660969 37.508156 30.542969 33.785156 L 31.453125 34.3125 C 33.618125 35.4335 35.815 36 38 36 C 45.192 36 50.926 29.641 49.875 22.25 C 49.179 17.354 45.414078 13.318344 40.580078 12.277344 C 34.951078 11.064344 29.525359 13.949141 27.193359 18.744141 C 27.193359 18.744141 26.934562 19.318578 26.726562 19.892578 C 25.076563 17.046578 24.107609 14.094078 23.599609 11.955078 C 23.414609 11.175078 23.137469 9.762875 23.105469 9.671875 C 22.966469 9.268875 22.589109 9 22.162109 9 L 17 9 C 16.448 9 16 9.448 16 10 L 16 24.300781 C 16 26.649781 14.287219 28.750516 11.949219 28.978516 C 9.2672187 29.240516 7 27.13 7 24.5 L 7 10 C 7 9.448 6.552 9 6 9 L 1 9 z M 38 19 C 40.757 19 43 21.243 43 24 C 43 26.757 40.757 29 38 29 C 35.775 29 33.713531 27.658281 32.269531 26.488281 C 32.796531 24.263281 33.15025 22.773047 33.15625 22.748047 C 33.72425 20.541047 35.717 19 38 19 z"></path>
                                </svg>
                            )}
                            {projectItem.review.platform === 'LinkedIn' && (
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 48 48">
                                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                                    <path fill="#FFF" d="M12 19H17V36H12zM14.5 12C16.43 12 18 13.57 18 15.5 18 17.43 16.43 19 14.5 19 12.57 19 11 17.43 11 15.5 11 13.57 12.57 12 14.5 12zM19 19H24V21.494H24.153C24.799 20.335 26.274 19.181 28.436 19.181 33.344 19.181 34 22.125 34 26.209L34 36 29 36 29 27.019C29 24.898 28.958 22.207 26.387 22.207 23.778 22.207 23.429 24.371 23.429 26.781L23.429 36 19 36z"></path>
                                </svg>
                            )}
                            {projectItem.review.platform}
                        </p>
                        <p className='mt-2 text-sm tracking-tight dark:text-gray-300'>
                            {projectItem.review.reviewBody}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}