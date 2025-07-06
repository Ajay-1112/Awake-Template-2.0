import { createContext, useContext } from 'react';

// Image imports (assuming these images are placed in the public folder or imported directly)
import Durable from '@/assets/images/project/Durable.png';
import KeshahQuiz from '@/assets/images/project/KeshahQuiz.png';
import ImageCreator from '@/assets/images/project/ImageCreator.png';
import Artify from '@/assets/images/project/Artify-Image-Restyle.png';
import SponsorPro from '@/assets/images/project/Sponsor-Pro-AI-Outreach.png';
import QuoteBuilder from '@/assets/images/project/GuWiGuttersAndWindows.png';
import GuwiDashboard from '@/assets/images/project/Gu-Wi-Dashboard.png';
import RainfireStore from '@/assets/images/project/Rainfire-Online-Store.png';
import SideBird from '@/assets/images/project/Sidebird-Twitter-fanbase-builder.png';
import Compressor from '@/assets/images/project/Compressor-io.png';
import Proper from '@/assets/images/project/Proper.png';
import LuxyHair from '@/assets/images/project/Luxy-Hair.png';
import JPLewis from '@/assets/images/project/JP-Lewis-Group.png';
import ClientAaditya from '@/assets/images/client-aaditya.png';
import ClientDaniel from '@/assets/images/client-daniel.png';




// Create the context
const PortfolioContext = createContext();

// Portfolio items array (added some example data for completeness)
const portfolioItems = [
    {
        href: "https://quiz.keshah.com/hairgrowth",
        imgSrc: KeshahQuiz,
        alt: "Keshah Quiz - Full Stack",
        title: "Keshah Quiz",
        description: "Our client, Aaditya Aggarwal, Co-Founder, approached The Web Navigators to develop Keshah Quiz, a web application designed to provide users with personalized hair growth insights based on their responses.\n\n The goal was to create an interactive and engaging quiz that would collect relevant data to help users understand their hair growth journey.\n\nThe Web Navigators team built this full-stack application with a focus on user experience, ensuring that the quiz was intuitive, responsive, and easy to navigate. With seamless integration and an attractive design, the platform is optimized to guide users through the quiz while collecting valuable data. The result is an engaging, informative, and easy-to-use tool for anyone looking to learn more about their hair growth potential.",
        review: {
            clientName: "Aaditya Aggarwal | Co-Founder",
            clientUsername: "@aadityaaggarwal",
            reviewBody: "Jatin is incredible at his work and super responsive - one of the most talented developers I have ever come across. He can develop practically anything you have in mind. Highly highly recommended.",
            clientProfilePhoto: ClientAaditya,
            platform: "Upwork",
            videoSrc: '/videos/videoTestimonial.mp4'
        },
    },
    {
        href: "https://myartify.ai/",
        imgSrc: Artify,
        alt: "AI Image Restyle - Full Stack",
        title: "AI Image Restyle",
        description: "Our client, an aspiring entrepreneur, approached The Web Navigators to create a cutting-edge platform for social media influencers, photographers, and casual users to transform their photos effortlessly using AI-powered filters.\n\n The goal was to develop a sleek and user-friendly web application where users could upload their images and apply stunning AI filters like Cyberpunk, Disney Pixar, Oil Painting, Modern Anime, and more.\n\n The Web Navigators team started by designing an intuitive user interface and robust backend architecture using React, Node.js, and Tailwind CSS. With these tools, we delivered a high-performance platform that allows users to restyle their photos with just a few clicks. Since its launch, AI Image Restyle has been making waves among creative communities, enabling users to turn everyday photos into breathtaking works of art.",
        review: {
            clientName: "Daniel T. | Managing Director",
            clientUsername: "@daniel",
            reviewBody: "I highly recommend Jatin for his outstanding work on Fiverr. From the start, Jatin understood my project needs perfectly. His communication was clear, and he delivered exceptional results promptly. Jatin's attention to detail and commitment to quality were impressive. He not only met deadlines but also incorporated feedback effectively. For reliable, skilled, and passionate service, Jatin is the perfect choice. I am thoroughly satisfied and look forward to future collaborations.",
            clientProfilePhoto: ClientDaniel,
            platform: "LinkedIn",
        },
    },
    {
        href: "https://sponsorpro-70d8f.web.app/",
        imgSrc: SponsorPro,
        alt: "AI Outreach Tool - Full Stack",
        title: "AI Outreach Tool",
        description: "Our client, Trevor, an athlete looking to connect with local brands, approached The Web Navigators to develop an innovative AI-powered outreach tool.\n\nThe goal was to create a seamless platform where athletes could easily discover and reach out to brands for sponsorship opportunities. By leveraging AI, the tool would help users draft personalized and professional messages, streamlining the outreach process and increasing the chances of establishing valuable brand partnerships.\n\nThe Web Navigators team built SponsorPro using modern technologies like React, Node.js, and Firebase. We focused on creating an intuitive user experience that would make it easy for athletes to upload their profiles, identify potential sponsors, and craft customized outreach messages. The AI technology integrated into the platform ensures that each message is tailored to the brand, enhancing the likelihood of a positive response.\n\nSince its launch, SponsorPro has saved athletes significant time, allowing them to connect with brands more efficiently and effectively. The tool has received positive feedback for its ease of use and ability to generate high-quality, personalized outreach messages in just a few clicks.",
        review: {
            clientName: "Trevor",
            clientUsername: "@trevor",
            reviewBody: "Using SponsorPro has transformed my outreach to brands. The AI messaging feature saved me so much time, and I've connected with amazing sponsors!",
            clientProfilePhoto: 'https://redwavevp.com/wp-content/uploads/2024/05/Screen_Shot_2024-05-27_at_8.52.05_AM.png',
            platform: "Upwork",
        },
    },
    {
        href: "https://guwi-dashboard-v2-1.vercel.app/",
        imgSrc: GuwiDashboard,
        alt: "Gu-Wi Admin Dashboard - Full Stack",
        title: "Gu-Wi Admin Dashboard",
        description: "Our client, GuWi, a leading house cleaning service provider, approached The Web Navigators to build a comprehensive admin dashboard that would streamline their service management and analytics.\n\nThe goal was to create a user-friendly, real-time analytics dashboard for GuWi's operations, allowing them to monitor and manage their service requests, track customer data, and make informed decisions quickly. The dashboard would also allow for easy customization and provide key insights into business performance.\n\nThe Web Navigators team developed the Gu-Wi Admin Dashboard using a full-stack approach with React, MySQL, and robust API integrations. The intuitive front-end ensures ease of use, while the back-end handles real-time data, providing a seamless experience. With this dashboard, GuWi now benefits from an efficient, customizable solution that significantly enhances service management and operational efficiency.\n\nSince its launch, the Gu-Wi Admin Dashboard has empowered the team to manage services with greater ease and speed, improving the overall operational workflow.",
        review: {
            clientName: "Gavin Gene",
            clientUsername: "@gavingene",
            reviewBody: "Jatin did a great job building a custom website front end with lots of variables and integrations with a database. very grateful and will continue working on projects with him in the future. highly recommended A+",
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1OEhIAyRd2T5jeUFUcKETENrfxCJEbSryKZUq0vPN_LNmPzW74wW8O6SWQGbN_RPh',
            platform: "Upwork",
        },
    },
    {
        href: "https://www.studioproper.com/",
        imgSrc: Proper,
        alt: "Studio Proper - Full Stack",
        title: "Studio Proper",
        description: "Our client, Andrew Davies from Studio Proper, is a brand driven by timeless elegance and innovative design, inspired by the sophistication of Apple. They specialize in crafting high-quality, functional tech accessories that combine beauty with simplicity, designed to enhance the experience of personal and professional tech.\n\nThe goal was to develop a sleek, user-friendly e-commerce platform that reflects Studio Proper’s design philosophy—elegant simplicity, premium materials, and products built to last. The Web Navigators team contributed by creating a responsive and intuitive website that showcases their range of personal tech accessories and enterprise solutions, all while ensuring a seamless shopping experience for customers.\n\nWith a focus on longevity and durability in a fast-paced tech world, Studio Proper’s new digital presence allows customers to explore and purchase beautifully designed products that complement their favorite tech for years to come.",
        review: {
            clientName: "Andrew Davies",
            clientUsername: "@andrewdavies", // Derived from clientName
            reviewBody: 'Very fast turnaround, did the job as requested, no issues or problems, would use again',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1ETy2V41TYEMbK_UkE4Gp_QndW-EkANRhGmDwftqk6BJiP7PAXAAoDxfQp2xhzsPG',
            platform: "Upwork",
        },
    },
    {
        href: "https://guwiquotebuilder.com/#/5722451285136736892",
        imgSrc: QuoteBuilder,
        alt: "Gu-Wi Quote Builder - Full Stack",
        title: "Gu-Wi Quote Builder",
        description: "Our client, Gavin Gene from Gu-Wi, approached The Web Navigators to streamline the quoting process for their business by creating a custom tool that automatically generates two quotes for customers using data from JotForm.\n\nThe goal was to simplify the client experience by offering quick, accurate, and personalized quotes based on their inputs.\n\nThe Web Navigators team developed a fully functional, user-friendly tool with seamless backend integration. Using React for the front-end and a robust database setup, we ensured that the quote generation process was both efficient and easy for clients to use. This tool has significantly improved the efficiency and speed of the quoting process, allowing Gu-Wi to serve their customers more effectively and with greater precision.",
        review: {
            clientName: "Gavin Gene",
            clientUsername: "@gavingene",
            reviewBody: "Jatin did everything asked of him and more. This small project was completed without a hitch. The front end and the database are functioning properly. Jatin was attentive and understood my requests and asked questions when necessary. We will continue to work with Jatin in the future and I recommend him to anyone looking for a reliable developer.",
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1OEhIAyRd2T5jeUFUcKETENrfxCJEbSryKZUq0vPN_LNmPzW74wW8O6SWQGbN_RPh',
            platform: "Upwork",
        },
    },
    {
        href: "https://rainfire.in/",
        imgSrc: RainfireStore,
        alt: "Rainfire E-Commerce - Full Stack",
        title: "Rainfire E-Commerce",
        description: "Our client, Yang Henry, approached The Web Navigators to create a fully customized, high-performance e-commerce platform for his business, Rainfire.\n\nThe goal was to deliver a seamless and intuitive online shopping experience for customers, from browsing products to completing purchases.\n\nThe Web Navigators team crafted a full-stack solution that included front-end design, back-end infrastructure, and integration with payment gateways. Using React, Node.js, and Tailwind CSS, we ensured a responsive and engaging user interface, while maintaining a robust backend that supported inventory management and order processing. Rainfire E-Commerce has since become a reliable and efficient platform, allowing customers to shop with ease and confidence.",
        review: {
            clientName: "Yang Henry",
            clientUsername: "@yanghenry", // Derived from clientName
            reviewBody: 'Very Patient and talented. This work was extended for a month because I was continuously asking for changes, but Jatin was always very patient and successfully completed all the work that I asked for. I really appreciate his hard work. Meanwhile, he spent a lot of time communicating with me regarding to the project. His way of expressing was pretty clear and polite. I would highly recommend hiring him for your project.',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fFy29XOhI1nk0OdyqgvxMfhOyg-aWJmjGg4cnQa0VtDzHjSj5Qi_9CSboencGoR_',
            platform: "Upwork",
        },
    },
    {
        href: "https://compressor.io/",
        imgSrc: Compressor,
        alt: "Compressor.io - Full Stack",
        title: "Compressor.io",
        description: "Our client, Caroline Swamidoss, approached The Web Navigators to create a powerful image compression solution that would significantly reduce website load times and improve overall performance.\n\nThe goal was to provide an intuitive and efficient platform for users to compress images without losing quality, enhancing their websites' speed and user experience.\n\nThe Web Navigators team developed a robust image compression tool, integrating it seamlessly into the website's infrastructure. Using React for the front end and optimizing performance with advanced algorithms, we created a tool that allows users to compress images in just a few clicks. Since launch, Compressor.io has helped numerous users streamline their websites, resulting in faster load times and improved SEO rankings.",
        review: {
            clientName: "Caroline Swamidoss",
            clientUsername: "@carolineswamidoss", // Derived from clientName
            reviewBody: 'Jatin incorporated all the changes that I wanted in the website. He was professional and responded very quickly. I highly recommend him! He is very good at designing websites. I would definitely work with him again. He worked on a Sunday and gave me the desired outcomes for my website',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fQHdjbJpBBR474f7aJUnbgBVriwUjJoeizS5Hr00DsVHe9CBAkagrqpZ-1rPQOie',
            platform: "Upwork",
        },
    },
    {
        href: "https://durable.co/",
        imgSrc: Durable,
        alt: "Durable - Front-End",
        title: "Durable",
        description: "Our client, Preeti Bhatia, engaged The Web Navigators to design a sophisticated front-end for the Durable Website Builder. The goal was to create a user-friendly and visually appealing interface that would make the website building process seamless and enjoyable for users.\n\nThe Web Navigators team meticulously crafted an intuitive and engaging UI using React, focusing on delivering a smooth user experience. By integrating clean design principles and efficient navigation, we enhanced the platform's usability, allowing users to build websites with ease. Since its launch, the front-end of Durable has been praised for its efficiency and user-centric design.",
        review: {
            clientName: "Preeti Bhatia",
            clientUsername: "@preetibhatia", // Derived from clientName
            reviewBody: 'Very helpful and very cooperative Thanks Jatin',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fBOi4SiUsSNS9jy3lx3VBFjcjj3UnBB_csPdbCTJLbcd2pzUZPxs-foYXB4OubXG',
            platform: "Upwork",
        },
    },
    {
        href: "https://imagecreator.alkaidvision.com/",
        imgSrc: ImageCreator,
        alt: "Image Creator - Front-End",
        title: "Image Creator",
        description: "Our client, James Lewis, approached The Web Navigators to develop SideBird.io, a web app designed to help users grow and engage their Twitter fanbase effectively.\n\n The goal was to provide a user-friendly platform with tools to help users manage and expand their Twitter audience, automate engagement, and track followers for optimal reach.\n\nThe Web Navigators team developed this full-stack application with a seamless user interface, ensuring ease of use for all features. From the back-end API integrations to the front-end design, every element was tailored to meet the client’s needs for increasing Twitter engagement and audience growth. The result is a polished and intuitive web app that empowers users to enhance their presence on Twitter with ease and efficiency.",
        review: {
            clientName: "Yerramsetti Chalapathi Rao",
            clientUsername: "@yerramsetti", // Derived from clientName
            reviewBody: 'Jatin Dahiya did exactly what we requested in exactly the right timeframe. Excellent work. A++++',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1I_JxYtVJPTMbBitDrSeJKXOHzne_45DqldomE3a7gUsLD6XbBAGeAE84bI3qnaP1',
            platform: "Upwork",
        },
    },
    {
        href: "https://www.sidebird.io/",
        imgSrc: SideBird,
        alt: "SideBird.io - Full Stack",
        title: "SideBird.io",
        description: "Our client, James Lewis, approached The Web Navigators to develop SideBird.io, a web app designed to help users grow and engage their Twitter fanbase effectively.\n\n The goal was to provide a user-friendly platform with tools to help users manage and expand their Twitter audience, automate engagement, and track followers for optimal reach.\n\nThe Web Navigators team developed this full-stack application with a seamless user interface, ensuring ease of use for all features. From the back-end API integrations to the front-end design, every element was tailored to meet the client’s needs for increasing Twitter engagement and audience growth. The result is a polished and intuitive web app that empowers users to enhance their presence on Twitter with ease and efficiency.",
        review: {
            clientName: "James Lewis",
            clientUsername: "@jameslewis", // Derived from clientName
            reviewBody: 'Excellent work!!!! He gave me exactly what I requested. I am looking forward to using him again in the future🙂',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1bjAY_NmGz9vYWUYzM-JJ-w4wRshV971Y5xntNd-S1gRQtJ9jXr8IvpcydUBQ9Oyl',
            platform: "Upwork",
        },
    },
    {
        href: "https://www.luxyhair.com/",
        imgSrc: LuxyHair,
        alt: "Luxy Hair - Full Stack",
        title: "Luxy Hair",
        description: "Our client, Yerramsetti Chalapathi Rao, approached The Web Navigators to design and develop an e-commerce platform for Luxy Hair, a brand dedicated to providing premium hair products.\n\n The goal was to create an enhanced shopping experience that would reflect the brand’s elegance and quality, while offering users a seamless, efficient, and enjoyable online shopping journey.\n\nThe Web Navigators team meticulously crafted a dynamic platform with smooth navigation, a visually appealing layout, and intuitive features such as product filtering, live inventory updates, and secure payment options. We ensured that the website was fully responsive and optimized for both desktop and mobile devices, making it accessible to a wide range of customers. The result is an engaging, user-friendly e-commerce experience that successfully showcases Luxy Hair's premium products and meets customer needs.",
        review: {
            clientName: "Yerramsetti Chalapathi Rao",
            clientUsername: "@yerramsetti", // Derived from clientName
            reviewBody: 'Jatin Dahiya was great! Completed my task really quickly and was very knowledgeable. Highly recommend!',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1I_JxYtVJPTMbBitDrSeJKXOHzne_45DqldomE3a7gUsLD6XbBAGeAE84bI3qnaP1',
            platform: "Upwork",
        },
    },
    {
        href: "https://jplewisgroup.com/",
        imgSrc: JPLewis,
        alt: "JP Lewis Group, LLC. - Full Stack",
        title: "JP Lewis Group, LLC.",
        description: "Our client, Faizy Jamal, approached The Web Navigators to develop the web presence for JP Lewis Group, LLC., a company specializing in providing high-quality services.\n\nThe goal was to create a professional and visually appealing website that would effectively communicate the company’s values, services, and expertise to potential clients.\n\nThe Web Navigators team worked closely with the client to ensure that the website design and development matched the brand’s vision and objectives. By leveraging the latest web technologies, we crafted a responsive and user-friendly interface that allows visitors to easily explore the company’s offerings. The result is a polished, efficient, and high-performing website that successfully enhances the digital presence of JP Lewis Group, LLC.",
        review: {
            clientName: "Faizy Jamal",
            clientUsername: "@faizyjamal", // Derived from clientName
            reviewBody: 'I want to thank Jatin, for all the hard work he has done. From start to finish there was always a strong level of respect & understanding for the goal at hand. Working closely with him really took our programming to the next level!! He thinks about problems, finds solutions, and has awesome morale. Great communication, great working skills in outreach, and high work quality and efficiency. He had a DEEP understanding of what work was needed and performed above and BEYOND expectations. The tone of his communication was wonderful and emotionally engaging on all levels. To top it off, his experience is incredibly professional, fast, and reliable. Thank You Again, Faizy Jamal',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1HW5mZiPPNrTd3O4xUkXnpJ3TN6h7BM5gLrDfD51D2rsNS0f0FhTkSiv4IpDrZ5g-',
            platform: "Upwork",
        },
    },
];

// Create the PortfolioProvider component to provide portfolio data to children
const PortfolioProvider = ({ children }) => {
    return (
        <PortfolioContext.Provider value={portfolioItems}>
            {children}
        </PortfolioContext.Provider>
    );
};
// Custom hook to use the PortfolioContext
const usePortfolio = () => {
    return useContext(PortfolioContext);
};

export { PortfolioProvider, usePortfolio }; 