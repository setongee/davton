import React, {useState} from 'react';
import {ReactComponent as More} from './assets/svg/more.svg'
import {ReactComponent as Chat} from './assets/svg/chat_icon.svg'
import PostImg1 from './assets/posts/postImg.jpg'
import Reactions from './reactions';
import PostBody from './PostBody';
import Comment from './comment';


const Posts = ({srcgd}) => {


    const data = {

        date : 'Wednesday 23rd December 2021',
        time : '08:56 AM',
        photoUrl : 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        profileImg : '',
        profile_name : 'Moyosore Oluwajuore',
        profile_title : 'Assistant Marketing Director, B2B Team',
        reactions : { likes : 23, comments : 19 },
        post_body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis, quia placeat dolorem amet hic totam tempora est veritatis nisi modi? Ipsum excepturi, laborum quod tenetur obcaecati, velit at totam modi earum facilis eveniet voluptas aliquam eligendi, non quaerat exercitationem vel ab voluptatibus esse iusto consectetur necessitatibus deserunt doloremque nostrum. Rem dicta delectus quaerat amet vero consectetur, eos eum alias hic doloribus vel? Pariatur, earum quos accusamus alias maiores eveniet, dicta corrupti delectus neque dolorem rem fugit ad. Vitae aliquid architecto fugiat cumque quibusdam voluptatibus fugit repellat nam quae porro cupiditate, repellendus odio expedita qui. Consequatur unde fuga beatae culpa eos tenetur architecto. Doloribus laboriosam accusamus ut recusandae in consequatur minima totam placeat quas aperiam quo, dolorum nulla vero distinctio, aliquam est nihil. Minima, alias!',

        comments : [ 

            {
                staff_id : '1234', 
                commentId : '1010', 
                message : 'laborum quod tenetur obcaecati, velit at totam modi earum facilis eveniet voluptas aliquam eligendi, non quaerat exercitationem vel ab voluptatibus esse iusto consectetur necessitatibus deserunt doloremque nostrum.', 
            
                replies : [ 
                    { 
                        staff_id : '1231', 
                        comment : 'Doloribus laboriosam accusamus ut recusandae in consequatur minima totam placeat quas aperiam quo, dolorum nulla vero distinctio, aliquam est nihil. Minima, alias!', 
                        date : 'Yesterday 01:44 AM' 
                    }, 
                    { 
                        staff_id : '1232', 
                        comment : 'Doloribus laboriosam accusamus ut recusandae in consequatur minima totam placeat quas aperiam quo, dolorum nulla vero distinctio, aliquam est nihil. Minima, alias!', 
                        date : 'Today 10:44 PM' 
                    } 
                ] 
            }, 

            {
                staff_id : '1232', 
                commentId : '1010', 
                message : 'laborum quod tenetur obcaecati, velit at totam modi earum facilis eveniet voluptas aliquam eligendi.', 
            
                replies : [ 
                    { 
                        staff_id : '1234', 
                        comment : 'Doloribus laboriosam accusamus ut recusandae in consequatur minima totam placeat quas aperiam quo, dolorum nulla vero distinctio, aliquam est nihil. Minima, alias!', 
                        date : 'Today 10:44 PM' 
                    } 
                ] 
            }, 

            {
                staff_id : '1233', 
                commentId : '1010', 
                message : 'laborum quod tenetur obcaecati, velit at totam modi earum facilis eveniet voluptas aliquam eligendi, non quaerat exercitationem vel ab voluptatibus esse iusto consectetur necessitatibus deserunt doloremque nostrum.', 
            
                replies : [] 
            }, 

        ]
    }

    const staffData = {

        1234 : {staff_name : 'Adedotun Akande', staff_img : 'https://images.unsplash.com/photo-1596935884413-260a972dab44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'} ,

        1231 : {staff_name : 'Sandra Nwokocha', staff_img : 'https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} ,

        1232 : {staff_name : 'Olowookeere Isaac John', staff_img : 'https://images.pexels.com/photos/6973963/pexels-photo-6973963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} ,

        1233 : {staff_name : 'Elvin Jegede', staff_img : 'https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'},
        1235 : {staff_name : 'Moyosore Oluwajuore', staff_img : 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'}

    }


    const [like, setLike] = useState(false)

    const showLike = (e) => {
        console.log();
        setLike(true)
    }

    const closeLike = (e) => {
        console.log();
        setLike(false)
    }

    return (

        <div className="davtonPosts">


           <div className="dateArea">

               <div className="timestamp">

                    <div className="date">{data.date}</div>
                    <div className="time"> {data.time} </div>

               </div>

               <div className="moreOptions">

                   <More/>

               </div>

           </div>

           <div className="post_img"> <img src={srcgd} alt="davton learn post" /> </div>

           <div className="profile_identity">

                <div className="identifier">

                    <div className="photo"> 

                        <img src={data.photoUrl} alt="posts images" />

                    </div>
                    
                    <div className="profile_name">

                        <div className="name"> {data.profile_name} </div>
                        <div className="title"> {data.profile_title} </div>

                    </div>
                    
                </div>

                <div className="chat-icon">
                    <Chat/>
                </div>

           </div>

           <div className="reactions">

               <div className="showw" onMouseOver = {showLike} onMouseLeave = {closeLike}>

                {
                    like ? <Reactions/> : null
                }

                    <div className="add-reaction" >Give Reaction</div>

               </div>

                <div className="reaction-stat">

                    <div className="reactions-data">

                        <div className="likes"><span>Reactions</span> : {data.reactions.likes}</div>
                        <div className="comments"><span>Comments</span> : {data.reactions.comments}</div>

                    </div>

                </div>

            </div>

           <div className="postArea-post">

            <div className="post_body">
                <PostBody data = {data.post_body} />
            </div>

            <div className="comment-me">

                <div className="mycomment">

                    <div className="photoMy"> <img src={data.photoUrl} alt="my comment photo" /> </div>

                    <div className="comment-field">
                        <input type="text" name='mine_comment' placeholder = 'Share your comment here...'/>
                        <p>Share</p>
                    </div>

                </div>
                
            </div>

            <Comment data = {data} staffData = {staffData} />

           </div>


        </div>
    );
}

export default Posts;
