import { Post } from "../Post";
import {data} from '../../data';

import postImage1 from '../../assets/post-1.png';
import postImage2 from '../../assets/post-2.png';
import postImage3 from '../../assets/post-3.png';
import postImage4 from '../../assets/post-4.png';

import { MainContent } from "./styles";

export function FeedContent(){
    const postData = data;

    function RepeatPostList(loop: number) {
        let rows = [];
        for (let i = 0; i < loop; i++) {
          rows.push(i);
        }
        return rows;
      }

      const repeatPostsQuantity = RepeatPostList(3);
    return(
        <MainContent>
            <div className="primaryPosts">
                <div className="firstPost">
                    <img src={postImage1} alt="" />
                    <Post title={postData[0].title} description={postData[0].description} date={postData[0].date}/>
                </div>
                <div className="otherPosts">
                    <Post title={postData[1].title} description={postData[1].description} date={postData[1].date}/>
                    <Post title={postData[2].title} description={postData[2].description} date={postData[2].date}/>
                </div>
            </div>

            <div className="secondaryPosts">
                {repeatPostsQuantity.map((item, index) => (
                    <div key={index}>
                        <div>
                            <img src={postImage2} alt="" />
                            <Post title={postData[3].title} description={postData[3].description} date={postData[3].date}/>
                        </div>
                        <div>
                            <img src={postImage3} alt="" />
                            <Post title={postData[4].title} description={postData[4].description} date={postData[4].date}/>
                        </div>
                        <div>
                            <img src={postImage4} alt="" />
                            <Post title={postData[5].title} description={postData[5].description} date={postData[5].date}/>
                        </div>
                    </div>
                ))}
            </div>
        </MainContent>
    )
}