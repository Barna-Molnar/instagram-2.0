import { FC } from 'react';
import Post from './Post';

export interface PostsProps { };

const posts = [
    {
        id: '123',
        usename: 'Barna Barni',
        userimg: 'https://media-exp1.licdn.com/dms/image/C4E03AQFlfLM1b6ZQRQ/profile-displayphoto-shrink_200_200/0/1605088697876?e=1657152000&v=beta&t=AFl2DdQFWDilFk9Ii4W3hBZeLOa3KgbHGzWotmT72sc',
        img: 'https://media-exp1.licdn.com/dms/image/C4E03AQFlfLM1b6ZQRQ/profile-displayphoto-shrink_200_200/0/1605088697876?e=1657152000&v=beta&t=AFl2DdQFWDilFk9Ii4W3hBZeLOa3KgbHGzWotmT72sc',
        caption: 'subscribe and destroy the like button for the YT algorithm'
    },
    {
        id: '1234',
        usename: 'Barni',
        userimg: 'https://media-exp1.licdn.com/dms/image/C4E03AQFlfLM1b6ZQRQ/profile-displayphoto-shrink_200_200/0/1605088697876?e=1657152000&v=beta&t=AFl2DdQFWDilFk9Ii4W3hBZeLOa3KgbHGzWotmT72sc',
        img: 'https://media-exp1.licdn.com/dms/image/C4E03AQFlfLM1b6ZQRQ/profile-displayphoto-shrink_200_200/0/1605088697876?e=1657152000&v=beta&t=AFl2DdQFWDilFk9Ii4W3hBZeLOa3KgbHGzWotmT72sc',
        caption: 'subscribe and destroy the like button for the YT algorithm'
    }
]

const Posts: FC<PostsProps> = (props) => {

    return (
        <div>
            {
                posts.map(post => (
                    <Post
                        key={post.id}
                        username={post.usename}
                        userImg={post.userimg}
                        img={post.img}
                        id={post.id}
                        caption={post.caption}
                    />
                ))
            }
        </div>
    );
};

export default Posts;