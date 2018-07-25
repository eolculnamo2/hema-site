import React from 'react'
import Row1 from './subcomponents/Row1'
import ProfileBody from './subcomponents/ProfileBody'

let dummyUser = {
    username: 'rbertram8',
    displayName: 'Rob Bertram',
    headline: 'Men are born, live, and die all in accordance with the same rules',
    profileImage: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/532906_10204962638530796_7958069283236317946_n.jpg?_nc_cat=0&oh=7f4ee6198bb3c2cc21743fbe1991c82c&oe=5BC92923',
    location: 'Plano, TX',
    group: 'ARMA Denton',
    bestThree: ["Longsword", "Sword and Buckler", "Ringen"],
    articles: [{title: "HEMA Beginner's Guide with Longsword", link: '/article/5b54246e5be0224195a7d1f4'},{title: "HEMA Beginner's Guide with Longsword", link: '/article/5b54246e5be0224195a7d1f4'}],
    likedArticles: [],
    contacts: [{image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/36904785_10210620160934856_2083339715888545792_o.jpg?_nc_cat=0&oh=fccf0027f2325d315cb57980e1a8e557&oe=5BD73139"},
                {image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/36904785_10210620160934856_2083339715888545792_o.jpg?_nc_cat=0&oh=fccf0027f2325d315cb57980e1a8e557&oe=5BD73139"},
                {image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/36904785_10210620160934856_2083339715888545792_o.jpg?_nc_cat=0&oh=fccf0027f2325d315cb57980e1a8e557&oe=5BD73139"},
                {image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/36904785_10210620160934856_2083339715888545792_o.jpg?_nc_cat=0&oh=fccf0027f2325d315cb57980e1a8e557&oe=5BD73139"},
                {image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/36904785_10210620160934856_2083339715888545792_o.jpg?_nc_cat=0&oh=fccf0027f2325d315cb57980e1a8e557&oe=5BD73139"},
                {image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/36904785_10210620160934856_2083339715888545792_o.jpg?_nc_cat=0&oh=fccf0027f2325d315cb57980e1a8e557&oe=5BD73139"}],
    groupMembers: []
}

class Profile extends React.Component {
    render(){
        return(
            <div>
                <Row1 user={dummyUser} />
                <ProfileBody user={dummyUser} />
            </div>
        )
    }
}

export default Profile