import arrow from '../assets/down-arrow.png';

export const Home = () => {
    return (

        <section className="container-custom home" id="home">
            <div className="home-welcome">
                <div className='line'></div>
                <div className="home-intro">
                    <h2 style={{ "textAlign": "start" }}>Hello,</h2>
                    <p>My name is Galin!</p>
                </div>
                <div className='line'></div>
            </div>


            <div className="home-box ">
                <h3>Up-and-coming</h3>
                <h2>Junior <span style={{"color":"brown"}}>Javascript Developer</span></h2>
                <p>Specializing in Full-Stack Web Development using React and NodeJS</p>
            </div>


            <h4>More about my skillset and passions!</h4>
            <div className="home-more">
                <a href='#about'>
                    <img className='arrow-png' src={arrow} />
                </a>
            </div>
        </section>

    )


};