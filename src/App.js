/* eslint-disable jsx-a11y/anchor-is-valid */
import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='App'>
      <section>
        <nav>
          <div className='logo-container'>
            <svg
              width='33'
              height='32'
              viewBox='0 0 33 32'
              className='me-2'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.4062 0C13.2417 -3.77363e-08 10.1483 0.938383 7.51713 2.69649C4.88594 4.45459 2.83518 6.95345 1.62418 9.87706C0.413176 12.8007 0.096322 16.0177 0.713685 19.1214C1.33105 22.2251 2.8549 25.0761 5.09254 27.3137C7.33018 29.5513 10.1811 31.0752 13.2848 31.6926C16.3885 32.3099 19.6056 31.9931 22.5292 30.7821C25.4528 29.5711 27.9517 27.5203 29.7098 24.8891C31.4679 22.2579 32.4062 19.1645 32.4062 16L24.4062 16C24.4062 17.5823 23.9371 19.129 23.058 20.4446C22.179 21.7602 20.9295 22.7855 19.4677 23.391C18.0059 23.9965 16.3974 24.155 14.8455 23.8463C13.2937 23.5376 11.8682 22.7757 10.7494 21.6569C9.63057 20.538 8.86865 19.1126 8.55997 17.5607C8.25129 16.0089 8.40971 14.4003 9.01521 12.9385C9.62072 11.4767 10.6461 10.2273 11.9617 9.34824C13.2773 8.46919 14.824 8 16.4062 8V0Z'
                fill='white'
              />
              <path
                d='M16.4062 0C14.3051 -2.5056e-08 12.2245 0.413852 10.2833 1.21793C8.3421 2.022 6.57828 3.20055 5.09254 4.68629C3.6068 6.17203 2.42825 7.93586 1.62418 9.87707C0.820102 11.8183 0.40625 13.8989 0.40625 16H8.40625C8.40625 14.9494 8.61318 13.9091 9.01521 12.9385C9.41725 11.9679 10.0065 11.086 10.7494 10.3431C11.4923 9.60028 12.3742 9.011 13.3448 8.60896C14.3154 8.20693 15.3557 8 16.4062 8V0Z'
                fill='#5CE1E6'
              />
              <circle cx='16.4062' cy='16' r='5' fill='#5CE1E6' />
              <path
                d='M21.4062 16C21.4062 15.3434 21.2769 14.6932 21.0256 14.0866C20.7744 13.48 20.4061 12.9288 19.9418 12.4645C19.4775 12.0002 18.9263 11.6319 18.3197 11.3806C17.713 11.1293 17.0629 11 16.4062 11C15.7496 11 15.0995 11.1293 14.4928 11.3806C13.8862 11.6319 13.335 12.0002 12.8707 12.4645C12.4064 12.9288 12.0381 13.48 11.7869 14.0866C11.5356 14.6932 11.4062 15.3434 11.4063 16L16.4062 16H21.4062Z'
                fill='white'
              />
            </svg>
            <p className='logo-text'>
              Hoo<span>Bank</span>
            </p>
          </div>

          <div className='nav-actions'>
            <ul>
              <li className='active'>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Solution</li>
            </ul>
          </div>
        </nav>
      </section>

      <section>
        <div className='hero'>
          <div className='hero-content'>
            <p className='large'>
              The Next
              <br />
              <span>Generation</span>
              <br />
              Payment Method.
            </p>

            <p className='small'>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>
        <div>
          <img
            className='robotimg'
            src='/assets/images/herocard.png'
            alt='Card'
          />
        </div>
      </section>

      <section>
        <div className='numbers'>
          <div className='number-container'>
            <span>3800+</span>
            <label>USER ACTIVE</label>
          </div>
          <div className='vr'></div>
          <div className='number-container'>
            <span>230+</span>
            <label>TRUSTED BY COMPANY</label>
          </div>
          <div className='vr'></div>
          <div className='number-container'>
            <span>$230M+</span>
            <label>Transaction</label>
          </div>
        </div>
      </section>

      <section>
        <div>
          <p className='medium'>You do the business, we'll handle the money.</p>
          <p className='small'>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button>Get Started</button>
        </div>

        <div>
          <div className='small-card mycard'>
            <img src='/assets/images/star.svg' alt='' />
            <div>
              <div className='card-title'>Rewards</div>
              <p className='card-p'>
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>
          <div className='small-card mycard'>
            <img src='/assets/images/shield.svg' alt='' />
            <div>
              <div className='card-title'>100% secured</div>
              <p className='card-p'>
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </div>
          </div>
          <div className='small-card mycard'>
            <img src='/assets/images/share.svg' alt='' />
            <div>
              <div className='card-title'>Balance Transfer</div>
              <p className='card-p'>
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <img src='/assets/images/paypal.svg' alt='' />
        </div>

        <div>
          <p className='medium'>Easily control your billing & invoicing.</p>
          <p className='small'>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
        </div>
      </section>

      <section>
        <div>
          <p className='medium'>Find a better card deal in few easy steps.</p>
          <p className='small'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum
            facere delectus nisi officiis incidunt.
          </p>
          <button>Get Started</button>
        </div>

        <div>
          <img
            style={{ marginRight: '5rem' }}
            src='/assets/images/pay.svg'
            alt=''
          />
        </div>
      </section>

      <section className='d-flex flex-column'>
        <div className='d-flex m-auto justify-content-center'>
          <p className='section-title'>Testimonials</p>
        </div>

        <div className='carousel w-100'>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div className='medium-card mycard'>
                <img className='quote' src='/assets/icons/quote.svg' alt='' />
                <p>
                  Money is only a tool. It will take you wherever you wish, but
                  it will not replace you as the driver.
                </p>
                <div className='card-footer'>
                  <img
                    className='card-profile-img'
                    src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                    alt=''
                  />
                  <div>
                    <div className='card-profile-name'>Herman Jensen</div>
                    <div className='card-profile-qualification'>
                      Founder & Leader
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='medium-card mycard'>
                <img className='quote' src='/assets/icons/quote.svg' alt='' />
                <p>
                  Money is only a tool. It will take you wherever you wish, but
                  it will not replace you as the driver.
                </p>
                <div className='card-footer'>
                  <img
                    className='card-profile-img'
                    src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                    alt=''
                  />
                  <div>
                    <div className='card-profile-name'>Herman Jensen</div>
                    <div className='card-profile-qualification'>
                      Founder & Leader
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='medium-card mycard'>
                <img className='quote' src='/assets/icons/quote.svg' alt='' />
                <p>
                  Money is only a tool. It will take you wherever you wish, but
                  it will not replace you as the driver.
                </p>
                <div className='card-footer'>
                  <img
                    className='card-profile-img'
                    src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                    alt=''
                  />
                  <div>
                    <div className='card-profile-name'>Herman Jensen</div>
                    <div className='card-profile-qualification'>
                      Founder & Leader
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <section>
        <div className='d-flex w-100 justify-content-between'>
          <img src='/assets/icons/airbnb.svg' alt='' />
          <img src='/assets/icons/binance.svg' alt='' />
          <img src='/assets/icons/coinbase.svg' alt='' />
          <img src='/assets/icons/dropdown.svg' alt='' />
        </div>
      </section>

      <section>
        <div className='large-card mycard'>
          <div className=''>
            <div className='large-card-title'>Let's try our service now!</div>
            <div className='large-card-content'>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </div>
          </div>
          <div>
            <button>Get Started</button>
          </div>
        </div>
      </section>

      <section className='footer-section'>
        <div className='footer-content'>
          <div className='d-flex pt-5'>
            <div className='footer-brand'>
              <div className='footer-logo-container'>
                <svg
                  width='72'
                  height='72'
                  className='me-2'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.4062 0C13.2417 -3.77363e-08 10.1483 0.938383 7.51713 2.69649C4.88594 4.45459 2.83518 6.95345 1.62418 9.87706C0.413176 12.8007 0.096322 16.0177 0.713685 19.1214C1.33105 22.2251 2.8549 25.0761 5.09254 27.3137C7.33018 29.5513 10.1811 31.0752 13.2848 31.6926C16.3885 32.3099 19.6056 31.9931 22.5292 30.7821C25.4528 29.5711 27.9517 27.5203 29.7098 24.8891C31.4679 22.2579 32.4062 19.1645 32.4062 16L24.4062 16C24.4062 17.5823 23.9371 19.129 23.058 20.4446C22.179 21.7602 20.9295 22.7855 19.4677 23.391C18.0059 23.9965 16.3974 24.155 14.8455 23.8463C13.2937 23.5376 11.8682 22.7757 10.7494 21.6569C9.63057 20.538 8.86865 19.1126 8.55997 17.5607C8.25129 16.0089 8.40971 14.4003 9.01521 12.9385C9.62072 11.4767 10.6461 10.2273 11.9617 9.34824C13.2773 8.46919 14.824 8 16.4062 8V0Z'
                    fill='white'
                  />
                  <path
                    d='M16.4062 0C14.3051 -2.5056e-08 12.2245 0.413852 10.2833 1.21793C8.3421 2.022 6.57828 3.20055 5.09254 4.68629C3.6068 6.17203 2.42825 7.93586 1.62418 9.87707C0.820102 11.8183 0.40625 13.8989 0.40625 16H8.40625C8.40625 14.9494 8.61318 13.9091 9.01521 12.9385C9.41725 11.9679 10.0065 11.086 10.7494 10.3431C11.4923 9.60028 12.3742 9.011 13.3448 8.60896C14.3154 8.20693 15.3557 8 16.4062 8V0Z'
                    fill='#5CE1E6'
                  />
                  <circle cx='16.4062' cy='16' r='5' fill='#5CE1E6' />
                  <path
                    d='M21.4062 16C21.4062 15.3434 21.2769 14.6932 21.0256 14.0866C20.7744 13.48 20.4061 12.9288 19.9418 12.4645C19.4775 12.0002 18.9263 11.6319 18.3197 11.3806C17.713 11.1293 17.0629 11 16.4062 11C15.7496 11 15.0995 11.1293 14.4928 11.3806C13.8862 11.6319 13.335 12.0002 12.8707 12.4645C12.4064 12.9288 12.0381 13.48 11.7869 14.0866C11.5356 14.6932 11.4062 15.3434 11.4063 16L16.4062 16H21.4062Z'
                    fill='white'
                  />
                </svg>
                <p className='logo-text footer-logo-text'>
                  Hoo<span>Bank</span>
                </p>
              </div>

              <p className='small footer-brand-title'>
                A new way to make the payments easy, reliable and secure.
              </p>
            </div>

            <div className='footer-links'>
              <div className='link-container'>
                <div className='link-title'>Useful Links</div>
                <div className='link-content'>
                  <a href='#'>Content</a>
                  <a href='#'>How it Works</a>
                  <a href='#'>Create</a>
                  <a href='#'>Explore</a>
                  <a href='#'>Terms & Services</a>
                </div>
              </div>
              <div className='link-container'>
                <div className='link-title'>Community</div>
                <div className='link-content'>
                  <a href='#'>Help Center</a>
                  <a href='#'>Partners</a>
                  <a href='#'>Suggestions</a>
                  <a href='#'>Blog</a>
                  <a href='#'>Newsletters</a>
                </div>
              </div>
              <div className='link-container'>
                <div className='link-title'>Partner</div>
                <div className='link-content'>
                  <a href='#'>Our Partner</a>
                  <a href='#'>Become a Partner</a>
                </div>
              </div>
            </div>
          </div>

          <div className='footer-bottom'>
            <div className='footer-line'></div>

            <div className='d-flex justify-content-between'>
              <div className='copyright'>
                Copyright <img src='/assets/icons/copyright-icon.svg' alt='' />
                2021 HooBank. All Rights Reserved.
              </div>

              <div className='footer-social-icons'>
                <a href=''>
                  <img src='/assets/icons/instagram.svg' alt='' />
                </a>

                <a href=''>
                  <img src='/assets/icons/facebook.svg' alt='' />
                </a>

                <a href=''>
                  <img src='/assets/icons/twitter.svg' alt='' />
                </a>

                <a href=''>
                  <img src='/assets/icons/linkedin.svg' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
