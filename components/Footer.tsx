import React from "react";
import styled from "styled-components";

const FooterComponent = styled.footer`
  padding: 80px 40px 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cccccc;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 20px;
`;

const Input = styled.input`
  height: 40px;
  outline: none;
  padding-left: 20px;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  height: 250px;
  outline: none;
  padding: 20px;
  margin-bottom: 20px;
`;

const SocialNetworks = styled.section`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin-top: 40px;
`;

const Submit = styled.div`
  width: 102px;
  height; 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #555;
  color: white;
  margin: auto;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #555;
  }
`;

const Footer: React.FunctionComponent = () => (
  <FooterComponent>
    <span>DO YOU HAVE ANY QUESTIONS?</span>
    <Form action="">
      <Input type="email" placeholder="Your email" />
      <TextArea id="" />
      <Submit>Submit</Submit>
    </Form>
    <SocialNetworks>
      <div>
        <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.33333 7.125H11V10.6875H7.33333V19H3.66667V10.6875H0V7.125H3.66667V5.63469C3.66667 4.22275 4.12378 2.43912 5.03311 1.46419C5.94244 0.486875 7.07789 0 8.43822 0H11V3.5625H8.43333C7.82467 3.5625 7.33333 4.03988 7.33333 4.63006V7.125Z"
            fill="#4F4F4F"
          />
        </svg>
      </div>
      <div>
        <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.4213 2.69303C20.4088 2.11554 21.0626 1.32731 21.3828 0.324841C20.4809 0.789524 19.5131 1.12719 18.5095 1.32731C17.6504 0.447093 16.5626 0 15.2586 0C13.9839 0 12.9072 0.426135 12.0284 1.25512C11.6041 1.64878 11.2686 2.12083 11.0424 2.64237C10.8163 3.1639 10.7044 3.72392 10.7134 4.28813C10.7134 4.6479 10.7611 4.96925 10.8564 5.2417C7.09705 5.11944 3.98545 3.63379 1.5338 0.774262C1.11827 1.47401 0.910505 2.18656 0.910505 2.92357C0.910505 4.43833 1.58147 5.63872 2.92095 6.5201C2.1571 6.45839 1.4837 6.27443 0.910505 5.97288C0.910505 7.05452 1.24415 7.95802 1.91267 8.75324C2.56207 9.52812 3.47725 10.0603 4.49753 10.2564C4.11622 10.3495 3.71413 10.3937 3.30104 10.3937C2.91973 10.3937 2.64963 10.3635 2.48953 10.2971C2.77062 11.1785 3.30104 11.8934 4.06733 12.4406C4.82487 12.9886 5.74635 13.2917 6.69741 13.3057C5.0695 14.5224 3.20816 15.1243 1.10238 15.1243C0.586634 15.1243 0.22121 15.1173 0 15.0801C2.074 16.3631 4.38265 17 6.93695 17C9.55114 17 11.861 16.3689 13.8715 15.1068C15.8819 13.8517 17.3656 12.3032 18.3189 10.4799C19.2616 8.71564 19.7524 6.76381 19.7512 4.78412V4.23923C20.6299 3.62206 21.3906 2.86548 22 2.0026C21.177 2.34242 20.3096 2.57467 19.4213 2.69303Z"
            fill="#4F4F4F"
          />
        </svg>
      </div>
      <div>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 0H3C1.3 0 0 1.3 0 3V15C0 16.7 1.3 18 3 18H15C16.7 18 18 16.7 18 15V3C18 1.3 16.7 0 15 0ZM9 6C10.7 6 12 7.3 12 9C12 10.7 10.7 12 9 12C7.3 12 6 10.7 6 9C6 7.3 7.3 6 9 6ZM12.8 4C12.8 3.3 13.4 2.8 14 2.8C14.6 2.8 15.2 3.4 15.2 4C15.2 4.6 14.7 5.2 14 5.2C13.3 5.2 12.8 4.7 12.8 4ZM15 16H3C2.4 16 2 15.6 2 15V9H4C4 11.8 6.2 14 9 14C11.8 14 14 11.8 14 9H16V15C16 15.6 15.6 16 15 16Z"
            fill="#4F4F4F"
          />
        </svg>
      </div>
    </SocialNetworks>
  </FooterComponent>
);

export default Footer;
