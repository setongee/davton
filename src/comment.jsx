import React, {useState} from 'react';

const Comment = ({data, staffData}) => {


    const [reply, setReply] = useState(false)


    return (
        <div className="commentsPost">

                <div className="imageUrl-comment">

                    <img src={staffData[1234].staff_img} alt="image for posts" />

                </div>
                
                <div className="commentPin">

                    <div className="profilePin">

                        <div className="datePin">Yesterday 01:44 AM</div>
                        <div className="namePin">{staffData[1234].staff_name}</div>

                    </div>

                    <div className="comment-body">

                        <div className="msg-com">{data.comments[0].message}</div>

                        <div className="rep" onClick={()=> setReply(!reply)}>Reply</div>
                        
                        
                        {
                            reply ? (<div className="rep-pic">

                            <div className="phoot"> <img src={data.photoUrl} alt="my comment photo" /> </div>

                            <div className="field">
                                <input type="text" name='mine_comment' placeholder = 'Reply to this comment...'/>
                                <p>Share</p>
                            </div>

                        </div>) : null
                        }
                        
                        
                        <div className="line-blaze"></div>

                        <div className="replies">

                                <div className="reply">

                                    <div className="imageUrl-comment">

                                        <img src={staffData[1232].staff_img} alt="image for posts" />

                                    </div>

                                    <div className="message-content">

                                        <div className="profilePin">

                                            <div className="datePin">Yesterday 12:20 PM</div>
                                            <div className="namePin">{staffData[1232].staff_name}</div>

                                        </div>

                                        <div className="comment-reply">
                                        <div className="msg-com">{data.comments[1].message}</div>
                                        </div>

                                    </div>



                                </div>


                           
                        </div>

                    </div>

                </div>
            </div>
    );
}

export default Comment;
