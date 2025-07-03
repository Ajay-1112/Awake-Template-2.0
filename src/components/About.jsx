import React from 'react'

const About = () => {
    return (
        <div id="About_me " className='max-w-7xl mx-auto text-center mt-16 px-4'>
            <div className="mb-16">
                <div className="inline-block">
                    <span className="text-secondary-text text-sm font-medium tracking-widest uppercase mb-4 block">About the Founder</span>
                    <h2 className="text-2xl tracking-tight font-extrabold text-primary-text sm:text-3xl md:text-5xl relative">
                        My Founder <span className='font-instrument-serif italic font-medium'>Story</span>
                    </h2>
                </div>
            </div>
            <div className="relative bg-white overflow-hidden max-w-7xl mx-auto sm:rounded-3xl shadow-xl border border-gray-100">
                <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                    <div className="relative z-10 bg-white lg:pr-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-50"></div>
                        
                        <main className="relative z-10 px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-10">
                            <div className="text-left max-w-xl">
                                <div className="mb-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-0.5 bg-primary-text mr-4"></div>
                                        <h3 className="text-primary-text text-xl md:text-2xl font-bold">
                                            From Data Overwhelm to Clarity
                                        </h3>
                                    </div>
                                </div>
                                
                                <div className="space-y-6 text-secondary-text text-lg leading-relaxed">
                                    <div className="relative pl-6">
                                        <div className="absolute left-0 top-2 w-2 h-2 bg-primary-text rounded-full"></div>
                                        <p>
                                            Three years ago, I was watching brilliant entrepreneurs drown in their own data. Spreadsheets everywhere, reports they couldn't understand, and decisions made on gut feeling instead of insights.
                                        </p>
                                    </div>
                                    
                                    <div className="relative pl-6">
                                        <div className="absolute left-0 top-2 w-2 h-2 bg-primary-text rounded-full"></div>
                                        <p>
                                            That's when Data Huaka'i was born—not in a boardroom, but from a simple belief: every business deserves to understand their story through data.
                                        </p>
                                    </div>
                                    
                                    <div className="relative pl-6">
                                        <div className="absolute left-0 top-2 w-2 h-2 bg-primary-text rounded-full"></div>
                                        <p>
                                            Today, I work alongside Hawaii's most passionate business owners, transforming confusion into confidence, complexity into clarity—one meaningful insight at a time.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="mt-10 pt-6 border-t border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="block text-primary-text text-sm font-semibold tracking-wider uppercase">Founder & Data Storyteller</span>
                                            <span className="block text-secondary-text text-sm mt-1">Data Huaka'i</span>
                                        </div>
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-primary-text rounded-full"></div>
                                            <div className="w-2 h-2 bg-primary-text rounded-full opacity-60"></div>
                                            <div className="w-2 h-2 bg-primary-text rounded-full opacity-30"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>

                    <div className="relative lg:h-auto">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <div className="relative overflow-hidden group">
                            <img
                                className="h-64 w-full object-cover object-center sm:h-80 lg:h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                src="/images/PXL_20210205_031846143.PORTRAIT.jpg"
                                alt="Founder Profile"
                            />
                            <div className="absolute bottom-4 left-4 z-20">
                                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                                    <p className="text-primary-text font-semibold text-sm">Building clarity through data</p>
                                    <p className="text-secondary-text text-xs">Hawaii-based • 2021-Present</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About