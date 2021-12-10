import React from 'react';

const Reactions = () => {
    return (
        <div className="showLikes">

                   <div className="anim likes">
                        <div className="icon">
                            <lottie-player src="https://assets6.lottiefiles.com/temp/lf20_zPrwZA.json"  background="transparent"  speed="1"  style = {{width: '60px', height: '60px'}}  loop autoplay></lottie-player>
                        </div>
                        <div className="topic">Like</div>
                   </div>

                   <div className="anim likes love">
                        <div className="icon">
                            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_6jsarzzl.json"  background="transparent"  speed="1"  style = {{width: '60px', height: '60px'}}  loop autoplay></lottie-player>
                        </div>
                        <div className="topic">Love</div>
                   </div>

                   <div className="anim likes clap">
                        <div className="icon">
                            <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_wafptztg.json"  background="transparent"  speed="1"  style = {{width: '60px', height: '60px'}}  loop  autoplay></lottie-player>
                        </div>
                        <div className="topic">Celebrate</div>
                   </div>

                   <div className="anim likes end">
                        <div className="icon">
                            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_2rcvjuse.json"  background="transparent"  speed="1"  style = {{width: '50px', height: '50px'}}  loop  autoplay></lottie-player>
                        </div>
                        <div className="topic">Insightful</div>
                   </div>

                   <div className="anim likes confussed">
                        <div className="icon">
                            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_GmGwQf.json"  background="transparent"  speed="1"  style = {{width: '50px', height: '50px'}}  loop  autoplay></lottie-player>
                        </div>
                        <div className="topic">Confussed</div>
                   </div>



               </div>
    );
}

export default Reactions;
