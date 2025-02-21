import profilePic from './assets/danrei_bd_pic.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Lemuel</h2>
            <p className='card-text'>I am a Student</p>
        </div>
    );
}

export default Card;