import Head from 'next/head';
import styled from 'styled-components';
import { COLORS, HORIZONTAL_SPACE } from './../utils/constants';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};
  ${HORIZONTAL_SPACE}
  color: #000;
  padding-top: 20px;
  padding-bottom: 20px;

  h1 {
    font-size: 36px;
    margin: 30px 0 15px;
    font-weight: 500;
  }

  h2 {
    font-size: 36px;
    margin: 30px 0 15px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }

  h3 {
    font-size: 24px;
    margin: 30px 0 15px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }

  h4 {
    font-size: 24px;
    margin: 30px 0 15px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }



  p {
    margin: 15px 0;
    line-height: 1.6;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
  }

  ul {
    margin: 15px 0;
    padding-left: 20px;
    font-family: 'Poppins', sans-serif;
  }

  li {
    margin: 8px 0;
    line-height: 1.6;
    font-family: 'Poppins', sans-serif;
  }

  li p {
    margin: 0;
  }

  li li {
    margin: 0;
  }

  a {
    color: ${COLORS.navbarHero};
    text-decoration: underline;
  }
`;


export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Abacus</title>
        <meta
          property="og:description"
          content="Learn about Abacus Capital Advisors, our team and our services providing exceptional wealth management and financial services."
        />
        <meta name="keywords" content="Privacy Policy" />
      </Head>
      <Container>
        <div>
          <h1>
            Internet Privacy Policy
          </h1>

          <h4 >
            Introduction
          </h4>

          <p>
            Abacus Capital Advisors, LLC (“Company” or “We”) respects your
            privacy and are committed to protecting it through our compliance
            with this policy.
          </p>
         
        
          <p

          >
            This policy describes the types of information we may collect from
            you or that you may provide when you visit the website and our
            practices for collecting, using, maintaining, protecting, and
            disclosing that information.
          </p>
          <p
           
          >
            This policy applies to any information we collect:
          </p>
          <ul id="l1">
            <li>
                On this Website including, without limitation, on data
                collection forms linked to third- party applications that store
                data on third-party websites; and
            </li>
            <li>
              <p>
                In email, text, and other electronic messages between you and
                this Website.
              </p>
              <p>
                It does not apply to information collected by:
              </p>
            </li>
            <li>
                us offline or through any other means, including on any other
                website operated by Company or any third party (including our
                affiliates and subsidiaries); or
            </li>
            <li>
                any third party (including our affiliates and subsidiaries),
                including through any application or content (including
                advertising) that may link to or be accessible from or on the
                Website.
            </li>
            <li>
                Please read this policy carefully to understand our policies and
                practices regarding your
              <p>
               
                  information and how we will treat it. If you do not agree with
                  our policies and practices, your choice is not to use our
                  Website. By accessing or using this Website, you agree to this
                  privacy policy. This policy may change from time to time (see
                  {" "}
                <a
                  href="https://www.wefamilyoffices.com/internet-privacy-policy/#changes"
                    target="_blank"
                >
                  Changes to Our Privacy Policy
                </a>
                , below). Your continued use of this Website after we make
                <span>
                  Privacy Policy
                </span>
                , below). Your continued use of this Website after we make
                changes is deemed to be acceptance of those changes, so please
                check the policy periodically for
              </p>
              <p>
                updates.
              </p>
              <h2>
                Children Under the Age of 13
              </h2>
              <p>
                Our Website is not intended for children under 13 years of age.
                No one under age 13 may provide any personal information to or
                on the Website. We do not knowingly collect personal information
                from children under 13. If you are under 13, do not use or
                provide any information on this Website or on or through any of
                its features/register on the
              </p>
              <p>
                Website. If we learn we have collected or received personal
                information from a child under 13 without verification of
                parental consent, we will delete that information.
              </p>
              <p>
                <br />
              </p>
              <h2>
                Information We Collect About You and How We Collect It
              </h2>
              <p>
                We collect several types of information from and about users of
                our Website, including information:
              </p>
            </li>
            <li data-list-text="">
              <p>
                that is about you but individually does not identify you; and/or
              </p>
            </li>
            <li data-list-text="">
              <p>
                about your internet connection, the equipment you use to access
                our Website and usage details;
              </p>
            </li>
            <li data-list-text="">
              <p>
                Unless you elect to complete our contact form, we do not collect
                information by which you may be personally identified, such as
                your name, postal address, e-mail address, telephone number, or
                social security number (“personal information”);
              </p>
              <p>
                We collect this information:
              </p>
            </li>
            <li data-list-text="">
              <p>
                Directly from you when you provide it to us.
              </p>
            </li>
            <li data-list-text="">
              <p>
                Automatically as you navigate through the site. Information
                collected automatically may include usage details, IP addresses,
                and information collected through cookies, web beacons, and
                other tracking technologies including, without limitation,
                screen
              </p>
              <p>
                capture.
              </p>
              <h3 style={{
                paddingLeft: '5pt',
                textIndent: '0pt',
                lineHeight: '15pt',
                textAlign: 'left',
              }}>
                Information You Provide to Us.
              </h3>
              <p>
                The information we collect on or through our Website may
                include:
              </p>
            </li>
            <li data-list-text="">
              <p>
                Information that you provide by filling in forms on our Website.
                This includes information provided at the time of requesting
                further services. We may also ask you for information when you
                report a problem with our Website.
              </p>
            </li>
            <li data-list-text="">
              <p>
                Records and copies of your correspondence (including email
                addresses), if you contact us.
              </p>
            </li>
            <li data-list-text="">
              <p>
                Your search queries on the Website.
              </p>
              <h3>
                Information We Collect Through Automatic Data Collection
                Technologies.
              </h3>
              <p>
                As you navigate through and interact with our Website, we may
                use automatic data collection technologies to collect certain
                information about your equipment, browsing actions, and
                patterns, including:
              </p>
            </li>
            <li data-list-text="">
              <p>
                Details of your visits to our Website, including traffic data,
                location data, logs, and other communication data and the
                resources that you access and use on the Website.
              </p>
            </li>
            <li data-list-text="">
              <p>
                Information about your computer and internet connection,
                including your IP address, operating system, and browser type.
              </p>
              <p>
                The information we collect automatically is statistical data and
                does not include personal
              </p>
              <p>
                information. It helps us to improve our Website and to deliver a
                better and more personalized service, including by enabling us
                to:
              </p>
            </li>
            <li data-list-text="">
              <p>
                Estimate our audience size and usage patterns.
              </p>
            </li>
            <li data-list-text="">
              <p>
                Store information about your preferences, allowing us to
                customize our Website according to your individual interests.
              </p>
            </li>
            <li data-list-text="">
              <p>
                Speed up your searches.
              </p>
            </li>
            <li data-list-text="">
              <p>
                Recognize you when you return to our Website.
              </p>
              <p>
                The technologies we use for this automatic data collection may
                include:
              </p>
            </li>
            <li data-list-text="">
              <p>
                Cookies (or browser cookies).
              </p>
              <p>
                A cookie is a small file placed on the hard drive of your
                computer. You may refuse to accept browser cookies by activating
                the appropriate setting on your browser.
              </p>
              <p>
                However, if you select this setting you may be unable to access
                certain parts of our Website. Unless you have adjusted your
                browser setting so that it will refuse cookies, our system will
                issue cookies when you direct your browser to our Website.
              </p>
            </li>
            <li data-list-text="">
              <p>
                Flash Cookies.
              </p>
              <p>
               
                  Certain features of our Website may use local stored objects
                  (or Flash cookies) to collect and store information about your
                  preferences and navigation to, from, and on our Website. Flash
                  cookies are not managed by the same browser settings as are
                  used for browser cookies. For information about managing your
                  privacy and security settings for Flash cookies, see{' '}
             
                <a
                  href="https://www.wefamilyoffices.com/internet-privacy-policy/#choices"
                  className="a"
                  target="_blank"
                >
                  Choices About How We Use and Disclose{' '}
             
                  Information
                </a>
                .
              </p>
            </li>
            <li data-list-text="">
              <p

              >
                Web Beacons.
              </p>
              <p>
                Pages of our the Website may contain small electronic files
                known as web beacons (also referred to as clear gifs, pixel
                tags, and single-pixel gifs) that permit the Company, for
                example, to count users who have visited those pages and for
                other related website statistics (for example, recording the
                popularity of certain website content and verifying system and
                server integrity).
              </p>
            </li>
            <li data-list-text="">
              <p>
                Screen Capture.
              </p>
              <p>
                If you enter our Website, we may use a software application that
                allows us to record
              </p>
              <p>
                and replay anonymized data of your website visit to allow us to
                make website and
              </p>
              <p>
                webpage usage heat maps and improve the Website’s design and
                ease of use.
              </p>
              <h2>
                How We Use Your Information
              </h2>
              <p>
                We use information that we collect about you or that you provide
                to us, including any personal information:
              </p>
            </li>
            <li data-list-text="">
              <p >
                To present our Website and its contents to you.
              </p>
            </li>
            <li data-list-text="">
              <p>
                To provide you with information, products, or services that you
                request from us.
              </p>
            </li>
            <li data-list-text="">
              <p>
                For any other purpose with your consent.
              </p>
              <h2 >
                Disclosure of Your Information
              </h2>
              <p
                >
                We may disclose aggregated information about our users, and
                information that does not identify any individual, without
                restriction.
              </p>
              <h2 >
                Choices About How We Use and Disclose Your Information
              </h2>
              <p
                >
                We strive to provide you with choices regarding the personal
                information you provide to us. We have created mechanisms to
                provide you with the following control over your information:
              </p>
            </li>
            <li data-list-text="">
              <p
                >
                Tracking Technologies and Advertising.{' '}
                <span className="p">
                  You can set your browser to refuse all or some browser
                  cookies, or to alert you when cookies are being sent. To learn
                  how you can manage your Flash cookie settings, visit the Flash
                  player settings page on Adobe’s website. If you disable or
                  refuse cookies, please note that some parts of this
                </span>
              </p>
            </li>
          </ul>
          <p >
            site may then be inaccessible or not function properly.
          </p>
          <h2>
            Changes to Our Privacy Policy
          </h2>
          <p>
            It is our policy to post any changes we make to our privacy policy
            on this page. The date the privacy policy was last revised is
            identified at the top of the page. You are responsible for
            periodically visiting our Website and this privacy policy to check
            for any
          </p>
          <p>
            changes.
          </p>
          <h2>
            Contact Information
          </h2>
          <p>
            
              To ask questions or comment about this privacy policy and our
              privacy practices, {' '}
            <a href="mailto:info@abacus-adv.com" target="_blank">
              contact
            </a>
              {" "}us at info@abacus-adv.com
          </p>
        </div>
      </Container>
    </>
  );
}
