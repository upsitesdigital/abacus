import Link from 'next/link';
import styled from 'styled-components';
import HeroContact from '~/components/Hero/Contact';
import { HORIZONTAL_SPACE } from '~/utils/constants';

const Container = styled.div`
  width: 100%;
  ${HORIZONTAL_SPACE};
  display: flex;
  padding-top: 125px;
  padding-bottom: 200px;
`;

const Title = styled.h3`
  max-width: 548px;
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 71px;

  .dash {
    width: 56px;
    height: 1px;
    background-color: #46785c;
    margin-bottom: 51px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  .message-text {
    height: 200px;
  }
`;

const FormField = styled.div`
  position: relative;
  width: 543px;
  height: 75px;
  margin-bottom: 16px;

  input {
    width: 100%;
    height: 100%;
    font-size: 22px;
    border: 1px solid #777777;
    color: #1a4f31;
    font-size: 22px;
    font-weight: 500;
    padding: 9px 19px;
    outline: none;
  }

  label {
    position: absolute;
    top: 22px;
    left: 10px;
    font-weight: 300;
    font-size: 18px;
    color: #777777;
    padding: 0 5px;
    transition: 0.3s;
    pointer-events: none;
    background-color: #fff;
  }

  input:focus {
    border-color: #5e8f51;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: -12px;
    left: 10px;
    font-size: 12px;
    color: #000;
    padding: 4px 10px 4px 10px;
  }

  textarea {
    width: 100%;
    height: 203px;
    padding: 9px 19px;
    font-size: 22px;
    color: #1a4f31;
  }

  textarea + label {
    top: 10px;
  }

  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    top: -12px;
    font-size: 12px;
    padding: 4px 10px 4px 10px;
  }
`;

const Button = styled.button`
  width: 288px;
  height: 58px;
  background-color: #1a4f31;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  cursor: pointer;
  margin-top: 12px;
`;

const ContactInfoContainer = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  margin-left: 200px;
  width: 350px;
  margin-bottom: 60px;

  .networks {
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin-bottom: 54px;

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background-color: #46785c;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a {
      cursor: pointer;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }

  p {
    font-size: 18px;
    font-weight: 300;
    color: #000000;
    margin-bottom: 16px;
  }
`;

export default function ContactUs() {
  return (
    <>
      <HeroContact />
      <Container>
        <FormContainer>
          <Title>
            <div className="dash" />
            Fill out the form below and we will contact you shortly
          </Title>
          <FormField>
            <input id="first-name" placeholder=" " name="first-name" />
            <label htmlFor="first-name">First name</label>
          </FormField>
          <FormField>
            <input id="last-name" placeholder=" " name="last-name" />
            <label htmlFor="last-name">Last name</label>
          </FormField>
          <FormField>
            <input id="email" placeholder=" " name="email" />
            <label htmlFor="email">Email</label>
          </FormField>
          <FormField>
            <input id="phone" placeholder=" " name="phone" />
            <label htmlFor="phone">Telephone</label>
          </FormField>
          <FormField className="message-text">
            <textarea id="message" placeholder=" " name="message" />
            <label className="message" htmlFor="message">
              Message
            </label>
          </FormField>
          <Button>Send</Button>
        </FormContainer>

        <ContactInfoContainer>
          <div className="networks">
            <div className="icon">
              <Link href={'http://www.google.com'}>
                <img src="/linkdin-1.svg" alt="" />
              </Link>
            </div>
            <div className="icon">
              <Link href={'http://www.google.com'}>
                {' '}
                <img src="/whatsap.svg" alt="" />
              </Link>
            </div>
          </div>
          <p>
            8181 West Broward Blvd, Suite 258 <br />
            Plantation, Florida 33324
          </p>
          <p>Office: (954) 361-4210</p>
          <p>info@abacus-adv.com</p>
        </ContactInfoContainer>
      </Container>{' '}
    </>
  );
}
