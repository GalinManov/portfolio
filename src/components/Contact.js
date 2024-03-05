import FacebookIcon from '../assets/facebook.png'
import LinkedIcon from '../assets/LinkedIn.png'
import GithubIcon from '../assets/Github.png'


export const Contact = () => {
    return (
        <section className="container-custom">

            <h1>Contact me</h1>

            <div className="contact-info" id="contact">
                <div>
                    <a href='https://www.facebook.com/galin.manov' target='_blank'>
                        <img src={FacebookIcon} className='icon-img' href='https://www.facebook.com/galin.manov' />
                    </a>
                </div>
                <div>
                    <a href='https://www.facebook.com/galin.manov' target='_blank'>
                        <img src={LinkedIcon} className='icon-img' href='https://www.facebook.com/galin.manov' />
                    </a>
                </div>
                <div>
                    <a href='https://www.facebook.com/galin.manov' target='_blank'>
                        <img src={GithubIcon} className='icon-img' href='https://www.facebook.com/galin.manov' />
                    </a>
                </div>
            </div>

            <h4 style={{ "margin": "5rem 0rem" }}>Tel.: 0897586645</h4>

            <a className="btn-contact" href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'>
                Email me!  
            </a>
            <h5 style={{"color":"brown", "marginTop":"1rem"}}>at</h5>
            <h4 style={{"color":"brown", "marginTop":"1rem"}}>galin.manov00@gmail.com</h4>

        </section>
    )

};