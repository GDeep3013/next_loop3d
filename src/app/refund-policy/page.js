import React from "react";
import Container from "../components/common/Container";

const FeedbackSurvey = () => {
    
    const email = "{email}";
    const emailAddress = "{email address}";
    const physicalAddress = "{physical address}";

    return (
        <>
            <div className="about-banner relative bg-[url('/images/contact-us-banner.webp')] bg-repeat bg-center h-[400px] flex items-center">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <Container>
                    <div className="about-text text-center relative z-[1] pt-[80px]">
                        <h1 className="text-[48px] text-white font-frank">Refund Policy</h1>
                    </div>
                </Container>
            </div>

            <div className="inner-page lg:py-[80px] pt-12 pb-[270px] md:pb-[390px]">
                <Container>
                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank">Refund and Returns Policy</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">Last updated: July 23, 2024</p>

                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank mt-3">Overview</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we can’t offer you a full refund or exchange.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</p>

                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">Additional non-returnable items:</p>
                    <ul className="pl-[30px]">
                        <li className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3 list-disc">Gift cards</li>
                        <li className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3 list-disc">Downloadable software products</li>
                        <li className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3 list-disc">Some health and personal care items</li>
                    </ul>


                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">To complete your return, we require a receipt or proof of purchase.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">Please do not send your purchase back to the manufacturer.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">There are certain situations where only partial refunds are granted:</p>

                    <ul className="pl-[30px]">
                        <li className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3 list-disc">Book with obvious signs of use</li>
                        <li className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3 list-disc">CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened.</li>
                        <li className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3 list-disc">Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li>
                        <li className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3 list-disc">Any item that is returned more than 30 days after delivery</li>
                    </ul>


                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank mt-3">Refunds</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>


                    <h3 className="text-custom-color text-[25px] md:text-[30px] font-frank mt-3">Late or missing refunds</h3>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">If you haven’t received a refund yet, first check your bank account again.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">Then contact your credit card company, it may take some time before your refund is officially posted.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">Next contact your bank. There is often some processing time before a refund is posted.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">If you’ve done all of this and you still have not received your refund yet, please contact us at {emailAddress}.</p>

                    <h3 className="text-custom-color text-[25px] md:text-[30px] font-frank mt-3">Sale items</h3>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">Only regular priced items may be refunded. Sale items cannot be refunded.</p>

                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank mt-3">Exchanges</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at {emailAddress} and send your item to: {physicalAddress}.</p>

                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank mt-3">Gifts</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and they will find out about your return.</p>

                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank mt-3">Shipping returns</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">To return your product, you should mail your product to: {physicalAddress}.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">Depending on where you live, the time it may take for your exchanged product to reach you may vary.</p>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">If you are returning more expensive items, you may consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>

                    <h2 className="text-black text-[29px] md:text-[32px] lg:text-[36px] font-frank mt-3">Need help?</h2>
                    <p className="text-sm md:text-base leading-[29px] text-black font-poppins mt-3">Contact us at {email} for questions related to refunds and returns.</p>
                </Container>
            </div>




        </>
    );
};

export default FeedbackSurvey;
