import React from "react";
import Link from 'next/link';
import Container from "../components/common/Container";

const PrivacyPolicy = () => {

    return (
        <>
            <div className="about-banner relative bg-[url('/images/contact-us-banner.webp')] bg-repeat bg-center h-[400px] md:h-[300px] sm:h-[250px] flex items-center">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <Container>
                    <div className="about-text text-center relative z-[1] pt-[60px] md:pt-[60px]">
                        <h1 className="text-[36px] md:text-[48px] text-white font-frank">Privacy Policy</h1>
                    </div>
                </Container>
            </div>

            <div className="inner-page lg:py-[80px] pt-12 pb-[270px] md:pb-[390px]">
                <Container>
                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank">Who we are</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">Suggested text: Our website address is: https://loop3d.ai.</p>

                    <h3 className="text-custom-color text-[25px] md:text-[30px] font-frank mt-3">Comments</h3>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2"> <b className="bold">Suggested text:</b> When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>

                    <h3 className="text-custom-color text-[25px] md:text-[30px] font-frank mt-3">Media</h3>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2"> <b className="bold">Suggested text:</b> If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>

                    <h3 className="text-custom-color text-[25px] md:text-[30px] font-frank mt-3">Cookies</h3>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2"> <b className="bold">Suggested text:</b> If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>


                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank mt-4">Embedded content from other websites</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2"> <b className="bold">Suggested text:</b> Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>

                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank mt-4">Who we share your data with</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">Upon termination, Your right to use the Service will cease immediately.</p>

                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank mt-4">How long we retain your data</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2"><b className="bold">Suggested text:</b> Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party’s liability will be limited to the greatest extent permitted by law.</p>

                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank mt-4">What rights you have over your data</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2"><b className="bold">Suggested text:</b>  Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>

                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank mt-4">Where your data is sent</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>

                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank mt-4">Contact Us</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-2">By email: <Link href="mailto:info@loop3d.ai">info@loop3d.ai</Link></p>

                </Container>
            </div>


        </>
    );
};

export default PrivacyPolicy;