import Head from 'next/head';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import HeroContact from './../components/Hero/Contact';
import { HORIZONTAL_SPACE } from './../utils/constants';

const Container = styled.div`
  width: 100%;
  ${HORIZONTAL_SPACE};
  display: flex;
  padding-top: 125px;
  padding-bottom: 200px;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 750px) {
    padding-top: 75px;
  }
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

  @media (max-width: 750px) {
    font-size: 22px;
    .dash {
      display: none;
    }
  }

  @media (max-width: 600px) {
    max-width: 329px;
    text-align: left;
    margin-bottom: 33px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
  }

  .message-text {
    height: 200px;
  }
`;

const FormField = styled.div`
  position: relative;
  width: 543px;
  height: 75px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    height: 60px;
  }

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

    @media (max-width: 600px) {
      font-size: 16px;
    }
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
    outline: none;

    @media (max-width: 600px) {
      font-size: 16px;
      top: 20px;
    }
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

    @media (max-width: 600px) {
      font-size: 16px;
    }
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
  transition: 0.5s;

  &:hover {
    background-color: #c9c9c9;
    transform: scale(1.01);
    color: #000;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ContactInfoContainer = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  margin-left: 200px;
  width: 350px;
  margin-bottom: 60px;

  @media (max-width: 1060px) {
    margin-left: 50px;
  }

  @media (max-width: 950px) {
    margin-bottom: 0;
    justify-self: flex-start;
    align-self: flex-start;
    margin-top: 83px;
    margin-left: 0;
    width: 100%;
  }

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
      transition: 0.5s;

      &:hover {
        background-color: #3a5144;
        opacity: 0.7;
      }
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

export interface EmailBody {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const validateState = (state: EmailBody) => {
  const errors: any = {};

  if (!state.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(state.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!state.firstName) {
    errors.firstName = 'First name is required';
  } else if (state.firstName.length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }

  if (!state.lastName) {
    errors.lastName = 'Last name is required';
  } else if (state.lastName.length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }

  if (!state.message) {
    errors.message = 'Message is required';
  } else if (state.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  if (!state.phone) {
    errors.phone = 'Phone number is required';
  }

  return errors;
};

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  message: '',
  phone: '',
};

export default function ContactUs() {
  const [data, setData] = useState<EmailBody>(initialState);
  const [msgError, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    const errors = validateState(data);

    if (Object.keys(errors).length > 0) {
      setErrorMsg((Object.values(errors) as string[])[0]);
    } else {
      setLoading(true);
      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();
      setLoading(false);

      if (json.code === 200) {
        alert('Email Sent successfully');
        setData(initialState);
      }
    }
  };

  const handleChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setErrorMsg('');

    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us | Abacus</title>
        <meta
          property="og:description"
          content="Get in touch with Abacus Capital Advisors for personalized financial services and expert wealth management. Reach out to our team today."
        />
        <meta name="keywords" content="Contact Us" />
      </Head>
      <HeroContact />
      <Container>
        <FormContainer>
          <Title>
            <div className="dash" />
            Fill out the form below and we will contact you shortly
          </Title>
          <FormField>
            <input
              value={data.firstName}
              id="first-name"
              placeholder=" "
              name="firstName"
              onChange={handleChange}
            />
            <label htmlFor="first-name">First name</label>
          </FormField>
          <FormField>
            <input
              id="last-name"
              value={data.lastName}
              placeholder=" "
              name="lastName"
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last name</label>
          </FormField>
          <FormField>
            <input
              id="email"
              value={data.email}
              onChange={handleChange}
              placeholder=" "
              name="email"
            />
            <label htmlFor="email">Email</label>
          </FormField>
          <FormField>
            <input
              id="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder=" "
              name="phone"
            />
            <label htmlFor="phone">Telephone</label>
          </FormField>
          <FormField className="message-text">
            <textarea
              value={data.message}
              onChange={handleChange}
              id="message"
              placeholder=" "
              name="message"
            />
            <label className="message" htmlFor="message">
              Message
            </label>
          </FormField>
          {!!msgError && <p style={{ color: 'red' }}>{msgError}</p>}
          <Button onClick={sendEmail}>{loading ? "Sending..." :"Send"}</Button>
        </FormContainer>

        <ContactInfoContainer>
          <div className="networks">
            <div className="icon">
              <Link
                href={
                  'https://www.linkedin.com/company/abacus-capital-advisors/'
                }
              >
                <img src="/linkdin-1.svg" alt="" />
              </Link>
            </div>
            <div className="icon">
              <Link href={'https://wa.me/13056761808'}>
                <img src="/whatsap.svg" alt="" />
              </Link>
            </div>
          </div>
          <p>
            <a href="https://maps.app.goo.gl/xvnfqhDtgDnnWfm48" target="_blank">
              8181 West Broward Blvd, Suite 258 <br />
              Plantation, Florida 33324
            </a>
          </p>
          <p>
            Office:{' '}
            <a target="_blank" href="tel:(954) 361-4210">
              (954) 361-4210
            </a>
          </p>
          <p>
            <a href="mailto:info@abacus-adv.com" target="_blank">
              info@abacus-adv.com
            </a>
          </p>
        </ContactInfoContainer>
      </Container>{' '}
    </>
  );
}
