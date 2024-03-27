import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={654}
        postImg="https://github.com/burakorkmez/threads-clone/blob/master/frontend/public/post1.png?raw=true"
        postTitle="Let's talk about threads."
      />
      <UserPost
        likes={51}
        replies={651}
        postImg="https://github.com/burakorkmez/threads-clone/blob/master/frontend/public/post2.png?raw=true"
        postTitle="Nice Tutorial"
      />
      <UserPost
        likes={984}
        replies={31}
        postImg="https://github.com/burakorkmez/threads-clone/blob/master/frontend/public/post3.png?raw=true"
        postTitle="Hello Tesla"
      />
      <UserPost
        likes={6351}
        replies={351}
        postTitle="This is my first thread."
      />
    </>
  );
};

export default UserPage;
