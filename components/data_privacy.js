
import React from 'react'
import styles from '../styles/data_privacy.module.css'


class DataPrivacyConsent extends React.Component{
    constructor(){
        super();
        this.state = {
            DataPrivacyConsentAccepted: false
        }
    }

    handleTick=()=>{
        this.setState({DataPrivacyConsentAccepted: true})
    }
   render(){ return(
    <>
    {
    this.state.DataPrivacyConsentAccepted?    null:
    <div className={styles.consent_paragraph}>
    <h3 >Data Privacy Consent</h3>
    <p>This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use this site and tells you about your privacy rights and how the law protects you.
We use and collect your personal data for the sole purpose of volunteering under Solid Leni Pilipinas and its activities in support for the presidential campaign of Leni Robredo for Halalan 2022. By using this site, you agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Template.</p>
<h4>
Collecting and Using Your Personal Data
</h4>
<h4>
Personal Data
</h4>

<p>
While using this site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
</p>
<ul>
    <li>First name and last name</li>
    <li>Age</li>
    <li>Phone</li>
    <li>Email Address</li>
    <li>Barangay, City</li>
</ul>
<h4>Use of Your Personal Data</h4>
<p>We may use your Personal Data for the following purposes:</p>
<ul>
        <li><strong>To contact you: </strong>To contact you by email, telephone calls, SMS, or other equivalent forms of electronic communication for volunteering details</li>
        <li><strong>To manage your availability:</strong> To schedule shifts and manage volunteer availability</li>
        <li><strong>For other purposes:</strong>We may use your information for other purposes, such as data analysis, mapping of volunteers, determining the effectiveness of our site’s promotional campaign and to evaluate and improve our site, services, marketing and your experience.</li>
</ul>
<p>We may share Your personal information in the following situations:</p>
<ul>
    <li><strong>With Affiliates: </strong>We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
    <li><strong>With other users: </strong>when you share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
    <li><strong>With your consent: </strong>We may disclose your personal information for any other purpose with your consent.</li>
    
</ul>

<h4>Retention of Your Personal Data</h4>
<p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
<p>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our site, or we are legally obligated to retain this data for longer time periods.</p>
<h4>Disclosure of Your Personal Data</h4>   
<h4>Law enforcement</h4>
<p>Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
<h4>Other legal requirements</h4>
<p>We may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
<ul>
    <li>Comply with a legal obligation</li>
    <li>Protect and defend the rights or property of the organization</li>
    <li>Prevent or investigate possible wrongdoing in connection with the site</li>
    <li>Protect the personal safety of users of the site or the public</li>
    <li>Protect against legal liability</li>
</ul>

<h4>Security of Your Personal Data</h4>
<p>The security of your Personal Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
<h4>Children's Privacy</h4> 
<p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from anyone under the age of 13 without verification of parental consent, we take steps to remove that information from our database.</p>
<p>If we need to rely on consent as a legal basis for processing your information and your country requires consent from a parent, we may require your parent's consent before we collect and use that information.</p>
<h4>Changes to this Privacy Policy</h4>
<p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
<p>We will let you know via email and/or a prominent notice on our site or page, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
<h4>Contact Us</h4>
<p>If you have any questions about this Privacy Policy, you can contact us:
</p>
<ul>
    <li>By visiting this page on our website: <a target="_blank" href="https://www.facebook.com/solidlenipilipinas" rel="noopener noreferrer"><strong>https://www.facebook.com/solidlenipilipinas</strong></a></li>
</ul>
    <input type={'checkbox'} required className={styles.checkbox} onClick={this.handleTick}/><span> I agree</span>
    </div>}
    </>
)}}
export default DataPrivacyConsent