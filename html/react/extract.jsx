var data = [
  {
    author:{
      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  },
  {
    author:{
      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't htink you are. KNow you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
    ]
  }
]

 function Badge(props){
   return(
     <div className="badge">{props.dataName.userBadge[0]}</div>
   )
 }

function Comment(props) {

  const badges = props.dataName.userBadge.map((badgeTitle)=>{
    return(
      <Badge badgeTitle = {badgeTitle} />
    )
  })
  
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar" src={props.dataName.author.avatarUrl} alt={props.dataName.author.name} />
        <div className="UserInfo-name">
          {props.dataName.author.name}
        </div>
      </div>
      <div className="Comment-body">
        <h1>{props.dataName.commentHeading}</h1>
        <div className="Comment-text">{props.dataName.text}</div>
        <div className="Comment-date">
          {(props.dataName.date)}
        </div>
      </div>
      <div className= "userBadges">
        <div className="badge">{props.dataName.userBadge[0]}</div>
        <div className="badge">{props.dataName.userBadge[1]}</div>
        <div className="badge">{props.dataName.userBadge[2]}</div>
      </div>
    </div>
 );
}

 function People(){
   return(
    <div className="random">
      <Comment dataName={data[0]} />
      <Comment dataName={data[1]} />
    </div>
   )
 }

//you could also make a dive here and do <Comment data={data[0]}, then do the next one
ReactDOM.render(
  <People />,
  document.getElementById('root')
)