import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className = "loginScreen">
      <div className = "loginScreen__background">
            <img 
            className="loginScreen__logo"
            src = "https://imgur.com/qPMsbvT.png" 
            alt=""
            />

            <button onClick ={() => setSignIn(true)} 
            className = "loginScreen__button">
                Sign In
            </button>
            
            <div className = "loginScreen__gradient" />
        <div className="loginScreen__body">
            {signIn ? (
              <SignupScreen />
            ) : (
              <>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>
                Watch anywhere. Cancel anytime.
              </h2>
              <h3>
                Ready to watch? Enter your email to create or restart your membership.
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type='email' placeholder="Email Address" 
                  onfocus= ""
                  />
                  <button 
                  onClick = {() => setSignIn(true)}
                  className='loginScreen_getStarted'>GET STARTED &gt;</button>
                </form>
              </div>
            </>
            )}
        </div>
      </div>

      <div className = "loginScreen__body__adverisement">
          <h1>넷플릭스에만 있는 재미</h1>
          <h2>오리지널 콘텐츠를 만나보세요!</h2>
          <h3>차별화된 웰메이드 오리지널 콘텐츠</h3>
      </div>
      
      <div className = "loginScreen__adverisement__image">

      <div className = "loginScreen__adverisement__image__middle">
          <img 
            src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5575%2F2023%2F04%2F17%2F0000371330_002_20230417153602359.jpg&type=sc960_832" 
            alt=""
            width={225}
          />
        </div>

        <div className = "loginScreen__adverisement__image__left">
          <img
            src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjZfMzMg%2FMDAxNjc5ODExNzcyNTcw.NMdQSaGDljbXHzZmlhKINCWGR7Spr26SC9lnu7avkSgg.JMtryg-dgpXv8msjsg4qOgQ980Z6ibrf_1cvBLjDc3sg.JPEG.xman55555%2FjwMMQR69Xz9AYtX4u2uYJgfAAev.jpg&type=sc960_832"
            alt = ""
            width={200}
            />
        </div>
       
        <div className = "loginScreen__adverisement__image__right">
          <img
            src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140717_122%2Fjamitaemi_1405602639564WrMRp_JPEG%2F%25BD%25BA%25C4%25B50013.jpg&type=sc960_832"
            alt = ""
            width={200}
          />
        </div>
      </div>

      <div className= "loginScreen__body__adverisement__chapter__two">
          <h1>내가 찾던 재미</h1>
          <h2>보고 싶은 콘텐츠를 발견하세요!</h2>
          <h3>최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+오리지널 및 독점</h3>
      </div>

      <div className = "loginScreen__body__adverisement__chapter__two__image">
      <p>The Caterpillar and Alice looked at each other for some time in silence:
         at last the Caterpillar took the hookah out of its mouth, and addressed
         her in a languid, sleepy voice.</p>
      </div>
    </div>

  )
}

export default LoginScreen
